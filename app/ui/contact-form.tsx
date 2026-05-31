export function ContactForm() {
  return (
    <form className="contact-form" action="https://formsubmit.co/albinsam1999@gmail.com" method="POST">
      <input type="hidden" name="_subject" value="Portfolio contact from AlbinSamShiju.com" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://albin-next-portfolio.vercel.app/thank-you" />
      <label>
        Name
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Company
        <input name="company" type="text" autoComplete="organization" />
      </label>
      <label>
        Message
        <textarea name="message" rows={5} required />
      </label>
      <button className="button primary" type="submit">
        Send message
      </button>
    </form>
  );
}
