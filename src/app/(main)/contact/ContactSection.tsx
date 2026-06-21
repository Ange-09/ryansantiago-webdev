"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";

type InquiryType = "project" | "career" | "press" | "other";

interface FormState {
  name: string;
  email: string;
  inquiryType: InquiryType;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    inquiryType: "project",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.section} id="contact">
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Left — context */}
        <div className={styles.context}>
          <span className={styles.sectionTag}>Contact</span>
          <h2 className={styles.heading}>Start a&nbsp;Dialogue.</h2>
          <p className={styles.subtext}>
            Partnering with visionary teams to craft digital experiences that
            resonate. Reach out to discuss your next project.
          </p>

          <div className={styles.details}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Email</span>
              <a
                className={styles.detailValue}
                href="mailto:hello@vervestudio.com"
              >
                hello@vervestudio.com
              </a>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Location</span>
              <span className={styles.detailValue}>
                Parañaque City, Metro Manila
              </span>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className={styles.formWrapper}>
          {submitted ? (
            <div className={styles.successState}>
              <div className={styles.successDisc} aria-hidden="true">
                <svg viewBox="0 0 80 80" fill="none">
                  <circle
                    cx="40"
                    cy="40"
                    r="39"
                    stroke="#c8a84a"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="30"
                    stroke="#c8a84a"
                    strokeWidth="0.4"
                    strokeDasharray="3 4"
                  />
                  <circle cx="40" cy="40" r="14" fill="#c8a84a" opacity="0.1" />
                  <circle cx="40" cy="40" r="6" fill="#c8a84a" />
                  <circle cx="40" cy="40" r="2" fill="#07101f" />
                </svg>
              </div>
              <p className={styles.successHeading}>Message received.</p>
              <p className={styles.successSub}>
                We&apos;ll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <input
                    className={styles.input}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Juan Dela Cruz"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    className={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="juandelacruz@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="inquiryType">
                  Inquiry Type
                </label>
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.select}
                    id="inquiryType"
                    name="inquiryType"
                    value={form.inquiryType}
                    onChange={handleChange}
                  >
                    <option value="project">New Project</option>
                    <option value="career">Career</option>
                    <option value="press">Press / Media</option>
                    <option value="other">Other</option>
                  </select>
                  <span className={styles.selectArrow} aria-hidden="true">
                    ↓
                  </span>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  placeholder=""
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.formFooter}>
                <button className={styles.submitBtn} type="submit">
                  Send Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
