# 🔖 Bookmarks Hub

A lightweight static bookmarks dashboard deployed on Vercel, plus maintenance
scripts for converting bookmark exports, reorganizing links, and extracting
threat-intel references.

---

## 🏗️ Structure

```
├── index.html / script.js / favicon.png   # Static site
├── bookmarks_data.json                    # Link collection data
├── convert_bookmarks.py                   # Browser export → JSON
├── reorganize_links.py                    # Group/sort links
└── extract_threat_intel.py                # Pull IOC/threat-intel references
```

## 🚀 Run

Serve statically:

```bash
python -m http.server 8000
# open http://localhost:8000
```

## 📄 License

Proprietary — internal use.
