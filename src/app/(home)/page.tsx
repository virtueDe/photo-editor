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
      <main className="w-full">
        <section className="w-full px-[10%] flex items-center justify-between mt-10">
          <div>
            <div className="text-4xl font-bold mt-10">免费的在线图片编辑</div>
            <div className="text-lg text-muted-foreground mt-5 mb-8">
              在线图片编辑器提供了强大的图像处理工具，让您轻松完成各种图片编辑需求。
              在线修图从未如此简便。立即体验，打造完美的视觉作品！
            </div>
            <Link href="/editor">
              <Button className="w-40 h-12">开始编辑</Button>
            </Link>
          </div>
          <Image
            src="/the-camera-has-a-hammer-on-it.png"
            alt="banner"
            width={250}
            height={250}
          />
        </section>
        <section className="w-full px-[10%] mt-10">
          <div className="text-xl font-bold">支持功能</div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-[8px] bg-border rounded-md p-4 hover:bg-border/50 transition-all duration-300 cursor-pointer">
              <Icon icon="mdi:image" className="h-[1.5rem] w-[1.5rem]" />
              <div>创意设计</div>
            </div>
            <div className="flex items-center gap-[8px] bg-border rounded-md p-4 hover:bg-border/50 transition-all duration-300 cursor-pointer  ">
              <Icon icon="mdi:image" className="h-[1.5rem] w-[1.5rem]" />
              <div>创建设计</div>
            </div>
            <div className="flex items-center gap-[8px] bg-border rounded-md p-4 hover:bg-border/50 transition-all duration-300 cursor-pointer">
              <Icon icon="mdi:image" className="h-[1.5rem] w-[1.5rem]" />
              <div>创建设计</div>
            </div>
            <div className="flex items-center gap-[8px] bg-border rounded-md p-4 hover:bg-border/50 transition-all duration-300 cursor-pointer">
              <Icon icon="mdi:image" className="h-[1.5rem] w-[1.5rem]" />
              <div>创建设计</div>
            </div>
            <div className="flex items-center gap-[8px] bg-border rounded-md p-4 hover:bg-border/50 transition-all duration-300 cursor-pointer">
              <Icon icon="mdi:image" className="h-[1.5rem] w-[1.5rem]" />
              <div>创建设计</div>
            </div>
            <div className="flex items-center gap-[8px] bg-border rounded-md p-4 hover:bg-border/50 transition-all duration-300 cursor-pointer">
              <Icon icon="mdi:image" className="h-[1.5rem] w-[1.5rem]" />
              <div>创建设计</div>
            </div>
            <div className="flex items-center gap-[8px] bg-border rounded-md p-4 hover:bg-border/50 transition-all duration-300 cursor-pointer">
              <Icon icon="mdi:image" className="h-[1.5rem] w-[1.5rem]" />
              <div>创建设计</div>
            </div>
          </div>
        </section>
        <section className="w-full px-[10%] flex items-center justify-between mt-20 gap-10">
          <Icon
            icon="carbon:task-tools"
            className="h-[400px] w-[400px] text-muted-foreground"
          />
          <div>
            <div className="text-4xl font-bold mt-10">
              免费图片编辑，轻松进行在线修图
            </div>
            <ul className="mt-10 mb-10">
              <li className="flex items-center gap-[8px]">
                <Icon
                  icon="emojione-v1:airplane"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <div>
                  无论是图片裁剪、照片尺寸调整、人像美化或是锐化照片，通通都可以在Fotor的在线图片编辑器中轻松完成。
                </div>
              </li>
              <li className="flex items-center gap-[8px]">
                <Icon
                  icon="emojione-v1:beating-heart"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <div>
                  一键智能完成图片美化。增强照片的色彩和对比度，消除模糊，并修复细节，展现您照片的最佳效果。
                </div>
              </li>
              <li className="flex items-center gap-[8px]">
                <Icon
                  icon="emojione-v1:angry-face"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <div>同时编辑多张图片，节省P图时间。</div>
              </li>
            </ul>
            <Link href="/editor">
              <Button className="w-40 h-12">开始编辑</Button>
            </Link>
          </div>
        </section>
        <section className="w-full px-[10%] flex items-center justify-between mt-20 gap-10">
          <div>
            <div className="text-4xl font-bold mt-10">
              免费图片编辑，轻松进行在线修图
            </div>
            <ul className="mt-10 mb-10">
              <li className="flex items-center gap-[8px]">
                <Icon
                  icon="emojione-v1:airplane"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <div>
                  无论是图片裁剪、照片尺寸调整、人像美化或是锐化照片，通通都可以在Fotor的在线图片编辑器中轻松完成。
                </div>
              </li>
              <li className="flex items-center gap-[8px]">
                <Icon
                  icon="emojione-v1:beating-heart"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <div>
                  一键智能完成图片美化。增强照片的色彩和对比度，消除模糊，并修复细节，展现您照片的最佳效果。
                </div>
              </li>
              <li className="flex items-center gap-[8px]">
                <Icon
                  icon="emojione-v1:angry-face"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <div>同时编辑多张图片，节省P图时间。</div>
              </li>
            </ul>
            <Link href="/editor">
              <Button className="w-40 h-12">开始编辑</Button>
            </Link>
          </div>
          <Icon
            icon="twemoji:camera-with-flash"
            className="h-[400px] w-[400px] text-muted-foreground"
          />
        </section>
        <section className="w-full px-[10%] flex items-center justify-between mt-20 gap-10">
          <Icon
            icon="twemoji:computer-disk"
            className="h-[400px] w-[400px] text-muted-foreground"
          />
          <div>
            <div className="text-4xl font-bold mt-10">
              免费图片编辑，轻松进行在线修图
            </div>
            <ul className="mt-10 mb-10">
              <li className="flex items-center gap-[8px]">
                <Icon
                  icon="emojione-v1:airplane"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <div>
                  无论是图片裁剪、照片尺寸调整、人像美化或是锐化照片，通通都可以在Fotor的在线图片编辑器中轻松完成。
                </div>
              </li>
              <li className="flex items-center gap-[8px]">
                <Icon
                  icon="emojione-v1:beating-heart"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <div>
                  一键智能完成图片美化。增强照片的色彩和对比度，消除模糊，并修复细节，展现您照片的最佳效果。
                </div>
              </li>
              <li className="flex items-center gap-[8px]">
                <Icon
                  icon="emojione-v1:angry-face"
                  className="h-[1.5rem] w-[1.5rem]"
                />
                <div>同时编辑多张图片，节省P图时间。</div>
              </li>
            </ul>
            <Link href="/editor">
              <Button className="w-40 h-12">开始编辑</Button>
            </Link>
          </div>
        </section>
      </main>
      <footer className="bg-muted/50 mt-10">
        <div className="px-[10%] py-[20px]">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Made by{" "}
            <a
              href="https://github.com/virtueDe"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              virtueDe
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/virtueDe/photo-editor"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}
