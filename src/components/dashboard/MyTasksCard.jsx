import React from 'react';
import { CheckSquare, ChevronRight, PhoneCall, Users, FileText } from 'lucide-react';
import { DASHBOARD_TASKS } from '../../data/mockData';

export default function MyTasksCard({ onSelectTask }) {
  const getIcon = (taskId) => {
    switch (taskId) {
      case 'w1':
        return <PhoneCall size={14} color="#0369a1" />;
      case 'w2':
        return <Users size={14} color="#7c3aed" />;
      case 'w3':
        return <FileText size={14} color="#b45309" />;
      default:
        return <CheckSquare size={14} color="#1d9e75" />;
    }
  };

  return (
    <div className="tasks-card">
      <div className="tasks-head">
        <CheckSquare size={16} color="#fcd34d" />
        <span className="tasks-title">My Tasks</span>
        <span className="tasks-badge">{DASHBOARD_TASKS.length}</span>
      </div>

      <div className="tasks-list">
        {DASHBOARD_TASKS.map((task) => (
          <div 
            key={task.id} 
            className="task-item"
            onClick={() => onSelectTask(task)}
            title={`Open task: ${task.title} (${task.actionPrompt})`}
          >
            <div className="task-icon-box" style={{ background: task.iconBg }}>
              {getIcon(task.id)}
            </div>

            <div className="task-text">
              <span className="task-name">{task.title}</span>
              <span className="task-detail">{task.sub}</span>
            </div>

            <ChevronRight size={14} color="#c0c0c0" />
          </div>
        ))}
      </div>
    </div>
  );
}
