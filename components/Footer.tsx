import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <Image width={50} height={50} alt="logo" src='/logoblack.png' />
                <h3 className="text-xl font-bold">Bemnet B.</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <Link href='/projects' className="text-md pt-1 font-semibold">Projects</Link>
            </FooterColumn>
            <FooterColumn>
              <Link href='/about' className="text-md pt-1 font-semibold">About Me</Link>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <a href="mailto:bemnet537@gmail.com" className="text-sm text-muted-foreground">
                Email
              </a>
              <a href="https://linkedin.com/in/bemnetbeyene" target="_blank" className="text-sm text-muted-foreground">
                LinkedIn
              </a>
              <a href="https://github.com/bemnet884" target="_blank" className="text-sm text-muted-foreground">
                GitHub
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2025 Bemnet. All rights reserved</div>

          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
