import { FontType } from "@/types/ui";

type ParagraphProps = {
  text: string;
  color?: string;
  fontType?: FontType;
}

export const Paragraph = ({text, color = "text-gray-100", fontType = "regular"}: ParagraphProps) => {
  return (
    <p 
      className={`font-sans text-sm ${color} ${fontType === "bold" ? "font-bold" : "font-normal"} lg:text-base`}
    >
      {text}
    </p>
  )
};
