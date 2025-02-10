import React, { useState, useEffect } from 'react';
import { Bold, Italic, Link, Code, List, ListOrdered } from 'lucide-react';

interface MarkdownToolbarProps {
  onInsert: (text: string) => void;
  textareaId: string; // Add textarea ID prop
}

const MarkdownToolbar: React.FC<MarkdownToolbarProps> = ({ onInsert, textareaId }) => {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const tools = [
    { icon: Bold, text: '**', label: 'Bold', tooltip: 'Bold (Ctrl+B)', shortcut: 'b' },
    { icon: Italic, text: '*', label: 'Italic', tooltip: 'Italic (Ctrl+I)', shortcut: 'i' },
    { icon: Link, text: '[](url)', label: 'Link', tooltip: 'Insert Link (Ctrl+K)', shortcut: 'k' },
    { icon: Code, text: '`', label: 'Code', tooltip: 'Inline Code (Ctrl+Shift+C)', shortcut: 'c' },
    { icon: List, text: '- ', label: 'Bullet List', tooltip: 'Bullet List (Ctrl+Shift+L)', shortcut: 'l' },
    { icon: ListOrdered, text: '1. ', label: 'Numbered List', tooltip: 'Numbered List (Ctrl+Shift+N)', shortcut: 'n' },
  ];

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.ctrlKey) {
        const tool = tools.find(t => t.shortcut === e.key.toLowerCase());
        if (tool) {
          e.preventDefault();
          handleToolClick(tool.text, tool.label);
        }
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, []);

  const handleToolClick = (markdownText: string, label: string) => {
    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);

    let newText = '';
    let newCursorPos = start;

    if (markdownText === '[](url)') {
      // Special handling for links
      newText = selectedText ? `[${selectedText}](url)` : markdownText;
      newCursorPos = selectedText ? start + newText.length : start + 1;
    } else if (markdownText.endsWith(' ')) {
      // List items
      newText = markdownText + selectedText;
      newCursorPos = start + markdownText.length + selectedText.length;
    } else {
      // Bold, italic, code
      newText = selectedText ? `${markdownText}${selectedText}${markdownText}` : markdownText + markdownText;
      newCursorPos = selectedText ? start + newText.length : start + markdownText.length;
    }

    onInsert(newText);

    // Set cursor position after insertion
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);

    // Visual feedback
    setActiveTool(label);
    setTimeout(() => setActiveTool(null), 500);
  };

  return (
    <div className="flex space-x-2">
      {tools.map(({ icon: Icon, text, label, tooltip }) => (
        <button
          key={label}
          onClick={() => handleToolClick(text, label)}
          className={`p-2 hover:bg-nord-2 rounded-md text-nord-4 transition-colors ${
            activeTool === label ? 'bg-nord-3' : ''
          }`}
          title={tooltip}
          aria-label={tooltip}
        >
          <Icon className="w-4 h-4" />
        </button>
      ))}
    </div>
  );
};

export default MarkdownToolbar;
