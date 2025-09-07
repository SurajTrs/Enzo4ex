import React from "react";
import ContactHero from "../components/Contact/ContactHero";
import ContactMethods from "../components/Contact/ContactMethods";
import ContactForm from "../components/Contact/ContactForm";
import ContactOffices from "../components/Contact/ContactOffices";
import ContactDepartments from "../components/Contact/ContactDepartments";

export default function ContactPage() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        <ContactHero />
        <ContactMethods />
        <ContactForm />
        <ContactOffices />
        <ContactDepartments />
      </div>
    </section>
  );
}
