import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "Rahul Mehta",
    body: "VidWerk completely changed the quality of my videos. Their pacing, text animation, and color balance make every video feel premium. My audience instantly noticed the difference!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Ava Johnson",
    body: "I’ve worked with many editors, but VidWerk just gets the storytelling right. The transitions, sound effects, and flow make my travel vlogs look cinematic!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Arjun Verma",
    body: "VidWerk helped me give my channel a professional upgrade. They edit exactly how I imagine — impactful, emotional, and visually engaging. Love their consistency!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Liam Carter",
    body: "VidWerk’s edits add the perfect energy to my gaming montages. The cuts, memes, and syncs are flawless — exactly what my viewers love!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Sara Patel",
     body: "VidWerk understands the YouTube vibe perfectly. My recipe videos now look clean, aesthetic, and fun to watch. The edits bring my dishes to life!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Rohit Singh",
     body: "The team at VidWerk makes every workout video look powerful. The camera angles, music sync, and slow-motion effects are just perfect!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Emily Rose",
     body: "VidWerk is the reason my content looks so polished. Their edits match my personality — soft, minimal, and premium. Couldn’t ask for a better editing partner!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Jayden Brooks",
     body: "VidWerk made my car reviews look like Top Gear-level productions. Their cuts and color grading make every shot pop. Highly professional work!.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Ananya Ghosh",
     body: "I wanted clean, distraction-free edits — and VidWerk nailed it! They know how to keep viewers hooked and make study content look aesthetic.",
    img: "https://avatar.vercel.sh/james",
  },
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, name, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

export default function MarqueeDemo() {
  return (
    <div id="reviews" className="relative flex w-full flex-col items-center mt-[0rem] h-[100vh] justify-center overflow-hidden text-white">
        <h2 className='font-inter text-[2.2rem] md:text-[3rem] pb-[3rem]'>Client's feedback</h2>
      <Marquee pauseOnHover className="[--duration:20s] font-inter text-[14px] text-[#d9d9d9]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] font-inter text-[14px] text-[#d9d9d9]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      {/* Left gradient fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#030006]"></div>
      {/* Right gradient fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#030006]"></div>
    </div>
  )
}
