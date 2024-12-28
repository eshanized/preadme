import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { Section } from '../../types';
import EditorToolbar from '../../components/EditorToolbar';
import TableCreator from '../../components/TableCreator';
import ImageUploader from '../../components/ImageUploader';

interface SectionEditorProps {
  section: Section;
}

const SectionEditor: React.FC<SectionEditorProps> = ({ section }) => {
  const { setSections } = useStore();
  const [showTableCreator, setShowTableCreator] = useState(false);
  const [showImageUploader, setShowImageUploader] = useState(false);

  const handleContentChange = (content: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === section.id ? { ...s, content } : s))
    );
  };

  const insertContent = (text: string) => {
    const textarea = document.getElementById(`section-${section.id}`) as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const content = textarea.value;
    
    const newContent = content.substring(0, start) + text + content.substring(end);
    handleContentChange(newContent);
    
    // Set cursor position after inserted text
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + text.length, start + text.length);
    }, 0);
  };

  return (
    <div className="space-y-2">
      <h3 className="text-nord-6 font-bold">{section.title}</h3>
      
      <div className="border border-nord-3 rounded-lg">
        <EditorToolbar
          onInsert={insertContent}
          onCreateTable={() => setShowTableCreator(true)}
          onUploadImage={() => setShowImageUploader(true)}
        />
        
        <textarea
          id={`section-${section.id}`}
          value={section.content}
          onChange={(e) => handleContentChange(e.target.value)}
          className="w-full h-48 p-4 bg-nord-0 text-nord-4 font-mono text-sm resize-y rounded-b-lg focus:outline-none"
          placeholder={`Enter ${section.title.toLowerCase()} content...`}
        />
      </div>

      {showTableCreator && (
        <TableCreator
          onInsert={insertContent}
          onClose={() => setShowTableCreator(false)}
        />
      )}

      {showImageUploader && (
        <ImageUploader
          onInsert={insertContent}
          onClose={() => setShowImageUploader(false)}
        />
      )}
    </div>
  );
};

export default SectionEditor;