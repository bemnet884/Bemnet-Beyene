
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import ProjectCards from "@/components/ProjectCard";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Top Movie Search",
      description:
        "A sleek and responsive movie search app that leverages the TMDB API to fetch trending and top-rated movies. It features real-time search with debounced input using useBounce, and stores user preferences using Appwrite for a smooth backend experience.",
      tags: ["Next.js", "TMDB API", "Appwrite", "useBounce"],
      link: "https://movie-react-smoky.vercel.app/",
    },

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
      link: "https://github.com/bemnet884/Fandishas_Bundles",
    },

    {
      title: "3D Portfolio",
      description:
        "A dynamic 3D portfolio built to showcase creative projects using interactive animations and immersive visuals, highlighting skills and expertise in 3D design.",
      tags: ["Three.js", "React", "GLTF", "Next.js"],
      link: "https://bemnet884.github.io/3D-Portfolio/",
    },

    {
      title: "3D Plugin",
      description:
        "A powerful WordPress plugin that integrates external 3D models from platforms like Spline and Sketchfab, enabling seamless embedding of 3D assets.",
      tags: ["WordPress", "JavaScript", "3D Models", "GLTF/GLB"],
      link: "https://github.com/bemnet884/3D-Plugin-Nehabi",
    },

    {
      title: "Custom Text Editor",
      description:
        "A versatile, feature-rich text editor with markdown support, syntax highlighting, and auto-save functionality, designed for developers and writers.",
      tags: ["React", "Draft.js", "TypeScript", "Markdown"],
      link: "https://github.com/bemnet884/Text-Editor",
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
