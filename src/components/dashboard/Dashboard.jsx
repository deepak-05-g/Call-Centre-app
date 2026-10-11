import React from 'react';
import DashboardHero from './DashboardHero';
import KpiCards from './KpiCards';
import ProgressBanner from './ProgressBanner';
import QueueList from './QueueList';
import EarningsCard from './EarningsCard';
import MyTasksCard from './MyTasksCard';
import SevenDayCharts from './SevenDayCharts';

export default function Dashboard({
  dateRange = 'This Week',
  onOpenDateRange,
  onOpenOgScore,
  onNavigatePlan,
  onCallLead,
  onSelectTask,
  onInspectLead
}) {
  return (
    <div className="dashboard-container">
      {/* Hero Section */}
      <div className="cc-hero">
        <DashboardHero 
          dateRange={dateRange}
          onOpenDateRange={onOpenDateRange}
        />
        <KpiCards 
          onOpenOgScore={onOpenOgScore}
          onNavigatePlan={onNavigatePlan}
        />
      </div>

      {/* Row 2: Two Column Grid */}
      <div className="dash-two-col" style={{ padding: '0 4px' }}>
        {/* Left Column: Progress + Who's waiting */}
        <div className="dash-col">
          <ProgressBanner />
          <QueueList 
            onNavigatePlan={onNavigatePlan}
            onCallLead={onCallLead}
            onInspectLead={onInspectLead}
          />
        </div>

        {/* Right Column: Earnings + My Tasks */}
        <div className="dash-col">
          <EarningsCard />
          <MyTasksCard 
            onSelectTask={onSelectTask}
          />
        </div>
      </div>

      {/* 7-Day Charts */}
      <div style={{ padding: '0 4px' }}>
        <SevenDayCharts />
      </div>
    </div>
  );
}
