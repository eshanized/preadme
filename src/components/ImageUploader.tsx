import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';
import { LocalImageService } from '../services/LocalImageService';

interface ImageUploaderProps {
  onInsert: (imageMarkdown: string) => void;
  onClose: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onInsert, onClose }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Ref for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = async (file: File) => {
    setUploading(true);
    setError(null);

    try {
      const imageUrl = await LocalImageService.uploadImage(file);
      onInsert(`![${file.name}](${imageUrl})`);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
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
            className={`border-2 border-dashed border-nord-3 rounded-lg p-8 text-center hover:border-nord-8 transition-colors ${
              uploading ? 'opacity-50 pointer-events-none' : ''
            }`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              if (file) handleUpload(file);
            }}
          >
            <Upload className="w-12 h-12 text-nord-4 mx-auto mb-4" />
            <p className="text-nord-4 mb-2">
              Drag and drop an image here, or click to select
            </p>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileChange}
              disabled={uploading}
            />
            <button
              className="btn btn-secondary"
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
            >
              Select Image
            </button>
          </div>

          {error && (
            <div className="bg-nord-11 bg-opacity-20 border border-nord-11 rounded p-3">
              <p className="text-nord-11 text-sm">{error}</p>
            </div>
          )}

          {uploading && <p className="text-nord-8 text-sm text-center">Storing image locally...</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
