"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, X, ShieldCheck } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

interface Props {
  programTitle: string;
}

export default function ApplyModalTrigger({ programTitle }: Props) {
  const { t, lang } = useLanguage();
  const d = t.programDetail;
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    education: "12th Standard",
    location: "Chennai",
    statement: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center space-x-2 w-full py-3.5 px-4 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] active:scale-[0.98] transition-all shadow-sm"
      >
        <span>{d.applyBtn}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      {/* Accessible Application Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-5 relative shadow-2xl animate-in fade-in zoom-in-95 my-8">
            <button
              onClick={() => {
                setIsOpen(false);
                setSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#F68632] uppercase tracking-wider block">
                    {lang === "ta" ? "இலவச சேர்க்கை விண்ணப்பம்" : "Free Enrolment Application"}
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-[#231F20]">
                    {programTitle}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === "ta"
                      ? "இந்த எளிய படிவத்தை நிரப்பவும் (1 நிமிடத்திற்கும் குறைவான நேரம்). எங்கள் குழு உங்களைத் தொடர்பு கொள்ளும்."
                      : "Fill out this short form (takes under 1 minute). Our team will contact you for batch verification."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label htmlFor="modal-name" className="font-bold text-slate-800 block mb-1">
                      {lang === "ta" ? "முழு பெயர் *" : "Full Name *"}
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      required
                      placeholder={lang === "ta" ? "உங்கள் பெயரை உள்ளிடவும்" : "Enter your name"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-mobile" className="font-bold text-slate-800 block mb-1">
                        {lang === "ta" ? "கைபேசி எண் (WhatsApp) *" : "Mobile Number (WhatsApp) *"}
                      </label>
                      <input
                        id="modal-mobile"
                        type="tel"
                        required
                        placeholder={lang === "ta" ? "உங்கள் கைபேசி எண்" : "Enter your mobile number"}
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-email" className="font-bold text-slate-800 block mb-1">
                        {lang === "ta" ? "மின்னஞ்சல் முகவரி *" : "Email Address *"}
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        placeholder={lang === "ta" ? "உங்கள் மின்னஞ்சல்" : "Enter your email"}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="modal-edu" className="font-bold text-slate-800 block mb-1">
                        {lang === "ta" ? "உயர் கல்வித் தகுதி" : "Highest Qualification"}
                      </label>
                      <select
                        id="modal-edu"
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                      >
                        <option value="10th / 12th Standard">{lang === "ta" ? "10 / 12-ஆம் வகுப்பு" : "10th / 12th Standard"}</option>
                        <option value="Diploma / Polytechnic">{lang === "ta" ? "டிப்ளமோ / பாலிடெக்னிக்" : "Diploma / Polytechnic"}</option>
                        <option value="Undergraduate (Arts/Science/Engg)">{lang === "ta" ? "இளங்கலை பட்டம் (Arts/Science/Engg)" : "Undergraduate (Arts/Science/Engg)"}</option>
                        <option value="Homemaker / Career Break">{lang === "ta" ? "குடும்பத்தலைவி / தொழில் இடைவெளி" : "Homemaker / Career Break"}</option>
                        <option value="Other">{lang === "ta" ? "மற்றவை" : "Other"}</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="modal-city" className="font-bold text-slate-800 block mb-1">
                        {lang === "ta" ? "ஊர் / இருப்பிடம்" : "City / Location"}
                      </label>
                      <input
                        id="modal-city"
                        type="text"
                        placeholder={lang === "ta" ? "சென்னை / மற்ற ஊர்கள்" : "Chennai / Other"}
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="modal-statement" className="font-bold text-slate-800 block mb-1">
                      {lang === "ta" ? "இந்த திட்டத்தில் ஏன் இணைய விரும்புகிறீர்கள்?" : "Why do you want to join this program?"}
                    </label>
                    <textarea
                      id="modal-statement"
                      rows={2}
                      placeholder={lang === "ta" ? "உங்கள் தொழில் இலக்குகளைப் பற்றி சுருக்கமாகக் கூறவும்..." : "Briefly tell us about your career goals..."}
                      value={formData.statement}
                      onChange={(e) => setFormData({ ...formData, statement: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F68632]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#F68632] text-white font-bold text-sm hover:bg-[#E07418] transition-colors shadow-sm"
                    >
                      {lang === "ta" ? "இலவச விண்ணப்பத்தை சமர்ப்பிக்கவும்" : "Submit Free Application"}
                    </button>
                  </div>

                  <div className="flex items-center justify-center space-x-1 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>
                      {lang === "ta"
                        ? "முற்றிலும் இலவசம். உங்கள் தகவல் தனியுரிமைக் கொள்கையின்படி பாதுகாக்கப்படுகிறது."
                        : "Zero fee. Your information is strictly protected under our Privacy Policy."}
                    </span>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-extrabold text-xl text-[#231F20]">
                    {lang === "ta" ? "விண்ணப்பம் வெற்றிகரமாக பெறப்பட்டது!" : "Application Received Successfully!"}
                  </h3>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    {lang === "ta" ? (
                      <>நன்றி, <strong>{formData.name}</strong>. எங்கள் மாணவர் வழிகாட்டல் குழுவினர் 2 வேலை நாட்களுக்குள் <strong>{formData.mobile}</strong> எண்ணில் உங்களைத் தொடர்புகொள்வார்கள்.</>
                    ) : (
                      <>Thank you, <strong>{formData.name}</strong>. Our student counseling team will reach out to you via WhatsApp / Phone at <strong>{formData.mobile}</strong> within 2 business days.</>
                    )}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-lg bg-[#231F20] text-white font-semibold text-xs hover:bg-slate-800"
                >
                  {lang === "ta" ? "முடிந்தது" : "Done"}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
