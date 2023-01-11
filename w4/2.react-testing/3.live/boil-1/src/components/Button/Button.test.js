/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'

// beforeAll(() => {
//     console.log("beforeAll");
// })

it('should render button component without any label', () => {
  render(<Button />)
  expect(screen.getByTestId('button')).toBeInTheDocument()
})

it('should render button component with label', () => {
  let label = 'Hello World'
  render(<Button label={label} />)
  expect(screen.getByTestId('button')).toBeInTheDocument()
  expect(screen.getByTestId('button')).toHaveTextContent(label)
})

it('should executeonClick function when clicked', () => {
  let fn = jest.fn() //mock function
  render(<Button label="Button" onClick={fn} />)
  fireEvent.click(screen.getByTestId('button'))
  expect(fn).toBeCalled()
})

afterAll(() => {
  cleanup()
})
