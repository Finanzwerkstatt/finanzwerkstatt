"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f9f4ef] via-[#f5efe6] to-[#f1eadf] py-20">
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#d4a373]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#b07a4a]/10 rounded-full blur-3xl" />

      <section className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3f3a2f] mb-4">
            Kontaktiere mich
          </h1>
          <p className="text-[#6e6655] text-lg max-w-2xl mx-auto">
            Du hast Fragen, Anregungen oder möchtest mehr über die FinanzWerkstatt erfahren?
            Ich freue mich über deine Nachricht! ✉️
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 📬 Kontaktformular */}
          <form className="bg-[#fffaf3]/80 backdrop-blur-sm border border-[#e7d8c5]/50 rounded-2xl shadow-md p-8 space-y-5">
            <div>
              <label className="block text-[#3f3a2f] font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full bg-[#fffaf3] border border-[#e7d8c5] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                placeholder="Max Mustermann"
              />
            </div>

            <div>
              <label className="block text-[#3f3a2f] font-medium mb-1">E-Mail</label>
              <input
                type="email"
                className="w-full bg-[#fffaf3] border border-[#e7d8c5] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                placeholder="beispiel@gmail.com"
              />
            </div>

            <div>
              <label className="block text-[#3f3a2f] font-medium mb-1">Betreff</label>
              <input
                type="text"
                className="w-full bg-[#fffaf3] border border-[#e7d8c5] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                placeholder="Worum geht’s?"
              />
            </div>

            <div>
              <label className="block text-[#3f3a2f] font-medium mb-1">Nachricht</label>
              <textarea
                className="w-full bg-[#fffaf3] border border-[#e7d8c5] rounded-lg py-2 px-4 h-32 focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                placeholder="Deine Nachricht..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4a373] hover:bg-[#b07a4a] text-white font-medium py-2 rounded-full shadow transition"
            >
              Nachricht senden
            </button>
          </form>

          {/* 📞 Kontaktinfos */}
          <div className="flex flex-col justify-center bg-[#f5efe6]/70 rounded-2xl border border-[#e7d8c5]/40 shadow-inner p-8 space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-[#a6784f]" />
              <div>
                <h4 className="font-semibold text-[#3f3a2f]">E-Mail</h4>
                <p className="text-[#6e6655]">kontakt@finanzwerkstatt.at</p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <MapPin className="text-[#a6784f]" />
              <div>
                <h4 className="font-semibold text-[#3f3a2f]">Standort</h4>
                <p className="text-[#6e6655]">Wien, Österreich</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
