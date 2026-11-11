import type { ReactNode } from 'react';
import { links } from '../links';
import { Wordmark } from '../Wordmark';

/** The frame shared by the terms and the privacy notice: wordmark home, one main, a small footer. */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: ReactNode;
  children: ReactNode;
}): ReactNode {
  return (
    <div className="bg-ink/[0.04] min-h-dvh">
      <header className="mx-auto flex w-full max-w-3xl items-center gap-3 px-5 py-5 sm:px-6">
        <a href={links.home} className="rounded-sm">
          <Wordmark className="text-saoi h-7 w-auto" />
        </a>
        <span className="bg-line hidden h-5 w-px sm:block" />
        <span className="text-muted hidden text-sm sm:block">{title}</span>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 pb-16 sm:px-6">
        <h1 className="text-ink pt-8 text-3xl font-bold tracking-tight text-balance sm:pt-12 sm:text-4xl">
          {title}
        </h1>
        <div className="text-muted mt-4 max-w-[62ch] space-y-3 text-base text-pretty">{intro}</div>
        {children}

        <footer className="text-muted border-line mt-10 border-t pt-6 text-sm">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2">
            <a href={links.home} className="hover:text-ink">
              saoi.ie
            </a>
            <a href={links.terms} className="hover:text-ink">
              Terms
            </a>
            <a href={links.privacyNotice} className="hover:text-ink">
              Privacy
            </a>
          </nav>
        </footer>
      </main>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }): ReactNode {
  return (
    <section className="border-line border-b py-8 last:border-b-0">
      <h2 className="text-ink text-xl font-semibold tracking-tight">{title}</h2>
      <div className="text-body [&_strong]:text-ink mt-3 max-w-[62ch] space-y-3 text-sm leading-relaxed [&_a]:underline [&_a]:underline-offset-4 [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
