"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

export default function Editor() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground">
      <header className="bg-background/95 p-4 flex justify-between items-center border-b border-border/50">
        <div className="flex items-center space-x-4">
          <Icon icon="tabler:library-photo" width="32" height="32" />
        </div>
        <Button size={"sm"}>下载</Button>
      </header>

      <main className="flex flex-1 overflow-hidden">
        <aside className="w-16 bg-background/95 shadow-md p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 sr-only">编辑菜单</h2>
          <ul className="space-y-6">
            <li>
              <button
                className="text-primary hover:text-primary/80 w-full flex justify-center"
                title="亮度调整"
              >
                <Icon icon="mdi:brightness-6" className="h-6 w-6" />
              </button>
            </li>
            <li>
              <button
                className="text-primary hover:text-primary/80 w-full flex justify-center"
                title="对比度"
              >
                <Icon icon="mdi:contrast" className="h-6 w-6" />
              </button>
            </li>
            <li>
              <button
                className="text-primary hover:text-primary/80 w-full flex justify-center"
                title="饱和度"
              >
                <Icon icon="mdi:palette" className="h-6 w-6" />
              </button>
            </li>
          </ul>
        </aside>

        <section className="flex-1 p-6 overflow-y-auto">
          <div className="bg-background/95 shadow-md p-4 rounded-lg">
            {uploadedImage ? (
              <Image
                src={uploadedImage}
                alt="上传的图片"
                width={500}
                height={300}
                objectFit="contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="fileInput"
                />
                <label
                  htmlFor="fileInput"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded cursor-pointer"
                >
                  上传图片
                </label>
                <p className="mt-4 text-muted-foreground">
                  请上传一张图片以开始编辑
                </p>
              </div>
            )}
          </div>
        </section>

        <aside className="w-64 bg-background/95 shadow-md p-4 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4">调整数值</h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="brightness"
                className="block mb-2 text-foreground"
              >
                亮度
              </label>
              <input
                type="range"
                id="brightness"
                min="0"
                max="100"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="contrast" className="block mb-2 text-foreground">
                对比度
              </label>
              <input
                type="range"
                id="contrast"
                min="0"
                max="100"
                className="w-full"
              />
            </div>
            <div>
              <label
                htmlFor="saturation"
                className="block mb-2 text-foreground"
              >
                饱和度
              </label>
              <input
                type="range"
                id="saturation"
                min="0"
                max="100"
                className="w-full"
              />
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
