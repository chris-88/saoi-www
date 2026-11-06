import type { ReactNode } from 'react';
import { SaoirseFace } from './SaoirseFace';
import { SaoirseWordmark } from './SaoirseWordmark';

const bubble = 'max-w-[85%] rounded-[1.125rem] px-3.5 py-2.5 text-[13px] leading-snug';

function CustomerAvatar(): ReactNode {
  return (
    <svg aria-hidden="true" viewBox="0 0 128 128" className="size-8 shrink-0 self-start">
      <circle cx="64" cy="64" r="64" fill="#CEF0ED" />
      <circle cx="64" cy="53" r="24" fill="#E7B18A" />
      <path d="M38 52c2-31 48-35 53-4-15-13-37-12-53 4Z" fill="#36293B" />
      <path d="M19 128c4-37 24-56 45-56s41 19 45 56" fill="#00736F" />
    </svg>
  );
}

function Customer({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="flex w-full items-start justify-end gap-2">
      <div className={`${bubble} bg-teal rounded-br-sm text-white`}>{children}</div>
      <CustomerAvatar />
    </div>
  );
}

function Saoirse({ children }: { children: ReactNode }): ReactNode {
  return (
    <div className="flex w-full items-start justify-start gap-2">
      <SaoirseFace className="text-saoi size-8 shrink-0 self-start" />
      <div className={`${bubble} bg-ink/[0.06] text-ink rounded-bl-sm`}>{children}</div>
    </div>
  );
}

/**
 * The product on a phone: one exchange and a plan kept. Static markup that mirrors the app's
 * chat bubbles and settled plan card; nothing in it is interactive or animated.
 */
export function HeroPhone(): ReactNode {
  return (
    <div
      role="img"
      aria-label="Saoirse, as it looks on a phone"
      className="mx-auto h-[560px] w-full max-w-[340px] sm:h-[640px] lg:h-[680px]"
    >
      <div
        aria-hidden="true"
        className="bg-ink/90 flex h-full flex-col rounded-[2.5rem] p-2 shadow-2xl"
      >
        <div className="bg-paper text-ink flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[2rem]">
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold tabular-nums">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="bg-ink h-2 w-0.5 rounded-sm" />
              <span className="bg-ink h-2.5 w-0.5 rounded-sm" />
              <span className="bg-ink h-3 w-0.5 rounded-sm" />
              <span className="border-ink ml-1 h-2.5 w-5 rounded-sm border" />
            </span>
          </div>

          <div className="grid grid-cols-[2.25rem_1fr_2.25rem] items-center px-4 py-2">
            <span className="text-muted grid size-9 place-items-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="size-5"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>
            <span className="text-saoi flex justify-center">
              <SaoirseWordmark className="h-5 w-auto" />
            </span>
            <span />
          </div>

          <div className="min-h-0 flex-1 space-y-3 overflow-hidden px-4 py-4">
            <Customer>
              We’ve recently married, had our first baby, and are hoping to buy our first home.
            </Customer>
            <Saoirse>
              Congratulations. That is a lot at once, and most of it connects. Before we get to
              products, when would you like to buy, and what have you put aside so far?
            </Saoirse>
            <Customer>Next summer, ideally. We have about €32,000 saved.</Customer>
            <div className="pl-10">
              <div className="border-line flex items-start gap-3 rounded-xl border bg-white p-4 shadow-xs">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[oklch(0.63_0.16_150/0.15)] text-[oklch(0.63_0.16_150)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-[18px]"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-balance">
                    Buy our first home
                  </span>
                  <span className="text-muted block text-xs">
                    Saved. You can change or stop it any time.
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="border-line bg-paper flex shrink-0 items-end gap-2 border-t px-4 pt-2.5 pb-2.5">
            <div className="border-line text-muted min-w-0 flex-1 truncate rounded-3xl border bg-white px-4 py-0.5 text-sm leading-6">
              We’re hoping to buy a place next year…
            </div>
            <span className="bg-teal grid size-8 shrink-0 place-items-center rounded-full text-white opacity-40">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="m5 12 7-7 7 7M12 19V5" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
