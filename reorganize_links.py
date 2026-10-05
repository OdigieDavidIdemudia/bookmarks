import json
import os

def reorganize_links(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # All links from the original file
    all_links = []
    for section in data:
        all_links.extend(section.get('links', []))

    # Add the new FIM links if they aren't already there
    new_fim_links = [
        {
            "id": "fim_server_inventory",
            "name": "FIM Server Inventory",
            "url": "https://gtbank-my.sharepoint.com/:x:/p/david_odigie/IQBEa6Qa_YtUR7H05Kr5t_RIAaUXjZFEDyb9SsgeWs54YWE?CID=41dbb579-3657-a972-78b8-1454191990e9&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1765803597695&web=1",
            "description": "",
            "tags": ["Sharepoint"],
            "audience": ["All"],
            "status": "active"
        },
        {
            "id": "fim_templates",
            "name": "FIM Templates",
            "url": "https://gtbank-my.sharepoint.com/:x:/r/personal/paul_oreoluwa_gtbank_com/_layouts/15/Doc.aspx?sourcedoc=%7BBE8733EE-4513-4C6D-92C4-9F456BD15E77%7D&file=Device%20Path%20on%20Cimtrak%20FIM%20October%202025.xlsx&action=default&mobileredirect=true",
            "description": "",
            "tags": ["Sharepoint"],
            "audience": ["All"],
            "status": "active"
        }
    ]

    for new_link in new_fim_links:
        if not any(l['url'] == new_link['url'] for l in all_links):
            all_links.append(new_link)

    # Categories
    categorized = {
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

    # Categorize
    for link in all_links:
        url = link.get('url', '').lower()
        name = link.get('name', '').lower()
        
        # Sharepoint condition
        if 'sharepoint.com' in url:
            link['tags'] = ['Sharepoint']
            categorized['sharepoint']['links'].append(link)
        # Support condition
        elif 'support' in name or 'support' in url or 'ticket' in name or 'ticket' in url:
            link['tags'] = ['Support']
            categorized['support']['links'].append(link)
        # ISMS Tools condition (default for everything else)
        else:
            link['tags'] = ['ISMS Tools']
            categorized['isms_tools']['links'].append(link)

    # Output list
    output_data = [
        categorized['isms_tools'],
        categorized['support'],
        categorized['sharepoint']
    ]

    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2)

    print("Reorganized links successfully.")

if __name__ == "__main__":
    reorganize_links('bookmarks_data.json', 'bookmarks_data.json')
