import { ArrowRight } from 'lucide-react';
import { SITE } from '@/content/site.mjs';
import { Accent } from '@/components/ui';

export const metadata = { title: 'Give | Prepare International' };

const FundList = ({ title, funds, alt }) => (
  <section className={alt ? 'band alt' : 'band'}>
    <div className="container">
      <h2 className="display center"><Accent>{title}</Accent></h2>
      <div className="funds">
        {funds.map((f) => (
          <a key={f.name} className="fund" href={f.href}>
            {f.name} <ArrowRight size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default function GivePage() {
  const { give, ways } = SITE;
  return (
    <>
      <section className="band page-top">
        <div className="container center">
          <p className="eyebrow">{give.eyebrow}</p>
          <h1 className="display"><Accent>{give.title}</Accent></h1>
          <p className="lede">{give.text}</p>
          <div className="cards">
            {ways.items.map((w) => (
              <div key={w.name} className="panel way">
                <p className="eyebrow">{w.when}</p>
                <h3>{w.name}</h3>
                <p>{w.text}</p>
                <a className="btn btn-primary" href={w.href}>{w.label}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FundList {...give.team} alt />
      <FundList {...give.projects} />
    </>
  );
}
