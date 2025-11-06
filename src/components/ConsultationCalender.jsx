import React from "react";
import AnimatedSection from "./AnimatedSection"; // optional animation wrapper

export default function ConsultationCalendar() {
  // Replace this with the actual link Dr. Hemanth sends you
  const calendarLink = "https://calendar.app.google/WYkBCpMWWfsqSnGv6";

  return (
    <AnimatedSection id="consultation">
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/20"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Header */}
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Book a Consultation
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Available daily from <strong>9 AM – 9 PM</strong> (local time)
          </p>
          <p className="text-base text-slate-500 mb-12">
            Consultation Fee: <strong>$500 per hour</strong>
          </p>

          {/* Embedded Calendar */}
          <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <iframe
              src={calendarLink}
              width="100%"
              height="700"
              frameBorder="0"
              allowFullScreen
              title="Consultation Calendar"
            ></iframe>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
