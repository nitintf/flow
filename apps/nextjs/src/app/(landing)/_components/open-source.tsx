export const WeAreOpenSource = () => {
  return (
    <a
      href="https://github.com/nitintf/flow"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-white no-underline  shadow-2xl shadow-zinc-900"
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,#6466F1_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
      </span>
      <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-4 py-0.5 ring-1 ring-white/10 ">
        <div className="flex-none rounded-full bg-indigo-200/10 p-1 text-indigo-500">
          <div className="h-1.5 w-1.5 rounded-full bg-current"></div>
        </div>
        <span>v0.1.0 We&apos;re now open source</span>
      </div>
    </a>
  );
};
