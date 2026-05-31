"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("sending");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/albinsam1999@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          message: formData.get("message"),
          _replyto: formData.get("email"),
          _subject: `Portfolio contact from ${formData.get("name")}`,
          _template: "table",
          _captcha: "false",
          _url: "https://albin-next-portfolio.vercel.app/#contact",
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send message");
      }

      form.reset();
      setFormState("sent");
      setMessage(result.message || "Message sent. I will get back to you soon.");
    } catch (error) {
      setFormState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
      <button className="button primary" type="submit" disabled={formState === "sending"}>
        {formState === "sending" ? "Sending..." : "Send message"}
      </button>
      {message ? (
        <p className={`form-status ${formState === "error" ? "is-error" : "is-success"}`}>{message}</p>
      ) : null}
    </form>
  );
}
