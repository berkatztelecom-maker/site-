
import React, { useState } from 'react';

export const Registration: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="register" className="py-24 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4">Registration Received!</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-lg mx-auto">
            We've sent a confirmation email with next steps. See you in Paris!
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-white text-indigo-600 font-bold rounded-xl transition-all hover:bg-indigo-50"
          >
            Register Another Person
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center text-white relative">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            <h2 className="text-4xl font-bold mb-6 relative z-10">Join the Conversation.</h2>
            <p className="text-slate-400 text-lg mb-8 relative z-10">
              Registration includes access to all sessions, networking events, workshops, and 12 months of post-event recordings.
            </p>
            <ul className="space-y-4 mb-8 relative z-10">
              {['Full Session Access', 'Workshop Materials', 'Gala Dinner Ticket', 'Post-event Recordings'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-indigo-600 p-6 rounded-2xl relative z-10">
              <p className="text-indigo-100 text-sm font-semibold uppercase mb-1">Standard Pass</p>
              <p className="text-3xl font-bold">€599 <span className="text-indigo-300 text-lg font-normal">/ early bird</span></p>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white p-12 lg:p-16">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input required type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Ticket Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all">
                  <option>Standard Pass - €599</option>
                  <option>Executive Pass - €999</option>
                  <option>Academic Pass - €299</option>
                  <option>Virtual Only - €99</option>
                </select>
              </div>
              <div className="pt-4">
                <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg active:scale-[0.98]">
                  Complete Registration
                </button>
                <p className="text-xs text-slate-400 mt-4 text-center">
                  By registering, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
