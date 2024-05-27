type TitleProps = {
  text: string;
  color?: string;
}

export const Title = ({ text, color = "text-white" }: TitleProps) => {
  return (
    <h1
      className={`font-display ${color} "font-bold" text-[32px] lg:text-5xl`}
    >
      {text}
    </h1>
  )
};
