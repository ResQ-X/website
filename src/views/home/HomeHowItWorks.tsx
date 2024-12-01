"use client";
import Image from "next/image";

export const HomeHowItWorks = () => {
  const openModal = () => {
    const dialog = document.getElementById("video_popup") as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
    }
  };

  return (
    <div className="mb-[44px] w-full">
      <div className="relative flex items-center justify-center">
        <button
          onClick={openModal}
          className="btn btn-outline flex h-[60px] flex-row items-center justify-center rounded-[99px] px-6 py-2 font-['Raleway'] text-base font-bold text-[#FF8500]"
        >
          <p>How it works</p>
          <div className="rounded-full bg-[#faeddd] p-2">
            <Image
              height={1200}
              width={1200}
              alt="Contact Image"
              src={"/icons/play_arrow.png"}
              className="w-4 object-cover"
            />
          </div>
        </button>
        <dialog id="video_popup" className="modal">
          <div className="modal-box">
            <video controls width="500">
              <source src={"/videos/howItWorks.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};
