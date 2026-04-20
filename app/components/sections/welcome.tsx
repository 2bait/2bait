import Section from '../shared/section';
import Banner from '../banner';
import Link from 'next/link'

type WelcomeProps = {
};

export default function Welcome({ }: WelcomeProps) {
  return (
    <Section id="welcome" className="section-hero" >
      <div className="hero-left fade-in-up">
        <p className="hero-kicker">Strategic Digital Transformation</p>
        <h1 className="hero-title">From Bait to Brilliance</h1>
        <p className="hero-subtitle">
          We empower Manufacturing firms with a roadmap to digital
          evolution, making Digital Transformation a strategic advantage.
        </p>

        <div className="hero-skills">
          <span className="pill">Infor M3</span>
          <span className="pill">Full‑Stack</span>
          <span className="pill">.NET C#</span>
          <span className="pill">Angular</span>
        </div>

        <div className="hero-actions">
          <Link href="#contact" className="btn btn-primary" scroll={true}>
            Contact me
          </Link>
          <Link href="#projects" className="btn btn-secondary" scroll={true}>
            View projects
          </Link>
        </div>
      </div>

      <aside className="hero-right parallax-card">
        <Banner></Banner>
      </aside>
    </Section>

  );
};
