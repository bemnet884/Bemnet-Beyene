
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCards from "@/components/ProjectCard";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Smart Light System",
      description:
        "A cost-effective smart lighting system that allows users to control LED lights remotely via a mobile app or web interface. Features include on/off control, brightness adjustment, and customizable color options.",
      tags: ["IoT", "Next.js", "Wi-Fi", "Bluetooth"],
      link: "https://itep-nine.vercel.app",
    },

    {
      title: "Fandishas Bundles",
      description:
        "A curated collection of digital bundles designed for diverse user needs, offering tools and resources for productivity, entertainment, and personal growth.",
      tags: ["Next.js", "Tailwind CSS", "E-commerce"],
      link: "https://your-fandishas-bundles-link.com",
    },

    {
      title: "3D Portfolio",
      description:
        "A dynamic 3D portfolio built to showcase creative projects using interactive animations and immersive visuals, highlighting skills and expertise in 3D design.",
      tags: ["Three.js", "React", "GLTF", "Next.js"],
      link: "https://your-3d-portfolio-link.com",
    },

    {
      title: "3D Plugin",
      description:
        "A powerful WordPress plugin that integrates external 3D models from platforms like Spline and Sketchfab, enabling seamless embedding of 3D assets.",
      tags: ["WordPress", "JavaScript", "3D Models", "GLTF/GLB"],
      link: "https://github.com/bemnet884/3D-Plugin-Nehabi?tab=readme-ov-file",
    },

    {
      title: "Custom Text Editor",
      description:
        "A versatile, feature-rich text editor with markdown support, syntax highlighting, and auto-save functionality, designed for developers and writers.",
      tags: ["React", "Draft.js", "TypeScript", "Markdown"],
      link: "https://your-text-editor-link.com",
    },
  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full mb-10 relative flex flex-col items-start gap-5 overflow-hidden">
      <MaxWidthWrapper>
        <Badge variant="secondary" className="gap-1.5 py-1 ">
          <Layers size={28} className="text-primary" />
          <h1 className="font-poppins font-bold text-4xl name_underline max-sm:text-2xl">Projects</h1>

        </Badge>
        <div className="flex flex-col gap-3">
          <FramerWrapper y={0} x={200}>
            <p className=" font-poppins text-lg w-full max-sm:text-base">
              Explore a collection of my full-stack projects, where I combine automation, 3D interactions, and responsive design to build seamless digital experiences. Each project reflects my passion for problem-solving, innovation, and business efficiency.
            </p>
          </FramerWrapper>
        </div>

        <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
          {Projects.map((val, indx) => {
            return <ProjectCards key={indx} value={val} num={indx} />;
          })}

        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default projectsPage;
