const config = {
    "page": {
        "title": "SOC Portal",
        "description": "Quick access to internal tools, dashboards, and operational platforms.",
        "classification": "Internal Use Only",
        "maintainer": "Security monitoring & Threat Intel Team."
    },
    "layout": {
        "type": "sectioned-grid",
        "card_min_width": 220,
        "theme": "dark"
    },
    "sections": [
        {
            "id": "isms_tools",
            "title": "ISMS Tools",
            "description": "Core ISMS Operational Tools",
            "links": [
                {
                    "id": "gtbank_intranet",
                    "name": "GTBank Intranet",
                    "url": "https://gtintranet.gtbank.com/",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                      {
                    "id": "SAP",
                    "name": "SAP",
                    "url": "https://performancemanager.successfactors.eu/login?company=gtbankguar",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "process_maker",
                    "name": "Process Maker",
                    "url": "https://processmaker.gtbank.com/sysworkflow/en/neoclassic/login/login",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "qradar",
                    "name": "Qradar",
                    "url": "https://10.240.240.92/console/core/jsp/Main.jsp",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "qradar_dr",
                    "name": "Qradar DR",
                    "url": "https://10.3.0.17/console/logon.jsp?loadback=ba2a5c9b-b6be-4a01-ae87-fbb2d03879e9",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "paloalto_networks",
                    "name": "PaloAlto Networks",
                    "url": "https://10.240.240.84/#dashboard::vsys1",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "palo_alto_ha",
                    "name": "Palo Alto HA",
                    "url": "https://10.240.240.83/php/login.php#dashboard::vsys1",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "waf",
                    "name": "WAF",
                    "url": "https://my.incapsula.com/admin/login",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "nnt_changetracker_generation_7",
                    "name": "NNT ChangeTracker Generation 7",
                    "url": "https://10.240.240.63:4443/",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "algo_sec",
                    "name": "ALgo Sec",
                    "url": "https://10.240.240.70/algosec/suite/login.html",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },

                {
                    "id": "cuckoo_sandbox",
                    "name": "Cuckoo Sandbox",
                    "url": "https://cuckoo.ee/",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "pam",
                    "name": "PAM",
                    "url": "https://10.81.0.78/Login",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "10_240_240_125___ixia_vision_one",
                    "name": "IXIA Vision One",
                    "url": "https://10.240.240.125:8000/console/NtoUI/index.html",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "symantec_log_in",
                    "name": "Symantec Log In",
                    "url": "https://identity.symanteccloud.com/Logon",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "symantec_endpoint_protection_manager",
                    "name": "Symantec Endpoint Protection Manager",
                    "url": "https://10.0.20.140:8443/console/apps/sepm",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "https___10_0_20_88_protectmanager_logon",
                    "name": "ProtectManager",
                    "url": "https://10.0.20.88/ProtectManager/Logon",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "netflow_analyser_manageengine_opmanager",
                    "name": "Netflow Analyser ManageEngine OpManager",
                    "url": "https://10.240.240.57/",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "symantec_dlp",
                    "name": "Symantec DLP",
                    "url": "https://10.0.20.88/ProtectManager/Logon",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "nutanix",
                    "name": "Nutanix",
                    "url": "https://10.241.245.100:9440/console/#page/dashboard",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "cortex_xdr",
                    "name": "Cortex XDR",
                    "url": "https://orangeshipbox.xdr.de.paloaltonetworks.com/dashboard?id=1",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "cortex_xdr_broker",
                    "name": "Cortex XDR Broker",
                    "url": "https://10.1.100.68:4443/#/login",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "dam_dr",
                    "name": "DAM DR",
                    "url": "https://10.254.253.78:8083/SecureSphere/app/#sites",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "dam_dc",
                    "name": "DAM DC",
                    "url": "https://10.240.240.180:8083/SecureSphere/secsphLogin.jsp#agents",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "dam_new_dc",
                    "name": "DAM New DC",
                    "url": "https://10.0.73.110:8083/SecureSphere/secsphLogin.jsp#user_details",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "dam_new_dr",
                    "name": "DAM New DR",
                    "url": "https://10.0.73.120:8083/SecureSphere/secsphLogin.jsp",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "forcepoint_security_manager",
                    "name": "Forcepoint Security Manager",
                    "url": "https://10.0.20.40:9443/manager/login/pages/loginPage.jsf",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "socti-web-toolkit",
                    "name": "SOCTI Toolkit",
                    "url": "https://socti-web.vercel.app/",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },

                {
                    "id": "sync-deck",
                    "name": "Sync Deck",
                    "url": "https://sync-deck-five.vercel.app/",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                 {
                    "id": "orange-intel",
                    "name": "OrangeIntel",
                    "url": "https://orangeintel.vercel.app/",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "imperva_ftp",
                    "name": "Imperva Ftp",
                    "url": "https://ftp-eu.imperva.com/#/Downloads/SecureSphere_Agents/Misc",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "check_point",
                    "name": "Check Point",
                    "url": "https://portal.checkpoint.com/dashboard",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "reva",
                    "name": "REVA",
                    "url": "https://reva.shelt.com:55449/cybervigilance/web/admin/dashboard",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "elastic_siem",
                    "name": "Elastic SIEM",
                    "url": "https://10.240.240.201/login?next=%2F",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "symantec_data_loss_prevention",
                    "name": "Symantec Data Loss Prevention",
                    "url": "https://10.0.20.72/ProtectManager/enforce/admin/policy/list",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "CIMTRAK",
                    "name": "Cimtrak",
                    "url": "https://10.240.240.78/cmc/#/login",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                }
            ]
        },
        {
            "id": "threat_intelligence",
            "title": "Threat Intelligence",
            "description": "Threat Intel resources and tools",
            "links": [
                {
                    "id": "abuseipdb",
                    "name": "AbuseIPDB",
                    "url": "https://www.abuseipdb.com/",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "mx_lookup_tool___check_your_dns_mx_records_online___mxtoolbox",
                    "name": "MX Lookup Tool ",
                    "url": "https://mxtoolbox.com/",
                    "description": "",
                    "tags": [
                        "ISMS Tools"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "virustotal",
                    "name": "VirusTotal",
                    "url": "https://www.virustotal.com/#/home/upload",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "palo_alto_networks_url_filtering___test_a_site",
                    "name": "Palo Alto Networks URL filtering",
                    "url": "https://urlfiltering.paloaltonetworks.com/",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "sha256_converter",
                    "name": "SHA256 converter",
                    "url": "https://md5calc.com/hash/sha256/acd9fc44001da67f1a3592850ec09cb7",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "d3fend_matrix___mitre_d3fend",
                    "name": "D3FEND Matrix",
                    "url": "https://d3fend.mitre.org/",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "mitre_att_amp_ck",
                    "name": "MITRE ATT&CK",
                    "url": "https://attack.mitre.org/tactics/enterprise/",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "foundational___beacon",
                    "name": "Foundational",
                    "url": "https://beacon.paloaltonetworks.com/student/catalog/list?category_ids=38394",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "maps",
                    "name": "Maps",
                    "url": "https://maps.google.com/",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "time_converter",
                    "name": "Time converter",
                    "url": "https://www.freeconvert.com/time/eat-to-wat",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "paloalto_beacon",
                    "name": "Paloalto Beacon",
                    "url": "https://beacon.paloaltonetworks.com/student/catalog",
                    "description": "",
                    "tags": [
                        "Threat Intelligence"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                }
            ]
        },
        {
            "id": "support",
            "title": "Support",
            "description": "Support portals and ticketing systems",
            "links": [
                {
                    "id": "algosec_portal_support",
                    "name": "AlgoSec Portal Support",
                    "url": "https://portal.algosec.com/login/index.php",
                    "description": "",
                    "tags": [
                        "Support"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "customer_support___palo_alto_networks",
                    "name": "Customer Support - Palo Alto Networks",
                    "url": "https://support.paloaltonetworks.com/SupportAccount/EditProfile/1727454",
                    "description": "",
                    "tags": [
                        "Support"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "nnt_support_tickets",
                    "name": "NNT Support tickets",
                    "url": "https://www.netwrix.com/tickets.html#/tickets/open",
                    "description": "",
                    "tags": [
                        "Support"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                }
            ]
        },
        {
            "id": "sharepoint",
            "title": "Sharepoint",
            "description": "Sharepoint documents and resources",
            "links": [
                {
                    "id": "cortex_report_summary_xlsx",
                    "name": "Cortex Report Summary.xlsx",
                    "url": "https://gtbank-my.sharepoint.com/:x:/p/fatima_jinadu/EW56h4ItDyRKjPKjGwunRRsBS_3gQAcbQZMd5bPmXVI4GQ?e=JDX72c",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "isms_monthly_gti_report",
                    "name": "ISMS Monthly GTI Report",
                    "url": "https://gtbank-my.sharepoint.com/:x:/p/fatima_jinadu/ESSYJbVVOUFPi0qLZAoYoA4BHCYuOTUSm9drg67zpPY9pg?rtime=HsaJkXbb20g",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "isms_tasks",
                    "name": "ISMS Tasks",
                    "url": "https://gtbank-my.sharepoint.com/:x:/r/personal/jacobsen_brai_gtbank_com/Documents/ISMS.xlsx?d=w3ef2915ad2f74d60ad88880056518b21&csf=1&web=1&e=KMM3Rf",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "inspira_alert_check_list_xlsx",
                    "name": "Inspira Alert Check List.xlsx",
                    "url": "https://gtbank-my.sharepoint.com/:x:/p/kayode_adewumi/ESX0tJq7PPdPuy8fhHKgEXMBXG40g6yXFz0-hslfNWDplQ?e=4%3Aed3unR&at=9&CID=f445a09f-0480-d3e3-6469-59be2396f657",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "ssh_and_rdp_applications_xlsx",
                    "name": "SSH and RDP applications.xlsx",
                    "url": "https://gtbank-my.sharepoint.com/:x:/p/godwin_enendu/Eckvzb5X-8VFnzUsdPjOuMEBbb6kxfxtGBtJ9oE0O1cf5A?e=QkCtVV",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "monthly_access_review_xlsx",
                    "name": "Monthly Access Review.xlsx",
                    "url": "https://gtbank-my.sharepoint.com/:x:/p/emmanuella_amanie/EdyP_n80mNFApuLxzeCdo9UBG7Bbgj8KiwbvIwrjOop5UQ?rtime=8tbkLNn_3Eg",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "server_files_xlsx",
                    "name": "Server_Files.xlsx",
                    "url": "https://gtbank-my.sharepoint.com/:x:/p/ifeoluwa_aina/EV5sNL5nwqlGsM2oqZjFw9QBox9leosAwNQBZK4dTCvNyg?rtime=3XJqDVWQ3Eg&CID=4f24a598-c586-e67b-ed22-22c27ae88508",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "fim_server_inventory",
                    "name": "FIM Server Inventory",
                    "url": "https://gtbank-my.sharepoint.com/:x:/p/david_odigie/IQBEa6Qa_YtUR7H05Kr5t_RIAaUXjZFEDyb9SsgeWs54YWE?CID=41dbb579-3657-a972-78b8-1454191990e9&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1765803597695&web=1",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "fim_templates",
                    "name": "FIM Templates",
                    "url": "https://gtbank-my.sharepoint.com/:x:/r/personal/paul_oreoluwa_gtbank_com/_layouts/15/Doc.aspx?sourcedoc=%7BBE8733EE-4513-4C6D-92C4-9F456BD15E77%7D&file=Device%20Path%20on%20Cimtrak%20FIM%20October%202025.xlsx&action=default&mobileredirect=true",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                },
                {
                    "id": "SOCTI_Monitoring_Library",
                    "name": "Monitoring Library",
                    "url": "https://gtbank-my.sharepoint.com/:x:/r/personal/fatima_jinadu_gtbank_com/_layouts/15/Doc.aspx?sourcedoc=%7B9D350CEC-8018-4ED6-916A-D7D5D9232A3B%7D&file=Monitoring%20Departmental%20Library%20-%20MDL.xlsx&action=default&mobileredirect=true",
                    "description": "",
                    "tags": [
                        "Sharepoint"
                    ],
                    "audience": [
                        "All"
                    ],
                    "status": "active"
                }
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    try {
        const app = document.getElementById('app');
        if (!app) {
            console.error('App container not found!');
            return;
        }

        // Render App Structure
        function renderApp() {
            try {
                app.appendChild(renderHeader());

                // Tab Controls
                const controls = document.createElement('div');
                controls.className = 'controls-container';
                controls.innerHTML = `
                    <div class="search-container">
                        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input type="text" id="search" class="search-input" placeholder="Search resources...">
                    </div>
                    <div class="tabs-container" id="tabs">
                        <button class="tab-btn active" data-tab="all">All Resources</button>
                        ${config.sections.map(section => `
                            <button class="tab-btn" data-tab="${section.id}">${section.title}</button>
                        `).join('')}
                        <a href="https://sync-deck-five.vercel.app/" class="tab-btn" target="_blank" style="text-decoration: none; display: flex; align-items: center; gap: 4px;">
                            Sync Deck
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </div>
                `;
                app.appendChild(controls);

                // Sections Container
                const sectionsContainer = document.createElement('div');
                sectionsContainer.id = 'sections-container';

                if (config.sections && Array.isArray(config.sections)) {
                    config.sections.forEach(section => {
                        sectionsContainer.appendChild(renderSection(section));
                    });
                } else {
                    console.error('No sections found in config');
                }

                app.appendChild(sectionsContainer);

                setupFeatures();
            } catch (e) {
                console.error('Error rendering app:', e);
                app.innerHTML = '<div class="error-message">Something went wrong while loading the dashboard.</div>';
            }
        }

        function renderHeader() {
            const header = document.createElement('header');
            header.innerHTML = `
                <div class="logo-container">
                    <svg class="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <!-- Background -->
                        <rect width="100" height="100" fill="#E03C15"/>
                        <!-- White Square (Top Right) -->
                        <rect x="55" y="15" width="30" height="30" fill="white"/>
                        <!-- GTCO Text -->
                        <text x="50" y="85" font-family="'Inter', sans-serif" font-weight="700" font-size="28" fill="white" text-anchor="middle" letter-spacing="2">GTCO</text>
                    </svg>
                </div>
                <button class="theme-toggle" id="themeToggle" title="Toggle Theme">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                </button>
                <h1>${config.page.title}</h1>
                <p class="description">${config.page.description}</p>
                <div class="meta-tags">
                    <span class="meta-tag">${config.page.classification}</span>
                    <span class="meta-tag">Maintained by: ${config.page.maintainer}</span>
                </div>
            `;
            return header;
        }

        function renderSection(section) {
            const sectionEl = document.createElement('section');
            sectionEl.className = 'grid-section';
            // Add ID for filtering
            sectionEl.dataset.sectionId = section.id;

            sectionEl.innerHTML = `
                <div class="section-header">
                    <div class="section-title">
                         ${section.title}
                    </div>
                    <div class="section-description">${section.description}</div>
                </div>
                <div class="cards-grid">
                    ${section.links.map(link => renderCard(link)).join('')}
                </div>
            `;
            return sectionEl;
        }

        function renderCard(link) {
            const statusClass = link.status === 'active' ? 'status-active' : '';
            const tags = link.tags || [];
            const tagsHtml = tags.map(tag => {
                // Check specific tags for styling
                let tagClass = 'tag';
                if (['SOC', 'Network Security'].includes(tag)) tagClass += ' tag-audience';
                return `<span class="${tagClass}">${tag}</span>`;
            }).join('');

            return `
                <a href="${link.url}" class="card" target="_blank" data-name="${link.name}" data-tags="${tags.join(',')}">
                    <div class="card-header">
                        <div class="card-title">${link.name}</div>
                        <div class="status-indicator ${statusClass}" title="${link.status}"></div>
                    </div>
                    <div class="card-description">${link.description}</div>
                    <div class="card-footer">
                        <div class="tags">
                            ${tagsHtml}
                        </div>
                    </div>
                </a>
            `;
        }

        function setupFeatures() {
            // Theme Toggle Logic
            const toggleBtn = document.getElementById('themeToggle');
            const body = document.body;

            if (toggleBtn) {
                // Check saved preference
                const savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light') {
                    body.classList.add('light-mode');
                    updateIcon(true);
                }

                toggleBtn.addEventListener('click', () => {
                    body.classList.toggle('light-mode');
                    const isLight = body.classList.contains('light-mode');
                    localStorage.setItem('theme', isLight ? 'light' : 'dark');
                    updateIcon(isLight);
                });

                function updateIcon(isLight) {
                    if (isLight) {
                        toggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
                    } else {
                        toggleBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
                    }
                }
            }

            // Search Logic
            const searchInput = document.getElementById('search');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    const query = e.target.value.toLowerCase();
                    const cards = document.querySelectorAll('.card');

                    cards.forEach(card => {
                        const name = (card.dataset.name || '').toLowerCase();
                        const tags = (card.dataset.tags || '').toLowerCase();
                        if (name.includes(query) || tags.includes(query)) {
                            card.classList.remove('hidden');
                        } else {
                            card.classList.add('hidden');
                        }
                    });
                });
            }

            // Tabs Logic
            const tabBtns = document.querySelectorAll('.tab-btn');
            const sections = document.querySelectorAll('.grid-section');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active tab
                    tabBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const targetTab = btn.dataset.tab;

                    sections.forEach(section => {
                        if (targetTab === 'all' || section.dataset.sectionId === targetTab) {
                            section.classList.remove('hidden');
                        } else {
                            section.classList.add('hidden');
                        }
                    });
                });
            });
        }

        renderApp();
    } catch (e) {
        console.error('Critical error in script.js:', e);
    }
});
