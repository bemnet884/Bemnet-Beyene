import Aboutfooter from "@/components/AboutFooter";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FramerWrapper from "@/components/animation/FramerWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const items = [
    { hobby: "🎾 Playing Tennis" },
    { hobby: "📈 Exploring Business Strategies" },
    { hobby: "🗣️ Improving Communication Skills" },
    { hobby: "🌱 Personal Development & Spiritual Growth" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow py-12">
        <MaxWidthWrapper>
          {/* Section Title */}
          <div className="text-center mb-10">
            <Badge variant="secondary" className="flex items-center gap-2 py-1 mx-auto">
              <User2 size={28} className="text-primary" />
              <h1 className="font-poppins font-bold text-4xl name_underline max-sm:text-2xl">
                About Me
              </h1>
            </Badge>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Who I Am */}
            <FramerWrapper y={30} delay={0.1}>
              <Card className="shadow-lg border rounded-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Who I Am</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">
                    I'm a Next.js full-stack developer passionate about
                    business automation and digital transformation.
                    Based in Ethiopia, I specialize in creating scalable, interactive, and high-performance applications.
                  </p>
                </CardContent>
              </Card>
            </FramerWrapper>

            {/* Card 2 - What I Do */}
            <FramerWrapper y={30} delay={0.2}>
              <Card className="shadow-lg border rounded-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">What I Do</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">
                    I build SaaS solutions that automate workflows, optimize business processes, and enhance online presence.
                    I use Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, and Spline/Three.js to craft digital experiences.
                  </p>
                </CardContent>
              </Card>
            </FramerWrapper>

            {/* Card 3 - My Passion & Goals */}
            <FramerWrapper y={30} delay={0.3}>
              <Card className="shadow-lg border rounded-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">My Passion & Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">
                    I'm currently testing an inventory management SaaS to help businesses automate stock control and workflow.
                    Beyond that, I love collaborating on innovative projects that push technology forward 🚀.
                  </p>
                </CardContent>
              </Card>
            </FramerWrapper>
          </div>

          {/* Resume Button */}
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" className="px-6 py-3 text-lg">
              <Link href="/Bemnet Beyene.pdf" target="_blank">
                View Resume <ArrowUpRightIcon className="ml-2 size-5" />
              </Link>
            </Button>
          </div>

          {/* Hobbies Section */}
          <FramerWrapper className="mt-12" y={50} delay={0.4}>
            <h2 className="text-3xl font-semibold text-center flex items-center justify-center gap-2">
              <Heart className="h-7 w-7 text-red-500" /> Hobbies & Interests
            </h2>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {items.map((val, indx) => (
                <div key={indx} className="flex gap-2 items-center text-lg text-gray-700 p-4 bg-gray-100 rounded-lg shadow-md">
                  <Circle className="h-4 w-4 text-primary" /> {val.hobby}
                </div>
              ))}
            </div>
          </FramerWrapper>
        </MaxWidthWrapper>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
