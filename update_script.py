import json

def update_script():
    with open('bookmarks_data.json', 'r', encoding='utf-8') as f:
        sections = json.load(f)
    
    with open('script.js', 'r', encoding='utf-8') as f:
        script_content = f.read()
        
    start_tag = '"sections": '
    end_tag = '    ]\n};'
    
    start_idx = script_content.find(start_tag)
    end_idx = script_content.find(end_tag, start_idx) + len(end_tag) - 3
    
    if start_idx == -1 or end_idx == -1:
        print("Could not find sections in script.js")
        return
        
    formatted_sections = json.dumps(sections, indent=4)
    # Add proper indentation for the script.js file
    indented_sections = "\n".join("    " + line for line in formatted_sections.splitlines())
    indented_sections = indented_sections.strip() # Remove first indentation
    
    new_script = script_content[:start_idx + len(start_tag)] + indented_sections + script_content[end_idx:]
    
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(new_script)
        
    print("Updated script.js successfully!")

if __name__ == "__main__":
    update_script()
