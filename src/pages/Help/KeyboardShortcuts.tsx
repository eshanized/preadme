import React from 'react';
import GlassCard from '../../components/ui/GlassCard';

interface ShortcutCategory {
  name: string;
  shortcuts: {
    keys: string[];
    action: string;
  }[];
}

const KeyboardShortcuts = () => {
  const categories: ShortcutCategory[] = [
    {
      name: 'General',
      shortcuts: [
        { keys: ['Ctrl', 'S'], action: 'Save changes' },
        { keys: ['Ctrl', 'Z'], action: 'Undo' },
        { keys: ['Ctrl', 'Shift', 'Z'], action: 'Redo' },
        { keys: ['Ctrl', '/'], action: 'Toggle help' },
      ]
    },
    {
      name: 'Text Formatting',
      shortcuts: [
        { keys: ['Ctrl', 'B'], action: 'Bold text' },
        { keys: ['Ctrl', 'I'], action: 'Italic text' },
        { keys: ['Ctrl', '`'], action: 'Inline code' },
        { keys: ['Ctrl', 'K'], action: 'Insert link' },
        { keys: ['Ctrl', 'Shift', 'K'], action: 'Remove link' },
      ]
    },
    {
      name: 'Navigation',
      shortcuts: [
        { keys: ['Ctrl', 'E'], action: 'Toggle preview' },
        { keys: ['Ctrl', 'F'], action: 'Find in text' },
        { keys: ['Ctrl', 'G'], action: 'Go to line' },
        { keys: ['Alt', '←'], action: 'Previous section' },
        { keys: ['Alt', '→'], action: 'Next section' },
      ]
    },
    {
      name: 'Lists',
      shortcuts: [
        { keys: ['Ctrl', 'L'], action: 'Bullet list' },
        { keys: ['Ctrl', 'Shift', 'L'], action: 'Numbered list' },
        { keys: ['Tab'], action: 'Indent list' },
        { keys: ['Shift', 'Tab'], action: 'Outdent list' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-nord-6">Keyboard Shortcuts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <GlassCard key={category.name} className="p-6">
            <h3 className="text-xl font-bold text-nord-8 mb-4">{category.name}</h3>
            <div className="space-y-3">
              {category.shortcuts.map(({ keys, action }) => (
                <div key={action} className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-1">
                    {keys.map((key) => (
                      <kbd
                        key={key}
                        className="px-2 py-1 bg-nord-2 rounded text-nord-8 border border-nord-3 shadow-sm font-mono text-sm"
                      >
                        {key}
                      </kbd>
                    ))}
                  </div>
                  <span className="text-nord-4">{action}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default KeyboardShortcuts;