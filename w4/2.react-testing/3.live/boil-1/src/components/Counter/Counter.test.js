import React from 'react'
import Counter from './Counter'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'


it('should render button component without any label', () => {
    render(<Counter />)
    expect(screen.getByText("Counter")).toBeInTheDocument()
    expect(screen.getByTestId("count-value")).toBeInTheDocument()
    expect(screen.getByTestId("minus-button")).toBeInTheDocument()
    expect(screen.getByTestId("plus-button")).toBeInTheDocument();


    expect(screen.getByTestId("count-value")).toBeInTheDocument(0)
})
  

it("should increment count value when clicked on increment", () => {  
    render(<Counter />)
    let incButton = screen.getByTestId('plus-button')
    let decButton = screen.getByTestId('minus-button')
    fireEvent.click(incButton)
    fireEvent.click(incButton)
    fireEvent.click(incButton)
    fireEvent.click(incButton)
    fireEvent.click(incButton)
    expect(screen.getByTestId("count-value")).toHaveTextContent(5);
    fireEvent.click(decButton)
    fireEvent.click(decButton)
    fireEvent.click(decButton)
    expect(screen.getByTestId("count-value")).toHaveTextContent(2);

})

it("should increament the value by 5", () => {
    render(<Counter />)
    let incButton = screen.getByTestId('plus-button')
    fireEvent.click(incButton);
})
it("should decreament the value by 5", () => {
    render(<Counter />)
    let decButton = screen.getByTestId('minus-button')
    fireEvent.click(decButton);
})

afterAll(() => {
    cleanup()
  })
  