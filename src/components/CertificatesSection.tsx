import React, { useState } from "react";
import { CERTIFICATES, Certificate, PERSONAL_INFO } from "../data/portfolioData";
import { Award, ShieldCheck, CheckCircle2, ExternalLink, X, FileCheck, Calendar } from "lucide-react";

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 bg-slate-950 relative text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono tracking-widest uppercase mb-4">
            <Award className="w-3.5 h-3.5" />
            Academic & Professional Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-sky-300 to-indigo-400">Verifications</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-400 text-sm sm:text-base leading-relaxed">
            Verified qualifications in Deep Learning, Data Science, Offensive Cybersecurity, and Enterprise Systems Engineering.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between cursor-pointer space-y-4 group relative overflow-hidden"
            >
              {/* Badge strip */}
              <div className={`absolute top-0 right-0 w-28 h-1 bg-gradient-to-r ${cert.badgeColor}`} />

              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <span className="text-xs font-mono text-emerald-300 font-semibold">
                      {cert.issuer}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-sky-400" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="mt-2 text-gray-300 text-xs leading-relaxed">
                  {cert.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-900 text-[10px] font-mono text-sky-300 border border-sky-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs font-mono text-emerald-400 group-hover:text-emerald-300">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> ID: {cert.credentialId}
                  </span>
                  <span>View Details &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in-long">
          <div className="w-full max-w-xl rounded-2xl glass-panel border border-emerald-500/40 p-6 sm:p-8 bg-slate-950 text-gray-200 relative shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 p-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                  Verified Credential
                </span>
                <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-gray-800 space-y-2 text-xs font-mono">
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Issuing Institution:</span>
                <span className="text-sky-300">{selectedCert.issuer}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-800">
                <span className="text-gray-400">Credential Reference ID:</span>
                <span className="text-emerald-400">{selectedCert.credentialId}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-400">Date Issued:</span>
                <span className="text-white">{selectedCert.date}</span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {selectedCert.summary}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <a
                href={selectedCert.verificationUrl || PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold transition-all"
              >
                Verify on LinkedIn / Record
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 text-xs font-mono"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
