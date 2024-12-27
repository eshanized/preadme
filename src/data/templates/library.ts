import { Template } from '../../types';

export const libraryTemplates: Template[] = [
  {
    id: 'npm-package',
    name: 'NPM Package',
    description: 'JavaScript/TypeScript library for npm',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# Package Name\n\nA JavaScript/TypeScript library published to npm.',
        required: true
      }
    ]
  },
  {
    id: 'python-package',
    name: 'Python Package',
    description: 'Python library for PyPI',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# Package Name\n\nA Python package published to PyPI.',
        required: true
      }
    ]
  }
];