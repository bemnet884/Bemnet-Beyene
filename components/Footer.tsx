import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import Logo from "@/components/ui/logo";
import { Code } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <Code className="text-orange-400" />
                <h3 className="text-xl font-bold">Bemnet B.</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Projects</h3>
              <a href="#projects" className="text-sm text-muted-foreground">
                My Work
              </a>
              <a href="#experience" className="text-sm text-muted-foreground">
                Experience
              </a>
              <a href="#skills" className="text-sm text-muted-foreground">
                Skills
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">About Me</h3>
              <a href="#about" className="text-sm text-muted-foreground">
                Biography
              </a>
              <a href="#testimonials" className="text-sm text-muted-foreground">
                Testimonials
              </a>
              <a href="#blog" className="text-sm text-muted-foreground">
                Blog
              </a>
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
