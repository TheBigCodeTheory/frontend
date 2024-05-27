import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FontType } from "@/types/ui";
import { Small } from "./Small";

describe("Small", () => {
	it("renders a Small text with the provided props", () => {
		// Arrange
		const regularSmallProps = {
			text: "Regular Small Text",
		};

		const boldSmallProps = {
			text: "Bold Small Text",
			color: "text-black",
			fontType: "bold" as FontType,
		};

		// Act
		render(<Small {...regularSmallProps}/>);
		render(<Small {...boldSmallProps}/>);

		const regularSmall = screen.getByText(regularSmallProps.text);
		const boldSmall = screen.getByText(boldSmallProps.text);

		// Assert
		expect(regularSmall).toBeInTheDocument();
		expect(regularSmall).toHaveTextContent(regularSmallProps.text);
		expect(regularSmall.classList).toContain("font-normal" && "text-gray-100");

		expect(boldSmall).toBeInTheDocument();
		expect(boldSmall).toHaveTextContent(boldSmallProps.text);
		expect(boldSmall.classList).toContain(boldSmallProps.color && "font-bold");
	})
})