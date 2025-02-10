import React from 'react';
import { X, Github, Copy, ExternalLink } from 'lucide-react';

interface ImageGuideProps {
  onClose: () => void;
}

const ImageGuide: React.FC<ImageGuideProps> = ({ onClose }) => {
  const steps = [
    {
      title: 'Create a GitHub Issue',
      content: 'Go to your repository and create a new issue. You can drag and drop or paste your image directly into the issue description.',
      icon: Github
    },
    {
      title: 'Get Image URL',
      content: 'After dropping the image, GitHub will generate a URL like: https://user-images.githubusercontent.com/...',
      icon: Copy
    },
    {
      title: 'Use the URL',
      content: 'Copy the generated URL and use it in your markdown: ![description](url)',
      icon: ExternalLink
    }
  ];

  return (
    <div className="fixed inset-0 bg-nord-0 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-nord-1 rounded-lg p-6 w-[32rem] max-w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-nord-6">How to Add Images</h3>
          <button onClick={onClose} className="text-nord-4 hover:text-nord-6">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-nord-2 flex items-center justify-center">
                <step.icon className="w-4 h-4 text-nord-8" />
              </div>
              <div>
                <h4 className="text-nord-6 font-bold mb-1">{step.title}</h4>
                <p className="text-nord-4 text-sm">{step.content}</p>
              </div>
            </div>
          ))}

          <div className="mt-6 p-4 bg-nord-2 rounded-lg">
            <h4 className="text-nord-6 font-bold mb-2">Example Markdown</h4>
            <code className="text-sm text-nord-8 font-mono">
              ![My Image](https://user-images.githubusercontent.com/...)
            </code>
          </div>

          <div className="flex justify-end mt-6">
            <a
              href="https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/attaching-files"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord-8 hover:text-nord-7 text-sm flex items-center gap-2"
            >
              Learn more about GitHub image hosting
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGuide;