import React from 'react';
import { Download, Copy, FileJson, FileText } from 'lucide-react';

interface PreviewActionsProps {
  onDownload: (format: 'md' | 'json') => void;
  onCopy: () => void;
}

const PreviewActions: React.FC<PreviewActionsProps> = ({ onDownload, onCopy }) => {
  return (
    <div className="flex space-x-4">
      <button
        onClick={() => onDownload('md')}
        className="btn btn-secondary flex items-center space-x-2"
      >
        <FileText className="w-4 h-4" />
        <span>Download MD</span>
      </button>
      <button
        onClick={() => onDownload('json')}
        className="btn btn-secondary flex items-center space-x-2"
      >
        <FileJson className="w-4 h-4" />
        <span>Download JSON</span>
      </button>
      <button
        onClick={onCopy}
        className="btn btn-primary flex items-center space-x-2"
      >
        <Copy className="w-4 h-4" />
        <span>Copy</span>
      </button>
    </div>
  );
};

export default PreviewActions;