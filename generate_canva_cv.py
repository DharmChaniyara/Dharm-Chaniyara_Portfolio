import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph
from reportlab.lib.styles import ParagraphStyle

def generate_canva_cv(output_pdf_path):
    os.makedirs(os.path.dirname(os.path.abspath(output_pdf_path)), exist_ok=True)
    
    # A4 Dimensions: 595.28 x 841.89 points
    width, height = A4
    c = canvas.Canvas(output_pdf_path, pagesize=A4)
    c.setTitle("Dharm Chaniyara — Curriculum Vitae")
    c.setAuthor("Dharm Chaniyara")

    # Exact Canva Template Palette
    navy_bg = colors.HexColor('#2F4156')        # Top header & bold headings
    left_col_bg = colors.HexColor('#EBEEF4')    # Left column tint
    white_bg = colors.HexColor('#FFFFFF')       # Right column
    teal_accent = colors.HexColor('#567C8D')    # Secondary accent
    sky_accent = colors.HexColor('#C8D9E6')     # Soft highlight
    text_dark = colors.HexColor('#1E293B')      # Main body text
    text_muted = colors.HexColor('#475569')     # Secondary text
    line_color = colors.HexColor('#CBD5E1')     # Dividers
    rule_navy = colors.HexColor('#2F4156')      # Left column section rules

    # 1. Fill Right Column (White)
    c.setFillColor(white_bg)
    c.rect(0, 0, width, height, stroke=0, fill=1)

    # 2. Fill Left Column (Soft Blue #EBEEF4)
    left_col_w = 230
    c.setFillColor(left_col_bg)
    c.rect(0, 0, left_col_w, height - 190, stroke=0, fill=1)

    # 3. Top Header Rectangle (Navy #2F4156)
    header_h = 190
    header_y = height - header_h
    c.setFillColor(navy_bg)
    c.rect(0, header_y, width, header_h, stroke=0, fill=1)

    # 4. Name & Tagline in Navy Header
    # Name: DHARM CHANIYARA in Times-Bold (Serif)
    c.setFillColor(colors.white)
    c.setFont("Times-Bold", 34)
    name_x = 245
    name_y = height - 75
    c.drawString(name_x, name_y, "DHARM")
    c.drawString(name_x, name_y - 40, "CHANIYARA")

    # Tagline: sans-serif letter-spaced
    c.setFont("Helvetica-Bold", 11)
    c.setFillColor(colors.HexColor('#C8D9E6'))
    c.drawString(name_x, name_y - 68, "COMPUTER SCIENCE & AI/ML DEVELOPER")

    # 5. Draw Arch Photo on Left (overlapping header and left column)
    arch_photo_path = 'public/images/dharm_arch_photo.png'
    if os.path.exists(arch_photo_path):
        photo_w = 175
        photo_h = int(photo_w * (646 / 492))
        photo_x = 28
        photo_y = height - header_h - 60
        c.drawImage(arch_photo_path, photo_x, photo_y, width=photo_w, height=photo_h, mask='auto')

    # ================= LEFT COLUMN CONTENT =================
    curr_y = height - header_h - 78
    
    def draw_left_section_heading(title, y_pos):
        # Horizontal line extending from left edge
        c.setStrokeColor(rule_navy)
        c.setLineWidth(2.5)
        c.line(0, y_pos + 4, 25, y_pos + 4)
        # Serif title
        c.setFont("Times-Bold", 16)
        c.setFillColor(navy_bg)
        c.drawString(32, y_pos, title)
        return y_pos - 18

    # --- CONTACT ---
    curr_y = draw_left_section_heading("Contact", curr_y)
    
    contact_items = [
        ("Phone:", "+91 93281 92762"),
        ("Email:", "dharmchaniyara@gmail.com"),
        ("Location:", "Vadodara / Rajkot, India"),
        ("LinkedIn:", "dharm-chaniyara-b51b9137a"),
        ("GitHub:", "github.com/DharmChaniyara"),
    ]
    
    c.setFont("Helvetica", 8.5)
    for label, val in contact_items:
        c.setFont("Helvetica-Bold", 8)
        c.setFillColor(navy_bg)
        c.drawString(32, curr_y, label)
        c.setFont("Helvetica", 8.2)
        c.setFillColor(text_dark)
        c.drawString(75, curr_y, val)
        curr_y -= 14
    curr_y -= 10

    # --- EDUCATION ---
    curr_y = draw_left_section_heading("Education", curr_y)
    
    c.setFont("Helvetica-Bold", 9.5)
    c.setFillColor(navy_bg)
    c.drawString(32, curr_y, "GSFC University, Gujarat")
    curr_y -= 12
    c.setFont("Helvetica", 8.5)
    c.setFillColor(text_muted)
    c.drawString(32, curr_y, "B.Tech Computer Science & Eng.")
    curr_y -= 11
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(teal_accent)
    c.drawString(32, curr_y, "2025 - 2029 (Current 3rd Sem)")
    curr_y -= 18

    c.setFont("Helvetica-Bold", 9.5)
    c.setFillColor(navy_bg)
    c.drawString(32, curr_y, "The Vatsalya School, Rajkot")
    curr_y -= 12
    c.setFont("Helvetica", 8.5)
    c.setFillColor(text_muted)
    c.drawString(32, curr_y, "Higher Secondary (GSEB Science)")
    curr_y -= 11
    c.setFont("Helvetica-Bold", 8)
    c.setFillColor(teal_accent)
    c.drawString(32, curr_y, "Completed • Foundation CS")
    curr_y -= 22

    # --- SKILLS ---
    curr_y = draw_left_section_heading("Skills", curr_y)
    skills = [
        "Python Programming",
        "React.js & TypeScript",
        "Node.js & Express",
        "Full-Stack Web Dev",
        "AI Developer Workflows",
        "REST APIs & JSON",
        "Git & GitHub Versioning",
        "Tailwind CSS & UI/UX"
    ]
    for s in skills:
        c.setFillColor(teal_accent)
        c.circle(36, curr_y + 3, 2, stroke=0, fill=1)
        c.setFont("Helvetica", 8.5)
        c.setFillColor(text_dark)
        c.drawString(44, curr_y, s)
        curr_y -= 13.5
    curr_y -= 12

    # --- LANGUAGE ---
    curr_y = draw_left_section_heading("Language", curr_y)
    languages = [
        "English (Professional)",
        "Gujarati (Native)",
        "Hindi (Fluent)"
    ]
    for lang in languages:
        c.setFillColor(teal_accent)
        c.circle(36, curr_y + 3, 2, stroke=0, fill=1)
        c.setFont("Helvetica", 8.5)
        c.setFillColor(text_dark)
        c.drawString(44, curr_y, lang)
        curr_y -= 13.5

    # ================= RIGHT COLUMN CONTENT =================
    right_x = 250
    right_w = width - right_x - 30
    right_y = height - header_h - 25

    def draw_right_section_heading(title, y_pos):
        c.setFont("Times-Bold", 17)
        c.setFillColor(navy_bg)
        c.drawString(right_x, y_pos, title)
        c.setStrokeColor(line_color)
        c.setLineWidth(1)
        c.line(right_x, y_pos - 6, right_x + right_w, y_pos - 6)
        return y_pos - 20

    # --- ABOUT ME ---
    right_y = draw_right_section_heading("About Me", right_y)
    about_text = (
        "Dedicated B.Tech Computer Science student at GSFC University with practical experience in "
        "AI-assisted web development, modern full-stack web applications, and Python. Completed industry "
        "internship at IdeaFolks, built real-world scam detection and sales copilots, and qualified as offline "
        "finalist at Hack Baroda 2026. Eager to contribute to meaningful engineering teams through internship opportunities."
    )
    
    # Wrap text cleanly
    style = ParagraphStyle(
        'AboutStyle',
        fontName='Helvetica',
        fontSize=8.5,
        leading=12.5,
        textColor=text_dark
    )
    p_about = Paragraph(about_text, style)
    p_w, p_h = p_about.wrap(right_w, 200)
    p_about.drawOn(c, right_x, right_y - p_h + 8)
    right_y = right_y - p_h - 14

    # --- WORK EXPERIENCE ---
    right_y = draw_right_section_heading("Work Experience", right_y)

    # Job 1: IdeaFolks
    c.setFont("Helvetica-Bold", 10.5)
    c.setFillColor(navy_bg)
    c.drawString(right_x, right_y, "AI Web Developer Intern")
    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(text_muted)
    c.drawRightString(right_x + right_w, right_y, "June 2026 – July 2026")
    right_y -= 13

    c.setFont("Helvetica-Bold", 9)
    c.setFillColor(teal_accent)
    c.drawString(right_x, right_y, "IdeaFolks • Rajkot, Gujarat")
    right_y -= 13

    exp_bullets = [
        "Completed a one-month project internship focused on web development and AI-assisted workflows.",
        "Leveraged modern AI developer tools for rapid component prototyping, API design, and debugging.",
        "Developed responsive front-end user interfaces using HTML, CSS, JavaScript, and modern component tooling."
    ]
    for b in exp_bullets:
        c.setFillColor(teal_accent)
        c.circle(right_x + 4, right_y + 3, 1.8, stroke=0, fill=1)
        p_b = Paragraph(b, style)
        b_w, b_h = p_b.wrap(right_w - 14, 100)
        p_b.drawOn(c, right_x + 12, right_y - b_h + 8)
        right_y -= (b_h + 4)
    right_y -= 10

    # --- PROJECTS & HACKATHONS ---
    right_y = draw_right_section_heading("Key Projects & Hackathons", right_y)

    projects = [
        (
            "Deal Intelligence Agent (Sales Copilot)",
            "Hack Baroda 2026 Finalist",
            "Finalist with Team CODE BUSTERS. Built an AI sales intelligence copilot analyzing calls, buyer sentiment, and risk signals."
        ),
        (
            "JobGuard AI (Scam Job Offer Detector)",
            "Python, ML, NLP",
            "Engineered an automated scam detector evaluating offer letters with domain verification, NLP heuristic scoring, and fraud alerts."
        ),
        (
            "StudyShare (Campus Academic Platform)",
            "React, Node.js, Web",
            "Peer-to-peer syllabus and notes platform with semester filtering, fast document access, and role-based contributions."
        )
    ]

    for p_title, p_sub, p_desc in projects:
        c.setFont("Helvetica-Bold", 10)
        c.setFillColor(navy_bg)
        c.drawString(right_x, right_y, p_title)
        c.setFont("Helvetica-Bold", 8.5)
        c.setFillColor(text_muted)
        c.drawRightString(right_x + right_w, right_y, p_sub)
        right_y -= 12

        p_proj = Paragraph(p_desc, style)
        pr_w, pr_h = p_proj.wrap(right_w, 100)
        p_proj.drawOn(c, right_x, right_y - pr_h + 8)
        right_y -= (pr_h + 7)
    right_y -= 8

    # --- CERTIFICATIONS & ACHIEVEMENTS ---
    right_y = draw_right_section_heading("Certifications & Achievements", right_y)

    certs = [
        ("Python Essentials 2", "Cisco Networking Academy (Oct 2026)", "Advanced OOP, modules, exception handling, and file processing."),
        ("Computer Hardware Basics", "Cisco Networking Academy (Sept 2026)", "Core computer architecture, system diagnostics, and hardware."),
        ("Hack Baroda 2026 Finalist", "Student Technical Hackathon", "Offline Hackathon finalist among hundreds of participating student teams.")
    ]

    for c_title, c_issuer, c_desc in certs:
        c.setFont("Helvetica-Bold", 9.5)
        c.setFillColor(navy_bg)
        c.drawString(right_x, right_y, c_title)
        c.setFont("Helvetica", 8.5)
        c.setFillColor(teal_accent)
        c.drawRightString(right_x + right_w, right_y, c_issuer)
        right_y -= 11

        c_p = Paragraph(c_desc, style)
        cw, ch = c_p.wrap(right_w, 100)
        c_p.drawOn(c, right_x, right_y - ch + 8)
        right_y -= (ch + 6)

    # Save PDF
    c.save()
    print(f"Generated Canva CV at: {output_pdf_path}")

if __name__ == '__main__':
    generate_canva_cv('Dharm_Chaniyara_CV.pdf')
    generate_canva_cv('public/resume/Dharm_Chaniyara_CV.pdf')
