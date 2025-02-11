import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

function ImageUpload() {
  const [image, setImage] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  function onImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if(file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <Card className="w-full max-w-lg p-8 bg-card rounded-3xl shadow-2xl border border-emphasis">
      <CardContent className="flex flex-col items-center">
        <>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="upload"
            onChange={onImageUpload}
          />
          <label
            htmlFor="upload"
            className="cursor-pointer flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-subtle rounded-xl bg-muted hover:bg-secondary transition p-6"
          >
            <UploadCloud className="w-14 h-14 text-muted-foreground mb-3" />
            <span className="text-muted-foreground text-lg font-medium">
              Click to Upload
            </span>
          </label>
          {preview &&
          <img src={preview} alt="Preview" className="w-full h-auto object-cover rounded-xl mt-6 shadow-lg" />}
        </>
        {/* Show this button once retrieved schedule from image */}
          {image && <Button className="text-lg font-semibold text-foreground mt-6 px-8 rounded-xl shadow-md transition-transform hover:scale-105">Import to Calendar</Button>}
      </CardContent>
    </Card>
  );
}

export default ImageUpload;
