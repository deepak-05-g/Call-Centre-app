export const PULSE_INTERNAL_THREADS = {
  'Call Centre Team': { title:'#callcentre-team', dateLabel:'Today · Call Centre Team', messages:[
      {who:'Sunita Rao', init:'SR', bg:'#faeeda', color:'#854f0b', text:'👥 <b>STAKEHOLDERS:</b> <b style="color:#854f0b">@You (Arvind R.)</b>, whole call centre shift', time:'2:05pm'},
      {who:'Sunita Rao', init:'SR', bg:'#faeeda', color:'#854f0b', text:'📋 <b>ISSUE DEFINITION:</b> Greeting-in-first-10s QA score is at 71% this week, below our 85% target.', time:'2:05pm'},
      {who:'Sunita Rao', init:'SR', bg:'#faeeda', color:'#854f0b', text:'➡️ <b>SUGGESTED RESOLUTION:</b> Let\'s push that up 💪 — open every call with the greeting script. I\'ll check back Friday.', time:'2:05pm'},
      {who:'You', init:'AR', text:'On it! Will make sure I open every call with the greeting script 🙌', time:'2:10pm'},
      {who:'Sunita Rao', init:'SR', bg:'#faeeda', color:'#854f0b', text:'Great attitude Arvind 🌟', time:'2:14pm'}
    ]},
  'All Stores': { title:'#all-stores', dateLabel:'Today · All Stores', messages:[
      {who:'Manager Helper', init:'📢', bg:'#e8f0fe', color:'#1d4ed8', isBot:true, text:'New Ortho Grid campaign live from 1 June — ask customers about the bundled EMI offer!', time:'10:22am'}
    ]},
  'Avani AI Coaching': { title:'#avani-coaching', dateLabel:'Today · Avani AI Coaching', messages:[
      {who:'Avani', init:'✨', bg:'#e1f5ee', color:'#0f6e56', isBot:true, text:'Your average handle time is up 8% this week — try confirming the customer\'s need in your first question instead of after the pitch.', time:'9:01am'}
    ]},
  'Manage Shipment': { title:'#manage-shipment', dateLabel:'Today · Manage Shipment', messages:[
      {who:'Shipping Agent', init:'📦', bg:'#e8f0fe', color:'#185fa5', isBot:true, time:'10:05am',
        card:{icon:'📦', title:'Shipping Notifications', badge:'Ready for delivery ✓',
          fields:[['Model','Ortho Grid Pro, King'],['Tracking','4RS4DDF6549B4'],['Destination','RT Nagar, Bengaluru']],
          actions:[{label:'View details'},{label:'Notify customer', style:'primary'}]}}
    ]},
  'Quotation Tickets': { title:'#quotation-tickets', dateLabel:'Today · Quotation Tickets', messages:[
      {who:'Ticket Desk Agent', init:'🎫', bg:'#fdecec', color:'#e24b4a', isBot:true, time:'9:12am',
        card:{icon:'📝', title:'Quotation approval — Mukunda R.', badge:'Awaiting approval',
          fields:[['Product','Ortho Grid Pro, bundled'],['Value','₹58,000'],['Raised by','You']],
          actions:[{label:'View lead', onclick:"closePulseChat();openLeadsModal()"}]}}
    ]},
  'New Hire Onboarding': { title:'#new-hire-onboarding', dateLabel:'Today · New Hire Onboarding', messages:[
      {who:'Onboarding Agent', init:'👋', bg:'#e1f5ee', color:'#0a7d4f', isBot:true, time:'8:30am',
        card:{icon:'🎉', title:'Welcome to the team!',
          fields:[['SOP training','Starts today, 3:00pm'],['Buddy manager','Sunita Rao']],
          actions:[{label:'Get started', style:'primary', onclick:"closePulseChat();pulseTabs('channels')"}]}}
    ]},
  'Sunita Rao': { title:'Sunita Rao', dateLabel:'Today', messages:[
      {who:'Sunita Rao', init:'SR', bg:'#faeeda', color:'#854f0b', text:'🌟 Great work with Mukunda — keep it up', time:'12:40pm'}
    ]},
  'Priya Krishnan': { title:'Priya Krishnan', dateLabel:'Today', messages:[
      {who:'Priya Krishnan', init:'PK', bg:'#fdecec', color:'#a32d2d', text:'Can you cover my 3pm slot today?', time:'9:55am'}
    ]},
  'Raju Kumar': { title:'Raju Kumar', dateLabel:'Yesterday', messages:[
      {who:'Raju Kumar', init:'RK', bg:'#e1f5ee', color:'#0f6e56', text:'Nice cross-sell on the Tranquo chair! 🔥', time:'Yesterday'}
    ]},
  'AvaniBot': { title:'AvaniBot', dateLabel:'Today', messages:[
      {who:'AvaniBot', init:'✨', bg:'#f1ecff', color:'#7c3aed', isBot:true, text:'Hey! I\'m AvaniBot ✨ Ask me things like <b>"what are my action items from Sunita"</b>, or tap the ✨ icon inside any channel to search just that channel.', time:'9:00am'}
    ]},
  'Skill Improvement Coach': {
    title: '#skill-improvement',
    dateLabel: 'Today · Skill Improvement Coach',
    messages: [
      {
        who: 'Skill Improvement Coach',
        init: '🎯',
        bg: '#ede9fe',
        color: '#6d28d9',
        isBot: true,
        text: '👥 <b>STAKEHOLDERS:</b> You, plus your Store Manager and L&D once you share something for feedback.<br><br>📋 <b>ISSUE DEFINITION:</b> I\'m ready whenever you want to get sharper at something — warranty pitch, objection handling, EMI close.<br><br>➡️ <b>SUGGESTED RESOLUTION:</b> Tell me which skill and I\'ll pull a model example, set up a place to practice, and get you feedback.',
        time: '9:00am'
      }
    ]
  },
  'My SOP Coach': {
    title: '#sop-coach',
    dateLabel: 'Today · My SOP Coach',
    messages: [
      {
        who: 'My SOP Coach',
        init: '📋',
        bg: '#e0e7ff',
        color: '#3730a3',
        isBot: true,
        text: '👥 <b>STAKEHOLDERS:</b> You, with your Store Manager and L&D looped in if it doesn\'t improve.<br><br>📋 <b>ISSUE DEFINITION:</b> Your weakest step this week is the warranty pitch — mentioned in only 2 of your last 5 conversations.<br><br>➡️ <b>SUGGESTED RESOLUTION:</b> I\'m sending you a ready-to-use script for it now. If it\'s still your weakest step by Friday, I\'ll loop in your Store Manager.',
        time: '8:45am'
      }
    ]
  },
  'Recognition Bot': {
    title: '#recognition-bot',
    dateLabel: 'Today · Recognition Bot',
    messages: [
      {
        who: 'Recognition Bot',
        init: '🏆',
        bg: '#fef3c7',
        color: '#b45309',
        isBot: true,
        text: '👥 <b>STAKEHOLDERS:</b> You and Sunita (Store Manager).<br><br>📋 <b>ISSUE DEFINITION:</b> Nice save on that price objection today — that\'s the kind of recovery that keeps a sale alive.<br><br>➡️ <b>SUGGESTED RESOLUTION:</b> Flagging it to Sunita right now so it doesn\'t get lost in her day.',
        time: 'Yesterday'
      }
    ]
  },
  'customer-discussions': {
    title: '#customer-discussions',
    dateLabel: 'Today · WhatsApp Business Relay',
    messages: [
      {
        who: 'Mukunda R.',
        init: 'MK',
        bg: '#dcfce7',
        color: '#15803d',
        text: 'Hi, is the Ortho GRID mattress in stock in King size?',
        time: '2:12pm'
      },
      {
        who: 'You',
        init: 'AR',
        text: 'Yes Mukunda! We have King size in stock. Sending you the quote with free delivery and 10-year warranty 👍',
        time: '2:18pm'
      },
      {
        who: 'WhatsApp Relay',
        init: '💬',
        bg: '#dcfce7',
        color: '#166534',
        isBot: true,
        text: 'System: Quote for Ortho GRID King (₹34,999) sent via WhatsApp.',
        time: '2:19pm'
      },
      {
        who: 'Mukunda R.',
        init: 'MK',
        bg: '#dcfce7',
        color: '#15803d',
        text: 'Ok let me check with my wife and get back by 4:30pm.',
        time: '2:40pm'
      }
    ]
  }
};

export const AVANI_ACTION_ITEMS_STAFF = {
  sunita: { name: 'Sunita Rao', items: ['Approve your quote for Mukunda — flagged waiting since yesterday'], source: 'DM with Sunita Rao' },
  priya: { name: 'Priya Krishnan', items: ['Cover her 3pm slot today — she asked this morning'], source: 'DM with Priya Krishnan' },
  raju: { name: 'Raju Kumar', items: ['No open action items — he just sent you kudos ✓'], source: 'DM with Raju Kumar' }
};

export const STAFF_AGENT_TASKS = {
  skillimprovement: {
    icon:'🎯', title:'Skill Improvement Coach', sub:'Practice & feedback agent',
    gradient:'linear-gradient(135deg,#5b21b6,#7c3aed)',
    desc:'Pick a skill you want to get sharper at — warranty pitch, objection handling, EMI close — and get a model example of what great looks like, a place to practice, and a way to get feedback from your manager or L&D.',
    defaultStakeholders:'Store Manager, L&D, ASM',
    openingQuestion:'👥 <b>STAKEHOLDERS:</b> You, plus your Store Manager and L&D once you share something for feedback.<br><br>📋 <b>ISSUE DEFINITION:</b> I\'m ready whenever you want to get sharper at something — warranty pitch, objection handling, EMI close.<br><br>➡️ <b>SUGGESTED RESOLUTION:</b> Tell me which skill and I\'ll pull a model example, set up a place to practice, and get you feedback.'
  },
  sopcoach: {
    icon:'📋', title:'My SOP Coach', sub:'Personal coaching agent',
    gradient:'linear-gradient(135deg,#1e1b4b,#4338ca)',
    desc:'Every day, finds your weakest SOP step from your own conversations and sends you a ready-to-use line to fix it — a personal coach that never sleeps.',
    defaultStakeholders:'Store Manager, L&D',
    openingQuestion:'👥 <b>STAKEHOLDERS:</b> You, with your Store Manager and L&D looped in if it doesn\'t improve.<br><br>📋 <b>ISSUE DEFINITION:</b> Your weakest step this week is the warranty pitch — mentioned in only 2 of your last 5 conversations.<br><br>➡️ <b>SUGGESTED RESOLUTION:</b> I\'m sending you a ready-to-use script for it now. If it\'s still your weakest step by Friday, I\'ll loop in your Store Manager.'
  },
  kudos: {
    icon:'🏆', title:'Recognition Bot', sub:'Kudos automation agent',
    gradient:'linear-gradient(135deg,#7a4a00,#c8860a)',
    desc:'Flags your wins to your manager automatically — great saves, cross-sells, warranty pitches landed — so recognition happens even on your manager\'s busiest days.',
    defaultStakeholders:'Store Manager',
    openingQuestion:'👥 <b>STAKEHOLDERS:</b> You and Sunita (Store Manager).<br><br>📋 <b>ISSUE DEFINITION:</b> Nice save on that price objection today — that\'s the kind of recovery that keeps a sale alive.<br><br>➡️ <b>SUGGESTED RESOLUTION:</b> Flagging it to Sunita right now so it doesn\'t get lost in her day.'
  }
};

export const STAFF_VERTICAL_AGENT_CHANNELS = [
  {id:'emi-push-nudges', name:'emi-push-nudges', agent:'EMI Push Nudge', icon:'💳', meta:'EMI mentioned in 4/11 calls this shift (36%) — below target', time:'Just now', badge:1, active:true}
];

export const PULSE_CUSTOMER_DATA = {
  'Mukunda': { initials:'MK', avatarBg:'#0f6e56', phone:'+91 98765 43210', status:'Hot Lead', missed:false,
    thread:[
      {from:'customer', ch:'wa', text:'Hi, is the Ortho GRID mattress in stock in Queen size?', time:'2:12pm'},
      {from:'staff', ch:'wa', text:'Yes it is! Sending you the quote now 👍', time:'2:18pm'},
      {from:'system', ch:'wa', text:'Quote for Ortho GRID (₹8,490) sent', time:'2:19pm'},
      {from:'customer', ch:'wa', text:'Ok let me check with my wife and get back', time:'2:40pm'}
    ]},
  'Kavitha R.': { initials:'KR', avatarBg:'#c8860a', phone:'+91 97654 32109', status:'Ageing · SLA at risk', missed:false,
    thread:[
      {from:'customer', ch:'wa', text:'When can I come see the hybrid mattress?', time:'11:02am'},
      {from:'staff', ch:'call', text:'Called to confirm visit slot', time:'11:10am', callDuration:'1m 40s', callStatus:'Answered'},
      {from:'customer', ch:'wa', text:'When can I come see the hybrid mattress?', time:'11:15am'}
    ]},
  'Ali': { initials:'AL', avatarBg:'#c0392b', phone:'+91 90000 11122', status:'Missed call · not returned', missed:true,
    thread:[
      {from:'customer', ch:'call', text:'Incoming call', time:'9:40am', callDuration:'—', callStatus:'Missed'},
      {from:'system', ch:'wa', text:'Auto-reply sent: "Sorry we missed you, we will call back shortly"', time:'9:41am'}
    ]}
};

export const LEADS_MODAL_DATA_RETAIL = [
  {
    name:'Mukunda', initials:'MK', avatarBg:'#e1f5ee', avatarColor:'#0f6e56',
    interest:'Interested: Ortho GRID · ₹8,490',
    product:'Ortho GRID Mattress', crossSell:'Mattress Protector · ₹1,999', emi:'Asked about EMI — quote the 12-month zero-interest plan',
    attractivenessScore:90, expectedValue:8490,
    badge:'2h left', badgeBg:'#e1f5ee', badgeColor:'#0f6e56',
    statusLabel:'Open', statusColor:'#1d9e75',
    quoteOn:true,
    icp:87, icpColor:'#1d9e75',
    intentScore:91,
    subscores:[{label:'Budget Fit',pct:87,color:'#1d9e75'},{label:'Need Match',pct:72,color:'#c8860a'},{label:'Decision Stage',pct:60,color:'#7c3aed'}],
    slaNote:null,
    notes:['Asked about EMI on the Ortho GRID — lead with the 12-month zero-interest plan.','Price-sensitive — compared us with a competitor, so mention the 100-night trial to reduce risk.','Prefers evening calls, after 6pm.'],
    problemBuckets:[
      {cat:'Financing Related', text:'Asked specifically about EMI options on the Ortho GRID — budget is a live concern, not a blocker'},
      {cat:'Quotation Demanded', text:'Compared pricing with a competitor before reaching out — price-anchored, expects a competitive number'},
      {cat:'Warranty Related', text:'Hasn\'t raised this yet — worth proactively mentioning the 100-night trial to reduce perceived risk'}
    ],
    journey:[
      {date:'18 May',channel:'Meta Ad',icon:'📢',color:'#1877f2',text:'Clicked our "0% EMI on Ortho GRID" retargeting ad — first touch'},
      {date:'20 May',channel:'AI Agent',icon:'🤖',color:'#7c3aed',text:'WhatsApp opt-in — shared preferred size'},
      {date:'22 May',channel:'Voice AI',icon:'🎙️',color:'#7c3aed',text:'4m 12s qualifying call — asked if pillows come bundled'},
      {date:'24 May',channel:'WhatsApp',icon:'💬',color:'#25D366',text:'Asked for a quote with pillows bundled in'}
    ],
    phone:'+91 98765 43210',
    actions:'open'
  },
  {
    name:'Kavitha R.', initials:'KR', avatarBg:'#fff8e1', avatarColor:'#c8860a',
    interest:'Interested: SmartGRID Hybrid · ₹24,990',
    product:'SmartGRID Hybrid Mattress', crossSell:'Cooling Pillow Set · ₹2,499', emi:'Budget borderline — a payment plan could tip this',
    attractivenessScore:55, expectedValue:24990,
    badge:'+3d ageing', badgeBg:'#fff8e1', badgeColor:'#c8860a',
    statusLabel:'Ageing', statusColor:'#c8860a',
    quoteOn:false,
    icp:61, icpColor:'#c8860a',
    intentScore:63,
    subscores:[{label:'Budget Fit',pct:61,color:'#c8860a'},{label:'Need Match',pct:42,color:'#e24b4a'},{label:'Decision Stage',pct:35,color:'#7c3aed'}],
    slaNote:'SLA missed — 5 days grace left to close',
    notes:['SLA already missed — open with an apology for the delay, not a sales pitch.','Low Need Match (42%) — re-confirm the SmartGRID Hybrid is still the right fit before pushing further.',"Hasn't responded to the last 2 WhatsApp messages — try a call instead."],
    problemBuckets:[
      {cat:'Product Related', text:'Uncertain whether SmartGRID Hybrid actually fits her need — Need Match score is low (42%), worth re-confirming fit before pushing further'},
      {cat:'In-Store Experience Needed', text:'Hasn\'t responded to WhatsApp — may prefer to see/feel the product before deciding, worth inviting her back in'},
      {cat:'Financing Related', text:'Budget fit is borderline (61%) — a payment plan or bundle discount could tip this'}
    ],
    journey:[
      {date:'12 May',channel:'Google Ad',icon:'🔍',color:'#ea4335',text:'Searched "cooling gel mattress bangalore", clicked our top search ad'},
      {date:'15 May',channel:'AI Agent',icon:'🤖',color:'#7c3aed',text:'WhatsApp auto-reply engaged — confirmed interest in the cooling gel layer'},
      {date:'19 May',channel:'WhatsApp',icon:'💬',color:'#25D366',text:'Asked to hold the price for 2 days, went quiet since'}
    ],
    phone:'+91 97654 32109',
    actions:'ageing'
  },
  {
    name:'Faizan A.', initials:'FA', avatarBg:'#e8f0fe', avatarColor:'#185fa5',
    interest:'Interested: Tranquo Massager Chair · ₹24,990',
    product:'Tranquo Massager Chair', crossSell:'Ergo Seat Cushion · ₹1,299', emi:'Confirmed he wants the 6-month no-cost EMI plan',
    attractivenessScore:88, expectedValue:24990,
    badge:'Confirmed date', badgeBg:'#e1f5ee', badgeColor:'#0f6e56',
    statusLabel:'Open', statusColor:'#1d9e75',
    quoteOn:true,
    icp:82, icpColor:'#1d9e75',
    intentScore:85,
    subscores:[{label:'Budget Fit',pct:82,color:'#1d9e75'},{label:'Need Match',pct:78,color:'#1d9e75'},{label:'Decision Stage',pct:70,color:'#c8860a'}],
    slaNote:null,
    notes:['Confirmed Monday as the day he\'ll decide — call back then, don\'t let this go quiet.','Wants the 6-month no-cost EMI plan — have the paperwork ready.','Already compared with a competitor and preferred our warranty terms.'],
    problemBuckets:[
      {cat:'Financing Related', text:'Explicitly asked for the no-cost EMI plan — ready to commit if financing is confirmed'},
      {cat:'Warranty Related', text:'Compared warranty terms with a competitor and preferred ours — reinforce this on the call'}
    ],
    journey:[
      {date:'2 Jun',channel:'Store Visit',icon:'🏬',color:'#0f6e56',text:'Tried the chair in-store, asked detailed questions on massage programs'},
      {date:'4 Jun',channel:'Call',icon:'📞',color:'#185fa5',text:'6m 40s call — confirmed budget and asked about EMI'}
    ],
    phone:'+91 96543 21098',
    actions:'open'
  },
  {
    name:'Ritu S.', initials:'RS', avatarBg:'#fdf1e0', avatarColor:'#c2410c',
    interest:'Interested: Smart Luxe Mattress · ₹13,390',
    product:'Smart Luxe Mattress', crossSell:'Mattress Protector · ₹1,999', emi:'Not yet discussed — surface it early, she asked about total cost',
    attractivenessScore:96, expectedValue:13390,
    badge:'Hot lead', badgeBg:'#e1f5ee', badgeColor:'#0f6e56',
    statusLabel:'Open', statusColor:'#1d9e75',
    quoteOn:true,
    icp:94, icpColor:'#1d9e75',
    intentScore:96,
    subscores:[{label:'Budget Fit',pct:90,color:'#1d9e75'},{label:'Need Match',pct:88,color:'#1d9e75'},{label:'Decision Stage',pct:85,color:'#1d9e75'}],
    slaNote:null,
    notes:['Asked "how soon can this be delivered" — very high buying signal, close fast.','Already visited the RT Nagar store last week.','Has this lead in CRM from a prior visit — high expected value.'],
    problemBuckets:[
      {cat:'Quotation Demanded', text:'Asked for delivery timeline immediately — ready to commit once price is confirmed'}
    ],
    journey:[
      {date:'28 May',channel:'Store Visit',icon:'🏬',color:'#0f6e56',text:'Visited RT Nagar store, tried the Smart Luxe in person'},
      {date:'30 May',channel:'Missed Call',icon:'📵',color:'#e24b4a',text:'Called back after store visit, missed — needs a callback'}
    ],
    phone:'+91 98450 00001',
    actions:'open'
  },
  {
    name:'Divya P.', initials:'DP', avatarBg:'#f2f2f7', avatarColor:'#6b6b74',
    interest:'Browsing: Aura Executive Chair · ₹18,490',
    product:'Aura Executive Chair', crossSell:'Ergo Seat Cushion · ₹1,299', emi:'Not discussed — low priority to raise financing yet',
    attractivenessScore:38, expectedValue:18490,
    badge:'Low signal', badgeBg:'#f2f2f7', badgeColor:'#6b6b74',
    statusLabel:'Cold', statusColor:'#8e8e93',
    quoteOn:false,
    icp:34, icpColor:'#e24b4a',
    intentScore:38,
    subscores:[{label:'Budget Fit',pct:40,color:'#e24b4a'},{label:'Need Match',pct:35,color:'#e24b4a'},{label:'Decision Stage',pct:20,color:'#e24b4a'}],
    slaNote:null,
    notes:['Gave one-word replies on the last call — low engagement.',"Said she's \"just looking around\" — treat as low priority this week."],
    problemBuckets:[
      {cat:'In-Store Experience Needed', text:'Vague, non-committal answers — may need to see the product before engaging further'}
    ],
    journey:[
      {date:'1 Jun',channel:'Website',icon:'🌐',color:'#8e8e93',text:'Browsed chair category, no form filled'}
    ],
    phone:'+91 90000 44556',
    actions:'ageing'
  }
];

export const LEADS_MODAL_DATA_HEALTH = [
  {
    name:'Mukunda', initials:'MK', avatarBg:'#e1f5ee', avatarColor:'#0f6e56',
    interest:'Post-discharge follow-up \u00b7 BP review',
    product:'Medication Adherence Check', crossSell:'Book BP review visit', emi:'Escalate to doctor if new symptoms reported',
    attractivenessScore:91, expectedValue:0,
    badge:'2h left', badgeBg:'#e1f5ee', badgeColor:'#0f6e56',
    statusLabel:'Open', statusColor:'#1d9e75',
    quoteOn:true,
    icp:87, icpColor:'#1d9e75',
    intentScore:91,
    subscores:[{label:'Medication Adherence',pct:87,color:'#1d9e75'},{label:'Symptom Risk',pct:72,color:'#c8860a'},{label:'Follow-up Urgency',pct:60,color:'#7c3aed'}],
    slaNote:null,
    notes:['Missed his last two medication reminders \u2014 confirm BP tablets are being taken as prescribed.','Ask about dizziness, swelling, or chest discomfort before ending the call.','Prefers evening calls, after 6pm.'],
    problemBuckets:[
      {cat:'Medication Adherence', text:'Missed his last two medication reminders \u2014 confirm BP tablets are being taken as prescribed since discharge'},
      {cat:'New Symptoms', text:'Not yet asked about dizziness, swelling, or chest discomfort this week'},
      {cat:'Follow-up Booking', text:'Hasn\'t booked his next BP review yet \u2014 offer a slot before ending the call'}
    ],
    journey:[
      {date:'18 May',channel:'Discharge',icon:'\ud83c\udfe5',color:'#0f6e56',text:'Discharged after BP admission \u2014 medication and follow-up plan shared'},
      {date:'20 May',channel:'Helpline Call',icon:'\ud83d\udcde',color:'#7c3aed',text:'Follow-up call \u2014 confirmed he collected his prescription'},
      {date:'24 May',channel:'WhatsApp',icon:'\ud83d\udcac',color:'#25D366',text:'Asked when his next review appointment should be'}
    ],
    phone:'+91 98765 43210',
    actions:'open'
  },
  {
    name:'Kavitha R.', initials:'KR', avatarBg:'#fff8e1', avatarColor:'#c8860a',
    interest:'Diabetes follow-up \u00b7 overdue',
    product:'Diabetes Follow-up Check', crossSell:'Book HbA1c retest', emi:'Escalate to endocrinology if readings stay high',
    attractivenessScore:63, expectedValue:0,
    badge:'+3d ageing', badgeBg:'#fff8e1', badgeColor:'#c8860a',
    statusLabel:'Ageing', statusColor:'#c8860a',
    quoteOn:false,
    icp:61, icpColor:'#c8860a',
    intentScore:63,
    subscores:[{label:'Medication Adherence',pct:61,color:'#c8860a'},{label:'Symptom Risk',pct:42,color:'#e24b4a'},{label:'Follow-up Urgency',pct:35,color:'#7c3aed'}],
    slaNote:'SLA missed \u2014 5 days grace left to close',
    notes:['Follow-up already overdue \u2014 open with an apology for the delay, not a routine reminder.','Home sugar-log readings not yet confirmed \u2014 check she\'s still logging daily.','Hasn\'t responded to the last 2 WhatsApp messages \u2014 try a call instead.'],
    problemBuckets:[
      {cat:'Follow-up Overdue', text:'Diabetes review is 2 weeks overdue \u2014 her last HbA1c reading was borderline high'},
      {cat:'Home Readings', text:'Hasn\'t confirmed she\'s still logging sugar levels at home \u2014 worth checking before the visit'},
      {cat:'Lab Work', text:'HbA1c retest not yet booked \u2014 get fresh numbers before her next review'}
    ],
    journey:[
      {date:'12 May',channel:'Ward Visit',icon:'\ud83c\udfe5',color:'#0f6e56',text:'Diabetes review \u2014 HbA1c came back borderline high'},
      {date:'15 May',channel:'Helpline Call',icon:'\ud83d\udcde',color:'#7c3aed',text:'Follow-up call \u2014 confirmed she understood the diet advice'},
      {date:'19 May',channel:'WhatsApp',icon:'\ud83d\udcac',color:'#25D366',text:'Asked to reschedule this week\'s check, went quiet since'}
    ],
    phone:'+91 97654 32109',
    actions:'ageing'
  }
];

export const LEAD_SOP_CHECK_DATA_RETAIL = {
  'Mukunda': {
    initials: 'MK', phone: '+91 98765 43210',
    product: {
      emoji:'🛏️', name:'Smart Ortho GRID Mattress', price:'₹8,490', orig:'₹14,490',
      why:'Highest-intent product in this thread and he\'s price-sensitive — lead with GRID technology and value, not the luxury range.',
      pitch:'"Since back support and budget both matter here, the Ortho GRID is built exactly for that — GRID tech for spinal alignment, and it\'s ₹6,000 lighter on the wallet than the Hybrid, with the same 10-year warranty and 100-night trial."',
      cross: {emoji:'💊', name:'Smart Pillow · ₹1,499', line:'"Pair it with our Smart Pillow — it aligns the neck the same way the GRID aligns the spine. Most Ortho GRID buyers add it at checkout."'},
      emi: {plan:'12-month zero-interest EMI', monthly:'₹708/mo', line:'"That\'s just ₹708 a month, zero interest — lock today\'s price before the offer ends."'}
    },
    items: [
      {title:'Quotation Demanded', sub:'Asked for pricing / EMI breakdown on the Ortho GRID', hit:true},
      {title:'Financing Related', sub:'Price-sensitive, compared with a competitor — lead with the 12-month zero-interest plan', hit:true},
      {title:'Product Related', sub:'No open questions on firmness or fit', hit:false},
      {title:'Warranty Related', sub:'Mention the 100-night trial proactively — reduces their risk', hit:true},
      {title:'In-Store Experience Needed', sub:'Hasn\'t asked to visit a store yet', hit:false}
    ]
  },
  'Kavitha R.': {
    initials: 'KR', phone: '+91 97654 32109',
    product: {
      emoji:'🛏️', name:'SmartGRID Hybrid Mattress', price:'₹24,990', orig:'₹34,990',
      why:'Already warm on the Hybrid from the last call — she needs confidence on financing, not a fresh pitch.',
      pitch:'"You were right to like the Hybrid — it\'s our best-rated for firmness plus pressure relief, and it comes with the same 10-year warranty and 100-night trial as every SmartGRID mattress."',
      cross: {emoji:'🛡️', name:'Mattress Protector · ₹1,999', line:'"I\'d also add the Mattress Protector — it keeps the warranty valid and protects the investment from day one."'},
      emi: {plan:'24-month zero-interest EMI', monthly:'₹1,041/mo', line:'"On 24-month EMI that\'s ₹1,041 a month — I can start it from next month so today\'s price is locked in."'}
    },
    items: [
      {title:'Quotation Demanded', sub:'No open pricing question right now', hit:false},
      {title:'Financing Related', sub:'Budget concern flagged early in the conversation', hit:true},
      {title:'Product Related', sub:'Undecided between SmartGRID Hybrid and a firmer option — confirm fit before pushing', hit:true},
      {title:'Warranty Related', sub:'No open question', hit:false},
      {title:'In-Store Experience Needed', sub:'SLA already missed — open with an apology, not a pitch', hit:true}
    ]
  }
};

export const DIALER_RECENT_CALLS = [
  {dir:'in', name:'Mukunda R.', time:'10:42 AM', duration:'4m 12s'},
  {dir:'out', name:'Kavitha R.', time:'Yesterday', duration:'2m 05s'},
  {dir:'missed', name:'Unknown', time:'Yesterday', duration:'—'},
  {dir:'missed', name:'Ritu S.', time:'Today 11:20 AM', duration:'—'},
  {dir:'missed', name:'Faizan A.', time:'Today 10:05 AM', duration:'—'},
  {dir:'missed', name:'Kavitha R.', time:'Yesterday 4:40 PM', duration:'—'},
  {dir:'missed', name:'Divya P.', time:'Yesterday 2:15 PM', duration:'—'},
  {dir:'out', name:'Faizan A.', time:'Mon', duration:'6m 40s'}
];

export const CALL_QUEUE_NOW = [
  {name:'Priya Iyer', wait:'4m 20s', waitLevel:'hi', intent:'Likely billing dispute — flagged before'},
  {name:'Suresh Nair', wait:'1m 50s', waitLevel:'mid', intent:'Plan upgrade enquiry'}
];

export const CALENDAR_INVITES = [
  {day:23, time:'11:00 AM', title:'SOP coaching session', meta:'With Sunita Rao (Manager) · via #callcentre-team'},
  {day:26, time:'2:30 PM', title:'Warranty pitch refresher', meta:'With L&D team · flagged from your last 3 calls'},
  {day:28, time:'10:00 AM', title:'Weekly team huddle', meta:'With Call Centre team · #callcentre-team'}
];

export const CAL_SHARE_OPTIONS = [
  {id:'manager', label:'Sunita Rao', sub:'Manager', icon:'👤'},
  {id:'team', label:'Call Centre Team', sub:'All members · #callcentre-team', icon:'👥'},
  {id:'landd', label:'Fahmy', sub:'L&D', icon:'🎓'}
];

export const STAT_DETAIL_DATA = {
  convos: {icon:'💬', title:'Conversations', big:'5', sub:'Goal 8/day · 3 more to hit today\'s target', extra:'Today\'s conversations are 62m total, averaging 12.4m each — a bit above your usual pace.'},
  sellTime: {icon:'⏱️', title:'Conversation Time', big:'47m', sub:'avg 9.4m per conversation', extra:'Total time spent today: 47m across 5 conversations. Your fastest was 4m, longest was 18m with Mukunda R.'},
  leads: {icon:'🎯', title:'Leads Created', big:'3', sub:'2 leads called so far', extra:'3 new leads logged today. Tap into the Leads tab to see follow-up status and SLA on each.<br><br><span style="color:#185fa5;font-weight:700;cursor:pointer" onclick="closeStatDetail();openLeadAnalysisModal()">View full lead analysis →</span>'},
  convPct: {icon:'📈', title:'Leads Called', big:'2', sub:'of 3 leads created · 0% confirmed sale so far', extra:'Conversion is inferred from conversations right now. With ERP integration this will be calculated from confirmed sales instead.'},
  delivery: {icon:'🚚', title:'On-time Delivery', big:'92%', sub:'4 delivered on time this week · 1 due today', extra:'Your on-time rate is up 4pts vs last week. 1 order is due today and 1 was delayed (narrow stairwell access, rescheduled). Shipment tracking now lives in Pulse.<br><br><span style="color:#185fa5;font-weight:700;cursor:pointer" onclick="closeStatDetail();aSwitch(\'pulse\')">Open #manage-shipment →</span>'},
  csat: {icon:'😊', title:'CSAT Today', big:'94%', sub:'Based on 14 rated calls today', extra:'Customer satisfaction is up 2pts vs your weekly average — callers are rating your calls positively, especially on warranty and financing questions.'}
};

export const CALL_SOP_ITEMS = [
  {label:'Opening & Intent Confirm'},
  {label:'Needs Discovery'},
  {label:'Product Pitch'},
  {label:'EMI / Financing Mention'},
  {label:'Warranty Mention'},
  {label:'Closing / Callback Booking'}
];

export const CALL_SOP_SCRIPTS = {
  'Mukunda': [
    {who:'agent', text:'Namaste! This is Aditi from The Sleep Company, calling about the Ortho GRID you enquired on — is now an okay time?', sop:'opening'},
    {who:'customer', text:'Yes, go ahead. I was actually comparing it with another brand.'},
    {who:'agent', text:'Totally fair — can I ask what mattered most in that comparison, firmness or price?', sop:'needs'},
    {who:'customer', text:'Mostly price, but also whether it actually helps with back pain.'},
    {who:'agent', text:'The GRID layer is built exactly for that — pressure relief along the spine, and most customers notice a difference within the first week.', sop:'pitch'},
    {who:'customer', text:'Okay, and if I wanted to pay it off over a few months?'}
  ],
  'Ritu S.': [
    {who:'agent', text:'Hi Ritu, this is Aditi — following up after your visit to our RT Nagar store on the Smart Luxe.', sop:'opening'},
    {who:'customer', text:'Yes! I loved it, was just checking how soon it could be delivered.'},
    {who:'agent', text:'Delivery inside the city is usually 2-3 days — can I check your address is still the one on file from the visit?', sop:'needs'},
    {who:'customer', text:'Yes, same address. What about the total cost with delivery?'},
    {who:'agent', text:'For the Smart Luxe it comes to ₹13,390 including free delivery and setup.', sop:'pitch'},
    {who:'customer', text:'That works for me, can we go ahead?'}
  ],
  'default': [
    {who:'agent', text:'Hello, this is Aditi calling from The Sleep Company — is this a good time to talk?', sop:'opening'},
    {who:'customer', text:'Sure, go ahead.'},
    {who:'agent', text:'Great — could you tell me a bit about what you\'re looking for, so I can point you to the right option?', sop:'needs'},
    {who:'customer', text:'I need something firm, I have some back pain.'},
    {who:'agent', text:'Understood — our Ortho GRID range is designed exactly for that kind of support.', sop:'pitch'},
    {who:'customer', text:'Sounds good, what does it cost?'}
  ]
};



export const CALLS_HANDLED_7DAYS = [
  { day: 'Mon', calls: 18, pct: 58 },
  { day: 'Tue', calls: 22, pct: 70 },
  { day: 'Wed', calls: 15, pct: 48 },
  { day: 'Thu', calls: 26, pct: 82 },
  { day: 'Fri', calls: 20, pct: 64 },
  { day: 'Sat', calls: 12, pct: 38 },
  { day: 'Today', calls: 14, pct: 45, isToday: true }
];

export const CSAT_TREND_7DAYS = [
  { day: 'Mon', csat: 88, pct: 70 },
  { day: 'Tue', csat: 90, pct: 74 },
  { day: 'Wed', csat: 85, pct: 64 },
  { day: 'Thu', csat: 92, pct: 78 },
  { day: 'Fri', csat: 89, pct: 72 },
  { day: 'Sat', csat: 91, pct: 76 },
  { day: 'Today', csat: 94, pct: 84, isToday: true }
];

export const DASHBOARD_TASKS = [
  {
    id: 'w1',
    title: '2 callbacks',
    sub: 'next 4:30pm',
    iconBg: '#e0f2fe',
    iconColor: '#0369a1',
    channel: 'Call Centre Team',
    actionPrompt: 'Confirm the 4:30pm callback',
    leadName: 'Mukunda'
  },
  {
    id: 'w2',
    title: '2 hot leads',
    sub: 'untouched 24h',
    iconBg: '#f1ecff',
    iconColor: '#7c3aed',
    channel: 'AvaniBot',
    actionPrompt: 'Call now or reassign the 2 leads',
    leadName: 'Ritu S.'
  },
  {
    id: 'w3',
    title: '1 outcome',
    sub: 'to log',
    iconBg: '#fef3c7',
    iconColor: '#b45309',
    channel: 'AvaniBot',
    actionPrompt: "Log the outcome of this morning's call",
    leadName: 'Faizan A.'
  }
];

export const CURRENT_USER = {
  name: 'Arvind Rajan',
  initials: 'AR',
  emoji: '🦸‍♂️',
  store: 'Koramangala · The Sleep Company',
  ogScore: 76,
  ogScoreDelta: '+13',
  rank: '#3',
  rankLocation: 'RT Nagar',
  avgHandleTime: '4m 12s',
  avgHandleDelta: '▼8%',
  csatToday: '94%',
  csatDelta: '▲2pt',
  inQueue: 2,
  leadsCreated: 3,
  leadsCalled: 2,
  earningsMonth: 5200,
  earningsCoached: 1700,
  earningsTarget: 6000,
  earningsProgressPct: 87
};

// Aliases for unified app usage
export const LEADS = LEADS_MODAL_DATA_RETAIL;
export const RECENT_CALLS = DIALER_RECENT_CALLS;
export const USER_PROFILE = CURRENT_USER;

