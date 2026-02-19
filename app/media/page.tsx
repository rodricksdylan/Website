import Image from "next/image";
import { SiteLayout } from "../components/SiteLayout";
import { InsuranceNewsLogo } from "./InsuranceNewsLogo";
import { newsItems, type NewsItem } from "@/lib/media-content";
import styles from "./media.module.css";

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const sortedNews = [...newsItems].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function MediaPage() {
  return (
    <SiteLayout currentPage="media">
      <div className={styles.mediaPage}>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <h1 className={styles.pageTitle}>In the Media</h1>
            <p className={styles.pageSubtitle}>
              News and articles from InsurAI.
            </p>
          </div>
        </section>

        <section className={styles.mediaSection}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <h2 className={styles.sectionTitle}>News</h2>
            </div>
            {sortedNews.length > 0 ? (
              <div className={styles.cardGrid}>
                {sortedNews.map((item: NewsItem) => (
                  <article key={item.id} className={styles.card}>
                    {item.imageUrl && (
                      <div className={styles.cardImageWrap}>
                        <Image
                          src={item.imageUrl}
                          alt=""
                          fill
                          className={styles.cardImage}
                          sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                        />
                      </div>
                    )}
                    <div className={styles.cardContent}>
                      {item.source === "Insurance News" && (
                        <InsuranceNewsLogo />
                      )}
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      {item.date && (
                        <p className={styles.cardDate}>{formatDate(item.date)}</p>
                      )}
                      {item.source && (
                        <p className={styles.cardDate}>{item.source}</p>
                      )}
                      {item.summary && (
                        <p className={styles.cardSummary}>{item.summary}</p>
                      )}
                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.cardLink}
                        >
                          Read more →
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className={styles.emptyState}>More coming soon.</p>
            )}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
