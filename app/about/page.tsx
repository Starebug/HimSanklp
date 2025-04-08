import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16 bg-black text-white">
      {/* Header Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          About HimSankalpx
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Empowering citizens by enabling seamless reporting and resolution of local issues across India.
        </p>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-800 pb-2">
          🌟 Key Features
        </h2>
        <ul className="space-y-4 list-disc pl-5 text-gray-200">
          <li>Pinpoint issue location with Google Maps integration</li>
          <li>Upload images or videos to support your report</li>
          <li>Track issues with real-time updates and status</li>
          <li>Government dashboards with analytics and trends</li>
          <li>Easy-to-use interface accessible on all devices</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-800 pb-2">
          🙋 Frequently Asked Questions
        </h2>
        <div className="space-y-6 text-gray-200">
          {[
            {
              q: "How do I report an issue?",
              a: "Go to the Report Issue page, fill the form, and pinpoint the location on the map.",
            },
            {
              q: "How can I track my issue?",
              a: "Use the Track page by entering your report ID to check the latest updates.",
            },
            {
              q: "Can I edit a submitted issue?",
              a: "No, but you can submit a follow-up or contact local officials directly.",
            },
          ].map(({ q, a }, index) => (
            <div key={index}>
              <p className="font-semibold text-white">{q}</p>
              <p className="text-gray-400">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-blue-800 pb-2">
          👥 Meet the Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {[
            { name: "Kartik Shivhare", role: "Frontend Developer", img: "/team1.jpg" },
            { name: "Aayush Thakur", role: "Backend Developer", img: "/team2.jpg" },
            { name: "Sakshi Rana", role: "UI/UX Designer", img: "/team3.jpg" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-600">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>
              <p className="font-bold text-white">{member.name}</p>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm border-t border-zinc-800 pt-6">
        © {new Date().getFullYear()} HimSankalp. Crafted with ❤️ by the team.
      </footer>
    </main>
  );
}
