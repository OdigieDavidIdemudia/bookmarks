import json
import re

def clean_name(name, url):
    # If the name is exactly the URL, try to extract a better name from the URL path
    if name == url:
        return "ProtectManager" if "ProtectManager" in url else name

    # Remove leading IPs (e.g., "10.240.240.125 - IXIA Vision One" -> "IXIA Vision One")
    ip_pattern = r'^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\s*-\s*'
    name = re.sub(ip_pattern, '', name).strip()
    return name

def extract_threat_intel():
    with open('bookmarks_data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Threat Intel links based on user request
    threat_intel_exact_names = [
        "MITRE ATT&CK®",
        "pimeyes - Google Search",
        "Foundational : Beacon",
        "Maps",
        "Time converter",
        "Paloalto Beacon",
        "Palo Alto Networks URL filtering - Test A Site",
        "AbuseIPDB",
        "VirusTotal",
        "SHA256 converter",
        "D3FEND Matrix | MITRE D3FEND™",
        "MITRE ATT&amp;CK®" # In case of HTML encoding
    ]
    
    # Flatten all current links to reprocess
    all_links = []
    for section in data:
        all_links.extend(section.get('links', []))

    # Define our four categories
    categorized = {
        "threat_intelligence": {
            "id": "threat_intelligence",
            "title": "Threat Intelligence",
            "description": "Threat Intel resources and tools",
            "links": []
        },
        "sharepoint": {
            "id": "sharepoint",
            "title": "Sharepoint",
            "description": "Sharepoint documents and resources",
            "links": []
        },
        "support": {
            "id": "support",
            "title": "Support",
            "description": "Support portals and ticketing systems",
            "links": []
        },
        "isms_tools": {
            "id": "isms_tools",
            "title": "ISMS Tools",
            "description": "Core ISMS Operational Tools",
            "links": []
        }
    }

    # Process each link
    for link in all_links:
        original_name = link.get('name', '')
        url = link.get('url', '')
        
        # 1. Clean the name
        cleaned = clean_name(original_name, url)
        link['name'] = cleaned

        url_lower = url.lower()
        name_lower = cleaned.lower()

        # 2. Categorize
        if original_name in threat_intel_exact_names or cleaned in threat_intel_exact_names:
            link['tags'] = ['Threat Intelligence']
            categorized['threat_intelligence']['links'].append(link)
        elif 'sharepoint.com' in url_lower:
            link['tags'] = ['Sharepoint']
            categorized['sharepoint']['links'].append(link)
        elif 'support' in name_lower or 'support' in url_lower or 'ticket' in name_lower or 'ticket' in url_lower:
            link['tags'] = ['Support']
            categorized['support']['links'].append(link)
        else:
            link['tags'] = ['ISMS Tools']
            categorized['isms_tools']['links'].append(link)

    # Output list
    output_data = [
        categorized['isms_tools'],
        categorized['threat_intelligence'],
        categorized['support'],
        categorized['sharepoint']
    ]

    with open('bookmarks_data.json', 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2)

    print("Extracted Threat Intelligence and cleaned names successfully.")

if __name__ == "__main__":
    extract_threat_intel()
