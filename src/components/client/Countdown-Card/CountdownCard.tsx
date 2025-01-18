type Props = {
  value: number;
  content: string;
};

const CountdownCard = (props: Props) => {
  return (
    <div className="bg-[#E70505] w-10 h-11 rounded-lg text-white font-medium flex flex-col items-center justify-center">
      <p className="text-[16px]">{props.value}</p>
      <p className="font-normal text-[9px]">{props.content}</p>
    </div>
  );
};

export default CountdownCard;
