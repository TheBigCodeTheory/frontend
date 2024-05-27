type SubtitleProps = {
    text: string;
    color?: string;
}

export const Subtitle = ({text, color = "text-white"}: SubtitleProps) => {
  return (
    <h2 className={`font-display text-2xl ${color} text-bold lg:text-4xl`}>{text}</h2>
  )
};




