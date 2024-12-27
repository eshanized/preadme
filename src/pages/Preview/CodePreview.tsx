import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodePreviewProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

const CodePreview: React.FC<CodePreviewProps> = ({ 
  code, 
  language = 'markdown',
  showLineNumbers = false 
}) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <SyntaxHighlighter
        language={language}
        style={nord}
        showLineNumbers={showLineNumbers}
        customStyle={{
          background: '#2E3440',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodePreview;