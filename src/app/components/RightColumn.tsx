"use client";

import React, { ChangeEvent } from "react";

export default function RightColumn() {
  const [videoFile, setVideoFile] = React.useState<File | null>(null);
  const handleVideoFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.type);
    const files = e.target.files;
    if (files) {
        setVideoFile(files[0]);
    }
  };

  return (
    <div className="p-8">
        <h1 className="text-3xl font-bold">Video</h1>
      <input type="file" name="video" accept="video/*" onChange={handleVideoFile} />
      {videoFile && <p>Selected File: {videoFile.name}</p>}
    </div>
  );
}
