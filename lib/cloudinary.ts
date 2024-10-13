import { v2 as cloudinary, UploadApiErrorResponse, UploadApiResponse } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export { cloudinary };


type UploadResponse = { success: true; result?: UploadApiResponse } | { success: false; error: UploadApiErrorResponse  }; 

export const uploadToCloudinary = (
    fileUri: string, fileName: string): Promise<UploadResponse> => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload(fileUri, {
          invalidate: true,
          resource_type: "auto",
          filename_override: fileName,
          folder: "courses", // any sub-folder name in your cloud
          use_filename: true,
        })
        .then((result) => {
          resolve({ success: true, result });
        })
        .catch((error) => {
          reject({ success: false, error });
        });
    });
};