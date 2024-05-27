import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { Subtitle } from './Subtitle';

describe('Subtitle', () => {
    it('renders subtitle component with the provided props', () => {
        // Arrange
        const textSubtitle = "Esto es un subtítulo";
        const color = "text-darkPurple";

        // Act
        render(<Subtitle text={textSubtitle} color={color} />);
        const subtitleElement = screen.getByRole("heading", {level: 2});
        const testText = screen.getByText(textSubtitle);

        // Assert
        expect(subtitleElement).toBeInTheDocument();
        expect(subtitleElement.classList).toContain(color);
        expect(testText).toBeInTheDocument();
    })
})