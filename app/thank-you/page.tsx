export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <section className="contact-band">
        <div className="contact-copy">
          <p className="eyebrow">Message sent</p>
          <h1>Thank you.</h1>
          <p className="hero-copy">Your message has been received. I will respond as soon as possible.</p>
          <div className="hero-actions">
            <a className="button primary" href="/">
              Back to home
            </a>
            <a className="button secondary" href="/assets/AlbinSamShiju_Resume_2026.pdf" download>
              Download resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
