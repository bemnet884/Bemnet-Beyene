import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQ() {
  return (
    <section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>What services do you offer?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-muted-foreground">
                I specialize in full-stack development, including Next.js,
                Flutter apps, and WordPress plugin development. Whether it’s a
                custom website, a mobile app, or integrating 3D elements, I can
                help bring your ideas to life.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What’s your development process?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-muted-foreground">
                My process includes an initial consultation, followed by design
                mockups, development phases, testing, and final deployment. I
                also provide ongoing support based on project needs.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How long does a typical project take?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-muted-foreground">
                Project timelines depend on complexity. A simple website can
                take 2-3 weeks, while larger applications might take a few
                months. I’ll provide a clear timeline after understanding your
                requirements.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Do you offer post-launch support?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-muted-foreground">
                Yes, I offer maintenance packages and post-launch support,
                including updates, bug fixes, and feature enhancements.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How can I get a quote?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 text-muted-foreground">
                You can{" "}
                <Link href="/contact" className="text-foreground underline">
                  contact me
                </Link>{" "}
                with details about your project, and I’ll get back to you with a
                custom quote based on your needs.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
