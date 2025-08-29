export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export const CountdownTimer = ({ timeLeft }: { timeLeft: TimeLeft }) => (
  <div className="w-full lg:w-[100%] rounded-[18px] border-1 border-[#FF2914] bg-white p-7 text-center">
    <h2 className="text-[#FF2914] font-semibold text-lg mb-4">
      Early Bird Bonus Expires In:
    </h2>
    <div className="flex justify-between text-center text-[#FF2914] font-bold text-3xl px-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <span>{value}</span>
          <span className="text-xs font-normal mt-1 text-[#FF2914] capitalize">
            {unit}
          </span>
        </div>
      ))}
    </div>
  </div>
);
