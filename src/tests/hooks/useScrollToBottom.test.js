import React, { useRef } from 'react';

import { act, render } from '@testing-library/react';

import useScrollToBottom from '../../hooks/useScrollToBottom';

const TestComponent = () => {
  const ref = useRef(null);
  const isAtBottom = useScrollToBottom(ref);

  return (
    <div>
      <div
        ref={ref}
        style={{ height: '200px', overflowY: 'scroll' }}
        data-testid="scroll-container"
      >
        <div style={{ height: '600px' }}>
          <p>Scroll down to see the effect.</p>
        </div>
      </div>
      <p data-testid="status">{isAtBottom ? 'At Bottom' : 'Not At Bottom'}</p>
    </div>
  );
};

describe('useScrollToBottom', () => {
  it('should return true when scrolled to the bottom', () => {
    const { getByTestId } = render(<TestComponent />);
    const container = getByTestId('scroll-container');

    expect(getByTestId('status')).toHaveTextContent('Not At Bottom');

    act(() => {
      container.scrollTop = container.scrollHeight;
      container.dispatchEvent(new Event('scroll'));
    });

    expect(getByTestId('status')).toHaveTextContent('At Bottom');
  });
});
