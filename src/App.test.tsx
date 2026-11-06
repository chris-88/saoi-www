import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the headings', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'A personal banker for everyone.' }),
    ).toBeInTheDocument();
    for (const name of [
      'Start with your life, not a product.',
      'Say it once.',
      'Pick up where you left off.',
    ]) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    }
    expect(screen.getByRole('img', { name: 'Saoi' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Saoirse' })).toBeInTheDocument();
  });

  it('links to the app, showcase and the footer destinations', () => {
    render(<App />);
    const hrefs = (name: string | RegExp) =>
      screen.getAllByRole('link', { name }).map((a) => a.getAttribute('href'));
    expect(hrefs('Open the app')).toEqual(['https://app.saoi.ie/']);
    expect(hrefs('See the showcase')).toEqual(['https://showcase.saoi.ie/']);
    expect(hrefs('Docs')).toEqual(['https://docs.saoi.ie/']);
    expect(hrefs('GitHub')).toEqual(['https://github.com/chris-88/saoi']);
    expect(hrefs('API')).toEqual(['https://api.saoi.ie/api/openapi.json']);
    expect(hrefs('MCP')).toEqual(['https://mcp.saoi.ie/mcp']);
    expect(hrefs('AGPL-3.0 licence')).toEqual(['https://www.gnu.org/licenses/agpl-3.0.html']);
  });

  it('says plainly that it is not a bank and uses synthetic data', () => {
    render(<App />);
    expect(screen.getAllByText(/not a bank/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/synthetic data/i).length).toBeGreaterThan(0);
  });
});
