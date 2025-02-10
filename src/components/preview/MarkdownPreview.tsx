import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ErrorBoundary from '../ErrorBoundary';

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="text-red-500 p-4 rounded bg-red-100">
    Failed to render markdown: {error.message}
  </div>
);

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ content, className = '' }) => {
  const components = {
    code({ className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      return match ? (
        <SyntaxHighlighter
          {...props}
          style={nord}
          language={match[1]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={`${className || ''} px-2 py-1 rounded bg-nord-2`} {...props}>
          {children}
        </code>
      );
    },
    table({ children }: { children: React.ReactNode }) {
      return (
        <div className="overflow-x-auto my-4">
          <table className="border-collapse border border-nord-3 w-full">
            {children}
          </table>
        </div>
      );
    },
    th({ children }: { children: React.ReactNode }) {
      return (
        <th className="border border-nord-3 px-4 py-2 bg-nord-1 font-semibold">
          {children}
        </th>
      );
    },
    td({ children }: { children: React.ReactNode }) {
      return (
        <td className="border border-nord-3 px-4 py-2">
          {children}
        </td>
      );
    },
    a({ children, href }: { children: React.ReactNode; href?: string }) {
      return (
        <a
          href={href}
          className="text-blue-400 hover:text-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    blockquote({ children }: { children: React.ReactNode }) {
      return (
        <blockquote className="border-l-4 border-nord-4 pl-4 italic">
          {children}
        </blockquote>
      );
    }
  };

  return (
    <ErrorBoundary fallback={<ErrorFallback error={new Error('Failed to render markdown')} />}>
      <div className={`prose prose-invert max-w-none px-6 ${className}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {content}
        </ReactMarkdown>
      </div>
    </ErrorBoundary>
  );
};

export default MarkdownPreview;