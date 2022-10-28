import {render, cleanup, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import CancelButton from "./CancelButton";

afterEach(cleanup)

describe('tests for CancelButton component', () => {
    it('check background color of button', () => {
        render(<CancelButton children='Cancel'/>);
        expect(screen.getByText('Cancel')).toHaveStyle('background: #ff4d4d');
    })
    it('should be a clickable element', () => {
        const mockOnClick = jest.fn()
        render(<CancelButton children='Cancel' onClick={mockOnClick}/>);
        const cancelButton = screen.getByText('Cancel')
        fireEvent.click(cancelButton)
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })
})