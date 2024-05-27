import { FontType } from "@/types/ui";

type SmallProps = {
	text: string;
	color?: string;
	fontType?: FontType;
}

export const Small = ({text, color = "text-gray-100", fontType = "regular"}: SmallProps) => {
  return (
		<p
			className={`font-sans text-sm ${fontType === "bold" ? "font-bold" : "font-normal"} ${color}`}
		>
			{text}
		</p>
	)
};