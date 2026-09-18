import type { Metadata } from "next";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Демонстрация концептов",
  robots: { index: false, follow: false, nocache: true },
};

const imageGroups = [
  {
    name: "Dubai",
    files: [
      "dubai/08d7339c-3645-4226-9fd8-42fde9487aa2.png",
      "dubai/9d735783-970e-43be-8f92-6b8d1235f8a5.png",
    ],
  },
  {
    name: "Red decorations",
    files: ["red-decorations/d013795c-3a0e-415e-971b-331f4188f74f.png"],
  },
  {
    name: "Standart",
    files: ["standart/33879260-6079-4c9c-8a5a-c0fd7246a89f.png"],
  },
];

const heroImages = ["hero.png", "hero-2.png", "hero-3.png"];

const normalConcepts = [
  { name: "01 — Warm Atelier", folder: "01-warm-atelier" },
  { name: "02 — Body Lab", folder: "02-body-lab" },
  { name: "06 — Sculptural Mono", folder: "06-Sculptural-Mono" },
  { name: "09 — After Dark", folder: "09-after-dark" },
  { name: "11 — Dubai Contemporary Luxury", folder: "11-dubai-contemporary-luxury" },
  { name: "13 — Italian Performance Luxury", folder: "13-italian-performance-luxury" },
  { name: "Standart Site", folder: "standart-site" },
  { name: "16 — Classical", folder: "16-classical" },
  { name: "17 — Jim", folder: "17-jim" },
  { name: "18 — Collect Vission", folder: "18-collect-vission" },
  { name: "18 — Collect Vission Premium", folder: "18-collect-vission-premium" },
];

const extraConcepts = [
  { name: "18 — New Vission", folder: "18-new-vission" },
  { name: "08 — Nordic Reset", folder: "08-nordic-reset" },
  { name: "07 — Body Lab", folder: "07-body-lab" },
  { name: "03 — Quiet Editorial", folder: "03-quiet-editorial" },
];

function ConceptList({
  concepts,
}: {
  concepts: typeof normalConcepts;
}) {
  return (
    <div className={styles.conceptGrid}>
      {concepts.map(({ name, folder }, index) => (
        <article className={styles.conceptCard} key={folder}>
          <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
          <h3>{name}</h3>
          <div className={styles.actions}>
            <a href={`/concepts/html/${folder}/index.html`} target="_blank" rel="noopener noreferrer">
              Открыть HTML <span aria-hidden="true">↗</span>
            </a>
            <a href={`/concepts/html/${folder}/desktop.png`} target="_blank" rel="noopener noreferrer">
              Смотреть PNG <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ConceptsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>CHIN CHIN / DESIGN ARCHIVE</span>
            <h1>Демонстрация концептов<span className={styles.dot}>.</span></h1>
            <p>Эскизы, варианты первого экрана и готовые страницы для просмотра.</p>
          </div>
          <nav className={styles.jumpNav} aria-label="Разделы страницы">
            <a href="#first-concept">First concept</a>
            <a href="#hero-example">Hero example</a>
            <a href="#normal-simple-examples">Normal simple examples</a>
            <a href="#extra">Extra</a>
          </nav>
        </header>

        <section className={styles.section} id="first-concept">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>01 / IMAGE EXPLORATIONS</span>
            <h2>First concept</h2>
            <p>Первые визуальные направления.</p>
          </div>
          <div className={styles.imageGrid}>
            {imageGroups.flatMap((group) =>
              group.files.map((file, index) => ({
                name: `${group.name} ${String(index + 1).padStart(2, "0")}`,
                href: `/concepts/images/${file}`,
              })),
            ).map((image, index) => (
              <a className={styles.imageCard} href={image.href} target="_blank" rel="noopener noreferrer" key={image.href}>
                <span className={styles.imageNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span>{image.name}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section} id="hero-example">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>02 / HERO EXPLORATIONS</span>
            <h2>Hero example</h2>
            <p>Варианты первого экрана.</p>
          </div>
          <div className={styles.imageGrid}>
            {heroImages.map((file, index) => (
              <a className={styles.imageCard} href={`/concepts/images/hero-example/${file}`} target="_blank" rel="noopener noreferrer" key={file}>
                <span className={styles.imageNumber}>{String(index + 1).padStart(2, "0")}</span>
                <span>{file}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section} id="normal-simple-examples">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>03 / COMPLETE PAGES</span>
            <h2>Normal simple examples</h2>
            <p>HTML-страница и длинный скриншот каждого концепта.</p>
          </div>
          <ConceptList concepts={normalConcepts} />
          <div className={styles.additional}>
            <h3>Дополнительные HTML</h3>
            <div className={styles.additionalLinks}>
              <a href="/concepts/html/aurum/aurum-ligth.html" target="_blank" rel="noopener noreferrer">Aurum / 1 — aurum-ligth ↗</a>
              <a href="/concepts/html/aurum/aurum/Концепт 08 — Aurum _ Dubai Luxury_files/a_002_NqRm.htm" target="_blank" rel="noopener noreferrer">Aurum / 2 — a_002_NqRm ↗</a>
              <a href="/concepts/html/qwen/qwen-spa.html" target="_blank" rel="noopener noreferrer">Qwen / HTML ↗</a>
            </div>
          </div>
        </section>

        <section className={styles.section} id="extra">
          <div className={styles.sectionHeading}>
            <span className={styles.eyebrow}>04 / EXPERIMENTS</span>
            <h2>Extra</h2>
            <p>Более экспериментальные варианты.</p>
          </div>
          <ConceptList concepts={extraConcepts} />
        </section>
      </div>
    </main>
  );
}
