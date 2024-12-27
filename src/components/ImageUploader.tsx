import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  onInsert: (imageMarkdown: string) => void;
  onClose: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onInsert, onClose }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadToGithub = async (file: File) => {
    setUploading(true);
    setError(null);

    try {
      // Create a unique filename
      const timestamp = Date.now();
      const filename = `${timestamp}-${file.name}`;
      
      // Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64Data = reader.result?.toString().split(',')[1];
        
        // Here you would typically make an API call to GitHub
        // For now, we'll simulate it with a timeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate a GitHub URL
        const githubUrl = `https://raw.githubusercontent.com/yourusername/yourrepo/main/images/${filename}`;
        
        onInsert(`![${file.name}](${githubUrl})`);
        onClose();
      };
    } catch (err) {
      setError('Failed to upload image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-nord-0 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-nord-1 rounded-lg p-6 w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-nord-6">Upload Image</h3>
          <button onClick={onClose} className="text-nord-4 hover:text-nord-6">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div
            className="border-2 border-dashed border-nord-3 rounded-lg p-8 text-center hover:border-nord-8 transition-colors"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file) uploadToGithub(file);
            }}
          >
            <Upload className="w-12 h-12 text-nord-4 mx-auto mb-4" />
            <p className="text-nord-4 mb-2">Drag and drop an image here, or click to select</p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) uploadToGithub(file);
              }}
            />
            <button className="btn btn-secondary">Select Image</button>
          </div>
          
          {error && (
            <p className="text-nord-11 text-sm">{error}</p>
          )}
          
          {uploading && (
            <p className="text-nord-8 text-sm">Uploading image...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;