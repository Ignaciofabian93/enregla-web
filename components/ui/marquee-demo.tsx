import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { reviews } from "@/lib/reviews";
import { Reveal } from "../animation/Reveal";

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard: React.FC<ReviewCardProps> = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full w-[32px] h-auto"
          width="32"
          height="32"
          alt="users"
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-black-100 dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-black-200 dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm dark:text-white text-black">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <Reveal>
      <div className="relative flex h-[350px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#EDF1F3] dark:from-black-100"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#EDF1F3] dark:from-black-100"></div>
      </div>
    </Reveal>
  );
}
