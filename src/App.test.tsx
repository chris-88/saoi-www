import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the headings', () => {
    render(<App />);
    for (const name of [
      'Saoi',
      'What Baz does',
      'How it works',
      'Built in the open',
      'Where this is going',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    }
  });

  it('links to the app, showcase, docs and privacy page', () => {
    render(<App />);
    const href = (name: string | RegExp) => screen.getByRole('link', { name }).getAttribute('href');
    expect(href('Open the app')).toBe('https://app.saoi.ie/');
    expect(href('See the showcase')).toBe('https://showcase.saoi.ie/');
    expect(href(/Docs/)).toBe('https://docs.saoi.ie/');
    expect(href('Privacy')).toBe('https://app.saoi.ie/#/privacy');
  });
});
