/* Heeyeon Jang — Career Résumé (standalone page, matches the main site's design system) */
(function () {
  "use strict";

  var LANG_KEY = "hjPortfolioLang";
  function getStoredLang() { try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; } }
  function storeLang(l) { try { localStorage.setItem(LANG_KEY, l); } catch (e) { /* ignore */ } }

  function bi(en, ko) { return { en: en, ko: ko }; }
  var state = { lang: getStoredLang() || "en" };
  function t(x) {
    if (x == null) return "";
    if (typeof x === "string") return x;
    return x[state.lang] || x.en || x.ko || "";
  }

  var EMAIL = { en: "amberjang5@gmail.com", ko: "kelly538@naver.com" };
  var BEHANCE = "https://www.behance.net/kelly3789";
  var LINKEDIN = "https://www.linkedin.com/in/heeyeon-j";

  var LABELS = {
    role: bi("UX/UI Designer", "UX/UI 디자이너"),
    about: bi("About", "About"),
    career: bi("Career", "Career"),
    competencies: bi("Core Competencies", "주요 업무 역량"),
    skills: bi("Skills", "Skills"),
    languages: bi("Languages", "Languages"),
    education: bi("Education & Certifications", "학력 & 자격"),
    backLink: bi("← Portfolio", "← 포트폴리오"),
    task: bi("Task", "Task"),
    result: bi("Result", "Result")
  };

  var ABOUT_BODY = bi(
    "I majored in visual design and worked as a service planner, thinking beyond the screen about the overall user experience. Responsible for service operations and feature improvements, I analyzed real business requirements and turned them into concrete wireframes and storyboards. During development I collaborated with designers and developers, and after launch I personally verified the usage flow and functionality. Building on this experience, I aim to grow into a UX/UI designer who understands both business requirements and user experience together.",
    "시각디자인을 전공하고 서비스 기획자로 일하며, 화면을 넘어 사용 경험을 고민해 왔습니다. 서비스 운영과 기능 개선을 담당하며 현업의 요구사항을 분석하고 이를 와이어프레임과 스토리보드로 구체화했습니다. 개발 과정에서는 디자이너·개발자와 협업하고, 구현 이후에는 직접 사용 흐름과 기능을 검증했습니다. 이러한 경험을 바탕으로 비즈니스 요구사항과 사용자 경험을 함께 이해하는 UX/UI 디자이너로 성장하고자 합니다."
  );

  var CAREER = {
    company: bi("efusioni", "이퓨전아이"),
    role: bi("Commerce Planning Team, Associate", "커머스기획팀 주임"),
    period: bi("2023.07 — 2025.10 (2 yr 4 mo)", "2023.07 — 2025.10 (2년 4개월)"),
    bullets: [
      bi("Managed event planning design and system operations for a corporate group's employee shopping mall for about 2 years and 4 months", "약 2년 4개월간 대기업 계열 임직원 쇼핑몰 기획행사 디자인, 시스템 운영 담당"),
      bi("Handled service operations, feature improvements, screen design, QA, and client communication", "서비스 운영, 기능 개선, 화면설계, QA, 클라이언트 커뮤니케이션 수행"),
      bi("Experience writing wireframes, storyboards, and test cases, and verifying releases", "와이어프레임, 스토리보드, 테스트 케이스 작성 및 배포 검증 경험"),
      bi("Collaborated with developers and designers on new features and service enhancement projects", "개발자·디자이너와 협업하여 신규 기능 및 서비스 고도화 프로젝트 수행")
    ]
  };

  var CAREER_COMPETENCIES = [
    { no: "01", text: bi("Shopping mall service operations planning", "쇼핑몰 서비스 운영 기획") },
    { no: "02", text: bi("Analyzing business requirements and defining features to fit service policy", "현업 요구사항 분석 및 서비스 정책에 맞는 기능 구체화") },
    { no: "03", text: bi("Screen design reflecting service policy (Wireframe, Storyboard)", "서비스 정책을 반영한 화면 설계 (Wireframe, Storyboard)") },
    { no: "04", text: bi("Project schedule and requirements management", "프로젝트 일정 및 요구사항 관리") },
    { no: "05", text: bi("QA (writing test cases, functional & usability testing)", "QA (Test Case 작성, 기능·사용성 테스트)") },
    { no: "06", text: bi("Release verification and operational stability", "배포 검증 및 운영 안정화") },
    { no: "07", text: bi("Collaboration with clients and the development team", "클라이언트 및 개발 조직 협업") },
    { no: "08", text: bi("Data validation and processing", "데이터 검증 및 가공") }
  ];

  var CAREER_PROJECTS = [
    { id: 1, title: bi("Event & Promotion Operations", "기획전·프로모션 운영"), period: "2023.07 – 2024.03",
      role: bi("Service Operations Planning", "서비스 운영 기획"), team: bi("1 Planner, 3 Designers", "기획자 1, 디자이너 3"),
      task: bi("Supported the production of feature-event and promotion imagery for a corporate employee shopping mall, collaborated with designers to review event direction and design, managed client requirements and revisions, and oversaw production schedules and deliverable review.",
        "대기업 계열 임직원 쇼핑몰 기획전 및 프로모션 이미지 제작 지원, 디자이너와 협업하여 기획행사 제작 방향 및 디자인 검토, 클라이언트 요구사항 반영 및 수정사항 관리, 제작 일정 관리 및 결과물 검수."),
      result: bi("Launched feature events on schedule through careful timeline management and task distribution, and improved operational quality through ongoing banner monitoring.",
        "일정 관리 및 분배를 통해 일정에 맞는 기획행사를 오픈했고, 배너 모니터링을 통해 운영 품질 향상에 기여했습니다.") },
    { id: 2, title: bi("System Operations & Maintenance", "시스템 운영·유지보수"), period: "2024.03 – 2025.10",
      role: bi("Service Operations Planning · QA", "서비스 운영 기획·QA"), team: bi("2 Planners, 1 Publisher, 1 Developer", "기획자 2, 퍼블리셔 1, 개발자 1"),
      task: bi("Operated and improved a corporate employee shopping mall service, analyzed business requirements and defined features, designed screens based on requirements (Wireframe, Storyboard), wrote test cases and performed functional testing (QA), verified functionality and stabilized operations after release, coordinated client requirements and revisions, aligned schedules and features with developers and publishers, validated and processed extracted data for delivery to clients, and handled system-related inquiries and issues in collaboration with the CS team.",
        "대기업 계열 임직원 쇼핑몰 서비스 운영 및 기능 개선, 현업 요구사항 분석 및 기능 구체화, 요구사항 기반 화면 설계(Wireframe, Storyboard), 테스트 케이스 작성 및 기능 테스트(QA), 배포 후 기능 검증 및 운영 안정화, 클라이언트 요구사항 검토 및 반영 사항 조율, 개발자·퍼블리셔와 협업한 일정·기능 조율, 추출 데이터 검증 및 가공 후 클라이언트 전달, CS팀과 협업한 시스템 관련 문의 및 장애 대응."),
      result: bi("Organized operational requests into structured lists to improve communication between business stakeholders and project members, supported key-feature QA and operational stability throughout the maintenance period, and produced planning documents that translated client requirements into service policy — enabling smooth development and deployment.",
        "운영 요청사항을 리스트 형태로 체계화하여 현업 담당자와 프로젝트 참여자 간 커뮤니케이션에 기여했고, 유지보수 기간 동안 주요 기능 QA 및 운영 안정화를 지원했으며, 클라이언트 요구사항을 서비스 정책에 맞게 구체화한 기획 문서로 개발과 배포가 원활히 진행되도록 지원했습니다.") }
  ];

  var SKILL_GROUPS = [
    { cat: bi("Graphic Design", "그래픽디자인"), items: [
      { name: "Photoshop", level: bi("Intermediate-High", "중상"), pct: 70 },
      { name: "Illustrator", level: bi("Advanced", "상"), pct: 85 },
      { name: "Figma", level: bi("Intermediate", "중"), pct: 55 }
    ]},
    { cat: bi("Publishing", "퍼블리싱"), items: [
      { name: "HTML / CSS", level: bi("Intermediate", "중"), pct: 55 }
    ]},
    { cat: bi("Documentation", "문서정리"), items: [
      { name: "Excel", level: bi("Intermediate-High", "중상"), pct: 70 },
      { name: "Powerpoint", level: bi("Advanced", "상"), pct: 85 },
      { name: "Google Sheets", level: bi("Intermediate-High", "중상"), pct: 70 }
    ]}
  ];
  var LANGUAGES = [
    { name: "Korean", level: "NATIVE" },
    { name: "English", level: "INTERMEDIATE" }
  ];

  var EDU = [
    { year: "2014–2019", title: bi("Visual Design", "시각디자인과"), org: "Kyung Hee University · 경희대학교", desc: bi("Graduated · GPA 4.11 / 4.5", "졸업 · 학점 4.11 / 4.5") },
    { year: "2026.08", title: bi("Applied AI Foundations", "Applied AI Foundations"), org: "OpenAI", desc: bi("Learned how to turn repetitive tasks into structured workflows", "반복 업무를 구조화된 워크플로로 만드는 법을 학습") },
    { year: "2026.08", title: bi("AI Foundations", "AI Foundations"), org: "OpenAI", desc: bi("Learned core LLM concepts and prompt writing", "LLM 기본 개념과 프롬프트 작성법을 학습") },
    { year: "2023.04–06", title: bi("UX/UI Professional (Cohort 43)", "UX/UI 프로페셔널 (43기)"), org: "Remain · 리메인", desc: bi("Hands-on practice from research to prototyping, usability testing, and portfolio", "리서치부터 프로토타이핑, UT, 포트폴리오까지 실습") },
    { year: "2023.02–03", title: bi("Mobile UI/UX Web Design (Cohort 36)", "모바일 UI/UX 웹디자인 (36기)"), org: "홍시디자인학원", desc: bi("Covered data visualization through prototyping and usability testing", "데이터 시각화부터 프로토타입, 사용성 테스트까지 진행") },
    { year: "2022.11–2023.01", title: bi("UI/UX Web Publisher Training (Cohort 35)", "UI/UX 웹 퍼블리셔 양성과정 (35기)"), org: "홍시디자인학원", desc: bi("Practiced HTML/CSS web-standards implementation and the GUI process", "HTML/CSS 웹 표준 구현과 GUI 프로세스 실습") },
    { year: "2020.07", title: bi("Craftsman Computer Graphics Operator", "컴퓨터그래픽스운용기능사"), org: "HRD Korea · 한국산업인력공단", desc: bi("National technical qualification", "국가기술자격증") },
    { year: "2018", title: bi("Encouragement Award", "장려상"), org: "인천탁주 라벨 디자인 공모전", desc: bi("Zodiac-themed label design", "십이지 라벨 디자인") },
    { year: "2018", title: bi("Bronze Prize", "동상"), org: "국립영천호국원 일러스트 공모전", desc: bi("Illustration category", "일러스트레이션 부문") }
  ];

  /* ------------------------------------------------------------------ */

  window.careerApp = {
    setLang: function (l) {
      if (state.lang === l) return;
      state.lang = l;
      storeLang(l);
      document.documentElement.lang = l;
      render();
    }
  };

  function renderLangToggle() {
    var el = document.getElementById("langToggle");
    if (!el) return;
    el.innerHTML =
      '<button class="' + (state.lang === "en" ? "active" : "") + '" onclick="careerApp.setLang(\'en\')">EN</button>' +
      '<button class="' + (state.lang === "ko" ? "active" : "") + '" onclick="careerApp.setLang(\'ko\')">KR</button>';
  }

  function render() {
    renderLangToggle();

    var contact = document.getElementById("resumeContact");
    if (contact) {
      contact.innerHTML =
        '<a href="mailto:' + t(EMAIL) + '">' + t(EMAIL) + "</a>" +
        '<a href="' + BEHANCE + '" target="_blank" rel="noopener">Behance ↗</a>' +
        '<a href="' + LINKEDIN + '" target="_blank" rel="noopener">LinkedIn ↗</a>';
    }
    var roleEl = document.getElementById("resumeRole");
    if (roleEl) roleEl.textContent = t(LABELS.role);

    var app = document.getElementById("resumeApp");
    if (!app) return;

    var aboutHtml =
      '<div class="kicker">' + t(LABELS.about) + '</div>' +
      '<p class="detail-lede" style="margin-bottom:0">' + t(ABOUT_BODY) + "</p>";

    var competencies = CAREER_COMPETENCIES.map(function (c) {
      return '<div class="competency-card"><div class="competency-num">' + c.no + '</div><div class="text">' + t(c.text) + "</div></div>";
    }).join("");

    var projects = CAREER_PROJECTS.map(function (p) {
      return (
        '<div class="career-project">' +
        '<div class="career-project-head">' +
        '<div><div class="title">' + t(p.title) + '</div><div class="meta">' + p.period + " · " + t(p.role) + " · " + t(p.team) + "</div></div>" +
        "</div>" +
        '<div class="career-project-body">' +
        '<div><div class="label">' + t(LABELS.task) + '</div><p>' + t(p.task) + "</p></div>" +
        '<div><div class="label">' + t(LABELS.result) + '</div><p>' + t(p.result) + "</p></div>" +
        "</div></div>"
      );
    }).join("");

    var skillGroups = SKILL_GROUPS.map(function (g) {
      var rows = g.items.map(function (it) {
        return (
          '<div class="skill-row"><div class="skill-row-top"><span>' + it.name + '</span><span class="lvl">' + t(it.level) + "</span></div>" +
          '<div class="skill-bar-track"><div class="skill-bar-fill" style="width:' + it.pct + '%"></div></div></div>'
        );
      }).join("");
      return '<div class="skill-group"><h4>' + t(g.cat) + "</h4>" + rows + "</div>";
    }).join("");
    var langPills = LANGUAGES.map(function (l) {
      return '<div class="lang-pill">' + l.name + ' <span>' + l.level + "</span></div>";
    }).join("");

    var eduRows = EDU.map(function (e) {
      return (
        '<div class="resume-simple-row"><span class="yr">' + e.year + '</span><span class="main">' + t(e.title) + '</span><span class="org">' + e.org + '</span><span class="d">' + t(e.desc) + "</span></div>"
      );
    }).join("");

    app.innerHTML =
      '<section class="resume-section" style="border-top:none;padding-top:0">' + aboutHtml + "</section>" +
      '<section class="resume-section">' +
      '<div class="kicker">' + t(LABELS.career) + '</div>' +
      '<div class="career-meta" style="margin-bottom:16px"><span class="company">' + t(CAREER.company) + '</span><span class="role">' + t(CAREER.role) + '</span><span class="period">' + t(CAREER.period) + "</span></div>" +
      "<ul style=\"margin:0 0 28px;padding-left:20px;font-size:14.5px;line-height:1.9;color:var(--muted-78)\">" + CAREER.bullets.map(function (b) { return "<li>" + t(b) + "</li>"; }).join("") + "</ul>" +
      '<div class="section-sub serif" style="font-size:17px;margin-bottom:16px">' + t(LABELS.competencies) + "</div>" +
      '<div class="competency-grid" style="grid-template-columns:repeat(2,1fr);margin-bottom:24px">' + competencies + "</div>" +
      '<div style="display:flex;flex-direction:column;gap:12px">' + projects + "</div>" +
      "</section>" +
      '<section class="resume-section">' +
      '<div class="kicker">' + t(LABELS.skills) + '</div>' +
      '<div class="skills-grid" style="grid-template-columns:1fr;margin-bottom:20px">' + skillGroups + "</div>" +
      '<div class="lang-pills">' + langPills + "</div>" +
      "</section>" +
      '<section class="resume-section">' +
      '<div class="kicker">' + t(LABELS.education) + '</div>' +
      eduRows +
      "</section>";
  }

  document.documentElement.lang = state.lang;
  document.addEventListener("DOMContentLoaded", render);
})();
