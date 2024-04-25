export const Sidebar = () => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r  border-white/80 bg-gray-950 px-4">
      <div className="flex h-14 shrink-0 items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* <Logo className="h-6 w-auto" role="img" /> */}
          <span className="font-display text-lg font-semibold text-primary">
            Flow
          </span>
        </div>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul className="">
          <li></li>
        </ul>
      </nav>
    </div>
  );
};
