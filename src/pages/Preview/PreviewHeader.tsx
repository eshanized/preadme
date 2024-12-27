import React from 'react';
import { useStore } from '../../store/useStore';

const PreviewHeader = () => {
  const { author, lastSaved } = useStore();
  const formattedDate = new Date(lastSaved).toLocaleString();

  return (
    <div className="flex flex-col space-y-2 mb-6">
      <h1 className="text-3xl font-bold text-nord-6">Preview</h1>
      <div className="text-sm text-nord-4">
        <span>Author: {author}</span>
        <span className="mx-2">•</span>
        <span>Last saved: {formattedDate}</span>
      </div>
    </div>
  );
};

export default PreviewHeader;