import { BazWordmark } from './BazWordmark';
import { links } from './links';
import { Wordmark } from './Wordmark';

const external = { target: '_blank', rel: 'noreferrer' } as const;

const points = [
  {
    number: '01',
    title: 'Start with your life, not a product.',
    body: 'Married, a baby on the way, hoping to buy. Say what is going on and Baz works out what it involves and which of the bank’s products fit.',
  },
  {
    number: '02',
    title: 'Say it once.',
    body: 'What you tell it is kept, with where it came from, and reused across every application. Three applications, one set of answers.',
  },
  {
    number: '03',
    title: 'Pick up where you left off.',
    body: 'Close the tab, change phones, come back next week. The conversation, and what the bank did in between, are waiting.',
  },
];

const footerLinks = [
  { label: 'How it works', href: links.howItWorks },
  { label: 'The article', href: links.article },
  { label: 'The showcase', href: links.showcase },
  { label: 'Docs', href: links.docs },
  { label: 'GitHub', href: links.repoApp },
  { label: 'API', href: links.api },
  { label: 'MCP', href: links.mcp },
];

const button =
  'inline-flex h-10 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium whitespace-nowrap transition-colors';
const primary = `${button} bg-teal text-white hover:bg-teal/90`;
const outline = `${button} border-line text-ink border bg-white shadow-xs hover:bg-teal-tint`;
const ghost = `${button} text-ink hover:bg-teal-tint`;
const small = 'inline-flex h-8 items-center rounded-md px-3 text-sm font-medium';

export default function App() {
  return (
    <div className="bg-ink/[0.04] min-h-dvh">
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-5 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <Wordmark className="text-ink h-7 w-auto" />
          <span className="bg-line hidden h-5 w-px sm:block" />
          <span className="text-muted hidden text-sm sm:block">A proof of concept</span>
        </div>
        <nav aria-label="Site" className="flex items-center gap-1 sm:gap-2">
          <a
            href={links.howItWorks}
            className={`${small} text-ink hover:bg-teal-tint hidden sm:inline-flex`}
          >
            How it works
          </a>
          <a
            href={links.article}
            className={`${small} text-ink hover:bg-teal-tint hidden sm:inline-flex`}
          >
            The article
          </a>
          <a href={links.app} className={`${small} bg-teal hover:bg-teal/90 text-white`}>
            Open Baz
          </a>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[1200px] px-5 pb-16 sm:px-6">
        <section className="py-8 lg:py-16">
          <p className="text-muted font-mono text-[11px] font-medium tracking-[0.14em] uppercase">
            Saoi · Conversational banking
          </p>
          <h1 className="text-ink mt-4 max-w-[14ch] text-[2.75rem] leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl xl:text-7xl">
            A personal banker for everyone.
          </h1>
          <p className="text-muted mt-6 max-w-[44ch] text-lg leading-snug text-pretty sm:text-2xl">
            Saoi is an open-source financial concierge for Ireland. Tell Baz, the assistant inside
            it, what you&rsquo;re trying to do and it will help you work through it. One
            conversation, not a product menu, and nothing you say is asked for twice.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={links.app} className={primary}>
              Open the app
            </a>
            <a href={links.showcase} className={outline}>
              See the showcase
            </a>
            <a href={links.howItWorks} className={ghost}>
              How it works
            </a>
          </div>
          <p className="text-muted mt-5 max-w-[60ch] text-sm">
            A working prototype. Saoi is not a bank and is not regulated yet, so it only touches
            synthetic data. Use made-up details; nothing you do here reaches a bank.
          </p>
        </section>

        <section
          className="border-line grid gap-8 border-t py-12 sm:grid-cols-3 sm:gap-10 lg:py-16"
          aria-label="What Baz does"
        >
          {points.map((p) => (
            <div key={p.number}>
              <p className="text-teal font-mono text-[11px] font-medium tracking-[0.18em] uppercase">
                {p.number}
              </p>
              <h2 className="text-ink mt-3 text-2xl font-bold tracking-tight text-balance">
                {p.title}
              </h2>
              <p className="text-muted mt-3 max-w-[36ch] leading-relaxed text-pretty">{p.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="border-line flex flex-col rounded-xl border bg-white p-6 shadow-xs sm:p-7">
            <p className="text-muted font-mono text-[11px] font-medium tracking-[0.14em] uppercase">
              Meet the assistant
            </p>
            <BazWordmark className="text-baz mt-4 h-9 w-auto self-start" />
            <p className="text-muted mt-3 flex-1 text-sm leading-relaxed text-pretty">
              Baz is the assistant inside Saoi. Open it on your phone or in the browser, and add it
              to your home screen if you want it to feel like any other app.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={links.app} className={`${small} bg-teal hover:bg-teal/90 text-white`}>
                Open Baz
              </a>
            </div>
          </div>
          <div className="border-line flex flex-col rounded-xl border bg-white p-6 shadow-xs sm:p-7">
            <p className="text-muted font-mono text-[11px] font-medium tracking-[0.14em] uppercase">
              The thinking
            </p>
            <p className="text-ink mt-3 text-xl font-bold tracking-tight text-balance">
              Who owns the customer relationship in the age of AI?
            </p>
            <p className="text-muted mt-2 flex-1 text-sm leading-relaxed text-pretty">
              The opportunity for conversational banking, the risk of disintermediation, and why Baz
              explores both. A short article, with its sources.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={links.article} className={`${small} border-line text-ink border bg-white`}>
                Read the article
              </a>
              <a href={links.howItWorks} className={`${small} text-ink hover:bg-teal-tint`}>
                How Baz works
              </a>
            </div>
          </div>
        </section>

        <footer className="text-muted border-line mt-14 flex flex-wrap items-start justify-between gap-4 border-t pt-6 text-sm">
          <div className="max-w-[60ch] space-y-2">
            <p>
              A prototype, not a banking service. Saoi is not a bank, it is not regulated yet, and
              it runs on synthetic data.{' '}
              <a href={links.privacy} className="underline underline-offset-4">
                How your data is used
              </a>
            </p>
            <p>
              Open source under the{' '}
              <a href={links.licence} className="underline underline-offset-4" {...external}>
                AGPL-3.0 licence
              </a>
              .
            </p>
          </div>
          <nav aria-label="Footer" className="flex max-w-md flex-wrap gap-x-4 gap-y-2">
            {footerLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
        </footer>
      </main>
    </div>
  );
}
