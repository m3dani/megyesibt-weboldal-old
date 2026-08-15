import type { Metadata } from "next";
import { headers } from "next/headers";

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("x-forwarded-host") ?? incomingHeaders.get("host") ?? "localhost";
  const protocol = incomingHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;
  const title = "Megyesi Bt. – Minőségi tűzifa házhozszállítás";
  const description = "Minőségi tűzifa házhozszállítás Nemeskolta és 30 km-es körzetében. Rendelés telefonon: +36 30 986 9255.";

  return {
    title,
    description,
    icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
    openGraph: { title, description, locale: "hu_HU", type: "website", images: [{ url: socialImage, width: 1662, height: 946, alt: "Megyesi Bt. – Tűzifa házhozszállítással" }] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

const phoneHref = "tel:+36309869255";
const emailHref = "mailto:megyesibt@gmail.com";

const prices = [
  {
    title: "Kályhakész tűzifa",
    subtitle: "Cser–tölgy",
    price: "30 000",
    period: "Ft / ömlesztett m³",
    features: ["Szállítás az árban (30 km-ig)", "Min. rendelés: 3 m³", "Választható méret: 25 vagy 33 cm", "1 × 1 × 1 méter, szórt"],
  },
  {
    title: "Kályhakész tűzifa",
    subtitle: "Akác",
    price: "30 000",
    period: "Ft / ömlesztett m³",
    features: ["Szállítás az árban (30 km-ig)", "Min. rendelés: 3 m³", "Választható méret: 25 vagy 33 cm", "1 × 1 × 1 méter, szórt"],
  },
  {
    title: "Méteres fa",
    subtitle: "Cser–tölgy",
    price: "33 000",
    period: "Ft / m³",
    features: ["Szállítás az árban (30 km-ig)", "Min. rendelés: 3 m³", "1 × 1 × 1 méter, rakott"],
  },
  {
    title: "Méteres fa",
    subtitle: "Akác",
    price: "33 000",
    period: "Ft / m³",
    features: ["Szállítás az árban (30 km-ig)", "Min. rendelés: 3 m³", "1 × 1 × 1 méter, rakott"],
  },
];

export default function Home() {
  return (
    <>
      <header className="old-header">
        <a className="old-brand" href="#kezdolap" aria-label="Megyesi Bt. kezdőlap">
          <span aria-hidden="true">🌲</span> Megyesi Bt.
        </a>
        <nav aria-label="Fő navigáció">
          <a href="#bemutatkozas">Bemutatkozás</a>
          <a href="#products">Termékek</a>
          <a href="#prices">Árak</a>
          <a href="#delivery">Szállítás</a>
          <a href="#contact">Kapcsolat</a>
        </nav>
        <a className="header-call" href={phoneHref}>☎ Hívás: +36 30 986 9255</a>
      </header>

      <main id="kezdolap">
        <section className="old-hero" aria-labelledby="hero-title">
          <div className="old-hero-overlay" />
          <div className="old-hero-inner">
            <p className="plan-label">A korábbi weboldalterv</p>
            <h1 id="hero-title">Tűzifa házhozszállítással</h1>
            <p className="old-hero-lead">
              Nemeskolta kb. 30 km-es körzetében (Szombathely, Körmend,
              Vasvár, Rum és környéke)
            </p>
            <div className="old-hero-actions">
              <a className="old-button old-button-primary" href={phoneHref}>☎ Hívás rendeléshez</a>
              <a className="old-button old-button-secondary" href={emailHref}>✉ E-mail küldése</a>
            </div>
            <ul className="old-badges" aria-label="Fő ajánlatok">
              <li>Kályhakész tűzifa</li>
              <li>Hasított méterfa</li>
              <li>Szállítás az árban</li>
            </ul>
          </div>
        </section>

        <section className="old-section old-intro" id="bemutatkozas" aria-labelledby="intro-title">
          <div className="old-container narrow center-copy">
            <p className="section-kicker">Több mint két évtized az erdőben</p>
            <h2 id="intro-title">BEMUTATKOZÁS</h2>
            <div className="intro-copy">
              <p className="intro-greeting">Üdvözöljük a MEGYESI BT. weboldalán!</p>
              <p>
                Családi vállalkozásunk több mint 20 éve foglalkozik erdészeti munkákkal.
                Tevékenységünk része a fakitermelés, a faanyag előkészítése, valamint
                komplex erdészeti szolgáltatások nyújtása magánerdők és megrendelők számára.
              </p>
              <p>
                Tűzifából kályhakész tűzifát és igény szerint hasított méteres fát kínálunk,
                Nemeskoltáról kb. 30 km-es körzetben házhozszállítással. Célunk, hogy
                megbízható forrásból származó, jó minőségű tüzelőanyaggal szolgáljuk ki a
                környékbeli háztartásokat átlátható feltételekkel.
              </p>
              <p>
                A szállítás az árban benne van (min. 3 m³, egy fuvar max. 6 m³), és minden
                vásárlásról számlát adunk. Készletünk szezonálisan változik, ezért rendelés
                és egyeztetés kizárólag telefonon történik.
              </p>
            </div>
            <blockquote>„Erdészeti tapasztalat. Korrekt feltételek. Megbízható kiszállítás.”</blockquote>
            <span className="tree-accent" aria-hidden="true">♣</span>
          </div>
        </section>

        <section className="old-section old-products" id="products" aria-labelledby="products-title">
          <div className="old-container">
            <div className="section-heading center-copy">
              <p className="section-kicker">Tűzifa közvetlenül Nemeskoltáról</p>
              <h2 id="products-title">Termékek</h2>
              <p>Készlet szezonálisan változik – rendelés és egyeztetés kizárólag telefonon.</p>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <span className="feature-icon" aria-hidden="true">🔥</span>
                <div>
                  <h3>Kályhakész tűzifa – ömlesztett m³</h3>
                  <p>Kályhakészre vágott, hasított tűzifa, azonnal tüzelhető vagy tárolható, választható méretben (25 vagy 33 cm).</p>
                </div>
              </article>
              <article className="feature-card">
                <span className="feature-icon" aria-hidden="true">🌳</span>
                <div>
                  <h3>Hasított méteres fa – m³</h3>
                  <p>Méteres hosszúságú, hasított rönkök, gazdaságos választás.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="old-section old-prices" id="prices" aria-labelledby="prices-title">
          <div className="old-container">
            <div className="section-heading center-copy">
              <p className="section-kicker">Korábbi tervben szereplő mintaárak</p>
              <h2 id="prices-title">Áraink</h2>
              <p className="price-warning">Az árak nem aktuális ajánlatok; közzététel előtt ellenőrizendők. Pontos árakért kérjük, érdeklődjön telefonon!</p>
            </div>
            <div className="price-grid">
              {prices.map((item) => (
                <article className="price-card" key={`${item.title}-${item.subtitle}`}>
                  <p className="price-subtitle">{item.subtitle}</p>
                  <h3>{item.title}</h3>
                  <p className="price"><strong>{item.price}</strong> <span>{item.period}</span></p>
                  <ul>
                    {item.features.map((feature) => <li key={feature}><span aria-hidden="true">✓</span>{feature}</li>)}
                  </ul>
                  <a className="old-button old-button-outline" href={phoneHref}>Érdeklődés</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="old-section old-delivery" id="delivery" aria-labelledby="delivery-title">
          <div className="old-container split-layout">
            <div>
              <p className="section-kicker">Kiszállítás házhoz</p>
              <h2 id="delivery-title">Szállítás és feltételek</h2>
              <div className="delivery-list">
                <article><span aria-hidden="true">●</span><div><h3>Szállítási terület</h3><p>Nemeskolta és kb. 30 km-es vonzáskörzete: Szombathely, Körmend, Vasvár, Rum, Ják, Balogunyom, Tanakajd és környéke.</p></div></article>
                <article><span aria-hidden="true">●</span><div><h3>Mennyiség</h3><p>Egy fuvarral minimum 3 m³, maximum 6 m³ fát tudunk kiszállítani.</p></div></article>
                <article><span aria-hidden="true">●</span><div><h3>Költségek</h3><p>A vételár tartalmazza a kiszállítás költségét a megadott területen belül.</p></div></article>
              </div>
            </div>
            <div className="delivery-photo">
              <img src="https://images.unsplash.com/photo-1599408018228-56908e08434c?auto=format&fit=crop&w=1200&q=82" alt="Farönkök szállításra előkészítve" />
            </div>
          </div>
        </section>

        <section className="old-section old-order" id="order" aria-labelledby="order-title">
          <div className="old-container order-container">
            <div>
              <p className="section-kicker">Három egyszerű lépés</p>
              <h2 id="order-title">Rendelés menete</h2>
            </div>
            <ol className="timeline">
              <li><span className="timeline-icon" aria-hidden="true">☎</span><div><h3>Hívjon minket</h3><p>Hívja a +36 30 986 9255-ös telefonszámot munkanapokon.</p></div></li>
              <li><span className="timeline-icon" aria-hidden="true">◷</span><div><h3>Egyeztetés</h3><p>Megbeszéljük a fa fajtáját, mennyiségét, a pontos árat és a szállítási időpontot.</p></div></li>
              <li><span className="timeline-icon" aria-hidden="true">▰</span><div><h3>Kiszállítás és fizetés</h3><p>A megbeszélt időpontban kiszállítjuk a fát. Fizetés a helyszínen, melyről számlát adunk.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="old-section old-contact" id="contact" aria-labelledby="contact-title">
          <div className="old-container">
            <div className="section-heading center-copy">
              <p className="section-kicker">Keressen minket bizalommal</p>
              <h2 id="contact-title">Kapcsolat</h2>
            </div>
            <div className="contact-grid">
              <div className="map-card">
                <iframe title="Megyesi Bt. – Nemeskolta térkép" src="https://www.google.com/maps?q=Nemeskolta&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <address className="contact-details">
                <div><span aria-hidden="true">●</span><p><strong>Cím</strong>Megyesi Bt.<br />9775 Nemeskolta</p></div>
                <div><span aria-hidden="true">●</span><p><strong>Telefon</strong><a href={phoneHref}>+36 30 986 9255</a></p></div>
                <div><span aria-hidden="true">●</span><p><strong>E-mail</strong><a href={emailHref}>megyesibt@gmail.com</a></p></div>
              </address>
            </div>
          </div>
        </section>

        <section className="old-cta" aria-labelledby="cta-title">
          <div className="old-container cta-card">
            <h2 id="cta-title">Rendeljen tűzifát még ma!</h2>
            <p>Gyors és megbízható szállítás Vas vármegyében.</p>
            <a className="old-button old-button-primary" href={phoneHref}>☎ Hívás most</a>
          </div>
        </section>
      </main>

      <footer className="old-footer">
        <div className="old-container footer-grid">
          <div><p className="footer-brand">Megyesi Bt.</p><p>© 2026 · Minden jog fenntartva.</p></div>
          <nav aria-label="Jogi információk"><a href="#impresszum">Impresszum</a><a href="#adatkezeles">Adatkezelés</a></nav>
          <div className="legal-copy" id="impresszum"><strong>Impresszum:</strong> Megyesi Bt., 9775 Nemeskolta. Kapcsolat: megyesibt@gmail.com.</div>
          <div className="legal-copy" id="adatkezeles"><strong>Adatkezelés:</strong> Az oldalon nincs űrlap és nem történik közvetlen adatgyűjtés.</div>
        </div>
      </footer>

      <a className="mobile-sticky-call" href={phoneHref}>☎ Hívás: +36 30 986 9255</a>
    </>
  );
}
