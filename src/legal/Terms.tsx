import type { ReactNode } from 'react';
import { LegalPage, Section } from './LegalPage';

const contact = 'baz@chrisquinn.ie';

const sections: { title: string; body: string }[] = [
  {
    title: 'What Saoi does',
    body: 'Saoi compares savings, deposit, mortgage, loan, credit card and current account products against the figures you give, and does the arithmetic: interest after DIRT, repayments, total cost, the month a goal is reached. It also states the published rules of public home-buying supports, with the date each rule was read.',
  },
  {
    title: 'What Saoi is not',
    body: 'Saoi gives information, not advice. It does not recommend a product, a lender or a combination, and it does not say which is right for you. Saoi is not regulated by the Central Bank of Ireland, and the consumer protection rules and compensation schemes that cover regulated firms do not cover Saoi. The decision is yours. Before you act, check the figures and the conditions with the provider.',
  },
  {
    title: 'Where the figures come from',
    body: 'Rates and conditions are read from providers’ own websites and from the Competition and Consumer Protection Commission’s comparison tables, each with the date it was read. They can change at any time, and a provider’s own figure prevails over Saoi’s. A figure marked unconfirmed is exactly that.',
  },
  {
    title: 'Fees',
    body: 'Saoi is free to use. Saoi takes no payment from any provider, and no provider has any say in how products are ranked. If that ever changes, this page and the page on how Saoi earns will say so before it does.',
  },
  {
    title: 'Your figures',
    body: 'What you tell Saoi is used to do the arithmetic and, if you save a comparison, to keep it for you. How it is kept, for how long, and how to have it deleted are set out in the privacy notice at saoi.ie/privacy.',
  },
  {
    title: 'Through an AI assistant',
    body: 'When you use Saoi through Claude, ChatGPT or another assistant, that assistant’s own terms and privacy notice apply to your conversation with it. Saoi sees only the figures the assistant sends to Saoi’s tools, and keeps nothing until you choose to save a comparison.',
  },
  {
    title: 'Using Saoi',
    body: 'Use Saoi for your own household’s decisions. Do not scrape it, resell its output, or send it automated traffic beyond what an assistant needs for one person’s questions. Saoi may limit or stop access that does this. Saoi’s source code is published under the AGPL licence; using the service gives no rights beyond that licence.',
  },
  {
    title: 'No guarantees',
    body: 'Saoi is provided as it is. It is a prototype and may be wrong, late or unavailable. To the extent Irish law allows, Saoi is not liable for a decision you make on the strength of it. Nothing here limits a liability that cannot be limited by law.',
  },
  {
    title: 'Changes',
    body: 'These terms may change as Saoi changes. The date at the top is the date of the current version. Carrying on using Saoi after a change means accepting it.',
  },
  {
    title: 'Law',
    body: 'Irish law governs these terms, and the Irish courts have jurisdiction.',
  },
];

export function Terms(): ReactNode {
  return (
    <LegalPage
      title="Terms of use"
      intro={
        <>
          <p>Version of 11 November 2026.</p>
          <p>
            Saoi is a comparison and arithmetic service for money products available in Ireland.
            These terms say what Saoi is, what it is not, and what you agree to by using
            app.saoi.ie, the Saoi API at api.saoi.ie and the Saoi MCP server at mcp.saoi.ie. Saoi is
            operated by Chris Quinn, Dublin, Ireland.
          </p>
        </>
      }
    >
      {sections.map((s) => (
        <Section key={s.title} title={s.title}>
          <p>{s.body}</p>
        </Section>
      ))}
      <Section title="Contact">
        <p>
          <a href={`mailto:${contact}`}>{contact}</a>
        </p>
      </Section>
    </LegalPage>
  );
}
