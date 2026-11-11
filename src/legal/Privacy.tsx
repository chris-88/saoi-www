import type { ReactNode } from 'react';
import { LegalPage, Section } from './LegalPage';

/**
 * The same notice the app shows at app.saoi.ie/#/privacy (saoi-web `src/surfaces/Privacy.tsx`,
 * with the reminders and Google lines from `src/lib/planArrival.ts`). Keep the two in step:
 * change the app's wording first, then copy it here. The app's em dashes are written here as
 * commas, colons or brackets.
 */
const contact = 'contact@saoi.ie';

export function Privacy(): ReactNode {
  return (
    <LegalPage
      title="How your data is used"
      intro={
        <>
          <p>This is the same notice Saoirse shows in the app.</p>
          <p>
            Saoirse is a working prototype, not a banking service. It is not operated by any bank.
            Nothing you do here opens an account, applies for anything, or reaches a bank.
          </p>
        </>
      }
    >
      <Section title="What is kept">
        <p>
          Everything you type, and the conversation around it. Saoirse turns what you say into
          structured notes (your income, what you are saving for, who you are buying with) and keeps
          them so it does not have to ask twice. That is the thing being demonstrated.
        </p>
        <p>
          <strong>So what you type is real and it is stored.</strong> The bank side is invented: the
          customer records, balances and the sign-in are synthetic, and the product information is
          illustrative synthetic material for a demo bank. Your side of the conversation is not
          synthetic, which is why this page exists.
        </p>
        <p>
          Please do not type anything you would mind being kept: a real PPS number, real account
          details, or anything about your health beyond what a form here explicitly asks for.
        </p>
        <p>
          Each run of the home calculator keeps one anonymous record: the day, an income band, how
          many months to the keys (banded), whether the date is met, and the county, rent band, kind
          of home and first-time buyer if given. No figures, no names, nothing that identifies you.
        </p>
        <p>
          Reminders you set and alerts about your plan are kept on your case until you delete them
          or the case is deleted.
        </p>
      </Section>

      <Section title="Who sees it">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>
            <strong>Anthropic</strong> processes the conversation to generate replies. Messages are
            sent to their API, which is hosted in the United States.
          </li>
          <li>
            <strong>Saoi’s own servers in Ireland</strong> store the conversation and the notes.
          </li>
          <li>
            <strong>Sentry</strong> receives diagnostics when something breaks. It is sent a
            conversation id, whether you are a customer or a partner, and what the safety check
            decided, never message content and never any value Saoirse recorded.
          </li>
          <li>
            The people building this, through an operator console, to see whether it is working.
          </li>
        </ul>
      </Section>

      <Section title="A comparison you save from your AI assistant">
        <p>
          Saving a comparison in your AI assistant holds its figures and preferences with Saoi
          behind a single-use link. Unopened, it is deleted after 24 hours. Opening it shows you
          this before anything is stored against you, then puts the comparison into a chat with
          Saoirse. How long an opened comparison is kept: [To confirm]. Who is responsible for your
          data: [To confirm]. You can ask for a copy of what Saoi holds about you, or for it to be
          deleted, at the address below.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          None for tracking, and no analytics or advertising of any kind. The site keeps your
          sign-in and a couple of interface preferences in your browser’s own storage, which is what
          makes the conversation still be there when you come back.
        </p>
      </Section>

      <Section title="Getting rid of it">
        <p>
          Ask and a conversation is deleted: all of it, including the notes taken from it.
          Conversations are also cleared regularly between demonstrations. Nothing here is kept for
          longer than the prototype needs it.
        </p>
      </Section>

      <Section title="If you sign in">
        <p>
          Signing in means giving Saoirse an email address and entering the code sent to it. The
          address is what lets Saoirse recognise you on another device and pick the conversation
          back up, and that is all it is used for. It is not shared, no password is involved, and it
          does not connect to any real banking relationship. You can sign out at any time, which
          returns you to being an anonymous visitor.
        </p>
        <p>
          If you sign in with Google, Saoi receives the name and email address on that account and
          nothing else.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions, or want a conversation removed? <a href={`mailto:${contact}`}>{contact}</a>
        </p>
      </Section>
    </LegalPage>
  );
}
