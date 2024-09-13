const Buttons = () => {
  return (
    <>
      <details className="font-raleway box-border flex h-12 w-full flex-row items-center justify-center gap-2 rounded-[88px] px-6 py-3 text-left text-base text-white [background:linear-gradient(180deg,_#ff8500,_#995000)]">
        <summary>Get app</summary>
        <ul className="flex flex-col items-start p-1.5">
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
        </ul>
      </details>

      {/* <div className="text-neutral-white font-raleway relative box-border flex h-12 w-full flex-row items-center justify-center gap-2 rounded-[88px] px-6 py-3 text-left text-[16px] [background:linear-gradient(180deg,_#ff8500,_#995000)]">
        <div className="relative leading-[24px] tracking-[-0.02em]">
          Get app
        </div>
        <img
          className="relative h-6 w-6 shrink-0 overflow-hidden"
          alt="icon"
          src="Frame.svg"
        />
      </div> */}
    </>
  );
};

export default Buttons;
