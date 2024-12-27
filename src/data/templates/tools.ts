import { Template } from '../../types';

export const toolTemplates: Template[] = [
  {
    id: 'cli-tool',
    name: 'CLI Tool',
    description: 'Command-line interface tool',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# Tool Name\n\nA command-line interface tool.',
        required: true
      }
    ]
  },
  {
    id: 'vscode-extension',
    name: 'VS Code Extension',
    description: 'Visual Studio Code extension',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# Extension Name\n\nA Visual Studio Code extension.',
        required: true
      }
    ]
  }
];