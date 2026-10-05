
import re
import json

def parse_bookmarks(file_path, output_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        lines = content.splitlines()
        
        sections_map = {} # path_tuple -> section_dict
        current_path = ["Root"]
        
        for line in lines:
            line = line.strip()
            
            # Folder Start
            folder_match = re.search(r'<DT><H3.*?>(.*?)</H3>', line)
            if folder_match:
                folder_name = folder_match.group(1)
                current_path.append(folder_name)
                continue
                
            # Folder End
            if "</DL>" in line:
                if len(current_path) > 1:
                    current_path.pop()
                continue
                
            # Link
            link_match = re.search(r'<DT><A HREF="(.*?)".*?>(.*?)</A>', line)
            if link_match:
                url = link_match.group(1)
                name = link_match.group(2)
                
                # Use current path tuple as key
                path_key = tuple(current_path)
                
                if path_key not in sections_map:
                    # Decide on section title and ID
                    # If path is only Root, use "General"
                    # If path is Root > Bookmarks bar > ISMS Tools, use "ISMS Tools"
                    # If path is Root > Bookmarks bar, use "Bookmarks Bar"
                    
                    title = current_path[-1] if current_path[-1] != "Root" else "General"
                    if title == "Bookmarks bar":
                         # Special case: map "Bookmarks bar" to something generic if desired, 
                         # or keep it. Let's keep it but maybe rename for display if it's the main container.
                         pass

                    sec_id = re.sub(r'[^a-zA-Z0-9]', '_', title.lower()).strip('_')
                    
                    sections_map[path_key] = {
                        "id": sec_id,
                        "title": title,
                        "description": "", 
                        "links": []
                    }
                
                # Create ID from name
                link_id = re.sub(r'[^a-zA-Z0-9]', '_', name.lower()).strip('_')
                if not link_id: link_id = "link_" + str(len(sections_map[path_key]['links']))
                
                sections_map[path_key]['links'].append({
                    "id": link_id,
                    "name": name,
                    "url": url,
                    "description": "", 
                    "tags": [current_path[-1]] if len(current_path)>1 else [],
                    "audience": ["All"],
                    "status": "active"
                })
        
        # Convert to list
        sections_list = list(sections_map.values())
        
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(sections_list, f, indent=2)
            
        print(f"Successfully wrote {len(sections_list)} sections to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

input_file = r"c:/Users/DELL/.gemini/antigravity/scratch/bookmarks/bookmarks_12_6_24.html"
output_file = r"c:/Users/DELL/.gemini/antigravity/scratch/bookmarks/bookmarks_data.json"
parse_bookmarks(input_file, output_file)
