'use client'
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import Glow from "@/components/ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import Github from "@/components/logos/github";

import Link from 'next/link'
import { cn } from "@/lib/utils";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/app-light.png";
      break;
    case "dark":
      src = "/app-dark.png";
      break;
    default:
      src = "/app-dark.png";
      break;
  }


  return (
    <section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">

          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight dark:to-muted-foreground">

            Automating Businesses & Crafting Seamless Digital Experiences

          </h1>
          <p className="text-md text-black relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Crafting dynamic, interactive web experiences with Next.js, 3D design, and modern UI.
          </p>

          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              <Button variant="default" size="lg" asChild>
                <Link
                  href="Bemnet Beyene.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg"
                    }),
                    "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
                  )}
                >
                  Resume
                  <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <Link
                  href="https://github.com/bemnet884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      variant: "outline",
                      size: "lg"
                    }),
                    "w-fit transition-all hover:translate-y-[-2px] hover:shadow-md group"
                  )}
                >
                  <Github className="mr-2 h-4 w-4" /> Github
                  <ArrowUpRight className="h-4 w-4 ml-1 hidden group-hover:block -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </Link>

              </Button>
            </div>
          </div>
          <div className="relative pt-12">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src='/heroimg.jpg'
                  alt="Launch UI app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
