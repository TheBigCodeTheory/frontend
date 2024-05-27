import { FontType } from "@/types/ui";

type CapsProps = {
    text: string;
    fontType?: FontType;
    color?: string;
};

export const Caps = ({text, fontType = "regular", color = "text-gray-100"}: CapsProps) => {
    return (
      <p
        className={`font-sans uppercase text-sm ${fontType === "bold" ? "font-bold" : "font-normal"} ${color}`}
      >
				{text}
			</p>
    );
};