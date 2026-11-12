import { ArrowRight } from 'lucide-react';
import { getSite } from '@/content/store.mjs';
import { Accent } from '@/components/ui';

export const metadata = { title: 'Give | Prepare International' };

const FundList = ({ k, title, funds, alt }) => (
  <section className={alt ? 'band alt' : 'band'}>
    <div className="container">
      <h2 className="display center" data-k={`${k}.title`}><Accent>{title}</Accent></h2>
      <div className="funds">
        {funds.map((f, i) => (
          <a key={i} className="fund" href={f.href}>
            <span data-k={`${k}.funds.${i}.name`}>{f.name}</span> <ArrowRight size={18} aria-hidden="true" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default async function GivePage() {
  const { give, ways } = await getSite();
  return (
    <>
      <section className="band page-top">
        <div className="container center">
          <p className="eyebrow" data-k="give.eyebrow">{give.eyebrow}</p>
          <h1 className="display" data-k="give.title"><Accent>{give.title}</Accent></h1>
          <p className="lede" data-k="give.text">{give.text}</p>
          <div className="cards">
            {ways.items.map((w, i) => (
              <div key={i} className="panel way">
                <p className="eyebrow" data-k={`ways.items.${i}.when`}>{w.when}</p>
                <h3 data-k={`ways.items.${i}.name`}>{w.name}</h3>
                <p data-k={`ways.items.${i}.text`}>{w.text}</p>
                <a className="btn btn-primary" href={w.href} data-k={`ways.items.${i}.label`}>{w.label}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FundList k="give.team" {...give.team} alt />
      <FundList k="give.projects" {...give.projects} />
    </>
  );
}
