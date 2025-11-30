"use client";

import React from "react";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { ContactInfo } from "./contact/ContactInfo";
import { ContactForm } from "./contact/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="pt-10 pb-20 background">
      <div className="container mx-auto px-4 xl:px-24">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's work together"
          center={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-12">
          {/* Contact Info */}
          <ContactInfo />

          {/* Simple Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
