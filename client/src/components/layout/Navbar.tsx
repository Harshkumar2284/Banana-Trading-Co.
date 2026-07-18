export default function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
      <div className="flex items-center gap-3">
        <div className="flex size-11 rotate-[-8deg] items-center justify-center rounded-xl border-2 border-[#5A390C] bg-[#F5D65B] text-2xl shadow-[0_3px_0_#5A390C]">🍌</div>
        <h1 className="yuyu-regular primary-color text-3xl font-bold sm:text-4xl">Banana Trading Co.</h1>
      </div>
      <div className="hidden items-center gap-2 rounded-full border border-[#805D1F]/50 bg-[#FFF2B5]/70 px-4 py-2 text-xs font-bold text-[#4C340E] shadow-sm sm:flex">
        <span className="size-2 animate-pulse rounded-full bg-[#668327]" />
        MARKET OPEN
      </div>
    </header>
  );
}
