import sys
import re

sys.stdout.reconfigure(encoding='utf-8')

with open('reference_mock.html', 'r', encoding='utf-8') as f:
    html = f.read()

data_vars = [
    'PULSE_INTERNAL_THREADS',
    'STAFF_AGENT_TASKS',
    'STAFF_VERTICAL_AGENT_CHANNELS',
    'PULSE_CUSTOMER_DATA',
    'LEADS_MODAL_DATA_RETAIL',
    'LEADS_MODAL_DATA_HEALTH',
    'LEAD_SOP_CHECK_DATA_RETAIL',
    'DIALER_RECENT_CALLS',
    'CALL_QUEUE_NOW',
    'CALENDAR_INVITES',
    'CAL_SHARE_OPTIONS',
    'STAT_DETAIL_DATA',
    'CALL_SOP_ITEMS',
    'CALL_SOP_SCRIPTS'
]

with open('extracted_data.js', 'w', encoding='utf-8') as out:
    for var in data_vars:
        m = re.search(r'(?:const|let|var)\s+' + var + r'\s*=\s*([\s\S]*?);(?=\n\s*(?:const|let|var|function|window|\/\*|\/\/|\<))', html)
        if m:
            out.write(f"export const {var} = {m.group(1)};\n\n")
            print(f"Extracted {var} (length {len(m.group(1))})")
        else:
            print(f"Could NOT extract {var}")

print("Saved extracted data to extracted_data.js")
