import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Caps } from "./Caps";
import { FontType } from "@/types/ui";

describe("Caps", () => {
	it("renders Caps component with the provided props", () => {
		// Arrange
		const regularCapsProps = {
			text: "Testing regular caps",
		};

		const boldCapsProps = {
			text: "Testing bold caps",
			color: "text-black",
			fontType: "bold" as FontType,
		};

		// Act
		render(<Caps {...regularCapsProps} />);
		render(<Caps {...boldCapsProps} />);
		const regularCaps = screen.getByText(regularCapsProps.text);
		const boldCaps = screen.getByText(boldCapsProps.text);

		// Assert
		expect(regularCaps).toBeInTheDocument();
		expect(regularCaps).toHaveTextContent(regularCapsProps.text);
		expect(regularCaps.classList).toContain("text-gray-100");

		expect(boldCaps).toBeInTheDocument();
		expect(boldCaps.classList).toContain(boldCapsProps.color && "font-bold");
		expect(boldCaps.innerHTML).toBe(boldCapsProps.text);
	});
})