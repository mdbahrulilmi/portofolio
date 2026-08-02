import { ArrowRight } from "lucide-react";

export default function Hero({
  title,
  subTitle,
  buttonTitle,
  buttonLink,
}: {
  title: string;
  subTitle: string;
  buttonTitle: string;
  buttonLink: string;
}) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-zinc-50/50 text-zinc-900 overflow-hidden px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-zinc-200/40 via-amber-100/30 to-zinc-200/40 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.12] max-w-3xl text-balance">
          <span className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-2xl text-balance">
          {subTitle}
        </p>

        <div className="mt-10 flex items-center justify-center">
          <a href={buttonLink} className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-zinc-900 text-zinc-50 font-medium text-sm transition-all duration-300 hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-900/10 active:scale-95 cursor-pointer">
            <span>{buttonTitle}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-zinc-50" />
          </a>
        </div>

      </div>
    </section>
  );
}