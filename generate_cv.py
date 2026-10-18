import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch

def generate_pdf(output_path):
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=32,
        leftMargin=32,
        topMargin=22,
        bottomMargin=22
    )

    styles = getSampleStyleSheet()

    # Custom styles
    primary_color = colors.HexColor('#0f172a')   # Slate 900
    accent_color = colors.HexColor('#0284c7')    # Sky 600
    text_color = colors.HexColor('#334155')      # Slate 700
    muted_color = colors.HexColor('#64748b')     # Slate 500

    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=21,
        textColor=primary_color,
        alignment=0
    )

    tagline_style = ParagraphStyle(
        'TaglineStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=accent_color
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        textColor=text_color
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=primary_color,
        spaceBefore=5,
        spaceAfter=2
    )

    body_style = ParagraphStyle(
        'BodyStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=text_color
    )

    bold_body = ParagraphStyle(
        'BoldBody',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=primary_color
    )

    meta_style = ParagraphStyle(
        'MetaStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8,
        leading=10.5,
        textColor=muted_color,
        alignment=2 # Right align
    )

    bullet_style = ParagraphStyle(
        'BulletStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=text_color,
        leftIndent=10,
        firstLineIndent=-6,
        spaceBefore=0.5,
        spaceAfter=0.5
    )

    elements = []

    # Header: Name and Tagline
    elements.append(Paragraph("DHARM CHANIYARA", name_style))
    elements.append(Paragraph("B.Tech Computer Science & Engineering Student | Aspiring AI/ML & Software Developer", tagline_style))
    elements.append(Spacer(1, 2))

    # Contact line
    contact_text = (
        "Vadodara, Gujarat, India &nbsp;|&nbsp; "
        "<b>Email:</b> dharmchaniyara@gmail.com &nbsp;|&nbsp; "
        "<b>LinkedIn:</b> linkedin.com/in/dharm-chaniyara-b51b9137a &nbsp;|&nbsp; "
        "<b>GitHub:</b> github.com/DharmChaniyara"
    )
    elements.append(Paragraph(contact_text, contact_style))
    elements.append(Spacer(1, 4))
    elements.append(HRFlowable(width="100%", thickness=1.5, color=accent_color, spaceBefore=2, spaceAfter=6))

    # Professional Summary
    elements.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
    summary_text = (
        "Third-semester B.Tech Computer Science & Engineering student at GSFC University with practical hands-on experience "
        "in AI-assisted web development, full-stack application building, and Python programming. Completed a one-month AI Web Developer "
        "internship at Idealfolks, Rajkot, gaining practical exposure to AI-augmented development workflows. Passionate about software "
        "engineering, intelligent systems, and building high-utility web tools (such as JobGuard AI scam scanner and StudyShare academic portal). "
        "Proven collaborator in hackathons (offline finalist at Hack Baroda 2026 with Team CODE BUSTERS) and eager to contribute to innovative "
        "early-career engineering teams."
    )
    elements.append(Paragraph(summary_text, body_style))
    elements.append(Spacer(1, 4))

    # Education
    elements.append(Paragraph("EDUCATION", section_heading))
    edu_table_data = [
        [
            Paragraph("<b>GSFC University</b> &mdash; Vadodara, Gujarat, India", bold_body),
            Paragraph("2025 &ndash; 2029 | Currently in 3rd Semester", meta_style)
        ],
        [
            Paragraph("Bachelor of Technology (B.Tech) in Computer Science & Engineering", body_style),
            Paragraph("Status: Active Undergraduate", meta_style)
        ]
    ]
    t_edu = Table(edu_table_data, colWidths=[400, 140])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    elements.append(t_edu)
    elements.append(Paragraph("<b>Relevant Coursework:</b> Object-Oriented Programming (Java/C++), Data Structures, Web Technology, Database Systems, Computer Hardware & Basics.", body_style))
    elements.append(Spacer(1, 4))

    # Work Experience
    elements.append(Paragraph("EXPERIENCE", section_heading))
    exp_table_data = [
        [
            Paragraph("<b>Idealfolks</b> &mdash; Rajkot, Gujarat, India", bold_body),
            Paragraph("June 05, 2026 &ndash; July 05, 2026", meta_style)
        ],
        [
            Paragraph("<i>AI Web Developer Intern</i>", ParagraphStyle('Ital', parent=body_style, fontName='Helvetica-Bold', textColor=accent_color)),
            Paragraph("1-Month Verified Internship", meta_style)
        ]
    ]
    t_exp = Table(exp_table_data, colWidths=[380, 160])
    t_exp.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    elements.append(t_exp)
    elements.append(Paragraph("&bull; Completed an intensive 1-month web development internship focusing on applying modern AI developer tools to engineering workflows.", bullet_style))
    elements.append(Paragraph("&bull; Built responsive front-end user interfaces using HTML, CSS, and JavaScript, ensuring cross-device adaptability.", bullet_style))
    elements.append(Paragraph("&bull; Leveraged generative AI tools for code prototyping, automated unit test drafting, and component troubleshooting.", bullet_style))
    elements.append(Paragraph("&bull; Collaborated under engineering guidance to learn full-stack project architecture and version control practices.", bullet_style))
    elements.append(Spacer(1, 4))

    # Selected Projects
    elements.append(Paragraph("SELECTED PROJECTS", section_heading))

    # Project 1: JobGuard AI
    p1_header = [
        [
            Paragraph("<b>JobGuard AI &mdash; Fake Job Offer & Scam Detector</b>", bold_body),
            Paragraph("React, Node.js, Express, Supabase, OpenAI API", meta_style)
        ]
    ]
    t_p1 = Table(p1_header, colWidths=[350, 190])
    t_p1.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t_p1)
    elements.append(Paragraph("&bull; Built a full-stack security application detecting fraudulent employment offers via text scanning and PDF offer letter uploads.", bullet_style))
    elements.append(Paragraph("&bull; Integrated OpenAI API to analyze suspicious phrasing, unrealistic salary structures, and scam indicators with explainable reasoning.", bullet_style))
    elements.append(Paragraph("&bull; Integrated VirusTotal API for scanning embedded domain links; implemented Supabase for authentication and scan history storage.", bullet_style))
    elements.append(Paragraph("&bull; Live deployed on Vercel: <i>fake-job-offer-detector-two.vercel.app</i>", bullet_style))
    elements.append(Spacer(1, 3))

    # Project 2: Deal Intelligence Agent
    p2_header = [
        [
            Paragraph("<b>Deal Intelligence Agent &mdash; AI Sales Copilot</b>", bold_body),
            Paragraph("React, Node.js, Express, D3.js, Vercel", meta_style)
        ]
    ]
    t_p2 = Table(p2_header, colWidths=[350, 190])
    t_p2.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t_p2)
    elements.append(Paragraph("&bull; Developed an AI-powered sales intelligence copilot that captures deal interactions to form organizational memory.", bullet_style))
    elements.append(Paragraph("&bull; Competed with Team CODE BUSTERS at Hack Baroda 2026; successfully qualified for the final offline hackathon round.", bullet_style))
    elements.append(Paragraph("&bull; Implemented stakeholder relationship mapping using D3.js and simulated objection handling workflows.", bullet_style))
    elements.append(Spacer(1, 3))

    # Project 3: StudyShare
    p3_header = [
        [
            Paragraph("<b>StudyShare &mdash; Campus Academic Resource Platform</b>", bold_body),
            Paragraph("JavaScript, Supabase, Node.js, Vercel", meta_style)
        ]
    ]
    t_p3 = Table(p3_header, colWidths=[350, 190])
    t_p3.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t_p3)
    elements.append(Paragraph("&bull; Architected a centralized academic sharing hub for GSFC University students covering syllabi, PYQs, and lecture notes.", bullet_style))
    elements.append(Paragraph("&bull; Designed SQL schemas in Supabase for user roles, subject categorization, and secure document storage; deployed live at <i>study-share.vercel.app</i>.", bullet_style))
    elements.append(Spacer(1, 3))

    # Project 4: Campus Copilot & DevFest
    p4_header = [
        [
            Paragraph("<b>Campus Copilot &amp; DevFest Baroda 2026 Mobile Companion</b>", bold_body),
            Paragraph("TypeScript, React, Kotlin, Android", meta_style)
        ]
    ]
    t_p4 = Table(p4_header, colWidths=[350, 190])
    t_p4.setStyle(TableStyle([('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    elements.append(t_p4)
    elements.append(Paragraph("&bull; Contributed to Campus Copilot, an IEEE collaborative university assistant incorporating RAG retrieval and authenticated student records.", bullet_style))
    elements.append(Paragraph("&bull; Developed DevFest Baroda 2026 companion app in Kotlin/Android Jetpack for the upcoming GDG Baroda conference.", bullet_style))
    elements.append(Spacer(1, 4))

    # Technical Skills
    elements.append(Paragraph("TECHNICAL SKILLS", section_heading))
    skills_data = [
        [Paragraph("<b>Programming Languages:</b>", bold_body), Paragraph("Python (Certified: Python Essentials 2), JavaScript (ES6+), Java, Kotlin (Basics), C/C++", body_style)],
        [Paragraph("<b>Web & Frontend:</b>", bold_body), Paragraph("React.js, Vite, Tailwind CSS, HTML5, CSS3, REST APIs, Framer Motion", body_style)],
        [Paragraph("<b>Backend & Databases:</b>", bold_body), Paragraph("Node.js, Express.js, Supabase (PostgreSQL), SQL Fundamentals", body_style)],
        [Paragraph("<b>AI / ML & Workflows:</b>", bold_body), Paragraph("OpenAI API Integration, Prompt Engineering, RAG Concepts, AI-Assisted Dev Workflows", body_style)],
        [Paragraph("<b>Tools & Version Control:</b>", bold_body), Paragraph("Git, GitHub, Vercel, VS Code, Postman, Linux Basics", body_style)]
    ]
    t_skills = Table(skills_data, colWidths=[140, 400])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ]))
    elements.append(t_skills)
    elements.append(Spacer(1, 4))

    # Certifications & Achievements
    elements.append(Paragraph("CERTIFICATIONS & ACHIEVEMENTS", section_heading))
    elements.append(Paragraph("&bull; <b>Python Essentials 2</b> &mdash; Cisco Networking Academy / OpenEDG Python Institute (Oct 18, 2026)", bullet_style))
    elements.append(Paragraph("&bull; <b>Computer Hardware Basics</b> &mdash; Cisco Networking Academy (Sep 24, 2026)", bullet_style))
    elements.append(Paragraph("&bull; <b>Offline Finalist &mdash; Hack Baroda 2026</b>: Selected among top teams with Team CODE BUSTERS for Deal Intelligence Agent.", bullet_style))
    elements.append(Paragraph("&bull; <b>SSIP Drone Technology Workshop</b> &mdash; Student Start-up and Innovation Policy (SSIP), Gujarat / GSFC University.", bullet_style))

    doc.build(elements)
    print(f"CV successfully generated at {output_path}")

if __name__ == '__main__':
    generate_pdf('Dharm_Chaniyara_CV.pdf')
