import { Template } from '../types';

export const templates: Template[] = [
  {
    id: 'basic',
    name: 'Basic Template',
    description: 'A simple README template with essential sections',
    sections: [
      {
        id: 'installation',
        title: 'Installation',
        content: '```bash\nnpm install\n```',
        required: true,
      },
      {
        id: 'usage',
        title: 'Usage',
        content: 'Describe how to use your project here.',
        required: true,
      },
      {
        id: 'license',
        title: 'License',
        content: 'MIT',
        required: true,
      },
    ],
  },
  {
    id: 'detailed',
    name: 'Detailed Template',
    description: 'A comprehensive README template with all recommended sections',
    sections: [
      {
        id: 'installation',
        title: 'Installation',
        content: '```bash\nnpm install\n```',
        required: true,
      },
      {
        id: 'usage',
        title: 'Usage',
        content: 'Describe how to use your project here.',
        required: true,
      },
      {
        id: 'api',
        title: 'API Documentation',
        content: 'Document your API endpoints here.',
        required: false,
      },
      {
        id: 'contributing',
        title: 'Contributing',
        content: 'Guidelines for contributing to the project.',
        required: false,
      },
      {
        id: 'license',
        title: 'License',
        content: 'MIT',
        required: true,
      },
    ],
  },
  {
    id: 'node-package',
    name: 'Node Package Template',
    description: 'Perfect for npm packages and Node.js modules',
    sections: [
      {
        id: 'installation',
        title: 'Installation',
        content: '```bash\nnpm install your-package-name\n```',
        required: true,
      },
      {
        id: 'features',
        title: 'Features',
        content: '- Feature 1\n- Feature 2\n- Feature 3',
        required: true,
      },
      {
        id: 'api',
        title: 'API Reference',
        content: '## Functions\n\n### function1(param)\n\nDescription of function1',
        required: true,
      },
      {
        id: 'examples',
        title: 'Examples',
        content: '```javascript\n// Example code here\n```',
        required: true,
      },
    ],
  },
  {
    id: 'react-component',
    name: 'React Component Template',
    description: 'Ideal for React components and libraries',
    sections: [
      {
        id: 'installation',
        title: 'Installation',
        content: '```bash\nnpm install your-component\n```',
        required: true,
      },
      {
        id: 'usage',
        title: 'Usage',
        content: '```jsx\nimport YourComponent from \'your-component\';\n\nfunction App() {\n  return <YourComponent />;\n}\n```',
        required: true,
      },
      {
        id: 'props',
        title: 'Props',
        content: '| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| prop1 | string | undefined | Description |',
        required: true,
      },
      {
        id: 'examples',
        title: 'Examples',
        content: 'Add examples of your component in different scenarios.',
        required: false,
      },
    ],
  },
  {
    id: 'cli-tool',
    name: 'CLI Tool Template',
    description: 'Template for command-line interface tools',
    sections: [
      {
        id: 'installation',
        title: 'Installation',
        content: '```bash\nnpm install -g your-cli-tool\n```',
        required: true,
      },
      {
        id: 'commands',
        title: 'Commands',
        content: '## Available Commands\n\n`command1` - Description\n`command2` - Description',
        required: true,
      },
      {
        id: 'configuration',
        title: 'Configuration',
        content: 'Explain configuration options and files.',
        required: true,
      },
      {
        id: 'examples',
        title: 'Examples',
        content: '```bash\n# Example commands\n```',
        required: true,
      },
    ],
  }
];