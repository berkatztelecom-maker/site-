
import React from 'react';
import { SPEAKERS } from '../constants';

export const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">World-Class Speakers</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Learn from the visionaries who are defining the next decade of technology and policy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPEAKERS.map((speaker) => (
            <div key={speaker.id} className="group relative bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{speaker.name}</h3>
                <p className="text-indigo-600 font-medium text-sm mb-3 uppercase tracking-wider">{speaker.role}</p>
                <p className="text-slate-500 text-sm mb-4 font-semibold">{speaker.company}</p>
                <p className="text-slate-600 text-sm line-clamp-3">{speaker.bio}</p>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="text-indigo-600 font-bold hover:text-indigo-700 underline underline-offset-4">
            View All 40+ Speakers
          </button>
        </div>
      </div>
    </section>
  );
};
