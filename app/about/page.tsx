import Aboutfooter from "@/components/AboutFooter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2, ArrowUpRightIcon } from "lucide-react";
import { Button } from '@/components/ui/button'
import Link from 'next/link'
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

        <div className="flex flex-col gap-5">
          <h1 className="font-poppins font-bold text-4xl name_underline max-sm:text-2xl">
            Automation Specialist & Web Developer, Based in Ethiopia.
          </h1>

          <FramerWrapper y={0} x={100}>
            <p className="font-poppins text-xl w-full max-sm:text-lg">
              Hey, I’m Hanna—an automation enthusiast, web developer, and business solutions architect dedicated to empowering businesses in Ethiopia through technology.
              <br /><br />
              I specialize in building automation tools and crafting <strong>Hanna’s Inventory Management System</strong>, designed to streamline business operations and help companies manage sales, track inventory, and optimize workflows.
              <br /><br />
              I also develop custom websites tailored for businesses across various sectors, helping them establish a strong online presence and connect with their target audience effectively.
              <br /><br />
              Beyond tech, I’m passionate about improving my communication skills, exploring business strategies, and nurturing my spiritual growth to maintain balance and clarity in my journey.
            </p>
          </FramerWrapper>

          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/resume.pdf" target="_blank">
                View Resume <ArrowUpRightIcon className="ml-2 size-5" />
              </Link>
            </Button>

            <Button asChild>
              <Link href="/about">Learn More</Link>
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
          <div className="w-full h-fit p-2 flex flex-row justify-between gap-7 max-lg:flex-col">
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
