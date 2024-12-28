import React, { useState, useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  onInsert: (imageMarkdown: string) => void;
  onClose: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onInsert, onClose }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showWarning, setShowWarning] = useState(false); // New state for showing the warning

  // Postimages API URL for uploading images
  const POSTIMAGES_API_URL = 'https://api.postimages.org/json';

  // Ref for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const uploadToPostimages = async (file: File) => {
    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(POSTIMAGES_API_URL, {
        method: 'POST',
        body: formData,
      });

      // Debugging: log response status and body for clarity
      console.log('Response status:', response.status);
      console.log('Response body:', await response.text());

      if (!response.ok) {
        throw new Error(`Postimages API request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (!data?.images?.[0]?.url) {
        throw new Error('Failed to upload image. No URL returned.');
      }

      const postimageUrl = data.images[0].url;

      // Use the image URL to insert Markdown into your editor
      onInsert(`![${file.name}](${postimageUrl})`);
      onClose();
    } catch (err) {
      console.error('Upload error:', err);  // Log the error details for debugging
      setError(err instanceof Error ? err.message : 'Failed to upload image.');
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadToPostimages(file);
    }
  };

  const handleButtonClick = () => {
    // Show the warning when the button is clicked
    setShowWarning(true);
    if (fileInputRef.current) {
      fileInputRef.current.click();
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
              if (file) uploadToPostimages(file);
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
            />
            <button className="btn btn-secondary" onClick={handleButtonClick}>
              Select Image
            </button>

            {/* Temporary warning message */}
            {showWarning && (
              <p className="text-red-500 text-sm mt-2">
                Please note: Image upload is temporarily unavailable via this hosting service. Use another image hosting service like Cloudinary.
              </p>
            )}
          </div>

          {error && <p className="text-nord-11 text-sm">{error}</p>}

          {uploading && <p className="text-nord-8 text-sm">Uploading image...</p>}
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
