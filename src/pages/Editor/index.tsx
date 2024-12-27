import React from 'react';
import EditorPanel from './EditorPanel';
import PreviewPanel from './PreviewPanel';
import { useStore } from '../../store/useStore';

const Editor = () => {
  const { title, description, sections } = useStore();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[calc(100vh-16rem)]">
      <EditorPanel />
      <PreviewPanel />
    </div>
  );
};

export default Editor;