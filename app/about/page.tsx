import Aboutfooter from "@/components/AboutFooter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2, ArrowUpRightIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FramerWrapper from "@/components/animation/FramerWrapper";

const About = () => {
  const items = [
    { hobby: "Playing Tennis" },
    { hobby: "Exploring Business Strategies" },
    { hobby: "Improving Communication Skills" },
    { hobby: "Personal Development & Spiritual Growth" },
  ];

  return (
    <div className="h-full w-full relative flex mb-12 flex-col items-start gap-5 overflow-hidden">
      <MaxWidthWrapper>
        <Badge variant="secondary" className="gap-1.5 py-1">
          <User2 size={28} className="text-primary" />
          <h1 className="font-poppins font-bold text-4xl name_underline max-sm:text-2xl">
            About Me
          </h1>
        </Badge>

        <div className="flex flex-col gap-5 border rounded-lg shadow-lg p-6 bg-white">
          <h1 className="font-poppins font-bold text-4xl name_underline max-sm:text-2xl">
            Automation Specialist & Web Developer, Based in Ethiopia.
          </h1>

          <FramerWrapper y={0} x={100}>
            <p className="font-poppins text-xl w-full max-sm:text-lg">
              I’m a full-stack Next.js developer with a strong passion for business automation and digital transformation. My work revolves around building SaaS solutions that help businesses streamline operations, automate workflows, and enhance their online presence.

              With a deep understanding of modern web technologies, I specialize in creating scalable, interactive, and high-performance applications using Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, and Spline/Three.js. Whether it’s automating inventory management, optimizing business processes, or crafting seamless digital experiences, I thrive on solving complex problems with efficient, user-friendly solutions.

              Currently, I’m testing my inventory management SaaS with potential customers, helping businesses take control of their stock and workflow automation. Beyond SaaS, I’ve also developed custom web solutions for startups, tech projects, and local businesses, bringing their ideas to life with code and creativity.

              I’m always eager to collaborate, innovate, and push the boundaries of what technology can do for businesses. Let’s build something amazing together! 🚀

              to maintain balance and clarity in my journey.
            </p>
          </FramerWrapper>

          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/BemnetBeyeneResume.pdf" target="_blank">
                View Resume <ArrowUpRightIcon className="ml-2 size-5" />
              </Link>
            </Button>
          </div>
        </div>

        <FramerWrapper
          className="w-full flex flex-row justify-between max-lg:flex-col"
          y={100}
          delay={0.3}
        >
          <Aboutfooter />
        </FramerWrapper>

        <FramerWrapper className="block" y={100} delay={0.31}>
          <h1 className="gap-2 text-3xl font-poppins font-semibold flex icon_underline relative max-sm:text-2xl">
            <Heart className="h-8 w-8" /> Hobbies & Passions
          </h1>
          <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col bg-gray-100 rounded-lg">
            {items.map((val, indx) => {
              return (
                <div
                  key={indx}
                  className="flex gap-2 justify-center items-center flex-row text-xl pt-3 max-lg:justify-start"
                >
                  <Circle className="h-3 w-3" /> {val.hobby}
                </div>
              );
            })}
          </div>
        </FramerWrapper>
      </MaxWidthWrapper>
    </div>
  );
};

export default About;