import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import Link from "next/link"

export async function AnimatedGradientTextDemo() {
  return (
    <div className="z-10 flex min-h-6 mt-12 items-center justify-center">
      <AnimatedGradientText>
        🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
        <span
          className={cn(
            `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
          )}
        >


          Welcome to my Developer Portfolio

        </span>

      </AnimatedGradientText>
    </div>
  );
}
