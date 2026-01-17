"use client";

import Link from "next/link";
import styles from "./ProductCard.module.css";
import { useMemo, useState } from "react";
import Image from "next/image";

type BadgeTone = "live" | "soon";

export function ProductCard(props: {
  featured?: boolean;
  title: string;
  badge?: { text: string; tone: BadgeTone };
  description: string;
  bullets: string[];
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string; external?: boolean };
  image?: string;
}) {
  const [hover, setHover] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const cardClass = useMemo(() => {
    const base = [styles.card];
    if (props.featured) base.push(styles.featured);
    if (hover) base.push(styles.hover);
    return base.join(" ");
  }, [props.featured, hover]);

  return (
    <>
      <article
        className={cardClass}
        onMouseEnter={() => {
          setHover(true);
          if (props.image) setShowPopup(true);
        }}
        onMouseLeave={() => {
          setHover(false);
          setShowPopup(false);
        }}
      >
        {props.image && (
          <div className={styles.imageWrapper}>
            <Image
              src={props.image}
              alt={props.title}
              width={400}
              height={250}
              className={styles.image}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>
        )}

        <div className={styles.top}>
          <h3 className={styles.h3}>
            {props.title}{" "}
            {props.badge && (
              <span
                className={[
                  styles.badge,
                  props.badge.tone === "live" ? styles.badgeLive : styles.badgeSoon,
                ].join(" ")}
              >
                {props.badge.text}
              </span>
            )}
          </h3>

          <p className={styles.muted}>{props.description}</p>
        </div>

        <ul className={styles.bullets}>
          {props.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <SmartLink
            className={`${styles.btn} ${styles.btnPrimary}`}
            href={props.primaryCta.href}
            external={props.primaryCta.external}
          >
            {props.primaryCta.label}
          </SmartLink>

          {props.secondaryCta && (
            <SmartLink
              className={`${styles.btn} ${styles.btnGhost}`}
              href={props.secondaryCta.href}
              external={props.secondaryCta.external}
            >
              {props.secondaryCta.label}
            </SmartLink>
          )}
        </div>
      </article>

      {showPopup && props.image && (
        <div
          className={styles.popup}
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <Image
            src={props.image}
            alt={`${props.title} - Enlarged view`}
            width={1200}
            height={675}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
        </div>
      )}
    </>
  );
}

function SmartLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className: string;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  if (href.startsWith("#")) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
