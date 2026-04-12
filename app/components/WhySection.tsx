'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './WhySection.module.css'
import { CpuArchitecture } from './CpuArchitecture'

interface Category {
  id: string
  label: string
  title: string
  description: string
  cta: string
  ctaHref?: string
  imageSrc: string
  imageAlt: string
}

const categories: Category[] = [
  {
    id: 'compliance',
    label: 'Compliance',
    title: 'Streamline compliance workflows',
    description: 'Automate consent requests, track completions, and maintain clear audit trails—all without the manual chase.',
    cta: 'Learn more about Compliance',
    ctaHref: 'https://www.consentai.com.au',
    imageSrc: '/images/consent ai dashboard.png',
    imageAlt: 'Compliance Dashboard',
  },
  {
    id: 'automation',
    label: 'Automation',
    title: 'Reduce repetitive tasks',
    description: 'Automate document processing, data extraction, and workflow management so brokers can focus on client relationships.',
    cta: 'Learn more about Automation',
    imageSrc: '/images/Bulk consent upload.png',
    imageAlt: 'Bulk Consent Upload',
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    title: 'AI-powered insights',
    description: 'Get instant answers from policy documents, extract key information, and surface insights with insurance-tuned AI.',
    cta: 'Learn more about Intelligence',
    imageSrc: '/images/policy ai intelligent answer.png',
    imageAlt: 'Policy AI Intelligent Answer',
  },
  {
    id: 'workflow',
    label: 'Workflow',
    title: 'Seamless integration',
    description: 'Connect with your existing broker systems and workflows—no disruption, maximum efficiency from day one.',
    cta: 'Learn more about Workflow',
    imageSrc: '/images/Broker Systems.jpg',
    imageAlt: 'Workflow Integration',
  },
]

export default function WhySection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id)
  const currentCategory = categories.find(cat => cat.id === selectedCategory) || categories[0]

  return (
    <section className={styles.whySection} id="why">
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>Why brokers choose InsurAI</h2>
        
        <div className={styles.tabs}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.tab} ${selectedCategory === category.id ? styles.tabActive : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.textBlock}>
            <h3 className={styles.title}>{currentCategory.title}</h3>
            <p className={styles.description}>{currentCategory.description}</p>
            <a 
              href={currentCategory.ctaHref || '#contact'} 
              className={styles.ctaLink}
              target={currentCategory.ctaHref ? '_blank' : undefined}
              rel={currentCategory.ctaHref ? 'noopener noreferrer' : undefined}
            >
              {currentCategory.cta} →
            </a>
          </div>

          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              {currentCategory.id === 'workflow' ? (
                <div className={styles.cpuStage} aria-label={currentCategory.imageAlt}>
                  <CpuArchitecture text="InsurAI" />
                </div>
              ) : (
                <Image
                  src={currentCategory.imageSrc}
                  alt={currentCategory.imageAlt}
                  width={1200}
                  height={675}
                  className={styles.featureImage}
                  priority={selectedCategory === categories[0].id}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
