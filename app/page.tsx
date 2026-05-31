import Image from "next/image";
import { ContactForm } from "./ui/contact-form";
import { SiteHeader } from "./ui/site-header";

const metrics = [
  ["0.5%", "weld repair rate on critical high-pressure joints"],
  [">95%", "first-time inspection request acceptance"],
  ["0", "major NCRs at ADNOC project handover"],
  ["2 weeks", "early MDR dossier submission on client handover"],
];

const skills = [
  {
    title: "Quality Systems",
    copy: "ISO 9001:2015, CAPA, NCR/CAR management, 5-Why RCA, SOPs, audits, ITPs, KPI monitoring.",
  },
  {
    title: "Inspection & Testing",
    copy: "WPS/PQR review, weld mapping, VT/RT/UT/MT/PT coordination, MTC traceability, hydrotest packs.",
  },
  {
    title: "Codes & Standards",
    copy: "ASME B31.3, ASME VIII/IX, AWS D1.1/D1.5, API 1104, ADNOC GS/RS, SSPC/NACE.",
  },
  {
    title: "Project Delivery",
    copy: "EPC interface, RFI/TQ handling, subcontractor management, punch-list closeout, MDR dossiers.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="eyebrow">QA/QC Engineer | Project Engineer | UAE EPC</p>
              <h1 id="hero-title">Albin Sam Shiju</h1>
              <p className="hero-copy">
                Oil and gas quality professional delivering ADNOC-regulated projects with disciplined
                inspection, clean turnover dossiers, and measurable site performance.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button primary" href="#contact">
                  Book a conversation
                </a>
                <a className="button secondary" href="/assets/AlbinSamShiju_Resume_2026.pdf" download>
                  Download resume
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-label="Professional portrait and project highlights">
              <div className="portrait-frame">
                <Image
                  className="portrait-image"
                  src="/assets/albin.png"
                  alt="Portrait of Albin Sam Shiju in a black tuxedo"
                  width={420}
                  height={620}
                  priority
                  sizes="(max-width: 720px) 72vw, 340px"
                />
              </div>
              <div className="signal-panel">
                <span>ADNOC-regulated EPC</span>
                <strong>AED 50M</strong>
              </div>
              <div className="status-panel">
                <span>Handover Status</span>
                <strong>Zero major NCRs</strong>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#proof" aria-label="Scroll to proof section">
            Explore credentials
          </a>
        </section>

        <section className="proof-band" id="proof" aria-labelledby="proof-title">
          <div className="section-heading">
            <p className="eyebrow">Site-tested results</p>
            <h2 id="proof-title">Quality performance that survives handover.</h2>
          </div>
          <div className="proof-grid">
            {metrics.map(([value, label]) => (
              <article className="metric" key={value}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-band" aria-labelledby="profile-title">
          <div className="profile-copy">
            <p className="eyebrow">Professional summary</p>
            <h2 id="profile-title">QA/QC leadership for piping, documentation, and EPC interfaces.</h2>
            <p>
              I bring 3+ years of UAE EPC site experience across ASME B31.3 piping, NDE coordination,
              ISO 9001:2015 QMS, CAPA, RCA, supplier quality checks, and MDR turnover delivery.
            </p>
          </div>
          <div className="credential-strip" aria-label="Current credentials">
            <span>PMP exam scheduled 2026</span>
            <span>MBA Project Management 2025-2027</span>
            <span>UAE driving license</span>
            <span>Google Project Management Certificate</span>
          </div>
        </section>

        <section className="experience-band" id="experience" aria-labelledby="experience-title">
          <div className="section-heading compact">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">Built around inspection discipline and project delivery.</h2>
          </div>
          <div className="timeline">
            <article className="role">
              <div className="role-meta">
                <span>Jul 2025 - Present</span>
                <strong>Abu Dhabi, UAE</strong>
              </div>
              <div className="role-body">
                <h3>TELAL Engineering &amp; Contracting LLC</h3>
                <p className="role-title">QA/QC Engineer</p>
                <p>
                  Developed SOPs, ITPs, and method statements aligned with ADNOC GS/RS; coordinated
                  inspections for 500+ ASME B31.3 piping joints, NDE, hydrotest packs, and client
                  witness points.
                </p>
                <ul>
                  <li>Reduced coating rework by 15% through CAPA and 5-Why RCA.</li>
                  <li>Delivered ADNOC Central Utility &amp; Associated Systems, AED 50M, with zero major NCRs.</li>
                </ul>
              </div>
            </article>

            <article className="role">
              <div className="role-meta">
                <span>Sep 2023 - Jul 2025</span>
                <strong>Sharjah, UAE</strong>
              </div>
              <div className="role-body">
                <h3>Lloyds Engineering Co. LLC</h3>
                <p className="role-title">QA/QC Engineer | Project Engineer</p>
                <p>
                  Managed QA/QC for RO and utilities packages in Duplex and Super Duplex piping,
                  covering WPS/PQR compliance, welder qualifications, purge gas control, MIR/RFI
                  tracking, and MDR delivery.
                </p>
                <ul>
                  <li>Achieved 100% welding and coating compliance for AED 1.8M RO/utilities packages.</li>
                  <li>Improved documentation turnaround by 20% through digital tracking.</li>
                </ul>
              </div>
            </article>

            <article className="role">
              <div className="role-meta">
                <span>2021 - 2023</span>
                <strong>Remote | India</strong>
              </div>
              <div className="role-body">
                <h3>CIK Telecom &amp; Giesecke + Devrient India</h3>
                <p className="role-title">Project Coordinator | Junior Trainee Engineer</p>
                <p>
                  Coordinated remote deliverables, vendor follow-ups, service documentation,
                  installation support, calibration checks, and automated banknote processing quality records.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="skills-band" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">Capability map</p>
            <h2 id="skills-title">From code compliance to client-ready turnover.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="education-band" aria-labelledby="education-title">
          <div>
            <p className="eyebrow">Education</p>
            <h2 id="education-title">Engineering foundation, project-management direction.</h2>
          </div>
          <div className="education-list">
            <article>
              <h3>MBA - Project Management</h3>
              <p>Manipal University Jaipur, Online | 2025-2027</p>
            </article>
            <article>
              <h3>B.E. Mechanical &amp; Automation Engineering</h3>
              <p>GGSIPU, India | CGPA 8.70/10 | First Class with Distinction</p>
            </article>
          </div>
        </section>

        <section className="contact-band" id="contact" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">
              Available for QA/QC, project engineering, and EPC delivery conversations.
            </h2>
            <div className="contact-links">
              <a href="mailto:albinsam1999@gmail.com">albinsam1999@gmail.com</a>
              <a href="tel:+971543428205">+971 54 342 8205</a>
              <a href="https://linkedin.com/in/albinsamshiju">linkedin.com/in/albinsamshiju</a>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <span>Albin Sam Shiju</span>
        <span>QA/QC Engineer | Project Engineer</span>
      </footer>
    </>
  );
}
