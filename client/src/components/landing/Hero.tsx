import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import Modal from "../ui/Modal";
import RegisterForm from "../auth/RegisterForm";

const chartBars = [34, 48, 40, 62, 53, 72, 60, 84, 76, 92];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState("hidden");
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openLogin = () => {
    setAuthMode("login");
    setIsModalOpen("block");
  };

  return (
    <main className="relative mx-auto grid w-full max-w-7xl items-center gap-12 overflow-hidden px-6 pt-8 pb-16 lg:min-h-[calc(100vh-104px)] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pt-0">
      <div className="relative z-10 text-center lg:text-left">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7D5B1B]/50 bg-[#FFF0AB]/75 px-4 py-2 text-sm font-bold text-[#5A390C] shadow-sm backdrop-blur-sm">
          <span className="rounded bg-[#668327] px-1.5 py-0.5 text-xs text-[#FFFBEA]">LIVE</span>
          BAN index is moving. Make your call.
        </div>

        <h2 className="heading primary-color text-6xl leading-[0.86] tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl">
          Trade.<br />
          <span className="text-[#FFF0A6] [text-shadow:3px_3px_0_#6E4B12]">Crash.</span><br />
          Repeat.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg font-semibold leading-relaxed text-[#FFEAA0] drop-shadow-sm sm:text-xl lg:mx-0">
          Read the market, back your bananas, and build the most legendary trading run on the exchange.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
          <button className="primary-font w-72 rounded-xl border-2 border-[#704E12] border-b-4 bg-linear-to-t from-[#E8C84F] to-[#FFF8C8] py-4 text-2xl primary-color shadow-[0_5px_0_#704E12] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_0_#704E12] active:translate-y-0 active:shadow-[0_3px_0_#704E12] cursor-pointer" onClick={openLogin}>
            Start Trading →
          </button>
          <div className="flex items-center gap-2 text-sm font-bold text-[#5A390C]">
            <span className="flex size-8 items-center justify-center rounded-full border border-[#805D1F] bg-[#FFE98A]">✦</span>
            Free to play. High stakes bananas.
          </div>
        </div>

        <div className="mt-10 grid max-w-md grid-cols-3 divide-x divide-[#7E5B1D]/35 rounded-2xl border border-[#7E5B1D]/35 bg-[#FFE98A]/55 px-2 py-4 text-center shadow-sm backdrop-blur-sm">
          <div><p className="primary-font text-xl primary-color">24/7</p><p className="text-[10px] font-bold tracking-wider text-[#6C4C14]">MARKET</p></div>
          <div><p className="primary-font text-xl primary-color">∞</p><p className="text-[10px] font-bold tracking-wider text-[#6C4C14]">POSSIBILITIES</p></div>
          <div><p className="primary-font text-xl primary-color">0%</p><p className="text-[10px] font-bold tracking-wider text-[#6C4C14]">BORING</p></div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
        <div className="absolute -inset-6 rounded-full bg-[#FFF2A2]/25 blur-3xl" />
        <div className="relative rotate-[-2deg] rounded-[1.75rem] border-4 border-[#4A2D0B] bg-[#211506] p-2 shadow-[0_18px_0_rgba(74,45,11,0.35)] transition-transform duration-300 hover:rotate-0 hover:scale-[1.01]">
          <div className="flex items-center justify-between rounded-t-2xl border-b border-[#806020] bg-[#171006] px-4 py-3 text-xs font-bold text-[#FFF0A6]">
            <span>🍌 BANANA EXCHANGE</span>
            <span className="text-[#B9D45A]">● LIVE MARKET</span>
          </div>
          <div className="overflow-hidden rounded-b-2xl bg-[#FFF4D1] p-5 sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-[#806020]">TODAY&apos;S PICK</p>
                <h3 className="heading mt-1 text-3xl primary-color">Golden Peel</h3>
              </div>
              <div className="rounded-xl border border-[#B98B1D] bg-[#FFF9D8] px-3 py-2 text-right">
                <p className="text-[10px] font-bold text-[#806020]">BAN</p>
                <p className="primary-font text-lg text-[#5D7B26]">+12.4%</p>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-[#D5B455] bg-[#FFFBEA] p-4">
              <div className="mb-4 flex items-end justify-between">
                <p className="primary-font text-4xl primary-color">₹ 128.50</p>
                <p className="rounded bg-[#E6F0B5] px-2 py-1 text-xs font-bold text-[#587322]">▲ +₹14.20</p>
              </div>
              <div className="flex h-40 items-end justify-between gap-2 border-b border-[#D5B455] px-1">
                {chartBars.map((height, index) => (
                  <div key={index} className="flex h-full flex-1 items-end justify-center">
                    <span className={`w-full max-w-5 rounded-t-sm ${index === 2 || index === 5 || index === 8 ? "bg-[#C89B24]" : "bg-[#70862D]"}`} style={{ height: `${height}%` }} />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[10px] font-bold tracking-wider text-[#806020]"><span>09:00</span><span>12:00</span><span>15:00</span></div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-[#E9D466]/55 p-3"><p className="text-[10px] font-bold text-[#806020]">DAILY VOLUME</p><p className="primary-font mt-1 text-xl primary-color">1.8M 🍌</p></div>
              <button className="primary-font cursor-pointer rounded-xl border-b-3 border-[#755311] bg-[#E8C84F] px-3 py-3 text-lg primary-color transition-transform hover:-translate-y-0.5 active:translate-y-0" onClick={openLogin}>Trade Now</button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen === "block" && (
        <Modal
          onClose={() => setIsModalOpen("hidden")}
          content={authMode === "login"
            ? <LoginForm onSwitchToRegister={() => setAuthMode("register")} />
            : <RegisterForm onSwitchToLogin={() => setAuthMode("login")} />}
        />
      )}
    </main>
  );
}
