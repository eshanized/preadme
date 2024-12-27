import React from 'react';
import {
  Bold, Italic, Link, Code, List, ListOrdered, Table, Image,
  AlignLeft, AlignCenter, AlignRight, Heading1, Heading2, Heading3
} from 'lucide-react';

interface EditorToolbarProps {
  onInsert: (text: string) => void;
  onCreateTable: () => void;
  onUploadImage: () => void;
}

type Tool = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  label: string;
};

type Divider = {
  type: 'divider';
};

const EditorToolbar: React.FC<EditorToolbarProps> = ({ onInsert, onCreateTable, onUploadImage }) => {
  const tools: (Tool | Divider)[] = [
    { icon: Heading1, text: '# ', label: 'Heading 1' },
    { icon: Heading2, text: '## ', label: 'Heading 2' },
    { icon: Heading3, text: '### ', label: 'Heading 3' },
    { type: 'divider' },
    { icon: Bold, text: '**bold**', label: 'Bold' },
    { icon: Italic, text: '*italic*', label: 'Italic' },
    { icon: Code, text: '`code`', label: 'Code' },
    { type: 'divider' },
    { icon: List, text: '- ', label: 'Bullet List' },
    { icon: ListOrdered, text: '1. ', label: 'Numbered List' },
    { type: 'divider' },
    { icon: AlignLeft, text: '::: left\n', label: 'Align Left' },
    { icon: AlignCenter, text: '::: center\n', label: 'Align Center' },
    { icon: AlignRight, text: '::: right\n', label: 'Align Right' },
  ];

  return (
    <div className="flex flex-wrap gap-1 p-2 bg-nord-1 rounded-t-lg border-b border-nord-3">
      {tools.map((tool, index) => {
        if ('type' in tool && tool.type === 'divider') {
          return <div key={index} className="w-px h-6 bg-nord-3 mx-2" />;
        }

        // Safe to assume `tool` is a `Tool` here
        return (
          <button
            key={tool.label}
            onClick={() => onInsert(tool.text)}
            className="p-2 hover:bg-nord-2 rounded-md text-nord-4 transition-colors"
            title={tool.label}
          >
            <tool.icon className="w-4 h-4" />
          </button>
        );
      })}

      <div className="w-px h-6 bg-nord-3 mx-2" />

      <button
        onClick={onCreateTable}
        className="p-2 hover:bg-nord-2 rounded-md text-nord-4 transition-colors"
        title="Insert Table"
      >
        <Table className="w-4 h-4" />
      </button>

      <button
        onClick={onUploadImage}
        className="p-2 hover:bg-nord-2 rounded-md text-nord-4 transition-colors"
        title="Upload Image"
      >
        <Image className="w-4 h-4" />
      </button>
    </div>
  );
};

export default EditorToolbar;
