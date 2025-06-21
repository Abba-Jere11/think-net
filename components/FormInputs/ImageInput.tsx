import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { Plus, Upload, Image as ImageIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

type ImageInputProps = {
  title: string;
  imageUrl: string;
  setImageUrl: any;
  endpoint: any;
  className?: string;
};

export default function ImageInput({
  title,
  imageUrl,
  setImageUrl,
  endpoint,
  className,
}: ImageInputProps) {
  const hasImage = imageUrl && imageUrl !== "/placeholder.svg";

  const handleRemoveImage = () => {
    setImageUrl("/placeholder.svg");
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {/* Image Preview */}
          <div className="relative">
            <Image
              alt={title}
              className={cn("h-40 w-full rounded-md object-cover", className)}
              height="500"
              src={imageUrl}
              width="500"
            />
            {!hasImage && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-md">
                <div className="text-center">
                  <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">No image selected</p>
                </div>
              </div>
            )}
          </div>

          {/* Upload Button - Only show if no image */}
          {!hasImage && (
            <UploadButton
              className="w-full ut-button:w-full ut-button:bg-primary ut-button:hover:bg-primary-700 ut-button:text-white ut-button:font-medium ut-button:py-2 ut-button:px-4 ut-button:rounded-md ut-button:transition-colors ut-allowed-content:hidden"
              endpoint={endpoint}
              content={{
                button({ ready }) {
                  if (ready) {
                    return (
                      <div className="flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Upload Image
                      </div>
                    );
                  }
                  return "Getting ready...";
                },
                allowedContent: () => "", // Hide the allowed content text
              }}
              onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                setImageUrl(res[0].url);
              }}
              onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
              }}
            />
          )}

          {/* Change/Remove buttons - Only show if image exists */}
          {hasImage && (
            <div className="space-y-2">
              <UploadButton
                className="w-full ut-button:w-full ut-button:bg-primary ut-button:hover:bg-primary-700 ut-button:text-white ut-button:font-medium ut-button:py-2 ut-button:px-4 ut-button:rounded-md ut-button:transition-colors ut-allowed-content:hidden"
                endpoint={endpoint}
                content={{
                  button({ ready }) {
                    if (ready) {
                      return (
                        <div className="flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Change Image
                        </div>
                      );
                    }
                    return "Getting ready...";
                  },
                  allowedContent: () => "", // Hide the allowed content text
                }}
                onClientUploadComplete={(res) => {
                  console.log("Files: ", res);
                  setImageUrl(res[0].url);
                }}
                onUploadError={(error: Error) => {
                  alert(`ERROR! ${error.message}`);
                }}
              />
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>
              
              <Button
                type="button"
                variant="outline"
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleRemoveImage}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Remove Image
              </Button>
            </div>
          )}

          {/* Image Info */}
          {hasImage && (
            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
              <p>✓ Image uploaded successfully</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}