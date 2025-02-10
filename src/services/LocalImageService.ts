const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const STORAGE_KEY = 'preadme_images';

export class LocalImageService {
  static async uploadImage(file: File): Promise<string> {
    try {
      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        throw new Error('Image size must be less than 5MB');
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('File must be an image');
      }

      // Convert to base64
      const base64 = await this.fileToBase64(file);

      // Generate unique ID
      const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      // Store in localStorage
      const images = this.getStoredImages();
      images[imageId] = {
        name: file.name,
        type: file.type,
        data: base64,
        timestamp: Date.now()
      };

      // Check storage limit (10MB total)
      const totalSize = Object.values(images)
        .reduce((size, img) => size + img.data.length, 0);

      if (totalSize > 10 * 1024 * 1024) {
        throw new Error('Local storage limit exceeded. Please delete some images.');
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));

      return base64;
    } catch (error) {
      console.error('Image upload error:', error);
      throw error;
    }
  }

  private static getStoredImages(): Record<string, any> {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  }

  private static fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  static clearStorage(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}