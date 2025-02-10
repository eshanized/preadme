import React from 'react';
import MarkdownToolbar from './MarkdownToolbar';
import { Table, Image } from 'lucide-react';

interface EditorToolbarProps {
  onInsert: (text: string) => void;
  onCreateTable: () => void;
  onUploadImage: () => void;
  textareaId: string; // Add textarea ID prop
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({
  onInsert,
  onCreateTable,
  onUploadImage,
  textareaId
}) => {

  return (
    <div className="flex flex-wrap gap-1 p-2 bg-nord-1 rounded-t-lg border-b border-nord-3">
      <MarkdownToolbar onInsert={onInsert} textareaId={textareaId} />

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
