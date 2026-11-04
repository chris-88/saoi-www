import { links } from './links';
import { Wordmark } from './Wordmark';

const external = { target: '_blank', rel: 'noreferrer' } as const;

const doing = [
  {
    title: 'Works out what you need',
    body: 'You say what you are trying to do. Baz asks for what is missing and nothing else.',
  },
  {
    title: 'Shows all your money',
    body: 'Accounts across your providers, in one place, so you are not adding it up in your head.',
  },
  {
    title: 'Compares products',
    body: 'Side by side, with the reasoning shown, so you can disagree with it.',
  },
  {
    title: 'Keeps the case going',
    body: 'Come back next week and Baz remembers. Bring a partner in and they see the same case.',
  },
];

const steps = [
  {
    title: 'Say what you want',
    body: 'Buying a home, switching a mortgage, getting on top of the month.',
  },
  {
    title: 'Baz does the legwork',
    body: 'It finds what it needs, looks across your providers, and lays out the options.',
  },
  {
    title: 'You decide',
    body: 'The case stays open between sessions until you have made the call.',
  },
];

const open = [
  { label: 'baz-conversational-banking', note: 'The app', href: links.repoApp },
  { label: 'baz-mcp', note: 'Baz as an MCP server', href: links.repoMcp },
  { label: 'baz-showcase', note: 'The showcase site', href: links.repoShowcase },
  { label: 'Docs', note: 'docs.saoi.ie', href: links.docs },
  { label: 'MCP endpoint', note: 'For agents', href: links.mcp },
  { label: 'API', note: 'OpenAPI spec', href: links.api },
];

const buttonBase =
  'inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-base font-semibold transition-colors';

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="bg-teal-deep text-white">
        <div className="mx-auto max-w-5xl px-5 pt-6 pb-16 md:px-8 md:pb-24">
          <Wordmark className="h-8 w-auto text-white" />
          <div className="mt-14 max-w-2xl md:mt-24">
            <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-6xl">Saoi</h1>
            <p className="text-teal-tint mt-4 text-xl md:text-2xl">
              An open-source financial concierge for Ireland. Baz is the assistant inside it.
            </p>
            <p className="text-teal-tint/80 mt-4 text-base">
              Saoi is Irish for a sage, and you say it &ldquo;see&rdquo;.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={links.app}
                className={`${buttonBase} text-teal-deep hover:bg-teal-tint bg-white`}
              >
                Open the app
              </a>
              <a
                href={links.showcase}
                className={`${buttonBase} border border-white/40 text-white hover:bg-white/10`}
              >
                See the showcase
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20" aria-labelledby="does">
          <h2 id="does" className="text-ink text-2xl font-bold tracking-tight md:text-3xl">
            What Baz does
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {doing.map((d) => (
              <li key={d.title} className="border-line rounded-2xl border bg-white p-6">
                <h3 className="text-ink text-lg font-semibold">{d.title}</h3>
                <p className="mt-2">{d.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-teal-tint/50" aria-labelledby="how">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
            <h2 id="how" className="text-ink text-2xl font-bold tracking-tight md:text-3xl">
              How it works
            </h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-white p-6">
                  <span className="text-teal text-sm font-semibold">Step {i + 1}</span>
                  <h3 className="text-ink mt-1 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2">{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              <a
                href={links.howItWorks}
                className="text-teal font-semibold underline underline-offset-4"
                {...external}
              >
                Read how it works on the showcase
              </a>
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20" aria-labelledby="open">
          <h2 id="open" className="text-ink text-2xl font-bold tracking-tight md:text-3xl">
            Built in the open
          </h2>
          <p className="mt-3 max-w-2xl">
            Saoi is AGPL-3.0 and developed in public. Today it is a proof of concept running on
            synthetic Demo Bank data. Read it, run it, break it.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {open.map((o) => (
              <li key={o.label}>
                <a
                  href={o.href}
                  className="border-line hover:border-teal block h-full rounded-2xl border bg-white p-5"
                  {...external}
                >
                  <span className="text-ink block font-semibold break-words">{o.label}</span>
                  <span className="text-muted mt-1 block text-sm">{o.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-teal-deep text-white" aria-labelledby="going">
          <div className="mx-auto max-w-5xl px-5 py-14 md:px-8 md:py-20">
            <h2 id="going" className="text-2xl font-bold tracking-tight md:text-3xl">
              Where this is going
            </h2>
            <div className="text-teal-tint mt-4 max-w-2xl space-y-4">
              <p>
                Open banking lets you share your own account data with a service you choose. Saoi is
                heading for registration with the Central Bank of Ireland as an account information
                service provider, directly, with no partner in the middle.
              </p>
              <p>
                To be plain about it: Saoi is not a bank, and it is not regulated yet. Until it is,
                it only touches synthetic data.
              </p>
              <p className="text-white">
                Ní bhíonn saoi gan locht. No sage is without fault. We will say where we are wrong.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-line border-t">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm md:flex-row md:items-center md:justify-between md:px-8">
          <p>Saoi is Baz&rsquo;s home.</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={links.privacy} className="underline underline-offset-4">
              Privacy
            </a>
            <a href={links.licence} className="underline underline-offset-4" {...external}>
              AGPL-3.0 licence
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
