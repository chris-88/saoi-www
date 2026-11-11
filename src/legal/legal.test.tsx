import { render, screen } from '@testing-library/react';
import { Privacy } from './Privacy';
import { Terms } from './Terms';

function footerHrefs() {
  return ['saoi.ie', 'Terms', 'Privacy'].map((name) =>
    screen.getByRole('link', { name }).getAttribute('href'),
  );
}

describe('Terms', () => {
  it('renders the title, the date and every section in order', () => {
    render(<Terms />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Terms of use' })).toBeInTheDocument();
    expect(screen.getByText('Version of 11 November 2026.')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)).toEqual([
      'What Saoi does',
      'What Saoi is not',
      'Where the figures come from',
      'Fees',
      'Your figures',
      'Through an AI assistant',
      'Using Saoi',
      'No guarantees',
      'Changes',
      'Law',
      'Contact',
    ]);
    expect(screen.getByText(/Saoi gives information, not advice\./)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'baz@chrisquinn.ie' })).toHaveAttribute(
      'href',
      'mailto:baz@chrisquinn.ie',
    );
  });

  it('links home and to the privacy notice', () => {
    render(<Terms />);
    expect(footerHrefs()).toEqual(['/', '/terms/', '/privacy/']);
  });
});

describe('Privacy', () => {
  it('renders the same notice as the app, open items included', () => {
    render(<Privacy />);
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: 'How your data is used' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText('This is the same notice Saoirse shows in the app.'),
    ).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)).toEqual([
      'What is kept',
      'Who sees it',
      'A comparison you save from your AI assistant',
      'Cookies',
      'Getting rid of it',
      'If you sign in',
      'Contact',
    ]);
    expect(
      screen.getByText(/How long an opened comparison is kept: \[To confirm\]\./),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'If you sign in with Google, Saoi receives the name and email address on that account and nothing else.',
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'baz@chrisquinn.ie' })).toHaveAttribute(
      'href',
      'mailto:baz@chrisquinn.ie',
    );
  });

  it('links home and to the terms', () => {
    render(<Privacy />);
    expect(footerHrefs()).toEqual(['/', '/terms/', '/privacy/']);
  });

  it('has no em dashes', () => {
    const { container } = render(<Privacy />);
    expect(container.textContent).not.toContain('—');
  });
});
