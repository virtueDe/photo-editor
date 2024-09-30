// import { Button } from "@/components/ui/button";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="w-full h-[64px] border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-[10%] sticky top-0">
        <nav className="w-full h-full flex items-center justify-between">
          <div className="flex items-center gap-[8px]">
            <span className="text-2xl font-bold">Photo</span>
          </div>
          <div className="w-[100px]"></div>

          <div className="flex items-center gap-[8px]">
            <Link
              href="https://github.com/virtueDe/photo-editor"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" className="h-8 w-8 px-0">
                <Icon icon="mdi:github" className="h-[1.5rem] w-[1.5rem]" />
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </nav>
      </header>
      <main className="w-full h-[calc(100vh-64px)]">
        <Image src="/example.jpg" alt="banner" width={100} height={100} />
      </main>
      <footer className="w-full h-[356px]"></footer>
    </>
  );
}
