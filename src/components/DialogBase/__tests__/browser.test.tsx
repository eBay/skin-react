import * as React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react';
import {Dialog, DialogDefaultProps, DialogOpen, HeaderFooterDialog, HeaderFooterDialogDefaultProps} from './mocks';

let component;
let handleCloseBtnClick = jest.fn();
let handleBackgroundClick = jest.fn();

describe('given a closed dialog', () => {
  const input = DialogDefaultProps;
  let sibling;

  beforeEach(async () => {
    sibling = document.body.appendChild(document.createElement('div'));
    component = await render(<Dialog />);
  });

  afterEach(() => {
    document.body.removeChild(sibling);
  });

  it('then it is hidden in the DOM', async () => {
    expect(component.queryByTestId(DialogDefaultProps.id)).toBeNull();
  });

  it('then <body> is scrollable', () => {
    expect(document.body).not.toHaveAttribute('style');
  });

  it("then it's siblings are visible", () => {
    expect(sibling).not.toHaveAttribute('aria-hidden');
  });

  describe('when it is rerendered to be open', () => {
    beforeEach(async () => {
      await component.rerender(<Dialog open />);
    });

    thenItIsOpen(true);
  });

  function thenItIsOpen(wasToggled = false) {
    it('then it is visible in the DOM', async () => {
      await waitFor(() => expect(component.getByRole('dialog', {hidden: true})).toBeVisible());
    });

    it('then <body> is not scrollable', () => {
      expect(document.body).toHaveStyle('overflow:hidden');
    });

    it("then it's siblings are hidden", async () => {
      await waitFor(() => expect(sibling).toHaveAttribute('aria-hidden', 'true'));
    });

    if (wasToggled && component) {
      it('then it traps focus', async () => {
        await waitFor(() => {
          const elm = component.getByRole('dialog', {hidden: true}).parentElement.parentElement;
          expect(elm.previousSibling).toHaveAttribute('data-focus-guard', 'true');
          expect(elm).toHaveAttribute('data-focus-lock-disabled', 'false');
          expect(elm.nextSibling).toHaveAttribute('data-focus-guard', 'true');
          component
            .getByLabelText(input.a11yCloseText)
            .classList.forEach((cls) => expect(document.activeElement).toHaveClass(cls));
        });
      });

      xit('then it emits the open event', async () => {
        await waitFor(() => expect(component.emitted('open')).toHaveLength(1));
      });

      describe('when it is rerendered with the same input', () => {
        beforeEach(async () => await component.rerender(<Dialog open />));
        thenItIsOpen();
      });
    }
  }
});

describe('given an open dialog', () => {
  const input = {...DialogDefaultProps, open: true};
  let sibling;

  beforeEach(async () => {
    sibling = document.body.appendChild(document.createElement('button'));
    sibling.focus();
    handleCloseBtnClick = jest.fn();
    handleBackgroundClick = jest.fn();
    component = await render(
      <HeaderFooterDialog open onCloseBtnClick={handleCloseBtnClick} onBackgroundClick={handleBackgroundClick} />
    );
  });

  afterEach(() => {
    document.body.removeChild(sibling);
  });

  thenItIsOpen();

  describe('when the close button is clicked', () => {
    beforeEach(async () => {
      await fireEvent.click(component.getByLabelText(input.a11yCloseText));
    });

    thenItIsClosed(true);
  });

  describe('when the escape is pressed', () => {
    beforeEach(async () => {
      fireEvent.keyDown(component.getByText(input.children), {key: 'Escape', code: 27});
    });

    thenItIsClosed(true);
  });

  describe('when the escape is pressed on input', () => {
    beforeEach(async () => {
      const inputEl = document.createElement('input');
      inputEl.setAttribute('placeholder', 'sample input');
      component.getByRole('dialog', {hidden: true}).appendChild(inputEl);
      fireEvent.keyDown(component.getByPlaceholderText('sample input'), {key: 'Escape', code: 27});
    });

    thenItIsClosed(true);
  });

  function thenItIsOpen() {
    it('then it is visible in the DOM', async () => {
      await waitFor(() => expect(component.getByRole('dialog', {hidden: true})).toBeVisible());
    });

    it('then <body> is not scrollable', () => {
      expect(document.body).toHaveStyle('overflow:hidden');
    });

    it("then it's siblings are hidden", async () => {
      await waitFor(() => expect(sibling).toHaveAttribute('aria-hidden', 'true'));
    });

    it('then it traps focus', async () => {
      await waitFor(() => {
        const elm = component.getByRole('dialog', {hidden: true}).parentElement.parentElement;
        expect(elm.previousSibling).toHaveAttribute('data-focus-guard', 'true');
        expect(elm).toHaveAttribute('data-focus-lock-disabled', 'false');
        expect(elm.nextSibling).toHaveAttribute('data-focus-guard', 'true');
      });
    });
  }

  function thenItIsClosed(wasToggled) {
    if (wasToggled) {
      it('then it emits the close event', async () => {
        await waitFor(() => expect(handleCloseBtnClick).toHaveBeenCalledTimes(1));
      });

      describe('when it is rerendered with the same input', () => {
        beforeEach(async () => await component.rerender(<Dialog {...input} />));
        thenItIsOpen();
      });
    } else {
      it('then it is hidden in the DOM', async () => {
        await waitFor(() => expect(component.getByRole('dialog', {hidden: true})).not.toBeVisible());
      });

      it('then <body> is scrollable', async () => {
        await waitFor(() => {
          expect(document.body).not.toHaveAttribute('style');
        });
      });

      it("then it's siblings are visible", () => {
        expect(sibling).not.toHaveAttribute('aria-hidden');
      });

      xit('then it restores the previous focus', async () => {
        expect(component.getByRole('dialog', {hidden: true}).children[0]).not.toHaveClass('keyboard-trap--active');
        await waitFor(() => expect(document.activeElement).toEqual(sibling));
      });
    }
  }
});

describe('given an open dialog with no trap', () => {
  const input = {...DialogDefaultProps, open: true, isModal: false};
  let sibling;

  beforeEach(async () => {
    sibling = document.body.appendChild(document.createElement('button'));
    sibling.focus();
    component = await render(<DialogOpen {...input} />);
  });

  afterEach(() => {
    document.body.removeChild(sibling);
  });

  it('then it is visible in the DOM', async () => {
    await waitFor(() => expect(component.getByRole('dialog', {hidden: true})).toBeVisible());
  });

  it('then <body> is scrollable', () => {
    expect(document.body).not.toHaveAttribute('style');
  });

  it("then it's siblings are not hidden", () => {
    expect(sibling).not.toHaveAttribute('aria-hidden', 'true');
  });

  it('then it does not traps focus', async () => {
    await waitFor(() => {
      const elm = component.getByRole('dialog', {hidden: true}).parentElement.parentElement;
      expect(elm).not.toHaveAttribute('data-focus-lock-disabled');
    });
  });
});

describe('given an open with no close button', () => {
  const input = {...DialogDefaultProps, open: true, buttonPosition: 'hidden', ignoreEscape: true};
  let sibling;

  beforeEach(async () => {
    sibling = document.body.appendChild(document.createElement('button'));
    sibling.focus();
    component = await render(<DialogOpen {...input} />);
  });

  afterEach(() => {
    document.body.removeChild(sibling);
  });

  thenItIsOpen();

  describe('when the escape is pressed', () => {
    beforeEach(async () => {
      fireEvent.keyDown(component.getByText(input.children), {key: 'Escape', code: 27});
    });

    thenItIsOpen();
  });

  function thenItIsOpen(toggle = false) {
    it('then it is visible in the DOM', async () => {
      await waitFor(() => expect(component.getByRole('dialog', {hidden: true})).toBeVisible());
    });

    it('then <body> is not scrollable', () => {
      expect(document.body).toHaveStyle('overflow:hidden');
    });
  }
});
