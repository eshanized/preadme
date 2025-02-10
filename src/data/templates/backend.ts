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
        id: 'features',
        title: 'Features',
        content: '## Features\n\n- TypeScript support\n- JWT authentication\n- Role-based access control\n- Request validation\n- API documentation\n- Error handling\n- Database integration\n- Unit and integration tests',
        required: true
      },
      {
        id: 'prerequisites',
        title: 'Prerequisites',
        content: '## Prerequisites\n\n- Node.js 16+\n- npm or yarn\n- MongoDB/PostgreSQL\n- Redis (optional)',
        required: true
      },
      {
        id: 'installation',
        title: 'Installation',
        content: '## Installation\n\n```bash\n# Clone repository\ngit clone https://github.com/username/project.git\n\n# Install dependencies\nnpm install\n\n# Set up environment variables\ncp .env.example .env\n\n# Start development server\nnpm run dev\n```',
        required: true
      },
      {
        id: 'project-structure',
        title: 'Project Structure',
        content: '## Project Structure\n\n```\nsrc/\n├── config/         # Configuration files\n├── controllers/    # Route controllers\n├── middleware/     # Custom middleware\n├── models/         # Database models\n├── routes/         # API routes\n├── services/       # Business logic\n├── types/          # TypeScript types\n├── utils/          # Utility functions\n└── app.ts          # App entry point\n```',
        required: true
      },
      {
        id: 'api-docs',
        title: 'API Documentation',
        content: '## API Endpoints\n\n### Authentication\n\n#### POST /api/auth/register\nRegister a new user.\n\n```json\n{\n  "email": "user@example.com",\n  "password": "password123",\n  "name": "John Doe"\n}\n```\n\n#### POST /api/auth/login\nAuthenticate user and get token.\n\n### Resources\n\n#### GET /api/resources\nGet list of resources. Requires authentication.\n\nHeaders:\n```\nAuthorization: Bearer <token>\n```',
        required: true
      },
      {
        id: 'database',
        title: 'Database Setup',
        content: '## Database Setup\n\n### MongoDB Configuration\n\n```typescript\n// src/config/database.ts\nimport mongoose from \'mongoose\';\n\nexport const connectDB = async () => {\n  try {\n    await mongoose.connect(process.env.MONGODB_URI);\n    console.log(\'MongoDB connected\');\n  } catch (error) {\n    console.error(\'MongoDB connection error:\', error);\n    process.exit(1);\n  }\n};\n```',
        required: false
      },
      {
        id: 'authentication',
        title: 'Authentication',
        content: '## Authentication\n\n### JWT Implementation\n\n```typescript\n// src/middleware/auth.ts\nimport jwt from \'jsonwebtoken\';\n\nexport const authenticateToken = (req, res, next) => {\n  const token = req.header(\'Authorization\')?.split(\' \')[1];\n  if (!token) return res.status(401).json({ message: \'Access denied\' });\n\n  try {\n    const verified = jwt.verify(token, process.env.JWT_SECRET);\n    req.user = verified;\n    next();\n  } catch (error) {\n    res.status(403).json({ message: \'Invalid token\' });\n  }\n};\n```',
        required: false
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        content: '## Error Handling\n\n### Global Error Handler\n\n```typescript\n// src/middleware/errorHandler.ts\nexport const errorHandler = (err, req, res, next) => {\n  console.error(err.stack);\n\n  if (err.name === \'ValidationError\') {\n    return res.status(400).json({\n      error: \'Validation Error\',\n      details: err.errors\n    });\n  }\n\n  res.status(500).json({\n    error: \'Internal Server Error\',\n    message: process.env.NODE_ENV === \'production\' ? \'Something went wrong\' : err.message\n  });\n};\n```',
        required: false
      },
      {
        id: 'testing',
        title: 'Testing',
        content: '## Testing\n\n### Jest Configuration\n\n```typescript\n// jest.config.js\nmodule.exports = {\n  preset: \'ts-jest\',\n  testEnvironment: \'node\',\n  setupFiles: [\'./jest.setup.js\'],\n  coverageDirectory: \'coverage\'\n};\n\n// Example Test\ndescribe(\'Auth API\', () => {\n  it(\'should register new user\', async () => {\n    const res = await request(app)\n      .post(\'/api/auth/register\')\n      .send({\n        email: \'test@example.com\',\n        password: \'password123\'\n      });\n    expect(res.status).toBe(201);\n  });\n});\n```',
        required: false
      },
      {
        id: 'deployment',
        title: 'Deployment',
        content: '## Deployment\n\n### Docker Setup\n\n```dockerfile\n# Dockerfile\nFROM node:16-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm install\n\nCOPY . .\nRUN npm run build\n\nEXPOSE 3000\nCMD ["npm", "start"]\n```\n\n### Environment Variables\n\n```env\nNODE_ENV=production\nPORT=3000\nMONGODB_URI=mongodb://localhost:27017/db\nJWT_SECRET=your-secret-key\n```',
        required: false
      }
    ]
  },
  {
    id: 'graphql-api',
    name: 'GraphQL API',
    description: 'Modern GraphQL API with Apollo Server',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# GraphQL API\n\nA modern GraphQL API built with Apollo Server and TypeScript.',
        required: true
      },
      {
        id: 'schema',
        title: 'Schema Definition',
        content: '## Schema\n\n```graphql\ntype User {\n  id: ID!\n  email: String!\n  name: String\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n}\n\ntype Query {\n  users: [User!]!\n  user(id: ID!): User\n  posts: [Post!]!\n}\n\ntype Mutation {\n  createUser(email: String!, name: String): User!\n  createPost(title: String!, content: String!): Post!\n}\n```',
        required: true
      },
      {
        id: 'resolvers',
        title: 'Resolvers',
        content: '## Resolvers\n\n```typescript\nconst resolvers = {\n  Query: {\n    users: () => db.users.findAll(),\n    user: (_, { id }) => db.users.findById(id),\n    posts: () => db.posts.findAll()\n  },\n  Mutation: {\n    createUser: (_, { email, name }) => db.users.create({ email, name }),\n    createPost: (_, { title, content }, { user }) => {\n      if (!user) throw new Error(\'Not authenticated\');\n      return db.posts.create({ title, content, authorId: user.id });\n    }\n  }\n};\n```',
        required: true
      }
    ]
  },
  {
    id: 'microservices',
    name: 'Microservices Architecture',
    description: 'Template for microservices with Node.js',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# Microservices Architecture\n\nA scalable microservices architecture using Node.js and Docker.',
        required: true
      },
      {
        id: 'services',
        title: 'Services',
        content: '## Services\n\n- Auth Service (Port 3001)\n- User Service (Port 3002)\n- Product Service (Port 3003)\n- Order Service (Port 3004)\n- Notification Service (Port 3005)',
        required: true
      },
      {
        id: 'communication',
        title: 'Service Communication',
        content: '## Inter-service Communication\n\n### Event Bus (RabbitMQ)\n\n```typescript\n// src/events/base-publisher.ts\nexport abstract class Publisher {\n  abstract subject: string;\n\n  protected client: amqp.Channel;\n\n  async publish(data: any): Promise<void> {\n    await this.client.assertQueue(this.subject);\n    this.client.sendToQueue(this.subject, Buffer.from(JSON.stringify(data)));\n  }\n}\n```',
        required: true
      }
    ]
  },
  {
    id: 'serverless',
    name: 'Serverless Functions',
    description: 'AWS Lambda functions with Serverless Framework',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: '# Serverless API\n\nServerless functions using AWS Lambda and the Serverless Framework.',
        required: true
      },
      {
        id: 'configuration',
        title: 'Configuration',
        content: '## Serverless Configuration\n\n```yaml\n# serverless.yml\nservice: my-api\n\nprovider:\n  name: aws\n  runtime: nodejs16.x\n  stage: \${opt:stage, \'dev\'}\n  region: us-east-1\n\nfunctions:\n  hello:\n    handler: src/handlers/hello.handler\n    events:\n      - http:\n          path: /hello\n          method: get\n```',
        required: true
      },
      {
        id: 'deployment',
        title: 'Deployment',
        content: '## Deployment\n\n```bash\n# Install Serverless Framework\nnpm install -g serverless\n\n# Deploy to AWS\nsls deploy\n\n# Deploy to specific stage\nsls deploy --stage production\n```',
        required: true
      }
    ]
  }
];