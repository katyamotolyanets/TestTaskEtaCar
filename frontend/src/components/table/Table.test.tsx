import { render, cleanup, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';
import { StyledTd, StyledTr } from './style';
import React from 'react';
import userEvent from '@testing-library/user-event';

const d = {
  xrp: 5,
};

afterEach(cleanup);

describe('tests for Table component', () => {
  const children = Object.entries(d)?.map((entry) => {
    return (
      <StyledTr>
        <StyledTd>{entry[0]}</StyledTd>
        <StyledTd className="count-of-currencies">{entry[1]}</StyledTd>
        <StyledTd>delete</StyledTd>
      </StyledTr>
    );
  });
  it('should change background color of rows on hover', async () => {
    render(
      <Table
        firstParam="text1"
        backgroundColor="#f2f3ff"
        secondParam="text2"
        thirdParam="text3"
        children={children}
      />,
    );
    userEvent.hover(screen.getAllByRole('row')[1]);
    expect(screen.getAllByRole('row')[1]).toHaveStyle('background: #f2f3ff');
  });
});
