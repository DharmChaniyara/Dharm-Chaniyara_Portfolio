import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

def generate_pdf(output_path):
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    
    # 612 x 792 pt (Letter)
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=32,
        leftMargin=32,
        topMargin=26,
        bottomMargin=26
    )

    styles = getSampleStyleSheet()

    # Colors matching the Canva template (EAFrc1XfAas) and Shubham reference
    navy_header = colors.HexColor('#1b365d')    # Bold deep navy for main name & headings
    navy_tagline = colors.HexColor('#1e293b')   # Charcoal for professional tagline
    teal_box = colors.HexColor('#2b6cb0')       # Blue/teal square bullet color
    text_dark = colors.HexColor('#2d3748')      # Charcoal body text
    text_muted = colors.HexColor('#4a5568')     # Slate secondary text
    border_color = colors.HexColor('#cbd5e0')   # Subtle vertical column divider

    # Typography styles
    name_style = ParagraphStyle(
        'CanvaName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=navy_header,
        alignment=0
    )

    tagline_style = ParagraphStyle(
        'CanvaTagline',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=navy_tagline,
        spaceAfter=3
    )

    contact_style = ParagraphStyle(
        'CanvaContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_muted
    )

    section_heading = ParagraphStyle(
        'CanvaSecHead',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=navy_header,
        spaceBefore=7,
        spaceAfter=3
    )

    item_title = ParagraphStyle(
        'CanvaItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11.5,
        textColor=navy_header
    )

    item_sub = ParagraphStyle(
        'CanvaItemSub',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=text_muted
    )

    body_text = ParagraphStyle(
        'CanvaBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=text_dark
    )

    bullet_text = ParagraphStyle(
        'CanvaBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.2,
        textColor=text_dark,
        leftIndent=10,
        firstLineIndent=-6,
        spaceBefore=0.5,
        spaceAfter=0.5
    )

    skill_title = ParagraphStyle(
        'SkillTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=11,
        textColor=navy_header,
        spaceBefore=3,
        spaceAfter=1
    )

    skill_desc = ParagraphStyle(
        'SkillDesc',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=10.5,
        textColor=text_dark,
        spaceAfter=2
    )

    elements = []

    # ==================== TOP HEADER ====================
    elements.append(Paragraph("DHARM CHANIYARA", name_style))
    elements.append(Paragraph("Computer Science &amp; Engineering Student | Aspiring Software Developer", tagline_style))
    elements.append(Paragraph("Vadodara, Gujarat, India &nbsp;|&nbsp; dharmchaniyara@gmail.com", contact_style))
    elements.append(Paragraph("GitHub: github.com/DharmChaniyara &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LinkedIn: linkedin.com/in/dharm-chaniyara-b51b9137a", contact_style))
    elements.append(Paragraph("Portfolio: github.com/DharmChaniyara/Dharm-Chaniyara_Portfolio", contact_style))
    elements.append(Spacer(1, 10))

    # ==================== 2-COLUMN SECTION ====================
    # Square symbol for headings: &#9632; is ■
    sq = "<font color='#2b6cb0'>&#9632;</font> "

    left_flowables = []
    # Left: Summary
    left_flowables.append(Paragraph(sq + "SUMMARY", section_heading))
    left_flowables.append(Paragraph(
        "B.Tech Computer Science &amp; Engineering student at GSFC University with practical exposure "
        "to full-stack web development, AI-assisted development workflows, and Python programming. "
        "Completed a one-month AI web development internship at Idealfolks, Rajkot, gaining hands-on experience "
        "leveraging modern AI developer tools. Built practical projects in fraud detection (JobGuard AI), "
        "sales intelligence copilots (offline finalist at Hack Baroda 2026 with Team CODE BUSTERS), and "
        "campus academic resource platforms. Interested in software engineering, backend systems, and "
        "building useful AI-powered applications through collaborative, project-based engineering.",
        body_text
    ))
    left_flowables.append(Spacer(1, 6))

    # Left: Experience
    left_flowables.append(Paragraph(sq + "EXPERIENCE", section_heading))
    left_flowables.append(Paragraph("<b>AI Web Developer Intern &mdash; Idealfolks</b>", item_title))
    left_flowables.append(Paragraph("05 June 2026 &ndash; 05 July 2026 &nbsp;|&nbsp; Rajkot, Gujarat", item_sub))
    left_flowables.append(Paragraph("&bull; Completed a one-month project internship focused on web development and AI-assisted workflows.", bullet_text))
    left_flowables.append(Paragraph("&bull; Leveraged modern AI developer tools for rapid component prototyping, API design, and debugging.", bullet_text))
    left_flowables.append(Paragraph("&bull; Developed responsive front-end user interfaces using HTML, CSS, and JavaScript.", bullet_text))
    left_flowables.append(Paragraph("&bull; Technologies: HTML, CSS, JavaScript, AI Developer Tools", bullet_text))
    left_flowables.append(Spacer(1, 6))

    # Left: Selected Projects
    left_flowables.append(Paragraph(sq + "SELECTED PROJECTS", section_heading))

    # Project 1: JobGuard AI
    left_flowables.append(Paragraph("<b>JobGuard AI &mdash; Fake Job Offer &amp; Scam Detector</b>", item_title))
    left_flowables.append(Paragraph("&bull; Developed a full-stack security application to detect fraudulent job offers using OpenAI for text analysis and VirusTotal API for malicious link scanning.", bullet_text))
    left_flowables.append(Paragraph("&bull; Built automated PDF text extraction using Multer and pdf-parse; designed prompt-engineered scoring model returning explainable scam indicators.", bullet_text))
    left_flowables.append(Paragraph("&bull; Technologies: React, Node.js, Express, Supabase, OpenAI API, VirusTotal API", bullet_text))
    left_flowables.append(Spacer(1, 4))

    # Project 2: Deal Intelligence Agent
    left_flowables.append(Paragraph("<b>Deal Intelligence Agent &mdash; Hack Baroda 2026</b>", item_title))
    left_flowables.append(Paragraph("&bull; Collaborated with Team CODE BUSTERS at Hack Baroda 2026 to develop the Deal Intelligence Agent, an AI-powered sales copilot designed to organize sales knowledge and make prior deal experience useful.", bullet_text))
    left_flowables.append(Paragraph("&bull; Focused on organizing deal interactions and presenting stakeholder relationships using D3.js; explored objection insights and similar-deal retrieval.", bullet_text))
    left_flowables.append(Paragraph("&bull; Technologies: HTML, CSS, JavaScript, React, Node.js, Express, D3.js", bullet_text))
    left_flowables.append(Paragraph("&bull; Team selected for the final offline round.", bullet_text))
    left_flowables.append(Spacer(1, 4))

    # Project 3: StudyShare
    left_flowables.append(Paragraph("<b>StudyShare &mdash; Campus Academic Resource Platform</b>", item_title))
    left_flowables.append(Paragraph("&bull; Developed a centralized academic sharing web platform for GSFC University students to access course syllabi, lecture notes, and past-year question papers.", bullet_text))
    left_flowables.append(Paragraph("&bull; Designed Supabase PostgreSQL schemas, document upload pipelines, and access control.", bullet_text))
    left_flowables.append(Paragraph("&bull; Technologies: JavaScript, HTML5, CSS3, Node.js, Supabase, Vercel", bullet_text))

    # Right column
    right_flowables = []

    # Right: Education
    right_flowables.append(Paragraph(sq + "EDUCATION", section_heading))
    right_flowables.append(Paragraph("<b>B.Tech &mdash; Computer Science &amp; Engineering</b>", item_title))
    right_flowables.append(Paragraph("GSFC University, Gujarat", item_sub))
    right_flowables.append(Paragraph("Currently in the 3rd semester (2025&ndash;2029).", item_sub))
    right_flowables.append(Spacer(1, 8))

    # Right: Technical Skills
    right_flowables.append(Paragraph(sq + "TECHNICAL SKILLS", section_heading))
    
    right_flowables.append(Paragraph("Programming Languages:", skill_title))
    right_flowables.append(Paragraph("Python (Certified), JavaScript (ES6+), Java, C/C++", skill_desc))

    right_flowables.append(Paragraph("Web Development:", skill_title))
    right_flowables.append(Paragraph("React.js, Vite, Tailwind CSS, HTML, CSS, Node.js, Express.js", skill_desc))

    right_flowables.append(Paragraph("Databases &amp; BaaS:", skill_title))
    right_flowables.append(Paragraph("Supabase, PostgreSQL, SQL", skill_desc))

    right_flowables.append(Paragraph("AI &amp; Modern Tools:", skill_title))
    right_flowables.append(Paragraph("OpenAI API, RAG Concepts, Prompt Engineering, AI Dev Workflows", skill_desc))

    right_flowables.append(Paragraph("Tools &amp; Version Control:", skill_title))
    right_flowables.append(Paragraph("Git, GitHub, Vercel, VS Code", skill_desc))
    right_flowables.append(Spacer(1, 8))

    # Right: Hackathon & Certifications
    right_flowables.append(Paragraph(sq + "HACKATHON &amp; AWARDS", section_heading))
    right_flowables.append(Paragraph("<b>Hack Baroda 2026 &mdash; Offline Finalist</b>", item_title))
    right_flowables.append(Paragraph("Selected in final offline round with Team CODE BUSTERS for Deal Intelligence Agent.", skill_desc))
    right_flowables.append(Spacer(1, 4))

    right_flowables.append(Paragraph(sq + "CERTIFICATIONS", section_heading))
    right_flowables.append(Paragraph("<b>Python Essentials 2</b>", item_title))
    right_flowables.append(Paragraph("Cisco Networking Academy &amp; OpenEDG Python Institute (Oct 2026)", skill_desc))
    right_flowables.append(Spacer(1, 2))

    right_flowables.append(Paragraph("<b>Computer Hardware Basics</b>", item_title))
    right_flowables.append(Paragraph("Cisco Networking Academy (Sep 2026)", skill_desc))
    right_flowables.append(Spacer(1, 2))

    right_flowables.append(Paragraph("<b>SSIP Drone Workshop</b>", item_title))
    right_flowables.append(Paragraph("Student Start-up and Innovation Policy, Gujarat", skill_desc))

    # Build 2-column table
    two_col_table = Table(
        [[left_flowables, right_flowables]],
        colWidths=[340, 208]
    )
    two_col_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (0,0), 0),
        ('RIGHTPADDING', (0,0), (0,0), 12),
        ('LEFTPADDING', (1,0), (1,0), 14),
        ('RIGHTPADDING', (1,0), (1,0), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 0),
        ('LINEBEFORE', (1,0), (1,-1), 0.75, border_color),
    ]))

    elements.append(two_col_table)

    doc.build(elements)
    print(f"CV successfully generated at {output_path}")

if __name__ == '__main__':
    generate_pdf('Dharm_Chaniyara_CV.pdf')
    generate_pdf('public/resume/Dharm_Chaniyara_CV.pdf')
