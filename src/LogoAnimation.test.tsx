import { render, screen } from '@testing-library/react';
import { LogoAnimation } from './LogoAnimation';

describe('LogoAnimation', () => {
  it('falls back to the static face where the animation APIs are missing', () => {
    const { container } = render(<LogoAnimation />);
    expect(
      screen.getByRole('img', { name: "The Saoi wordmark rolls up into Saoirse's face" }),
    ).toBeInTheDocument();
    expect(container.querySelector('svg[viewBox="0 0 64 64"]')).not.toBeNull();
    expect(screen.queryByRole('button', { name: 'Replay the animation' })).toBeNull();
  });
});
