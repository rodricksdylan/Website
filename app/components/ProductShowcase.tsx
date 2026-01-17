'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './ProductShowcase.module.css'

interface ProductShowcaseProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reverse?: boolean
  primaryCta?: { label: string; href: string; external?: boolean }
  secondaryCta?: { label: string; href: string; external?: boolean }
  titleColorCombo?: 'consentai' | 'policyai' | 'jordanai' | 'default'
  chatImageSrc?: string
  chatImageAlt?: string
  chatDescription?: string
}

export default function ProductShowcase({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  primaryCta,
  secondaryCta,
  titleColorCombo = 'default',
  chatImageSrc,
  chatImageAlt,
  chatDescription,
}: ProductShowcaseProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const renderTitle = () => {
    if (titleColorCombo === 'consentai' && title === 'ConsentAI') {
      return (
        <h2 className={styles.title}>
          <span className={styles.titleBlack}>Consent</span>
          <span className={styles.titleGreen}>AI</span>
        </h2>
      )
    }
    if (titleColorCombo === 'policyai' && title === 'PolicyAI') {
      return (
        <h2 className={styles.title}>
          <span className={styles.titleBlack}>Policy</span>
          <span className={styles.titleOrange}>AI</span>
        </h2>
      )
    }
    if (titleColorCombo === 'jordanai' && title === 'JordanAI') {
      return (
        <h2 className={styles.title}>
          <span className={styles.titleBlack}>Jordan</span>
          <span className={styles.titlePurple}>AI</span>
        </h2>
      )
    }
    return <h2 className={styles.title}>{title}</h2>
  }

  return (
    <section className={`${styles.showcase} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Text Content */}
          <div className={styles.textBlock}>
            {renderTitle()}
            <p className={styles.description}>{description}</p>
            {chatDescription && (
              <div className={styles.chatSection}>
                <p className={styles.chatDescription}>{chatDescription}</p>
              </div>
            )}
            {(primaryCta || secondaryCta) && (
              <div className={styles.ctaGroup}>
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    target={primaryCta.external ? '_blank' : undefined}
                    rel={primaryCta.external ? 'noopener noreferrer' : undefined}
                    className={styles.ctaPrimary}
                  >
                    {primaryCta.label}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    target={secondaryCta.external ? '_blank' : undefined}
                    rel={secondaryCta.external ? 'noopener noreferrer' : undefined}
                    className={styles.ctaSecondary}
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Visual Block with Floating Image */}
          <div className={styles.visualBlock}>
            {/* Background Shapes - Behind Image */}
            <div className={styles.bgShapes}>
              <div className={`${styles.bgShapePrimary} ${titleColorCombo === 'consentai' ? styles.bgShapeGreen : ''} ${titleColorCombo === 'policyai' ? styles.bgShapeGold : ''} ${titleColorCombo === 'jordanai' ? styles.bgShapePurple : ''}`}></div>
              <div className={`${styles.bgShapeSecondary} ${titleColorCombo === 'consentai' ? styles.bgShapeGreen : ''} ${titleColorCombo === 'policyai' ? styles.bgShapeGold : ''} ${titleColorCombo === 'jordanai' ? styles.bgShapePurple : ''}`}></div>
              <div className={`${styles.bgShapeTertiary} ${titleColorCombo === 'consentai' ? styles.bgShapeGreen : ''} ${titleColorCombo === 'policyai' ? styles.bgShapeGold : ''} ${titleColorCombo === 'jordanai' ? styles.bgShapePurple : ''}`}></div>
            </div>

            {/* Floating Product Image */}
            <div className={styles.imagesContainer}>
              <div 
                className={styles.imageWrapper}
                onMouseEnter={() => {
                  if (title === 'ConsentAI' || title === 'PolicyAI') {
                    setIsPopupOpen(true)
                  }
                }}
                onMouseLeave={(e) => {
                  // Only close if not moving to popup
                  if (!e.relatedTarget || !(e.relatedTarget as HTMLElement).closest(`.${styles.popupOverlay}`)) {
                    setIsPopupOpen(false)
                  }
                }}
              >
                {title === 'PolicyAI' ? (
                  <a 
                    href="https://www.policyai.com.au" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ display: 'block', cursor: 'pointer' }}
                  >
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={1600}
                      height={900}
                      className={styles.productImage}
                      priority
                    />
                  </a>
                ) : (
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={1600}
                    height={900}
                    className={styles.productImage}
                    priority
                  />
                )}
              </div>
              {chatImageSrc && (
                <div className={styles.chatImageWrapper}>
                  <Image
                    src={chatImageSrc}
                    alt={chatImageAlt || `${title} Chat Interface`}
                    width={800}
                    height={600}
                    className={styles.chatImage}
                    unoptimized
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal for ConsentAI and PolicyAI */}
      {isPopupOpen && (title === 'ConsentAI' || title === 'PolicyAI') && (
        <div 
          className={styles.popupOverlay}
          onMouseEnter={() => setIsPopupOpen(true)}
          onMouseLeave={() => setIsPopupOpen(false)}
          onClick={() => setIsPopupOpen(false)}
        >
          <div className={styles.popupContent} onMouseEnter={(e) => e.stopPropagation()}>
            {title === 'PolicyAI' ? (
              <a 
                href="https://www.policyai.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.popupLink}
                onClick={(e) => e.stopPropagation()}
                style={{ opacity: 1, background: '#ffffff' }}
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1920}
                  height={1080}
                  className={styles.popupImage}
                  style={{ opacity: 1, background: '#ffffff' }}
                />
              </a>
            ) : (
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1920}
                height={1080}
                className={styles.popupImage}
                style={{ opacity: 1, background: '#ffffff' }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}
