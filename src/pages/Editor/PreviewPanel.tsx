import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useStore } from '../../store/useStore';
import { generateMarkdown } from '../../utils/markdownUtils';

const PreviewPanel = () => {
  const { title, description, sections } = useStore();
  const markdown = generateMarkdown({ title, description, sections });

  return (
    <div className="card overflow-y-auto prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default PreviewPanel;