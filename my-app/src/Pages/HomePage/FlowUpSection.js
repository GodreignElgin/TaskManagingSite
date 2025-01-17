import React from 'react';
import '../../Styles/HomePage/FlowUpSection.css';

function FlowUpSection() {
  const stats = [
    { icon: '🔄', value: '92%', label: 'Productivity growth' },
    { icon: '✅', value: '564', label: 'Tasks finished' },
    { icon: '👥', value: '124', label: 'Avg. team projects' },
    { icon: '📈', value: '64%', label: 'Revenue growth' },
  ];

  return (
    <section className="flowup-section">
      <h1 className='head'>WE ARE  FOLLOW UP</h1>
      <p className='para'>We are results-driven, and it shows. Take a look.</p>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <span className="icon">{stat.icon}</span>
            <span className="value">{stat.value}</span>
            <span className="label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlowUpSection;
