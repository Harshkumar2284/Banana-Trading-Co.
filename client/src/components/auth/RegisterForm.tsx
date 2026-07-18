type RegisterFormProps = {
  onSwitchToLogin: () => void;
};

export default function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  return (
    <div className="w-[min(92vw,32rem)] rounded-[1.75rem] border-4 border-[#4A2D0B] bg-[#211506] p-2 shadow-2xl">
      <div className="flex items-center gap-2 overflow-hidden rounded-t-2xl border-b border-[#876726] bg-[#171006] px-3 py-2 text-[10px] font-bold tracking-wide text-[#FFF0A6] sm:text-xs">
        <span className="text-lg leading-none">🍌</span>
        <span>BAN <span className="text-[#B9D45A]">▲ 24.75 +2.41%</span></span>
        <span className="hidden sm:inline">NAN <span className="text-[#EA7060]">▼ 18.32 -1.17%</span></span>
        <span className="hidden md:inline">POT <span className="text-[#B9D45A]">▲ 36.88 +3.02%</span></span>
      </div>

      <form className="relative overflow-hidden rounded-b-2xl border-2 border-[#C39B3A] bg-[#FFF4D1] px-6 py-8 sm:px-10" onSubmit={(event) => event.preventDefault()}>
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(#b58b2b_0.7px,transparent_0.7px)] [background-size:7px_7px]" />
        <div className="relative flex flex-col gap-3">
          <div className="text-center">
            <p className="primary-font text-xl primary-color">Banana Trading Co.</p>
            <div className="my-3 flex items-center gap-3 text-[#B98B1D] before:h-px before:flex-1 before:bg-[#C39B3A] after:h-px after:flex-1 after:bg-[#C39B3A]">🍌</div>
            <h2 className="heading primary-color text-4xl leading-none sm:text-5xl">Join the<br />Market</h2>
          </div>

          <div className="mx-auto flex h-14 w-full max-w-72 items-end justify-between gap-1 border-b border-[#D7B55F] px-2 pb-1">
            {[28, 45, 39, 60, 53, 72, 58, 80, 68, 90].map((height, index) => (
              <span key={index} className={`w-2 rounded-t-sm ${index % 3 === 1 ? "bg-[#B98B1D]" : "bg-[#6F7F2A]"}`} style={{ height: `${height}%` }} />
            ))}
          </div>

          <label className="flex flex-col gap-1 text-sm font-bold primary-color">
            Trader name
            <input
              type="text"
              name="displayName"
              placeholder="Choose your trader name"
              className="rounded-xl border-2 border-[#C39B3A] bg-[#FFFBEA] px-4 py-3 text-[#2F210B] outline-none transition-colors placeholder:text-[#927B48] focus:border-[#765316]"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-bold primary-color">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="rounded-xl border-2 border-[#C39B3A] bg-[#FFFBEA] px-4 py-3 text-[#2F210B] outline-none transition-colors placeholder:text-[#927B48] focus:border-[#765316]"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-bold primary-color">
            Password
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              minLength={6}
              className="rounded-xl border-2 border-[#C39B3A] bg-[#FFFBEA] px-4 py-3 text-[#2F210B] outline-none transition-colors placeholder:text-[#927B48] focus:border-[#765316]"
              required
            />
          </label>

          <button type="submit" className="primary-font mt-1 cursor-pointer rounded-xl border-2 border-[#876726] border-b-4 bg-linear-to-t from-[#E8C84F] to-[#FFF6B9] py-3 text-2xl primary-color shadow-[0_4px_0_#876726] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_#876726] active:translate-y-0 active:shadow-[0_2px_0_#876726]">
            Create Account
          </button>

          <p className="text-center text-sm text-[#5D4519]">
            Already trading?{" "}
            <button type="button" onClick={onSwitchToLogin} className="cursor-pointer font-bold underline decoration-[#B98B1D] underline-offset-2 hover:text-[#2F210B]">
              Log in
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
