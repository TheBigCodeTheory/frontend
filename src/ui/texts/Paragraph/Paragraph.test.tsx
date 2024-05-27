import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { FontType } from "@/types/ui";
import { Paragraph } from "./Paragraph"

describe("Paragraph", () => {
    it("renders a Paragraph component with the provided props", () => {
        // Arrange
        const paragraphOneProps = {
            text: "Regular paragraph",
            color: "text-darkPurple",
        };

        const paragraphTwoProps = {
            text: "Bold Paragraph",
            color: "text-brightPruple",
            fontType: "bold" as FontType,
        };

        // Act
        render(<Paragraph {...paragraphOneProps}/>);
        render(<Paragraph {...paragraphTwoProps}/>);
        const paragraphOne = screen.getByText(paragraphOneProps.text);
        const paragraphTwo = screen.getByText(paragraphTwoProps.text);

        // Assert 
        expect(paragraphOne).toBeInTheDocument();
        expect(paragraphOne.classList).toContain(paragraphOneProps.color && "font-normal");

        expect(paragraphTwo).toBeInTheDocument();
        expect(paragraphTwo.classList).toContain(paragraphTwoProps.color && "font-bold");
    })
});