import { useEffect, useState } from 'react'
import './App.css'

import backPortrait from './assets/about me/portrait-back.png'
import coatPortrait from './assets/about me/portrait-coat.png'
import frontPortrait from './assets/about me/portrait-front.png'
import orbital from './assets/ring-asset.png'
import stars from './assets/star-asset.png'
import romanClock from './assets/clock-asset.png'
import compass from './assets/compass-asset.png'
import projectFlourish from './assets/clock-hand-asset.png'
import contactArtwork from './assets/contact me part.png'
import forefrontCover from './assets/the forefront/COVER PAGE.png'
import forefrontLogo from './assets/the forefront/forefront-logo-trimmed.png'
import graveyardShift from './assets/designs/EVERY GRAVEYARD SHIFT.png'
import forefrontPosting from './assets/designs/forefront posting.png'
import salinLahiColorMap from './assets/designs/SALIN-LAHI COLOR MAP.png'
import verdantyBrandIdentity from './assets/designs/VERDANTY BRAND IDENTITY.png'
import veriportInfographic from './assets/designs/veriport-infographic.png'
import cogniflexLogo from './assets/icons/cogniflex-logo.png'
import seminexLogo from './assets/icons/seminex-icon.png'
import salinLahiLogo from './assets/icons/SALIN-LAHI-LOGO.png'
import summifyLogo from './assets/icons/SUMMIFY-LOGO-512x512.png'
import backPigment from './assets/gradient/gradient 2.png'
import frontBluePigment from './assets/gradient/gradient 2.png'
import frontShadowPigment from './assets/gradient/gradient 7.png'
import portraitBluePigment from './assets/gradient/gradient 1.png'
import portraitShadowPigment from './assets/gradient/gradient 6.png'
import canvaMark from './assets/icons/canva-logo.png'
import figmaMark from './assets/icons/figma-logo.png'
import affinityMark from './assets/icons/affinity-logo.png'
import htmlMark from './assets/icons/html-logo.png'
import cssMark from './assets/icons/css-logo.png'
import jsMark from './assets/icons/javascript-logo.png'
import reactMark from './assets/icons/react-logo.png'
import tailwindMark from './assets/icons/tailwind-logo.png'
import tsMark from './assets/icons/typescript-logo.png'
import viteMark from './assets/icons/vite-logo.png'
import githubMark from './assets/icons/github-logo.png'
import participantIcon from './assets/case study/participant-icon.png'
import officerIcon from './assets/case study/officer-icon.png'
import seminarDashboard from './assets/case study/YourSeminarPage.png'
import studentSeminarPage from './assets/case study/SeminarPage.png'
import organizerProfile from './assets/case study/Org.Profile.png'
import organizerSeminar from './assets/case study/Org.YSeminar-SeminarDetails.png'
import certificateSetup from './assets/case study/Org.Home-CreateSeminar-Certificate.png'
import certificateEditor from './assets/case study/certificate creation.png'

const techStack = [
  { name: 'HTML', src: htmlMark },
  { name: 'CSS', src: cssMark },
  { name: 'JavaScript', src: jsMark },
  { name: 'React', src: reactMark },
  { name: 'Tailwind CSS', src: tailwindMark },
  { name: 'TypeScript', src: tsMark },
  { name: 'Vite', src: viteMark },
  { name: 'GitHub', src: githubMark },
]

const projectCategories = [
  {
    label: 'The Forefront',
    works: [
      {
        title: 'Forefront Posting',
        description: 'A 4-page editorial social media artwork.',
        layout: 'square',
        image: forefrontPosting,
        imageAlt: 'Forefront posting artwork',
        imageShadow: 'default',
        buttonLabel: 'See More',
        href: 'https://www.facebook.com/theforefrontgc',
      },
      {
        title: 'Kontesera',
        description: 'The award-winning 2nd Semester E-Magazine issue.',
        layout: 'portrait',
        image: forefrontCover,
        imageAlt: 'Kontesera cover artwork',
        imageShadow: 'default',
        buttonLabel: 'See More',
        href: 'https://www.facebook.com/theforefrontgc',
      },
      {
        title: 'Every Graveyard Shift',
        description: 'A design made for a drabble last Halloween.',
        layout: 'landscape',
        image: graveyardShift,
        imageAlt: 'Every Graveyard Shift editorial design',
        imageShadow: 'default',
        buttonLabel: 'See More',
        href: 'https://www.facebook.com/theforefrontgc',
      },
    ],
  },
  {
    label: 'My Personal Designs',
    works: [
      {
        title: 'Salin-Lahi Color Map',
        description: 'A color map and visual design exploration for the Salin-Lahi rover.',
        layout: 'square',
        image: salinLahiColorMap,
        imageAlt: 'Salin-Lahi color map design',
        imageShadow: 'default',
        buttonLabel: 'Read Here',
      },
      {
        title: 'Salin-Lahi',
        description: 'The official logo for Salin-Lahi web application.',
        layout: 'square',
        image: salinLahiLogo,
        imageAlt: 'Salin-Lahi logo',
        imageShadow: 'none',
        buttonLabel: 'Read Here',
      },
      {
        title: 'Summify',
        description: 'Official logo design for Summify.',
        layout: 'square',
        image: summifyLogo,
        imageAlt: 'Summify logo',
        imageShadow: 'none',
        buttonLabel: 'Read Here',
      },
      {
        title: 'Verdanty Brand Identity',
        description: 'A brand identity design for Verdanty, a fictional business startup.',
        layout: 'portrait',
        image: verdantyBrandIdentity,
        imageAlt: 'Verdanty brand identity presentation',
        imageShadow: 'default',
        buttonLabel: 'Read Here',
      },
      {
        title: 'Veriport Infographic',
        description: 'An infographic made for the Veriport research project.',
        layout: 'portrait',
        image: veriportInfographic,
        imageAlt: 'Veriport research infographic',
        imageShadow: 'default',
        buttonLabel: 'Read Here',
      },
    ],
  },
  {
    label: 'Websites',
    works: [
      {
        title: 'CogniFlex',
        description: 'CogniFlex is a modern, responsive web application designed to transform passive reading into an interactive, active learning experience. Built on a serverless architecture, the system leverages advanced Large Language Models (LLMs) to allow users to upload educational materials or input text, which the system then intelligently summarizes, simplifies, or converts into interactive assessments.',
        layout: 'square',
        image: cogniflexLogo,
        imageAlt: 'CogniFlex logo',
        imageShadow: 'none',
        buttonLabel: 'Open',
        href: 'https://cogniflex-beta.vercel.app/',
      },
      {
        title: 'Seminex',
        description: 'Seminex is a responsive, web-based seminar management platform that automates event registration, real-time QR-based attendance tracking, post-seminar evaluations, and digital certificate generation for Gordon College’s College of Computer Studies (CCS) Student Council and student body.',
        layout: 'square',
        image: seminexLogo,
        imageAlt: 'Seminex logo',
        imageShadow: 'none',
        buttonLabel: 'Case Study',
      },
    ],
  },
]

function Portraits() {
  return (
    <div className="portrait-stage" role="img" aria-label="Three portraits of James Dominic Ortega">
      <img className="portrait portrait--back about-section-art" src={backPortrait} alt="" aria-hidden="true" />
      <img className="portrait-blend-pigment portrait-blend-pigment--blue about-section-art" src={portraitBluePigment} alt="" aria-hidden="true" />
      <img className="portrait-blend-pigment portrait-blend-pigment--blue about-section-art" src={portraitBluePigment} alt="" aria-hidden="true" />
      <img className="portrait-blend-pigment portrait-blend-pigment--shadow about-section-art" src={portraitShadowPigment} alt="" aria-hidden="true" />
      <img className="portrait-blend-pigment portrait-blend-pigment--shadow about-section-art" src={portraitShadowPigment} alt="" aria-hidden="true" />
      <img className="portrait portrait--coat about-section-art" src={coatPortrait} alt="" aria-hidden="true" />
      <img className="portrait-front-pigment portrait-front-pigment--blue about-section-art" src={frontBluePigment} alt="" aria-hidden="true" />
      <img className="portrait-front-pigment portrait-front-pigment--blue about-section-art" src={frontBluePigment} alt="" aria-hidden="true" />
      <img className="portrait-front-pigment portrait-front-pigment--shadow about-section-art" src={frontShadowPigment} alt="" aria-hidden="true" />
      <img className="portrait-front-pigment portrait-front-pigment--shadow about-section-art" src={frontShadowPigment} alt="" aria-hidden="true" />
      <img className="portrait portrait--front about-section-art" src={frontPortrait} alt="" aria-hidden="true" />
      <img className="portrait-tail-pigment about-section-art" src={portraitShadowPigment} alt="" aria-hidden="true" />
    </div>
  )
}

const caseStudyTitle = 'Seminex: A QR-Based Seminar Attendance And Certificate Automation System'

function CaseStudyPage({ page }: { page: number }) {
  return (
    <div className={`case-study-page case-study-page--${page + 1}`}>
      <h2 className="case-study-title">{caseStudyTitle}</h2>
      {page === 0 && <div className="case-study-page-one-grid">
        <div className="case-study-impact-column">
          <h3>Overview</h3>
          <p>Seminex is a responsive, web-based seminar management platform that automates event registration, real-time QR-based attendance tracking, post-seminar evaluations, and digital certificate generation for Gordon College’s College of Computer Studies (CCS) Student Council and student body.</p>
          <h3>The Problem:</h3>
          <p className="case-study-indented">The CCS Student Council’s manual, paper-based seminar sign-in process cannot verify attendance duration or prevent proxy sign-ins, resulting in long queues, inconsistent records, human error, and delayed certificate distribution.</p>
          <h3>The Goal:</h3>
          <p className="case-study-indented">To streamline seminar operations by providing one-click online registration, UID-based QR code ticketing for accurate time-in/time-out tracking, and automated mail-merge certificate generation gated by an 80% attendance threshold and post-evaluation completion.</p>
        </div>
        <div className="case-study-role-column">
          <div className="case-study-role-meta">
            <div><h3>My Role</h3><p>Design &amp; Architecture Lead, Testing and Quality Lead</p></div>
            <div><h3>Project Duration</h3><p>February 2026 – November 2026</p></div>
          </div>
          <div className="case-study-responsibilities">
            <h3>Responsibilities</h3>
            <ul>
            <li>Created paper and digital wireframes and built interactive prototypes for role-based dashboards</li>
            <li>Established the visual design system, including the color palette, typography hierarchy (Satoshi, Plus Jakarta Sans, DM Sans), and CSS3 design tokens</li>
            <li>Designed responsive high-fidelity mockups for key flows, including one-click registration, UID-based QR ticketing, live QR scanning, and the dynamic certificate name-box editor</li>
            <li>Conducted usability testing and iterated on interface layouts and accessibility across mobile and desktop screens</li>
            </ul>
          </div>
        </div>
      </div>}
      {page === 1 && <div className="case-study-user-points">
        <h3>User Points</h3>
        <p>Research focused on the two primary stakeholders of Gordon College CCS seminars: <strong>Applicants (Students)</strong> and <strong>Organizers (CCS Student Council)</strong>. Initial assumptions centered only on speeding up entrance lines, but workflow analysis revealed that organizers also face heavy post-event bottlenecks—manually verifying attendance durations, filtering out proxy sign-ins, and individually editing certificate templates.</p>
        <h3>Pain Points</h3>
        <div className="case-study-pain-grid">
          <p><strong>Long Queues &amp; Manual Bottlenecks:</strong> Paper sign-ins cause congestion at seminar entrances and exits; this guided the design of a “one-click” registration flow and instant UID-based QR tickets.</p>
          <p><strong>Attendance Manipulation &amp; Duration Tracking:</strong> Manual logs cannot prevent proxy attendance or track how long a student stayed; this led to dual entrance/exit QR scanning and an automated 80% attendance gate.</p>
          <p><strong>Repetitive Certificate Editing:</strong> Organizers spend hours manually typing names onto certificates; this drove the creation of a dynamic name-box placement tool and automated mail-merge generation.</p>
          <p><strong>Delayed Verification &amp; Distribution:</strong> Students wait weeks for certificates due to manual cross-checking; this inspired real-time progress gates (80% attendance + completed evaluation) that unlock instant digital downloads.</p>
        </div>
      </div>}
      {page === 2 && <div className="case-study-personas">
        <article><h3>User Persona 1</h3><div className="case-study-persona-top"><img src={participantIcon} alt="Student persona"/><p><strong>Name:</strong> Paolo Villanueva<br/><strong>Demographics:</strong><br/>• 20 years old<br/>• 3rd-Year BSCS Student<br/>• Gordon College<br/>• Olongapo City</p></div><p className="case-study-quote">“I want to attend CCS seminars without waiting in long lines just to sign a sheet or waiting weeks to get my certificate.”</p><p><strong>Goals:</strong> Register quickly for upcoming seminars, access a personal QR code ticket easily on mobile, and download verified certificates immediately after completing requirements.<br/><strong>Frustrations:</strong> Long registration/sign-in queues, misplaced paper attendance sheets, and unclear status on when or if a certificate will be released.<br/><strong>Scenario:</strong> Juan signs in using his @gordoncollege.edu.ph email, registers for a CCS tech talk with one click, presents his UID QR ticket at the door upon entry and exit, answers the post-event survey, and downloads his certificate directly from his dashboard.</p></article>
        <article><h3>User Persona 2</h3><div className="case-study-persona-top"><img src={officerIcon} alt="Organizer persona"/><p><strong>Name:</strong> Clarissa Bautista<br/><strong>Demographics:</strong><br/>• 21 years old<br/>• CCS Student Council Officer<br/>• Gordon College<br/>• Olongapo City<br/>• Event Organizer</p></div><p className="case-study-quote">“Managing attendance and editing hundreds of certificates by hand takes more time than running the actual seminar.”</p><p><strong>Goals:</strong> Set up seminars with participant caps, scan student QR codes rapidly at the venue, enforce attendance rules fairly, and automate certificate distribution.<br/><strong>Frustrations:</strong> Proxy sign-ins, messy handwriting on paper logs, and repetitive manual certificate formatting.<br/><strong>Scenario:</strong> An officer creates a seminar event on Seminex, uploads a certificate template with a dynamic name box, uses the built-in QR scanner to log student time-in/time-out, monitors live attendance records, and lets the system auto-issue certificates to eligible students.</p></article>
      </div>}
      {page === 3 && <div className="case-study-design">
        <div className="case-study-collage"><img src={seminarDashboard} alt="Seminar dashboard design"/><img src={organizerProfile} alt="Organizer profile design"/><img src={organizerSeminar} alt="Seminar details design"/></div>
        <ul><li>Established a warm, approachable, yet structured visual identity using a terracotta/burnt-orange sidebar (#D95D30-family), warm cream canvas backgrounds, and deep maroon primary action buttons paired with clean geometric sans-serif typography (<strong>Satoshi, Plus Jakarta Sans, DM Sans</strong>).</li><li>Built with CSS3 custom properties (design tokens) so role-based dashboards (Applicant vs. Organizer) share consistent spacing, card borders, and form controls.</li></ul>
      </div>}
      {page === 4 && <div className="case-study-refining"><h3>Refining The Design</h3><div className="case-study-image-pair"><img src={certificateSetup} alt="Certificate flow before refinement"/><img src={certificateEditor} alt="Refined certificate editor"/></div><p>Following usability testing, one of the features we transformed is the certificate creation section, where the minimal certificate placeholder is revised into a precision canvas editor featuring live attendee name previews, alignment and safety guidelines, exact coordinate controls, expanded typography options, and e-signature support to prevent text overflow and misalignment.</p></div>}
      {page === 5 && <div className="case-study-refining"><h3>Refining The Design</h3><div className="case-study-image-pair"><img src={seminarDashboard} alt="Early seminar interface"/><img src={studentSeminarPage} alt="Refined student seminar interface"/></div><p>Another changes we made is the over-all UI for Seminar section. The interface evolved from a high-contrast wireframe prototype into a clean, production-ready student portal featuring a refined off-white and maroon palette, a top user profile bar, expanded search and filter controls, and rich seminar cards with live seat tracking and direct registration.</p><p className="case-study-note">Note: Screenshot of updated UI is zoomed in to see the whole part of the section.</p></div>}
      {page === 6 && <div className="case-study-overview-grid case-study-final-grid"><div><h3>Impact</h3><p>Seminex replaces error-prone paper logs with an end-to-end automated pipeline for Gordon College’s CCS Student Council—eliminating proxy attendance through UID-based QR time-in/time-out tracking and cutting certificate turnaround from weeks to instant post-evaluation downloads.</p><h3>What I Learned</h3><p>Leading the design, architecture, and quality assurance for Seminex taught me how critical it is to ground interface decisions in real user bottlenecks—like eliminating manual certificate edits and venue queue friction—while maintaining a cohesive design system (CSS3 tokens and typography hierarchy) that scales smoothly across role-based mobile and desktop workflows. Iterative usability testing also showed me how early feedback directly transforms rough functional placeholders into intuitive, high-precision tools.</p></div><div><h3>Next Steps</h3><ul><li><strong>Offline Mode Support:</strong> Implement local caching/syncing so QR attendance scanning remains uninterrupted in campus venues with unstable internet connectivity.</li><li><strong>Email &amp; SMS Notifications:</strong> Expand beyond in-app alerts to send automated registration confirmations, event reminders, and certificate-ready notifications.</li><li><strong>Advanced Certificate Customization &amp; Integrations:</strong> Support multiple certificate templates per seminar (e.g., speakers vs. participants), payment processing for paid workshops, and third-party platform integrations.</li></ul></div></div>}
    </div>
  )
}

function App() {
  const [aboutPage, setAboutPage] = useState(0)
  const [projectCategory, setProjectCategory] = useState(0)
  const [projectPageIndexes, setProjectPageIndexes] = useState([0, 0, 0])
  const [homeInView, setHomeInView] = useState(false)
  const [aboutInView, setAboutInView] = useState(false)
  const [projectsInView, setProjectsInView] = useState(false)
  const [caseStudyOpen, setCaseStudyOpen] = useState(false)
  const [caseStudyPage, setCaseStudyPage] = useState(0)
  const [projectImageOpen, setProjectImageOpen] = useState(false)
  const activeCategory = projectCategories[projectCategory]
  const activeProjectPage = projectPageIndexes[projectCategory]
  const activeProject = activeCategory.works[activeProjectPage]
  const hasFullImagePreview = activeProject.title === 'Verdanty Brand Identity' || activeProject.title === 'Veriport Infographic'
  const projectShowcaseImage = (
    <img
      className={`project-showcase-image${activeProject.imageShadow === 'none' ? ' project-showcase-image--flat' : ''}`}
      src={activeProject.image}
      alt={activeProject.imageAlt}
      style={hasFullImagePreview ? { objectPosition: 'top center' } : undefined}
    />
  )

  useEffect(() => {
    if (!caseStudyOpen && !projectImageOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCaseStudyOpen(false)
        setProjectImageOpen(false)
      }
      if (caseStudyOpen && event.key === 'ArrowRight') setCaseStudyPage((page) => (page + 1) % 7)
      if (caseStudyOpen && event.key === 'ArrowLeft') setCaseStudyPage((page) => (page + 6) % 7)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [caseStudyOpen, projectImageOpen])

  useEffect(() => {
    const homeSection = document.getElementById('home')
    if (!homeSection || !('IntersectionObserver' in window)) {
      setHomeInView(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setHomeInView(entry.isIntersecting && entry.intersectionRatio >= 0.35)
    }, { threshold: [0, 0.35, 0.55] })

    observer.observe(homeSection)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const aboutSection = document.getElementById('about')
    if (!aboutSection || !('IntersectionObserver' in window)) {
      setAboutInView(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setAboutInView(entry.isIntersecting && entry.intersectionRatio >= 0.35)
    }, { threshold: [0, 0.35, 0.55] })

    observer.observe(aboutSection)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const projectsSection = document.getElementById('projects')
    if (!projectsSection || !('IntersectionObserver' in window)) {
      setProjectsInView(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      setProjectsInView(entry.isIntersecting && entry.intersectionRatio >= 0.35)
    }, { threshold: [0, 0.35, 0.55] })

    observer.observe(projectsSection)
    return () => observer.disconnect()
  }, [])

  const changeAboutPage = (direction: number) => {
    setAboutPage((current) => (current + direction + 4) % 4)
  }

  const changeProjectPage = (direction: number) => {
    const pageCount = activeCategory.works.length
    setProjectPageIndexes((current) => current.map((page, categoryIndex) => (
      categoryIndex === projectCategory ? (page + direction + pageCount) % pageCount : page
    )))
  }

  const selectProjectPage = (page: number) => {
    setProjectPageIndexes((current) => current.map((currentPage, categoryIndex) => (
      categoryIndex === projectCategory ? page : currentPage
    )))
  }

  return (
    <main className="portfolio-page">
      <header className="site-nav">
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className={`hero-section${homeInView ? ' is-visible' : ''}`}>
        <img className="hero-stars" src={stars} alt="" aria-hidden="true" />
        <img className="hero-clock" src={romanClock} alt="" aria-hidden="true" />
        <img className="hero-compass" src={compass} alt="" aria-hidden="true" />
        <img className="hero-orbit" src={orbital} alt="" aria-hidden="true" />
        <div className="hero-title">
          <h1>WELCOME TO</h1>
          <p className="hero-script">My Portfolio</p>
          <p className="hero-tagline"><i>Designing the chaos. Engineering the order.</i></p>
        </div>
      </section>

      <section id="about" className={`about-section${aboutInView ? ' is-visible' : ''}`}>
        <img className="about-section-pigment about-section-art" src={backPigment} alt="" aria-hidden="true" />
        <div className="about-copy">
          <h2>About Me</h2>
          <div className="about-slide" aria-live="polite">
            {aboutPage === 0 && (
              <>
                <p className="about-name">James Dominic T. Ortega</p>
                <div className="about-bio">
                  <p>
                    Hi! I’m a Freelance Graphic Designer and Front-End Developer from
                    the Philippines. My hobbies are playing games like League of
                    Legends and mobile idle games, reading manhwas, listening to
                    music, and discovering new kinds of design and practice them.
                  </p>
                  <p>
                    I’m an aspiring Graphic Artist and Developer, hoping to learn and
                    grow as an individual and as a professional in the field.
                  </p>
                </div>

                <div className="about-tools">
                  <h3>Commonly used editing application</h3>
                <div className="tool-logos">
                    <img className="tool-logo tool-logo--affinity" src={affinityMark} alt="Affinity" />
                    <img className="tool-logo tool-logo--canva" src={canvaMark} alt="Canva" />
                    <img className="tool-logo tool-logo--figma" src={figmaMark} alt="Figma" />
                  </div>
                  <h3 className="tech-heading">Current Tech Stack</h3>
                  <div className="tech-stack" aria-label="HTML, CSS, JavaScript, React, Tailwind CSS, TypeScript, Vite, and GitHub">
                    {techStack.map((item) => (
                      <img key={item.name} src={item.src} alt={item.name} title={item.name} />
                    ))}
                  </div>
                </div>
              </>
            )}

            {aboutPage === 2 && (
              <>
                <h2 className="about-slide-script">Affiliation/Experience</h2>
                <div className="about-experiences">
                  <article>
                    <h3>Senior Graphic Artist | The Forefront | Gordon College</h3>
                    <p>September 2025 – Present</p>
                  </article>
                  <article>
                    <h3>Intern | A+ Solutions Development Center, Corp.</h3>
                    <p>June 2026 – July 2027</p>
                  </article>
                  <article>
                    <h3>Freelance Graphic Artist</h3>
                    <p>March 2026 – Present</p>
                  </article>
                  <article>
                    <h3>Internet Laboratory Custodian Intern | Columban College Inc.</h3>
                    <p>April 2024 – May 2024</p>
                  </article>
                </div>
              </>
            )}

            {aboutPage === 3 && (
              <>
                <h2 className="about-slide-script">Certifications</h2>
                <ul className="about-certifications">
                  <li>TESDA National Certificate III – Visual Graphic Designing</li>
                  <li>Cisco – HTML Essentials</li>
                  <li>Cisco – CSS Essentials</li>
                  <li>Cisco – Python Essentials 1</li>
                  <li>Cisco – Python Essentials 2</li>
                </ul>
              </>
            )}
            {aboutPage === 1 && (
              <div className="about-skills">
                <h2 className="about-slide-script">Skills</h2>
                <ul>
                  <li>Computer System Servicing</li>
                  <li>Professional Document Productivity</li>
                  <li>Visual Design &amp; Creative Media</li>
                  <li>Introductory Video Editing</li>
                  <li>Software &amp; Web Development</li>
                </ul>
              </div>
            )}
          </div>

          <div className="about-pagination" aria-label="About section pages">
            <button className="about-page-arrow" type="button" aria-label="Previous about page" onClick={() => changeAboutPage(-1)}>←</button>
            <div className="about-page-dots">
              {Array.from({ length: 4 }, (_, page) => (
                <button
                  key={page}
                  className={page === aboutPage ? 'is-active' : ''}
                  type="button"
                  aria-label={`Go to about page ${page + 1}`}
                  aria-current={page === aboutPage ? 'page' : undefined}
                  onClick={() => setAboutPage(page)}
                />
              ))}
            </div>
            <button className="about-page-arrow" type="button" aria-label="Next about page" onClick={() => changeAboutPage(1)}>→</button>
          </div>
        </div>
        <Portraits />
      </section>

      <section id="projects" className={`projects-section${projectsInView ? ' is-visible' : ''}`}>
        <img className="project-ornament project-ornament--flourish" src={projectFlourish} alt="" aria-hidden="true" />
        <img className="project-ornament project-ornament--compass" src={compass} alt="" aria-hidden="true" />
        <h2>Current Projects</h2>
        <p className="projects-subtitle">Compilations of my creative and programming works.</p>
        <div className="project-tabs" role="tablist" aria-label="Project categories">
          {projectCategories.map((category, index) => (
            <button
              key={category.label}
              id={`project-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={projectCategory === index}
              aria-controls="project-showcase"
              aria-label={category.label}
              className={projectCategory === index ? 'is-active' : ''}
              onClick={() => setProjectCategory(index)}
            >
              {index === 0 ? (
                <img className="project-tab-logo" src={forefrontLogo} alt="" aria-hidden="true" />
              ) : category.label}
            </button>
          ))}
        </div>
        <div
          className={`project-showcase project-showcase--${activeProject.layout}`}
          id="project-showcase"
          role="tabpanel"
          aria-labelledby={`project-tab-${projectCategory}`}
          key={`${projectCategory}-${activeProjectPage}`}
        >
          {hasFullImagePreview ? (
            <button className="project-image-preview" type="button" onClick={() => setProjectImageOpen(true)} aria-label={`View full image of ${activeProject.title}`}>
              {projectShowcaseImage}
            </button>
          ) : projectCategory === 1 && activeProject.href ? (
            <a className="project-showcase-image-link" href={activeProject.href} aria-label={`Open ${activeProject.title}`}>
              {projectShowcaseImage}
            </a>
          ) : projectShowcaseImage}
          <div className="project-showcase-copy">
            <h3>{activeProject.title}</h3>
            {activeProject.description && <p>{activeProject.description}</p>}
            {projectCategory === 1 ? null : activeProject.buttonLabel === 'Case Study' ? (
              <button className="projects-read-button" type="button" onClick={() => { setCaseStudyPage(0); setCaseStudyOpen(true) }}>
                {activeProject.buttonLabel}
              </button>
            ) : (
              <a className="projects-read-button" href={activeProject.href || '#contact'}>{activeProject.buttonLabel}</a>
            )}
          </div>
        </div>
        <div className="project-pagination" aria-label={`${activeCategory.label} project pages`}>
          <button
            className="project-page-arrow"
            type="button"
            aria-label="Previous project"
            disabled={activeCategory.works.length <= 1}
            onClick={() => changeProjectPage(-1)}
          >←</button>
          <div className="project-page-dots">
            {activeCategory.works.map((work, page) => (
              <button
                key={`${work.title}-${page}`}
                className={page === activeProjectPage ? 'is-active' : ''}
                type="button"
                aria-label={`Go to project ${page + 1}`}
                aria-current={page === activeProjectPage ? 'page' : undefined}
                onClick={() => selectProjectPage(page)}
              />
            ))}
          </div>
          <button
            className="project-page-arrow"
            type="button"
            aria-label="Next project"
            disabled={activeCategory.works.length <= 1}
            onClick={() => changeProjectPage(1)}
          >→</button>
        </div>
      </section>

      {projectImageOpen && hasFullImagePreview && <div className="project-full-image-backdrop" onClick={() => setProjectImageOpen(false)}>
        <section className="project-full-image-dialog" role="dialog" aria-modal="true" aria-label={`Full image: ${activeProject.title}`} onClick={(event) => event.stopPropagation()}>
          <button className="project-full-image-close" type="button" aria-label="Close full image" onClick={() => setProjectImageOpen(false)}>×</button>
          <img src={activeProject.image} alt={activeProject.imageAlt} />
        </section>
      </div>}

      {caseStudyOpen && <div className="case-study-backdrop" onClick={() => setCaseStudyOpen(false)}>
        <section className="case-study-dialog" role="dialog" aria-modal="true" aria-label="Seminex case study" onClick={(event) => event.stopPropagation()}>
          <button className="case-study-close" type="button" aria-label="Close case study" onClick={() => setCaseStudyOpen(false)}>×</button>
          <div className="case-study-scroll" key={caseStudyPage}>
            <CaseStudyPage page={caseStudyPage}/>
          </div>
          <nav className="case-study-pagination" aria-label="Case study pages">
            <button type="button" aria-label="Previous page" onClick={() => setCaseStudyPage((page) => (page + 6) % 7)}>←</button>
            <div className="case-study-dots">{Array.from({ length: 7 }, (_, page) => <button key={page} type="button" aria-label={`Go to case study page ${page + 1}`} aria-current={caseStudyPage === page ? 'page' : undefined} className={caseStudyPage === page ? 'is-active' : ''} onClick={() => setCaseStudyPage(page)}/>)}</div>
            <span>{caseStudyPage + 1} / 7</span>
            <button type="button" aria-label="Next page" onClick={() => setCaseStudyPage((page) => (page + 1) % 7)}>→</button>
          </nav>
        </section>
      </div>}

      <section id="contact" className="contact-section" style={{ backgroundImage: `url("${contactArtwork}")` }}>
        <div className="contact-copy">
          <h2>Got A Messy Idea That<br />Needs Structure?</h2>
          <p className="contact-script">Let’s Build It</p>
          <h3>Contact Me</h3>
          <div className="contact-list">
            <a className="contact-item" href="https://www.facebook.com/share/1E3D1YD6js/" target="_blank" rel="noreferrer">
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="currentColor" /><path d="M13.55 20v-7h2.38l.36-2.74h-2.74V8.51c0-.8.22-1.34 1.38-1.34h1.47V4.72c-.25-.03-1.1-.1-2.1-.1-2.08 0-3.5 1.27-3.5 3.6v2.04H8.45V13h2.35v7h2.75Z" fill="#101522" /></svg>
              <span>James Dominic Ortega</span>
            </a>
            <a className="contact-item" href="https://mail.google.com/mail/?view=cm&fs=1&to=jamesdominicortega13%40gmail.com" target="_blank" rel="noreferrer">
              <svg className="contact-icon contact-icon--gmail" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6.5 12 13l9-6.5M4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11A1.5 1.5 0 0 1 4.5 5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
              <span>jamesdominicortega13@gmail.com</span>
            </a>
            <a className="contact-item" href="https://github.com/crityz" target="_blank" rel="noreferrer">
              <img className="contact-icon contact-icon--github" src={githubMark} alt="" aria-hidden="true" />
              <span>crityz</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
