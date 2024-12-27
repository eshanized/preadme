import { Template } from '../../types';

export const backendTemplates: Template[] = [
  {
    id: 'node-express',
    name: 'Node.js Express API',
    description: 'RESTful API with Express and TypeScript',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# API Name\n\nA RESTful API built with Express and TypeScript.',
        required: true
      },
      {
        id: 'api-docs',
        title: 'API Documentation',
        content: '## API Endpoints\n\n### GET /api/resource\n\nReturns a list of resources.',
        required: true
      }
    ]
  },
  {
    id: 'python-fastapi',
    name: 'Python FastAPI',
    description: 'Modern Python API with FastAPI',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# API Name\n\nA FastAPI application with automatic OpenAPI docs.',
        required: true
      }
    ]
  }
];