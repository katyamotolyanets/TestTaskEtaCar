import {render, cleanup, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import ConfirmButton from "./ConfirmButton";

afterEach(cleanup)

describe('tests for ConfirmButton component', () => {
    it('should check that background color of button is default', () => {
        render(<ConfirmButton children='Yes'/>);
        expect(screen.getByText('Yes')).toHaveStyle('background: #4dffa6');
    })
})