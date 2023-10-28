export default function CountDown({count}) {
  return (
    <div className="flex items-center gap-8 flex-grow ml-20 child:flex child:flex-col child:justify-center ">
      <div>
        <span>days</span>
        <span className="text-bolder text-4xl">03</span>
      </div>
      <div>
        <span>hours</span>
        <span className="text-bolder text-4xl">03</span>
      </div>
      <div>
        <span>minutes</span>
        <span className="text-bolder text-4xl">03</span>
      </div>
      <div>
        <span>seconds</span>
        <span className="text-bolder text-4xl">03</span>
      </div>
    </div>
  );
}
