
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Speakers } from './components/Speakers';
import { Agenda } from './components/Agenda';
import { Registration } from './components/Registration';
import { Assistant } from './components/Assistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Agenda />
        
        {/* Statistics Section */}
        <section className="py-20 bg-indigo-600 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 L100 0 L100 100 Z" fill="white" />
            </svg>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-extrabold mb-2">50+</p>
                <p className="text-indigo-100 font-medium uppercase tracking-widest text-sm">Keynotes</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold mb-2">20k</p>
                <p className="text-indigo-100 font-medium uppercase tracking-widest text-sm">Attendees</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold mb-2">30+</p>
                <p className="text-indigo-100 font-medium uppercase tracking-widest text-sm">Countries</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold mb-2">100%</p>
                <p className="text-indigo-100 font-medium uppercase tracking-widest text-sm">Carbon Neutral</p>
              </div>
            </div>
          </div>
        </section>

        <Registration />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">GV</div>
                <span className="font-bold text-white text-xl">Vision 2025</span>
              </div>
              <p className="max-w-md mb-6 leading-relaxed">
                The premier international conference focused on building ethical, sustainable, and powerful technology for the next generation. Join us in Paris or virtually from anywhere in the world.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'Youtube'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
                <li><a href="#agenda" className="hover:text-white transition-colors">Full Schedule</a></li>
                <li><a href="#register" className="hover:text-white transition-colors">Tickets</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Venue & Travel</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>Email: info@globalvision2025.com</li>
                <li>Press: media@globalvision2025.com</li>
                <li>Sponsorship: sponsors@gv25.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 Global Vision Conference. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>

      <Assistant />
    </div>
  );
};

export default App;
