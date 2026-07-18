import type { ReactNode } from "react";

type ModalProps = {
  content?: ReactNode;
  onClose?: () => void;
};

export default function Modal({ content, onClose }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50">
      <div className="relative h-fit w-fit">
        <button
          type="button"
          aria-label="Close modal"
          className="absolute -top-3 -right-3 z-10 flex size-8 cursor-pointer items-center justify-center rounded-full border-2 border-[#E8CC58] bg-[#2F210B] text-2xl leading-none text-[#FFF0A6] shadow-lg transition-transform duration-150 hover:scale-110"
          onClick={onClose}
        >
          {"\u00D7"}
        </button>
        {content}
      </div>
    </div>
  );
}
