
import React, { useState } from 'react';
import { AGENDA, SPEAKERS } from '../constants';

export const Agenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section id="agenda" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Event Schedule</h2>
            <p className="text-slate-600 max-w-xl">
              From keynotes to hands-on workshops, we have curated a diverse selection of sessions for every professional level.
            </p>
          </div>
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-200">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeDay === day ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {AGENDA.map((session) => {
            const speaker = SPEAKERS.find(s => s.id === session.speakerId);
            return (
              <div key={session.id} className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-indigo-200 transition-all shadow-sm hover:shadow-md">
                <div className="md:w-48 bg-slate-50 p-6 flex flex-col justify-center items-center text-center border-r border-slate-100">
                  <span className="text-xl font-bold text-slate-900">{session.time}</span>
                  <span className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-widest underline underline-offset-4 decoration-indigo-400">GMT+1</span>
                </div>
                <div className="flex-1 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      session.track === 'Technical' ? 'bg-blue-100 text-blue-700' :
                      session.track === 'Business' ? 'bg-green-100 text-green-700' :
                      session.track === 'Future' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {session.track}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{session.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{session.description}</p>
                  
                  {speaker && (
                    <div className="flex items-center gap-4">
                      <img src={speaker.image} alt={speaker.name} className="w-10 h-10 rounded-full object-cover border-2 border-slate-100" />
                      <div>
                        <p className="text-sm font-bold text-slate-900">{speaker.name}</p>
                        <p className="text-xs text-slate-500">{speaker.role}, {speaker.company}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
