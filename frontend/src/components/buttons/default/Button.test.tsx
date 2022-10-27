import {render, cleanup, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import Button from "./Button";

afterEach(cleanup)

describe('tests for Button component', () => {
    it('should be a clickable element', () => {
        const mockOnClick = jest.fn()
        render(<Button children='Click me' onClick={mockOnClick}/>);
        const button = screen.getByText('Click me')
        fireEvent.click(button)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
    it('button should have a transparent background', () => {
        render(<Button children='Click me' backgroundColor=''/>);
        expect(screen.getByText('Click me')).toHaveStyle('background: transparent');
    })
    it('button should have a border', () => {
        render(<Button children='Click me' border/>);
        expect(screen.getByText('Click me')).toHaveStyle('border: 0.01em solid black');
    })
    it('button should not have a border by default', () => {
        render(<Button children='Click me'/>);
        expect(screen.getByText('Click me')).toHaveStyle('border: none');
    })
    it('text color should be black by default', () => {
        render(<Button children='Click me' color=''/>);
        expect(screen.getByText('Click me')).toHaveStyle('color: black');
    })
    it('text color should be white', () => {
        render(<Button children='Click me' color='#fff'/>);
        expect(screen.getByText('Click me')).toHaveStyle('color: #fff');
    })
    it('snapshot renders correctly, truthy values', () => {
        expect(<Button children='Click me' backgroundColor='transparent' color='#000' border={true} type='button'/>)
            .toMatchSnapshot()
    })
    it('snapshot renders correctly, falsy values', () => {
        expect(<Button/>).toMatchSnapshot()
    })
})