import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { generateMarkdown } from '../../utils/markdownUtils';
import CodePreview from './CodePreview';
import MarkdownPreview from '../../components/preview/MarkdownPreview';
import PreviewActions from './PreviewActions';
import PreviewHeader from './PreviewHeader';
import { Eye, Code } from 'lucide-react';

const Preview = () => {
  const store = useStore();
  const markdown = generateMarkdown(store);
  const [showRaw, setShowRaw] = useState(false);

  const handleDownload = (format: 'md' | 'json') => {
    const content = format === 'md' ? markdown : JSON.stringify(store, null, 2);
    const type = format === 'md' ? 'text/markdown' : 'application/json';
    const extension = format === 'md' ? 'md' : 'json';
    
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `README.${extension}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <PreviewHeader />
        <div className="flex space-x-4">
          <button
            onClick={() => setShowRaw(!showRaw)}
            className="btn btn-secondary flex items-center space-x-2"
          >
            {showRaw ? (
              <>
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </>
            ) : (
              <>
                <Code className="w-4 h-4" />
                <span>Raw</span>
              </>
            )}
          </button>
          <PreviewActions onDownload={handleDownload} onCopy={handleCopy} />
        </div>
      </div>
      
      <div className="h-[calc(100vh-16rem)] overflow-auto bg-nord-0 rounded-lg">
        {showRaw ? (
          <CodePreview code={markdown} language="markdown" showLineNumbers={true} />
        ) : (
          <MarkdownPreview content={markdown} />
        )}
      </div>
    </div>
  );
};

export default Preview;