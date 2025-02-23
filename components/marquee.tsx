import { cn } from "@/lib/utils";
import { Marquee } from "./magicui/marquee";
import Image from "next/image"
const reviews = [
  {
    name: "Sara Bekele",
    role: "Project Manager at EthioTech Solutions",
    body: "Bemnet exceeded our expectations in design and functionality.",
    img: "/heroimg.jpg",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer at Global Innovations",
    body: "Creative, technically skilled, and highly recommended.",
    img: "/heroimg.jpg",
  },
  {
    name: "Lidya Gebremariam",
    role: "Founder of Addis Creative Studio",
    body: "Professional and detail-oriented, delivering a seamless platform.",
    img: "/heroimg.jpg",
  },
  {
    name: "David Kim",
    role: "CTO at Nexa Labs",
    body: "Delivered early with outstanding quality.",
    img: "/heroimg.jpg",
  },
  {
    name: "Abebe Tesfaye",
    role: "CEO of Blue Nile Ventures",
    body: "Smooth process and excellent communication throughout.",
    img: "/heroimg.jpg",
  },
];



const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  role,
  body,
}: {
  img: string;
  name: string;
  role: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/**
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
           * 
           */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.role} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.role} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
