import { CloseIcon } from "@/components/Svgs";

export const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-white px-6 py-4 rounded-[30px] shadow-lg text-center w-[270px] h-[270px] lg:w-[362px] lg:h-[270px] flex flex-col justify-center">
        <span
          className="absolute right-[20px] top-[30px] -translate-y-1/2 text-[#777777] cursor-pointer"
          onClick={onClose}
        >
          <CloseIcon />
        </span>
        {children}
      </div>
    </div>
  );
};
