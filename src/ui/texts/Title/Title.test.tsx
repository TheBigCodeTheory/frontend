import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // Para tener acceso a expect(...).toBeInTheDocument()
import { Title } from './Title'

describe('Title', () => {
  it('renders title with provided props', () => {
    // Arrange
    const titleText = 'Título principal';
    const titleColor = "text-darkPurple";

    // Act
    render(<Title text={titleText} color={titleColor} />)
    const heading = screen.getByRole("heading", { level: 1 });
    const text = screen.getByText(titleText);

    // Assert
    expect(heading).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(heading.classList).toContain(titleColor);
  })
})
