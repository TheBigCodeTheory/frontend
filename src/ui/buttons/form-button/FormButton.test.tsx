import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom' // Para tener acceso a expect(...).toBeInTheDocument()
import { FormButton } from './FormButton' // Asegúrate de importar correctamente tu componente

describe('FormButton', () => {
  it('renders button with provided children', () => {
    // Arrange
    const buttonText = 'Submit'

    // Act
    const { getByText } = render(<FormButton>{buttonText}</FormButton>)
    const buttonElement = getByText(buttonText)

    // Assert
    expect(buttonElement).toBeInTheDocument()
  })
})
