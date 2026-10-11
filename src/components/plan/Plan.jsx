import React, { useState } from 'react';
import PlanHeader from './PlanHeader';
import CallsToMake from './CallsToMake';
import IncomingCalls from './IncomingCalls';
import RecentCalls from './RecentCalls';
import CallSopReviewModal from './CallSopReviewModal';

export default function Plan({
  subTab = 'outgoing',
  onSelectSubTab,
  onPlaceCall,
  onOpenLeadDetail,
  onStartPracticeCall
}) {
  const [selectedReviewCall, setSelectedReviewCall] = useState(null);
  const [selectedReviewIdx, setSelectedReviewIdx] = useState(0);

  const handleSelectRecentCall = (idx, call) => {
    setSelectedReviewIdx(idx);
    setSelectedReviewCall(call);
  };

  return (
    <div className="plan-container">
      {/* Plan Header */}
      <PlanHeader 
        subTab={subTab}
        onSelectSubTab={onSelectSubTab}
        onStartPracticeCall={onStartPracticeCall}
      />

      {/* Main Tab Content */}
      <div className="plan-content-wrap">
        {subTab === 'outgoing' && (
          <CallsToMake 
            onPlaceCall={onPlaceCall}
            onOpenLeadDetail={onOpenLeadDetail}
          />
        )}

        {subTab === 'incoming' && (
          <IncomingCalls 
            onCallBack={onPlaceCall}
            onOpenLeadDetail={onOpenLeadDetail}
          />
        )}

        {subTab === 'recent' && (
          <RecentCalls 
            onSelectCall={handleSelectRecentCall}
          />
        )}
      </div>

      {/* Call SOP Review Modal */}
      {selectedReviewCall && (
        <CallSopReviewModal 
          call={selectedReviewCall}
          callIdx={selectedReviewIdx}
          onClose={() => setSelectedReviewCall(null)}
        />
      )}
    </div>
  );
}
