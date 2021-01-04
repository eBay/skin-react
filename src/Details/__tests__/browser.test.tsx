import {SkinDetails} from '..';
import * as React from 'react';

import {render, fireEvent} from '@testing-library/react';

let component;
let handleClick = jest.fn();
let handleToggle = jest.fn();

const defaultProps = {
  text: 'open',
  children: 'body content'
};

describe('given the details is in the default state', () => {
  beforeEach(async () => {
    component = await render(<SkinDetails {...defaultProps} />);
  });

  it('should render with open false', () => {
    expect(component.getByText(defaultProps.text).closest('details').open).toEqual(false);
  });
});

describe('given the details is in the open state', () => {
  beforeEach(async () => {
    component = await render(<SkinDetails {...defaultProps} open />);
  });

  it('should render with open false', () => {
    expect(component.getByText(defaultProps.text).closest('details').open).toEqual(true);
  });
});

describe('given the details is in the default state and click is triggered', () => {
  beforeEach(async () => {
    handleClick = jest.fn();
    handleToggle = jest.fn();
    component = await render(<SkinDetails {...defaultProps} onClick={handleClick} onChange={handleToggle} />);
  });

  describe('click on details', () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByText(defaultProps.text));
    });

    it('then it emits the toggle and click', async () => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('details should properly toggle open property', () => {
    beforeEach(async () => {
      await component.rerender(<SkinDetails {...defaultProps} onClick={handleClick} onChange={handleToggle} open />);
    });

    it('then it should have open true', () => {
      expect(component.getByText(defaultProps.text).closest('details').open).toEqual(true);
    });
    describe('click after rerender', () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByText(defaultProps.text).parentNode);
      });

      it('then it should be closed', async () => {
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe('given the details is in the open state and click is triggered', () => {
  beforeEach(async () => {
    handleClick = jest.fn();
    handleToggle = jest.fn();
    component = await render(<SkinDetails {...defaultProps} onClick={handleClick} onChange={handleToggle} />);
  });

  describe('click on details', () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByText(defaultProps.text));
    });

    it('then it emits the toggle and click', async () => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('details should properly toggle open property', () => {
    beforeEach(async () => {
      await component.rerender(
        <SkinDetails {...defaultProps} onClick={handleClick} onChange={handleToggle} open={false} />
      );
    });

    it('then it should have open false', () => {
      expect(component.getByText(defaultProps.text).closest('details').open).toEqual(false);
    });
    describe('click after rerender', () => {
      beforeEach(async () => {
        await fireEvent.click(component.getByText(defaultProps.text).parentNode);
      });
      it('then it should be open', async () => {
        expect(handleClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
