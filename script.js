/* Heeyeon Jang — UX/UI Portfolio (bilingual static build)
   Plain vanilla JS. Hash-based routing, no frameworks, no build step. */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Language                                                            */
  /* ------------------------------------------------------------------ */

  var LANG_KEY = "hjPortfolioLang";
  function getStoredLang() {
    try { return localStorage.getItem(LANG_KEY); } catch (e) { return null; }
  }
  function storeLang(l) {
    try { localStorage.setItem(LANG_KEY, l); } catch (e) { /* ignore */ }
  }

  /** bi(en, ko) -> {en, ko} shorthand for localized text pairs */
  function bi(en, ko) { return { en: en, ko: ko }; }
  /** t(x) -> resolves a bi() pair (or plain string) to the current language */
  function t(x) {
    if (x == null) return "";
    if (typeof x === "string") return x;
    return x[state.lang] || x.en || x.ko || "";
  }

  /* ------------------------------------------------------------------ */
  /* Constants                                                           */
  /* ------------------------------------------------------------------ */

  var EMAIL = { en: "amberjang5@gmail.com", ko: "kelly538@naver.com" };
  var BEHANCE = "https://www.behance.net/kelly3789";
  var LINKEDIN = "https://www.linkedin.com/in/heeyeon-j";
  var CAREER_RESUME_URL = "career.html";

  var BEHANCE_URLS = {
    maeari: { en: "https://www.behance.net/gallery/226604539/MAEARI-Hiking-community-app-UXUI-design", ko: "https://www.behance.net/gallery/173653843/Hiking-Community-App-MAEARI" },
    prime: { en: "https://www.behance.net/gallery/227152215/Amazon-Prime-Video-App-UXUI-Renewal-Project", ko: "https://www.behance.net/gallery/223563343/Amazon-Prime-Video-App-Renewal-Project-UXUI-Redesign" },
    kepco: { en: "https://www.behance.net/gallery/226632259/KEPCO-Website-UIUX-design-Renewal", ko: "https://www.behance.net/gallery/173648713/UIUX-design-KEPCO-Website-Renewal" },
    kyobo: { en: "https://www.behance.net/gallery/226633967/Kyobo-bookstore-website-UIUX-design-renewal", ko: "https://www.behance.net/gallery/173651477/UXUI-designKyobo-Book-Website-Renewal-Project" }
  };

  var NAV = [
    { id: "home", label: "Home" },
    { id: "career", label: "Career" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "activities", label: "Activities" }
  ];
  var PROJECT_DETAIL_PAGES = ["maeari", "prime", "kepco", "kyobo"];

  /* ------------------------------------------------------------------ */
  /* Data                                                                 */
  /* ------------------------------------------------------------------ */

  var FOOTER_HEADING = bi(
    "Heeyeon Jang, a UX/UI designer who connects planning and design.",
    "기획과 디자인을 연결하는 UX/UI 디자이너 장희연입니다."
  );
  var TAGLINE = bi(
    "A UX/UI designer who connects planning and design.",
    "기획과 디자인을 연결하는 UX/UI 디자이너입니다."
  );
  var ABOUT_H2 = bi(
    "Connecting the Logic of Planning with the Eye of Design",
    "기획의 논리와 디자인의 시선을 연결합니다"
  );
  var ABOUT_BODY = bi(
    "I majored in visual design and worked as a service planner, thinking beyond the screen about the overall user experience. Responsible for service operations and feature improvements, I analyzed real business requirements and turned them into concrete wireframes and storyboards. During development I collaborated with designers and developers, and after launch I personally verified the usage flow and functionality. Building on this experience, I aim to grow into a UX/UI designer who understands both business requirements and user experience together.",
    "시각디자인을 전공하고 서비스 기획자로 일하며, 화면을 넘어 사용 경험을 고민해 왔습니다. 서비스 운영과 기능 개선을 담당하며 현업의 요구사항을 분석하고 이를 와이어프레임과 스토리보드로 구체화했습니다. 개발 과정에서는 디자이너·개발자와 협업하고, 구현 이후에는 직접 사용 흐름과 기능을 검증했습니다. 이러한 경험을 바탕으로 비즈니스 요구사항과 사용자 경험을 함께 이해하는 UX/UI 디자이너로 성장하고자 합니다."
  );

  var ABOUT_CARDS = [
    { no: "01", title: bi("Small differences shape the user experience", "작은 차이가 사용자 경험을 바꾼다고 생각합니다"),
      body: bi("Studying visual design taught me that small differences — type size, spacing, information layout — determine how polished something feels. As a planner designing screens with wireframes and storyboards, I thought about how users would take in information, and after launch I tested the flow and details myself.",
        "시각디자인을 전공하며 글자 크기, 간격, 정보 배치 같은 작은 차이가 완성도를 좌우한다는 것을 배웠습니다. 기획자로 일하며 와이어프레임과 스토리보드로 화면을 설계할 때도 사용자가 정보를 어떻게 받아들일지 함께 고민했고, 구현 이후에는 직접 테스트하며 흐름과 디테일을 확인했습니다.") },
    { no: "02", title: bi("I learn what I don't know", "모르는 것은 배우며 해결합니다"),
      body: bi("When I struggled to communicate with developers while running a shopping mall system, I taught myself SQL. Whenever I find a gap in my knowledge, I learn what I need and apply it — and I keep learning new tools and skills in UX/UI the same way.",
        "쇼핑몰 시스템 운영을 맡으며 개발자와의 소통에 어려움을 느껴 SQL을 독학했습니다. 부족한 부분을 발견하면 필요한 것을 스스로 배우고 적용하며, UX/UI에서도 새로운 도구와 기술을 꾸준히 익혀가고자 합니다.") },
    { no: "03", title: bi("Turning requirements into usable screens", "요구사항을 사용 가능한 화면으로 구체화합니다"),
      body: bi("Rather than passing requirements along as-is, I review existing service policy and screen flow to sort out the functions and edge cases actually needed, then turn them into concrete wireframes and storyboards.",
        "현업의 요구사항을 그대로 전달하기보다 기존 서비스 정책과 화면 흐름을 검토해 필요한 기능과 예외 상황을 정리하고, 이를 와이어프레임과 스토리보드로 구체화했습니다.") },
    { no: "04", title: bi("Improving with user data, not intuition", "감이 아닌 사용자 반응과 데이터를 보고 개선합니다"),
      body: bi("At Etsy I analyzed SEO keywords and compared competitor listings to improve pages, and by continuously analyzing views and sales data I achieved over 310 sales.",
        "Etsy에서 SEO 키워드를 분석하고 경쟁사 리스팅을 비교해 페이지를 개선했으며, 조회수·판매 데이터를 지속 분석해 310건 이상의 판매를 달성했습니다.") }
  ];
  var WORKING_STYLE = [
    { ko: "꼼꼼함", en: "Attention to Detail" },
    { ko: "성장지향성", en: "Growth Mindset" },
    { ko: "성실성", en: "Diligence" },
    { ko: "협동성", en: "Teamwork" }
  ];

  var CAREER_TITLE = bi("Shopping Mall Service Maintenance", "쇼핑몰 서비스 유지보수");
  var CAREER_VIEW_RESUME = bi("View Career Résumé ↗", "경력기술서 보러가기 ↗");
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

  var PROJECT_FILTERS = [
    { id: "all", label: bi("All", "전체") },
    { id: "app", label: bi("App", "App") },
    { id: "web", label: bi("Website", "Website") }
  ];
  var PROJECTS_SUB = bi(
    "UX/UI planning projects published on Behance. Click a card to open its case study.",
    "Behance에 게재된 UX/UI 기획 프로젝트입니다. 카드를 클릭하면 상세 페이지로 이동합니다."
  );
  var PROJECTS = [
    { id: 1, no: "01", type: "app", tag: "App Design", name: "MAEARI", title: bi("Hiking Community App", "하이킹 커뮤니티 앱"),
      desc: bi("A hiking community app spanning trail recommendations, companion matching, and a photo community.", "등산 코스 추천, 동행 매칭, 사진 커뮤니티를 아우르는 하이킹 커뮤니티 앱입니다."),
      bullets: [bi("Core flows designed from user research", "사용자 리서치 기반 핵심 플로우 설계"), bi("Information structure that helps beginners find trails easily", "초보 등산객도 쉽게 코스를 찾는 정보 구조")],
      key: "maeari" },
    { id: 2, no: "02", type: "app", tag: "App Renewal", name: "Amazon Prime Video", title: bi("Prime Video App Renewal", "프라임 비디오 앱 리뉴얼"),
      desc: bi("Redesigned the information architecture and browsing experience of the existing Prime Video app.", "기존 Prime Video 앱의 정보 구조와 탐색 경험을 재설계했습니다."),
      bullets: [bi("Restructured the content discovery flow", "콘텐츠 탐색 흐름 재구성"), bi("Improved the live sports viewing experience", "라이브 스포츠 시청 경험 개선")],
      key: "prime" },
    { id: 3, no: "03", type: "web", tag: "Website Renewal", name: "KEPCO Energy", title: bi("KEPCO Website", "한국전력공사 웹사이트"),
      desc: bi("Renewed the UI/UX of the Korea Electric Power Corporation official website.", "한국전력공사 공식 웹사이트의 UI/UX를 리뉴얼했습니다."),
      bullets: [bi("A visual identity that builds trust", "신뢰감 있는 비주얼 아이덴티티"), bi("Structure and navigation that make vast amounts of information easy to find", "방대한 정보를 쉽게 찾는 구조·내비게이션")],
      key: "kepco" },
    { id: 4, no: "04", type: "web", tag: "Website Renewal", name: "Kyobo Book Centre", title: bi("Kyobo Books Website Renewal", "교보문고 웹사이트 리뉴얼"),
      desc: bi("Reorganized Kyobo Book Centre's homepage so its wide range of digital content is easy to browse and discover.", "교보문고가 보유한 다양한 디지털 콘텐츠를 메인 페이지에서 쉽게 둘러보고 발견할 수 있도록 재구성했습니다."),
      bullets: [bi("Simplified confusing service names into intuitive navigation", "이해하기 어려운 서비스 명칭을 직관적인 내비게이션으로 정리"), bi("Reordered the homepage around book content and personalized recommendations", "책 콘텐츠와 개인화 추천 중심으로 메인 페이지 구조를 재배열")],
      key: "kyobo" }
  ];
  var PROJECT_CTA = bi("View Case Study →", "케이스 스터디 보기 →");

  var EDU_TITLE = bi("Education · Courses · Certifications · Awards", "학력 · 교육 · 자격 · 수상");
  var EDU_FILTERS = [
    { id: "all", label: bi("All", "전체") },
    { id: "education", label: bi("Education", "학력") },
    { id: "course", label: bi("Courses", "교육이수") },
    { id: "cert", label: bi("Certifications", "자격증") },
    { id: "award", label: bi("Awards", "수상") }
  ];
  var EDU = [
    { year: "2014–2019", cat: "education", title: bi("Visual Design", "시각디자인과"), org: "Kyung Hee University · 경희대학교", desc: bi("Graduated · GPA 4.11 / 4.5", "졸업 · 학점 4.11 / 4.5") },
    { year: "2026.08", cat: "course", title: bi("Applied AI Foundations", "Applied AI Foundations"), org: "OpenAI", desc: bi("Learned how to turn repetitive tasks into structured workflows", "반복 업무를 구조화된 워크플로로 만드는 법을 학습") },
    { year: "2026.08", cat: "course", title: bi("AI Foundations", "AI Foundations"), org: "OpenAI", desc: bi("Learned core LLM concepts and prompt writing", "LLM 기본 개념과 프롬프트 작성법을 학습") },
    { year: "2023.04–06", cat: "course", title: bi("UX/UI Professional (Cohort 43)", "UX/UI 프로페셔널 (43기)"), org: "Remain · 리메인", desc: bi("Hands-on practice from research to prototyping, usability testing, and portfolio", "리서치부터 프로토타이핑, UT, 포트폴리오까지 실습") },
    { year: "2023.02–03", cat: "course", title: bi("Mobile UI/UX Web Design (Cohort 36)", "모바일 UI/UX 웹디자인 (36기)"), org: "홍시디자인학원", desc: bi("Covered data visualization through prototyping and usability testing", "데이터 시각화부터 프로토타입, 사용성 테스트까지 진행") },
    { year: "2022.11–2023.01", cat: "course", title: bi("UI/UX Web Publisher Training (Cohort 35)", "UI/UX 웹 퍼블리셔 양성과정 (35기)"), org: "홍시디자인학원", desc: bi("Practiced HTML/CSS web-standards implementation and the GUI process", "HTML/CSS 웹 표준 구현과 GUI 프로세스 실습") },
    { year: "2020.07", cat: "cert", title: bi("Craftsman Computer Graphics Operator", "컴퓨터그래픽스운용기능사"), org: "HRD Korea · 한국산업인력공단", desc: bi("National technical qualification", "국가기술자격증") },
    { year: "2018", cat: "award", title: bi("Encouragement Award", "장려상"), org: "인천탁주 라벨 디자인 공모전", desc: bi("Zodiac-themed label design", "십이지 라벨 디자인") },
    { year: "2018", cat: "award", title: bi("Bronze Prize", "동상"), org: "국립영천호국원 일러스트 공모전", desc: bi("Illustration category", "일러스트레이션 부문") }
  ];

  var ACT_TITLE = bi("Activities · Overseas Experience", "대외활동 · 해외경험");
  var ACTIVITIES = [
    { period: "2013.08 – 2025.10", tag: bi("Community Service", "사회공헌"), title: bi("Geumcheon Food Market Volunteering", "금천푸드마켓 자원봉사"), desc: bi("Handled monthly deliveries at a food market supporting low-income households.", "기초생활수급자·차상위계층에게 물품을 지원하는 푸드마켓에서 매달 배달을 담당했습니다.") },
    { period: "2017.02", tag: bi("Illustration Group Show", "일러스트 그룹전"), title: bi("The 1995.5 Exhibition Club", "The 1995.5 전시회 동아리"), desc: bi("Exhibited 15 illustrations as part of a 5-person project, handling venue booking, scheduling, and submissions.", "5인 프로젝트로 일러스트 15점을 출품, 대관·스케줄·출품을 담당했습니다.") },
    { period: "2020.09 – 2022.11", tag: bi("Independent Work", "사회활동"), title: bi("Etsy Printable Art Sales", "Etsy Printable Art 판매"), desc: bi("Achieved 310+ sales through SEO keyword analysis and listing improvements.", "SEO 키워드 분석과 리스팅 개선으로 총 310건 이상 판매를 달성했습니다.") },
    { period: "2021.04 – 2022.11", tag: bi("Independent Work", "사회활동"), title: bi("Naver OGQ Sticker Design", "네이버 OGQ 이모티콘 제작"), desc: bi("Sold 1,600+ sticker sets for Naver Blog and AfreecaTV.", "네이버 블로그·아프리카TV용 이모티콘으로 총 1,600건 이상 판매했습니다.") },
    { period: "2025.11 – 2026.07", tag: bi("Overseas Experience", "해외경험"), title: bi("Working Holiday in Australia", "호주 워킹홀리데이"), desc: bi("Built English communication skills and adaptability collaborating with colleagues from diverse backgrounds.", "다양한 국적의 동료와 협업하며 영어 커뮤니케이션과 적응력을 키웠습니다.") }
  ];

  /* ---- Project detail content ---- */

  var L2 = {
    research: bi("Research", "리서치"),
    coreValue: bi("Core Value", "Core Value"),
    personas: bi("Personas", "페르소나"),
    flow: bi("Flow Chart · Wireframe · Story Board", "플로우 차트 · 와이어프레임 · 스토리보드"),
    ut: bi("Usability Testing", "사용성 테스트 (UT)"),
    reflection: bi("Reflection", "회고"),
    background_survey: bi("Background & User Survey", "배경 & 사용자 서베이"),
    competitor: bi("Competitor Analysis", "경쟁사 분석"),
    solution: bi("Solution", "솔루션"),
    keyfeatures: bi("Key Features", "핵심 기능"),
    storyboard: bi("Story Board", "스토리보드"),
    home_board: "00 · Home",
    profile_board: "01 · Profile Setting",
    contents_board: "02 · Contents",
    vd_board: "03 · View & Download",
    sports_board: "04 · Sports",
    problem_solution: bi("Problem & Solution", "문제 & 솔루션"),
    decisions: bi("Design Decisions", "디자인 결정"),
    finaldesign: bi("Final Design", "최종 디자인"),
    interview: bi("Interview Findings", "인터뷰 공통점"),
    market: bi("Market · Competitor Analysis", "시장 · 경쟁 분석"),
    backProjects: bi("← Back to Projects", "← 프로젝트 목록으로"),
    caseStudy: bi("View Full Case Study on Behance ↗", "전체 케이스 스터디 보기 (Behance) ↗"),
    painPoint: bi("Pain point: ", "불편 지점: ")
  };

  var PROJECT_META = {
    maeari: { name: "MAEARI", tag: "App Design", hero: "maeari-hero.jpg",
      title: "MAEARI", desc: bi("A hiking community app that helps you hike without getting lost, alongside a hiking mate who matches you well.", "나와 맞는 등산 메이트와 함께 헤매지 않고 등산할 수 있도록 도와주는 등산 커뮤니티 앱입니다."),
      meta: [
        { label: "Role", value: bi("UX Research · IA · UI Design · Usability Testing", "UX 리서치 · IA · UI 디자인 · UT") },
        { label: "Period", value: "2023.04 – 06" },
        { label: "Tools", value: "Figma · Photoshop · Illustrator" },
        { label: "Type", value: bi("Mobile App · Hiking Community", "모바일 앱 · 등산 커뮤니티") },
        { label: "Contribution", value: bi("Planning 100% · Design 100%", "기획 100% · 디자인 100%") },
        { label: "Team", value: bi("1 person (solo project)", "1명 (개인 프로젝트)") }
      ] },
    prime: { name: "Amazon Prime Video", tag: "App Renewal", hero: "prime-hero-new.webp",
      title: bi("Amazon Prime Video Renewal", "Amazon Prime Video 리뉴얼"), desc: bi("Redesigned Prime Video's browsing structure and sports-viewing experience amid streamflation and subscription fatigue.", "스트림플레이션과 구독 피로 속에서 프라임 비디오의 탐색 구조와 스포츠 시청 경험을 재설계했습니다."),
      meta: [
        { label: "Role", value: bi("UX Research · UI Redesign · Usability Testing", "UX 리서치 · UI 리디자인 · UT") },
        { label: "Period", value: "2025" },
        { label: "Tools", value: "Figma · Photoshop" },
        { label: "Type", value: bi("App Renewal · OTT", "앱 리뉴얼 · OTT") },
        { label: "Contribution", value: bi("Planning 100% · Design 50%", "기획 100% · 디자인 50%") },
        { label: "Team", value: bi("2 people (planning and design both shared)", "2명 (기획 · 디자인 모두 공동)") }
      ] },
    kepco: { name: "KEPCO Energy", tag: "Website Renewal", hero: "kepco-hero.jpg",
      title: bi("KEPCO Website Renewal", "한국전력공사 웹사이트 리뉴얼"), desc: bi("Redesigned KEPCO's information structure and visuals with the goal of restoring trust and disclosing information transparently.", "신뢰 회복과 투명한 정보 공개를 목표로 한국전력공사 공식 웹사이트의 정보 구조와 비주얼을 재설계했습니다."),
      meta: [
        { label: "Role", value: bi("UX Research · Website Analysis · UI Design", "UX 리서치 · 웹사이트 분석 · UI 디자인") },
        { label: "Period", value: bi("2023.06 (4 weeks)", "2023.06 (4주)") },
        { label: "Tools", value: "Figma · Photoshop · Illustrator" },
        { label: "Type", value: bi("Website Renewal", "웹사이트 리뉴얼") },
        { label: "Contribution", value: bi("Planning 100% · Design 100%", "기획 100% · 디자인 100%") },
        { label: "Team", value: bi("4 people (planning shared / design individual)", "4명 (기획 공동 / 디자인 개인)") }
      ] },
    kyobo: { name: "Kyobo Book Centre", tag: "Website Renewal", hero: "kyobo-hero.jpg",
      title: bi("Kyobo Books Website Renewal", "교보문고 웹사이트 리뉴얼"), desc: bi("Redesigned Kyobo Book Centre's main page so its wide range of digital content is easy to discover, after Korea's adult reading rate declined and browsing habits shifted toward video.", "독서율 하락과 영상 콘텐츠 중심의 여가 트렌드 속에서, 교보문고가 보유한 다양한 디지털 콘텐츠를 메인 페이지에서 쉽게 발견할 수 있도록 재설계했습니다."),
      meta: [
        { label: "Role", value: bi("UX Research · Website Analysis · UI Design", "UX 리서치 · 웹사이트 분석 · UI 디자인") },
        { label: "Period", value: "2023.03 – 04" },
        { label: "Tools", value: "Photoshop · Illustrator · VS Code" },
        { label: "Type", value: bi("Website Renewal", "웹사이트 리뉴얼") },
        { label: "Contribution", value: bi("Planning 100% · Design 100%", "기획 100% · 디자인 100%") },
        { label: "Team", value: bi("1 person (solo project)", "1명 (개인 프로젝트)") }
      ] }
  };

  var MAEARI_INSIGHTS = [
    bi("They value their personal hiking experience.", "개인의 등산 경험을 중시한다"),
    bi("Stamina and distance determine whether they enjoy a hike.", "체력과 거리가 등산 경험의 호불호를 좌우한다"),
    bi("They want detailed information on what to bring.", "디테일한 등산 준비물을 알기를 원한다"),
    bi("They respond positively to varied hiking experiences like trekking.", "트레킹과 같은 다양한 등산 경험에 긍정적이다"),
    bi("Many hold a negative view of socializing-focused hiking clubs.", "친목 위주의 산악회에 부정적 인식이 많다")
  ];
  var MAEARI_MARKET = [
    bi("Interest in hiking has grown since COVID, and 20s–30s beginners are joining one-off hiking crews through social media.", "코로나 이후 등산 관심이 높아졌고, 2030 입문자는 SNS를 통해 단발성 등산 크루에 가입하고 있다"),
    bi("Hiking crews have a key limitation: members can't see information about who they're hiking with, and there's little flexibility.", "등산 크루는 함께 등산하는 사람들의 정보를 알 수 없고 자유도가 낮다는 한계가 있다"),
    bi("Hobby apps tend to expand into more categories over time — to differentiate, we set our STP to focus solely on the individual hiking experience.", "취미활동 앱은 카테고리 확장 추세 — 이와 차별화해 개인의 등산 경험에만 집중하는 방향으로 STP를 설정했다")
  ];
  var MAEARI_CORE_VALUES = [
    { title: bi("A Hiking Mate Who Matches You", "나와 맞는 등산 메이트"), body: bi("Find hiking friends who match your skill level, location, and age group, and hike with someone you can trust based on their manner score.", "등산 실력과 사는 지역, 연령대로 나와 맞는 등산 친구를 찾고 매너 점수를 통해 신뢰할 수 있는 사람과 등산한다.") },
    { title: bi("A Service Built for Hiking Beginners", "등산 초보자 맞춤 서비스"), body: bi("Check the trail on the map so you never get lost, and use level-based reviews to find a mountain that fits your fitness.", "길을 헤매지 않도록 지도로 등산로를 확인하고, 등산 실력별 후기 기능으로 내 체력에 적절한 산을 찾는다.") }
  ];
  var MAEARI_PERSONAS = [
    { tag: "Persona 01", name: bi("Lee Yujin (22) · Beginner Hiker", "이유진 (22) · 등산 초보자"),
      body: bi("A beginner hiker always on the lookout for a good Instagram shot. She needs beginner-friendly features, and since she enjoys socializing on social media, she treats hiking as a way to make friends too.", "호시탐탐 인스타 각을 노리는 초보 등산객. 초보자 맞춤 기능이 필요하고, SNS로 사람들과 어울리는 것을 좋아해 등산에서도 친목을 목표로 한다."),
      pain: bi("Preparing for a hike, finding the trail on the way up and down, and getting home", "등산 준비 과정과 등하산 중 길찾기, 귀가 과정"), photo: "maeari-persona-1.webp" },
    { tag: "Persona 02", name: bi("Kim Younghyun (32) · Fitness-Matched Exercise", "김영현 (32) · 체력 맞춤 운동"),
      body: bi("He wants to hike for enjoyable exercise and a healthy body. Knowing his stamina is limited, he needs courses matched to how much exertion he can handle.", "즐거운 운동과 건강한 신체를 위해 등산하고 싶다. 체력이 약하다는 것을 알고 있어 본인 체력에 맞는 운동량의 코스를 필요로 한다."),
      pain: bi("Giving up midway during a hike, and the descent", "등산 중 중도 포기, 하산 과정"), photo: "maeari-persona-2.webp" }
  ];
  var MAEARI_LEVELS = [
    { color: "rgb(0,154,119)", label: bi("Green · Beginner", "Green · 초보자") },
    { color: "#e07a4f", label: bi("Orange · Intermediate", "Orange · 중수") },
    { color: "#c0392b", label: bi("Red · Advanced", "Red · 고수") },
    { color: "#2f2a26", label: bi("Black · Expert", "Black · 초고수") }
  ];
  var MAEARI_UT = {
    tabs: [
      { id: "first", label: bi("Round 1 UT", "1차 UT"),
        summary: bi("In the first round of usability testing, the success rate was low for Mission 1 (finding a friend and checking their profile). The cause was unfamiliar wording — users were more familiar with “Course” than “Trail,” and wanted detailed labels like Beginner/Intermediate next to the level. Mission 2 (finding a course and adding it to the calendar) was completed successfully by everyone.",
          "1차 UT 결과, 친구를 찾고 프로필을 확인하는 1번 미션의 성공률이 낮았습니다. 원인은 사용자가 익숙하지 않은 표현이었습니다 — Trail보다 Course를 익숙해했고, 레벨 옆에 초보자·중수 등 상세 설명을 원했습니다. 코스를 찾고 캘린더에 추가하는 2번 미션은 모두 성공했습니다."),
        items: [
          { problem: bi("The manner score was hard to understand", "알아보기 어려운 매너점수"), solution: bi("Redesigned the manner-score UI and added an explanatory caption", "매너점수 UI 변경 및 설명글 추가") },
          { problem: bi("Wording users don’t commonly use", "사람들이 자주 사용하지 않는 표현"), solution: bi("Switched to more familiar wording and added level-name captions", "자주 사용하는 표현으로 변경, 레벨 명칭 설명글 추가") },
          { problem: bi("Unclear whether “Challenge” meant a challenge or a photo story", "챌린지인지 사진 모음 스토리인지 알 수 없는 챌린지"), solution: bi("Changed the challenge into a badge-illustration graphic", "챌린지를 뱃지 일러스트 그래픽으로 변경") },
          { problem: bi("A non-interactive checkbox on the course detail page that users kept tapping", "상호작용이 없는데도 눌러보게 되는 코스 상세페이지의 체크박스"), solution: bi("Kept the checkbox only in the calendar and removed it from the course detail page", "캘린더의 체크박스만 유지하고 코스 상세페이지 체크박스 삭제") }
        ] },
      { id: "second", label: bi("Round 2 UT", "2차 UT"),
        summary: bi("In the second round, every user succeeded at every mission, including Mission 1 — resolved within a minute by all participants this time. We did learn that users struggled where status values weren’t clearly labeled, and revised the UI accordingly.",
          "2차 UT 결과, 사용자들은 모두 미션에 성공했고 1차에서 성공률이 낮았던 1번 미션도 모두 1분 내로 해결했습니다. 다만 상태값이 명시되지 않은 부분을 어려워한다는 인사이트를 얻어 UI를 수정했습니다."),
        items: [
          { problem: bi("Current location wasn’t visible in the Friends menu", "친구 메뉴에서 확인되지 않는 현재 나의 위치"), solution: bi("Added a current-location button and a bottom-sheet control for selecting an area range", "현재 위치 버튼을 추가하고 바텀드랍으로 지역 범위 선택") },
          { problem: bi("The calendar icon was hard to recognize", "알아보기 어려운 캘린더 아이콘"), solution: bi("Changed it to an icon that reads more clearly as a calendar", "좀 더 캘린더 같은 아이콘으로 변경") },
          { problem: bi("No indication of which filters were applied on the friend search results screen", "친구 메뉴 검색 결과 화면에서 적용한 필터 요소의 부재"), solution: bi("Displayed the applied filter values on the friend search page", "친구 찾기 페이지에서 필터값 명시") },
          { problem: bi("“Add members” in the calendar didn’t read as a button", "버튼인지 알아보기 어려운 캘린더의 Add members"), solution: bi("Added an arrow to make it clearly a button", "화살표를 추가하여 버튼임을 명시") }
        ] }
    ]
  };
  var MAEARI_REFLECTION = [
    bi("Planning a hiking community app for users in their 20s–30s was my first time designing a new service from scratch. Early on, I expanded features using a mind map based on frustrations I'd personally experienced, forming the hypothesis that this would be “a service for sharing the hiking experience with others.” After running user interviews, I found an important difference: relationships mostly stayed one-off, and users valued “the personal hiking experience itself” more than ongoing communication. Based on that insight, I redefined the service around recording one's own hiking experience, supporting beginners, and connecting people only when needed.",
      "2030 타깃의 등산 커뮤니티 앱을 기획하며 처음으로 신규 서비스를 설계했습니다. 초기에는 제가 경험한 불편을 바탕으로 마인드맵을 활용해 기능을 확장하며, '사람들과 함께 등산 경험을 나누는 서비스'라는 가설을 세웠습니다. 이후 사용자 인터뷰를 진행하며 이 가설이 완전히 틀린 것은 아니었지만, 2030 사용자들은 관계가 대부분 단발성에 그쳤고 '개인의 등산 경험 자체'를 더 중요하게 여긴다는 중요한 차이를 발견했습니다. 이 인사이트를 통해 개인의 등산 경험 기록 및 초보자 맞춤 서비스를 제공하고, 필요할 때 연결되는 방향으로 서비스를 재정의했습니다."),
    bi("The first interviews and usability tests I ever ran felt unfamiliar, but watching the service direction take shape as I observed real user reactions left a strong impression on me. That experience made me far more interested in the “planning stage,” and I went on to choose planning as my career, working as a planner for 2 years and 4 months. Looking back, this project's experience was the pivotal starting point that shaped my career path.",
      "처음 진행한 인터뷰와 UT는 낯설었지만, 사용자 반응을 직접 확인하며 서비스 방향이 구체화되는 과정이 인상 깊었습니다. 이 경험을 통해 문제를 정의하고 방향을 설정하는 '기획 단계'에 더 큰 흥미를 느끼게 되었고, 이후 기획자로 커리어를 선택하여 2년 4개월간 기획자로 일했습니다. 되돌아보면 이 프로젝트에서의 경험이 제 진로를 결정한 중요한 출발점이었다고 생각합니다.")
  ];

  var PRIME_BACKGROUND = [
    { title: bi("Streamflation", "스트림플레이션"), body: bi("As subscription prices kept rising, users became more selective about which services to keep.", "구독료 인상이 이어지며 사용자는 어떤 서비스를 유지할지 더 까다롭게 판단하게 되었습니다.") },
    { title: bi("Subscription Fatigue", "구독 피로"), body: bi("Subscribing to multiple OTT services at once made the fatigue of choosing what to watch worse.", "여러 OTT를 동시에 구독하면서 볼 것을 고르는 데 드는 피로가 커졌습니다.") },
    { title: bi("Content Variety", "콘텐츠의 다양성"), body: bi("Our survey found that content variety and ease of continuing to watch were the key criteria for choosing a service.", "서베이 결과 서비스 선택의 핵심 기준은 콘텐츠의 다양성과 이어보기 편의성이었습니다.") }
  ];
  var PRIME_SURVEY = {
    note: bi("Survey of 67 people who had used an OTT service at least once — many cited “content variety” as the main reason they kept using OTT.", "OTT 서비스를 1번 이상 이용해본 적 있는 67명 대상 설문 — 많은 사용자들이 '다양한 콘텐츠'를 지속 이용의 주된 이유로 꼽았습니다."),
    charts: [
      { title: bi("Currently-Used OTT Ranking", "현재 사용 중인 OTT 순위"), bars: [["Netflix", 77.6], ["Tving", 44.8], ["Coupang Play", 38.8]] },
      { title: bi("Reasons to Keep Using", "지속 이용 이유"), bars: [[bi("Content variety", "콘텐츠의 다양성"), 67.5], [bi("Usability", "사용성(편리함)"), 39.3], [bi("Uses it with family", "가족과 함께 사용"), 37.5]] },
      { title: bi("Reasons to Stop Using", "이탈 이유"), bars: [[bi("No content of interest", "관심 콘텐츠 부재"), 76.2], [bi("Too expensive", "구독료가 비쌈"), 71.4], [bi("Found other hobbies", "다른 취미가 생김"), 14.3]] }
    ]
  };
  var PRIME_COMPETITOR = {
    note: bi("Netflix's strength lies in an immersive experience centered on original content, while Prime Video's strength is the broad user base secured through bundling.", "넷플릭스는 오리지널 콘텐츠 중심의 몰입 경험에, 아마존 프라임 비디오는 번들링을 기반으로 다양한 사용자층을 확보하고 있다는 강점을 가지고 있습니다."),
    netflix: { title: "Netflix", hi: [2, 3], chips: [
      bi("#1 global OTT platform", "글로벌 OTT 플랫폼 1위"), bi("Vast content library", "방대한 콘텐츠 라이브러리"),
      bi("Strong at producing original content", "오리지널 콘텐츠 제작에 강점"), bi("With ads $7.99 · Standard $17.99", "광고 포함 $7.99 · 스탠다드 $17.99") ] },
    prime: { title: "Prime Video", hi: [1, 3], chips: [
      bi("Secured NBA rights, won core sports fans", "NBA 중계권 확보, 스포츠 코어층 흡수"), bi("Secured a broad user base through bundling", "번들링 서비스로 다양한 사용자층 확보"),
      bi("AI recommendations and audiobook acquisition", "AI 추천 서비스 및 오디오북 인수"), bi("With ads $8.99 · Ad-free $11.98", "광고 포함 $8.99 · 광고 제거 $11.98") ] }
  };
  var PRIME_SOLUTION = [
    { title: bi("Reinforce Strengths", "강점은 강화"), body: bi("Maximized content value with an intuitive interface so high-quality content is easier to enjoy", "고품질의 콘텐츠를 더 편하게 감상할 수 있도록 직관적인 인터페이스로 콘텐츠의 가치 극대화") },
    { title: bi("Address Weaknesses", "약점은 보완"), body: bi("Raised user satisfaction enough that mandatory ads feel acceptable", "필수 광고를 감수할 수 있을 정도로 사용자의 만족도 상승") },
    { title: bi("Strengthen Market Competitiveness", "OTT 시장 경쟁력 강화"), body: bi("Delivered a personalized experience that satisfies everyone even when several people share one bundled Prime membership", "프라임 멤버십 번들링으로 여러 명이 함께 사용해도 모두가 만족하는 개인화된 경험 제공") }
  ];
  var PRIME_FEATURES = [
    { title: bi("Content at a Glance", "한눈에 즐기는 콘텐츠"), body: bi("Let users see content across movies, TV shows, sports, and more at a glance, and jump straight into whatever they want.", "영화, TV쇼, 스포츠 등 다양한 분야의 콘텐츠를 한눈에 확인하고 원하는 작품을 바로 선택할 수 있게 했습니다.") },
    { title: bi("Continue Watching at the Top", "이어보기 최상단 배치"), body: bi("Placed paused content at the top so users can resume it instantly, improving accessibility.", "시청하다가 중단한 콘텐츠를 곧바로 이어서 볼 수 있도록 상단에 배치해 접근성을 높였습니다.") },
    { title: bi("A Special Feature for Sports Fans", "스포츠 팬을 위한 특별 기능"), body: bi("Pinning a game of interest in the Sports section surfaces it in My Game, so users never miss a live score.", "스포츠 섹션에서 관심 경기에 핀을 꽂으면 MY GAME 기능으로 실시간 스코어를 빠짐없이 확인할 수 있습니다.") },
    { title: bi("Easily Search for the Content You Want", "원하는 콘텐츠, 손쉽게 검색"), body: bi("Enabled simple keyword search and filters so users can narrow countless results down to what they actually want.", "키워드로 간편하게 검색하고, 필터 기능으로 수많은 결과 중 원하는 정보만 찾아낼 수 있게 했습니다.") },
    { title: bi("Watch Instantly, Anytime, Anywhere", "언제 어디서나 즉시 감상"), body: bi("Streamlined the download flow so users can watch smoothly regardless of their internet connection.", "인터넷 환경에 상관없이 원활히 볼 수 있도록 미리 기기에 다운로드하는 흐름을 정리했습니다.") }
  ];
  var PRIME_UT = [
    { problem: bi("Hard to find the favoriting feature in the Sports tab", "스포츠 탭 즐겨찾기 기능을 찾기 어려웠어요"), solution: bi("Revised the UI at the top of the Sports tab", "스포츠 탭 상단 UI 수정") },
    { problem: bi("The toggle didn’t look expandable, which caused confusion", "스위치가 펼쳐질 것처럼 보이지 않아서 헤맸어요"), solution: bi("Redesigned the toggle icon", "스위치 아이콘 디자인 수정") },
    { problem: bi("Too many tags made information hard to scan", "태그가 많아 정보가 한눈에 들어오지 않아요"), solution: bi("Shortened tag titles and emphasized the Prime tag icon", "태그 타이틀 축소 및 Prime 태그 아이콘 강조") }
  ];
  var PRIME_REFLECTION = [
    bi("Amazon Prime Video isn't an independent flagship service so much as a bundled benefit included with Amazon membership. Given that structure, a strategy centered on the primary service inevitably takes priority. Even so, since it holds the #2 spot in OTT market share and is used across many ages and countries, I concluded that helping a diverse user base consume content more conveniently was the better fit. Treating the broad user base secured through bundling as a strength, I improved the UX/UI around accessibility and ease of use, and validated it through three rounds of usability testing, confirming feedback that overall usability had improved.",
      "아마존 프라임 비디오는 독립적인 메인 서비스라기보다 아마존 멤버십에 포함된 번들링 혜택의 일부로 제공되는 서비스입니다. 이런 구조상 서비스 자체에 집중된 경험 설계보다는 메인 서비스 중심의 전략이 우선될 수밖에 없다고 판단했고, 그럼에도 OTT 시장 점유율 2위를 차지하며 다양한 연령대와 국가의 사용자가 이용한다는 점에서 다양한 사용자가 콘텐츠를 더 편리하게 소비하도록 돕는 방향이 더 적합하다고 보았습니다. 번들링으로 확보된 폭넓은 사용자층을 강점으로 보고 접근성과 사용 편의성을 중심으로 UX/UI를 개선했으며, 세 차례의 UT를 통해 검증한 결과 전반적인 사용성이 개선되었다는 피드백을 확인했습니다."),
    bi("Through this project I learned that even for a service that isn't the main flagship, setting a clear direction that fits its role and context is an important factor in improving user experience.",
      "이 프로젝트를 통해 메인 서비스가 아니더라도 서비스의 역할과 맥락에 맞는 명확한 방향성을 설정하는 것이 사용자 경험 개선에 중요한 요소라는 것을 배웠습니다.")
  ];

  var KEPCO_PROBLEMS = [
    bi("Amid controversy over rate hikes and deficits that had eroded public trust, press releases and explanatory materials existed on the site, but the sheer volume made them hard to access.", "전기료 인상·적자 논란으로 신뢰를 잃은 상황에서, 보도·해명 자료가 사이트에 정리되어 있었지만 정보량이 방대해 접근성이 낮음"),
    bi("Excessive content volume and an unclear target audience left the information hierarchy confusing, with the structure skewed toward investors.", "너무 많은 정보량과 불분명한 타깃으로 콘텐츠 정보 설계의 위계가 혼란스럽고, 투자자 중심으로 치우친 구성"),
    bi("Low-resolution images and icons, unresponsive hover buttons, and an excessive number of navigation items resulted in poor visual quality.", "해상도가 낮은 이미지·아이콘, 반응하지 않는 Hover 버튼, 지나치게 많은 네비게이션 항목으로 심미성이 낮음")
  ];
  var KEPCO_SOLUTIONS = [
    bi("Set the renewal direction around a KEPCO that rebuilds trust through transparent disclosure (AS-IS: lost trust → TO-BE: restored trust and transparent information).", "투명하게 정보를 공개해 신뢰를 회복하는 한국전력공사라는 목표로 리뉴얼 방향(AS-IS 신뢰 상실 → TO-BE 신뢰 회복·투명한 정보 공개) 설정"),
    bi("Grouped similar items from the crowded, complex navigation into 5 top-level categories, restructuring the information hierarchy.", "많고 복잡했던 네비게이션에서 비슷한 항목을 묶어 5가지 대분류로 재정리해 정보 위계를 재구성"),
    bi("Visualized the direction of restored trust and transparent disclosure through a main visual built on a light-bulb graphic motif and glassmorphism.", "전구 그래픽 모티브와 글라스모피즘을 적용한 메인 비주얼로 신뢰 회복·투명한 정보 공개라는 방향성을 시각화")
  ];
  var KEPCO_DECISIONS = [
    { title: bi("Navigation Restructuring", "네비게이션 재구조화"), body: bi("Grouped similar items from the crowded, complex existing navigation into 5 categories: Company, Disclosure, Business, Customer Center, and PR Center.", "많고 복잡했던 기존 네비게이션에서 비슷한 항목끼리 묶어 회사소개·정보공개·비즈니스·민원센터·홍보센터 5가지로 정리했습니다.") },
    { title: bi("Glassmorphic Main Visual", "글라스모피즘 메인 비주얼"), body: bi("Created a bright, glowing light-bulb image to represent a power company, and applied glassmorphism to the top and bottom of the screen in line with the transparent-disclosure direction.", "전력회사임을 보여줄 수 있는 밝고 빛나는 전구 형태의 이미지를 제작하고, 투명한 정보 공개라는 기획 방향에 맞춰 화면 위·아래 영역에 글라스모피즘을 적용했습니다.") },
    { title: bi("Nationwide Power Data on a Map", "전국 전력정보 지도화"), body: bi("Displayed real-time power supply status and nationwide branch offices on a map for at-a-glance viewing, applying the same glassmorphism to the map and info boxes for visual consistency with the main visual.", "실시간 전력 수급 현황과 전국 사업소를 지도로 보여주어 한눈에 확인할 수 있도록 했고, 메인 비주얼과의 통일성을 위해 지도와 정보 박스에도 동일하게 글라스모피즘을 활용했습니다.") },
    { title: bi("Disclosure to Rebuild Trust", "신뢰 회복을 위한 정보 공개"), body: bi("Placed management status for investors and a news/press-release section to communicate issues transparently rather than hiding them, and broadened communication touchpoints with brightness-consistent news images and social links.", "투자자를 위한 경영 현황과 뉴스·보도자료 단락을 배치해 이슈를 숨기기보다 투명하게 전달하는 구조로 설계했고, 명도 대비를 통일한 뉴스 이미지와 SNS 링크로 소통 접점을 넓혔습니다.") }
  ];
  var KEPCO_REFLECTION = [
    bi("The biggest challenge during planning was the range of controversies surrounding KEPCO. Rate hikes, deficit concerns, and political issues were all tangled together, and I had to think carefully about what message to convey. Early on, I considered minimizing the negative issues and leading with a mostly positive image, but I realized that downplaying problems users already felt firsthand could undermine trust further.",
      "기획 당시 가장 큰 과제는 한국전력공사를 둘러싼 다양한 논란이었습니다. 전기료 인상과 적자 문제, 정치적 이슈가 복합적으로 얽혀 있었고, 어떤 메시지를 전달해야 할지 고민이 필요했습니다. 초기에는 부정적인 이슈를 최소화하고 긍정적인 이미지 위주로 전달하는 방향을 고려했지만, 사용자가 이미 체감하는 문제를 축소·회피하는 방식은 오히려 신뢰를 저해할 수 있다는 점을 깨달았습니다."),
    bi("Since rising electricity rates are an issue every citizen experiences directly, I decided transparency mattered more than concealment, so I set “trust” as the renewal's core direction and redefined the plan around a structure that communicates the key issues clearly.",
      "전기료 인상은 모든 국민이 직접 경험하는 이슈이기에 숨기기보다 투명하게 전달하는 것이 중요하다고 판단해, 리뉴얼의 핵심 방향을 '신뢰'로 설정하고 주요 이슈를 명확하게 전달하는 구조로 기획을 재정의했습니다.")
  ];
  var KEPCO_SHOWCASE = ["kepco-showcase-1.jpg", "kepco-hero.jpg", "kepco-showcase-3.jpg", "kepco-showcase-4.jpg",
    "kepco-showcase-5.jpg", "kepco-showcase-6.jpg", "kepco-showcase-7.jpg", "kepco-showcase-8.jpg"];

  var KYOBO_OVERVIEW = bi(
    "Korea's adult reading rate is declining, and people in their 20s–30s are filling their leisure time with video content instead of books. Kyobo Book Centre has also identified digital transformation as a core challenge and now holds a large amount of digital content such as audiobooks and e-books — but the website's confusing wording and complex information structure make that content hard to access. This is a website renewal project that reorganizes Kyobo's diverse digital content so it's easy to discover from the main page.",
    "우리나라 성인의 독서율이 떨어지고 2030은 독서 대신 영상 콘텐츠를 보며 여가 시간을 채웁니다. 교보문고 역시 디지털 전환을 핵심 과제로 선정하며 오디오북, 전자책 등 디지털 콘텐츠를 많이 보유하고 있으나 웹사이트의 이해하기 어려운 표현, 복잡한 정보 구성으로 인해 접근성이 낮습니다. 따라서 교보문고가 가지고 있는 다양한 디지털 콘텐츠를 메인 페이지에서 보기 쉽게 개선한 웹사이트 리뉴얼 프로젝트입니다."
  );
  var KYOBO_GOAL = bi(
    "A Kyobo Book Centre website that offers people in their 20s–30s who want to explore diverse digital content a clean, well-organized navigation and information structure.",
    "다양한 디지털 콘텐츠를 보고 싶은 2030에게 깔끔하게 정리된 네비게이션과 정보 분류를 제공하는 교보문고 웹사이트"
  );
  var KYOBO_WEBSITE_PROBLEMS = [
    bi("Hard-to-understand wording", "이해하기 어려운 표현"),
    bi("Complex navigation", "복잡한 네비게이션"),
    bi("Pop-ups that fill the screen", "화면을 가득 채우는 팝업"),
    bi("Content built around print books", "종이책 위주의 콘텐츠 구성")
  ];
  var KYOBO_WEBSITE_SUMMARY = bi(
    "Kyobo's existing website was built around print books, and confusing labels (like Toksoda, sam) for the e-book, web novel, and subscription services central to its digital shift were buried in the navigation.",
    "교보문고 기존 웹사이트는 종이책 위주로 콘텐츠가 구성되어 있으며 디지털 전환에 핵심적인 웹소설과 웹툰, e-book 구독 시스템 등이 이해하기 어려운 표현(톡소다, sam)으로 네비게이션에 배치되어 있었습니다."
  );
  var KYOBO_SWOT = {
    stats: [bi("Offline book sales declining", "오프라인책 판매량 감소"), bi("₩4.5B deficit (2020)", "45억 적자"), bi("Operates with Kyobo Life Insurance's support", "교보생명의 지원을 받으며 운영")],
    strength: [bi("Korea's largest bookstore by scale", "국내 최대 규모의 서점"), bi("High brand awareness", "브랜드 인지도 높음"), bi("Responsive to social trends", "트렌디하게 사회 현상에 대응"), bi("Smart logistics system", "스마트물류시스템"), bi("Digital transformation underway", "디지털 전환")],
    weakness: [bi("Operating at a deficit", "적자"), bi("Not a highly profitable business", "수익성이 크지 않은 사업")],
    opportunity: [bi("Strong social influence", "사회적 영향력"), bi("Selected as a future heritage brand", "미래유산 선정"), bi("Rising popularity of e-books", "전자책 인기 상승")],
    threat: [bi("Rising shipping costs", "배송비 인상"), bi("Decline of the publishing industry", "출판업계의 쇠퇴"), bi("Shrinking reading population", "독서인구 감소")]
  };
  var KYOBO_SWOT_SUMMARY = bi(
    "Kyobo has strong brand awareness but is seen as a low-profit business. Combined with COVID-19, declining offline sales led to a ₩4.5B deficit in 2020, and the company now operates with support from Kyobo Life Insurance.",
    "교보문고는 높은 브랜드 인지도를 가지고 있으나 수익성이 크지 않은 사업으로 평가받고 있으며 코로나19가 겹치면서 오프라인 책 판매량이 감소하여 2020년 45억 적자가 나서 현재는 교보생명의 지원을 받으며 운영되고 있습니다."
  );
  var KYOBO_DESK_SUMMARY = bi(
    "Korean adults' reading rate is falling, but e-book reading is rising — and Kyobo's offline sales are declining while web and mobile purchases grow.",
    "우리나라 성인의 독서율은 떨어지고 있지만 전자책 독서율은 늘어났으며, 교보문고의 오프라인 책 판매율은 감소하고 웹과 모바일을 통한 구매가 늘어나고 있습니다."
  );
  var KYOBO_INTERVIEW_INTRO = bi("I interviewed four people in their 20s and 30s who have used Kyobo Book Centre.", "교보문고를 이용해본 2030 4명을 대상으로 인터뷰를 진행했습니다.");
  var KYOBO_INTERVIEW_INSIGHTS = [
    bi("Most watched YouTube during their leisure time.", "대부분 여가시간에 유튜브를 이용했다."),
    bi("They found Kyobo's site wording unintuitive and confusing.", "교보문고 사이트에서 직관적이지 않은 표현에 불편을 느꼈다."),
    bi("They wanted Kyobo's information hierarchy and wording improved.", "교보문고 사이트에서 정보 위계와 라이팅이 개선되길 원한다.")
  ];
  var KYOBO_ASIS_TOBE = [
    { asis: bi("Hard-to-understand category names", "알아보기 어려운 카테고리명"), tobe: bi("Intuitive naming", "직관적인 명칭") },
    { asis: bi("Declining offline book sales", "오프라인 책 판매량 감소"), tobe: bi("A clean, well-organized online bookstore", "깔끔하게 정리된 온라인 도서 쇼핑몰") },
    { asis: bi("Shrinking reading population", "독서인구 감소"), tobe: bi("A wide range of digital content", "다양한 디지털 콘텐츠") }
  ];
  var KYOBO_CONCEPT = [
    { title: "Various", desc: bi("Showcased Kyobo's diverse content — web novels, e-books, Kyobo Live, and more.", "교보문고의 웹소설, E-book, 라이브 등 다양한 콘텐츠를 보여주었습니다.") },
    { title: "Organized", desc: bi("Neatly organized a large volume of complex content.", "복잡하고 많은 컨텐츠를 깔끔하게 정리했습니다.") },
    { title: "Friendly", desc: bi("Expressed the friendliness of a bookstore that has stood the test of time.", "오랫동안 자리를 지켜온 교보문고의 친근함을 표현하였습니다.") }
  ];
  var KYOBO_STYLE = {
    colors: ["#D2E2D7", "#D6F2DB", "#34BE4E", "#F5F5F5", "#818181", "#525357"],
    colorNote: bi("Since thumbnail colors vary widely across content, I used white as the base so content stays front and center, with gray as a supporting tone and Kyobo's core green as the accent.", "콘텐츠 섬네일의 색이 다양하기 때문에 컨텐츠가 최우선으로 보일 수 있도록 흰 바탕에 그레이를 주로 사용하고 교보문고의 메인 컬러인 초록색을 포인트 컬러로 활용하였습니다."),
    typeNote: bi("Used the highly legible 본고딕 for body text, paired with Poppins and Pretendard for numerals and Latin text.", "가독성이 높은 본고딕을 본문에 사용하고 영문, 숫자는 본고딕과 잘 어울리는 포핀스와 프리텐다드를 사용하였습니다."),
    buttonNote: bi("Used Kyobo's core green with rounded pill buttons to express Kyobo's friendliness.", "교보문고의 메인 컬러인 초록색을 사용하고 둥근 형태의 버튼을 제작하여 교보문고의 친근함을 표현하였습니다."),
    buttons: [bi("View Details →", "자세히 보기 →"), bi("Watch Video →", "영상 바로가기 →")],
    iconNote: bi("Used Kyobo's navy and green in a clean, friendly, rounded line-icon style.", "교보문고의 메인 컬러인 남색과 초록색을 사용하였고 깔끔함과 친근함을 위해 선 형태의 둥근 아이콘을 작업하였습니다.")
  };
  var KYOBO_BANNER_LEAD = ["kyobo-banner-billboard.jpg", "kyobo-banner-rolling.jpg"];
  var KYOBO_BANNER_ROWS = [
    { image: "kyobo-banner-search.jpg", items: [
      { label: bi("Search Box", "검색창"), desc: bi("Because the site holds such a large amount of content, I moved the search bar into the navigation so users can search the moment they land on the site.", "컨텐츠의 양이 방대하기 때문에 검색창을 네비게이션에 올려 사용자가 웹사이트에 들어오자마자 검색할 수 있도록 기획하였습니다.") },
      { label: bi("Writing", "명칭 정리"), desc: bi("I renamed confusing service names like Toksoda, sam, and Story into more intuitive labels, and added a menu that introduces what each one means.", "톡소다, sam, 스토리 등 사용자들이 이해하기 어려워하는 명칭을 직관적으로 변경하고 명칭에 대해 소개하는 메뉴를 추가하였습니다.") },
      { label: bi("Banner Design", "배너 디자인"), desc: bi("I designed a rolling banner that introduces books.", "책을 소개하는 롤링 배너를 디자인했습니다.") }
    ] },
    { image: "kyobo-banner-books.jpg", items: [
      { label: bi("Books", "책"), desc: bi("Showing Kyobo's wide range of content matters, but since this is fundamentally a bookstore site, I placed book content near the top.", "교보문고의 다양한 컨텐츠를 보여주는 것도 중요하지만 기본적으로 도서 사이트이기 때문에 책 콘텐츠를 상단에 배치했습니다.") }
    ] },
    { image: "kyobo-banner-live.jpg", items: [
      { label: bi("PICKS", "PICKS"), desc: bi("I placed PICKS, a personalized book recommendation service, in the third row to show that Kyobo offers the kind of personalization video platforms are known for, strengthening its competitiveness.", "취향에 맞는 책 추천 서비스인 PICK를 3단에 배치하여 영상 컨텐츠 플랫폼에서 활용하는 개인화 서비스를 교보문고에서도 제공하고 있음을 알리고 경쟁력을 높이고자 하였습니다.") },
      { label: bi("Kyobo Live", "교보 Live"), desc: bi("I highlighted Kyobo Live to emphasize its role as a cultural hub, and surfaced related books alongside it so viewers could go on to purchase them.", "종합문화공간으로서의 면모를 강조하고 관련도서를 노출하여 책 구매로도 이어질 수 있도록 했습니다.") }
    ] },
    { image: "kyobo-banner-webnovel.jpg", items: [
      { label: bi("Web Novels", "웹소설"), desc: bi("Korea's web novel market has been steadily growing, and it grew even faster after COVID-19. To show that Kyobo also carries plenty of great web novels, I placed a web novel section in the fifth row.", "국내 웹소설 시장 규모는 점점 커지고 있으며 코로나19를 기점으로 훨씬 더 커졌습니다. 교보문고에도 재미있는 웹소설이 많음을 보여주고자 5단에 웹소설을 배치하였습니다.") }
    ] },
    { image: "kyobo-banner-review.jpg", items: [
      { label: bi("Story", "스토리"), desc: bi("Kyobo produces original content through a submission platform called Story, and some winning entries have already been adapted into dramas. I placed this in the sixth row to showcase the range of content Kyobo offers.", "교보문고는 스토리라는 공모 시스템을 통해 교보문고 오리지널 컨텐츠를 만듭니다. 이미 드라마로 만들어진 공모작이 존재합니다. 이를 6단에 배치하여 다양한 컨텐츠를 보여주고자 합니다.") },
      { label: bi("Review", "리뷰"), desc: bi("I surfaced book reviews in the seventh row so people can see what others are reading, share opinions on books, and get help deciding what to buy.", "사람들이 많이 읽는 책을 확인하고 책에 대한 의견을 나누며 구매에 도움이 될 수 있도록 책 리뷰를 7단에 노출하였습니다.") }
    ] },
    { image: "kyobo-banner-footer.jpg", items: [
      { label: bi("Footer", "푸터"), desc: bi("Since this is a book shopping site, I placed the essential elements it needs along with Kyobo's social channels and related sites in the footer to improve usability.", "도서 쇼핑몰이기 때문에 꼭 들어가야 하는 요소들과 교보 SNS, 관련 사이트를 푸터에 배치하여 사용성을 높였습니다.") }
    ] }
  ];
  var KYOBO_REFLECTION = [
    bi("In this project, I completed both the design and the publishing, then discovered a problem during the refinement stage that sent me back to the planning phase. Early on, following the same approach I'd used on other projects, I emphasized brand identity with a bold design that stretched the main visual wide across both sides of the screen. But when I applied the same approach to Kyobo, the core content — books — didn't get enough visibility.",
      "이 프로젝트는 디자인과 퍼블리싱까지 완료한 이후, 고도화 과정에서 문제를 발견하며 기획 단계로 되돌아간 경험입니다. 초기에는 다른 프로젝트와 동일하게 브랜드 정체성을 강조하기 위해, 메인 비주얼을 양옆으로 넓게 활용한 화려한 디자인을 적용했습니다. 그러나 교보문고에 동일한 방식을 적용했을 때, 핵심 콘텐츠인 '책'이 충분히 드러나지 않는 문제가 발생했습니다."),
    bi("To find the root cause, I re-analyzed other bookstore sites and found that most of them used narrow, information-focused banners instead of bold visuals. This led me to redefine the core of the Kyobo site: not ‘expressing the brand’ but ‘delivering book content.’ I then reworked the planning and design from the ground up around a structure that lets the content stand out.",
      "문제의 원인을 파악하기 위해 타 서점 사이트를 다시 분석한 결과, 대부분 화려한 비주얼 대신 좁은 영역의 정보성 배너를 활용하고 있음을 확인했습니다. 이를 통해 교보문고 사이트의 핵심은 '브랜드 표현'이 아니라 '책 콘텐츠 전달'에 있다는 점을 재정의하게 되었고, 콘텐츠가 잘 드러나는 구조로 기획과 디자인을 전면 수정했습니다."),
    bi("This experience taught me that even a highly polished design can get in the way if it doesn't fit the service's purpose, and that delivering core content effectively requires designing the right structure from the earliest planning stage.",
      "이 경험을 통해, 디자인의 완성도가 높더라도 서비스의 목적과 맞지 않으면 오히려 방해가 될 수 있으며, 핵심 콘텐츠를 효과적으로 전달하기 위해서는 초기 기획 단계에서부터 목적에 맞는 구조 설계가 중요하다는 것을 깨달았습니다.")
  ];

  /* ------------------------------------------------------------------ */
  /* State + router                                                      */
  /* ------------------------------------------------------------------ */

  var state = { lang: getStoredLang() || "en", page: "home", projFilter: "all", eduFilter: "all", careerExpanded: null, utTab: "first" };
  var VALID_PAGES = ["home", "career", "projects", "education", "activities", "maeari", "prime", "kepco", "kyobo"];

  function setPage(id) {
    if (location.hash.slice(1) === id) { state.page = id; render(); }
    else { location.hash = "#" + id; }
    window.scrollTo({ top: 0, behavior: "auto" });
    closeMobileMenu();
  }
  function setProjFilter(id) { state.projFilter = id; render(); }
  function setEduFilter(id) { state.eduFilter = id; render(); }
  function toggleCareer(id) { state.careerExpanded = state.careerExpanded === id ? null : id; render(); }
  function setUtTab(id) { state.utTab = id; render(); }
  function setLang(l) {
    if (state.lang === l) return;
    state.lang = l;
    storeLang(l);
    document.documentElement.lang = l;
    render();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  window.app = {
    setPage: setPage,
    setProjFilter: setProjFilter,
    setEduFilter: setEduFilter,
    toggleCareer: toggleCareer,
    setUtTab: setUtTab,
    setLang: setLang,
    toggleMobileMenu: toggleMobileMenu
  };

  function router() {
    var hash = (location.hash || "#home").slice(1);
    state.page = VALID_PAGES.indexOf(hash) !== -1 ? hash : "home";
    render();
  }

  /* ------------------------------------------------------------------ */
  /* Small render helpers                                                */
  /* ------------------------------------------------------------------ */

  function metaGrid(items) {
    return '<div class="meta-grid">' + items.map(function (m) {
      return '<div class="meta-box"><div class="meta-box-label">' + m.label + '</div><div class="meta-box-val">' + t(m.value) + "</div></div>";
    }).join("") + "</div>";
  }

  function detailHeader(key) {
    var m = PROJECT_META[key];
    return (
      '<button class="back-btn" onclick="app.setPage(\'projects\')">' + t(L2.backProjects) + "</button>" +
      '<div class="detail-tagrow"><span class="detail-tag">' + m.tag + '</span><span class="detail-subline">' + m.name + "</span></div>" +
      '<h1 class="detail-title serif">' + t(m.title) + "</h1>" +
      '<p class="detail-lede">' + t(m.desc) + "</p>" +
      '<div class="detail-hero"><img src="images/' + m.hero + '" alt="' + m.name + ' cover"></div>' +
      metaGrid(m.meta)
    );
  }

  function behanceCta(key) {
    return '<div class="detail-block" style="margin-bottom:0"><a class="behance-cta" href="' + t(BEHANCE_URLS[key]) + '" target="_blank" rel="noopener">' + t(L2.caseStudy) + "</a></div>";
  }

  function block(h3, sub, inner) {
    return '<div class="detail-block reveal"><div class="detail-h3">' + t(h3) + "</div>" +
      (sub ? '<p class="detail-h3-sub">' + t(sub) + "</p>" : "") + inner + "</div>";
  }

  function infoCard(title, bodyHtml) {
    return '<div class="info-card"><div class="info-card-label">' + t(title) + "</div>" + bodyHtml + "</div>";
  }

  function bulletList(items) {
    return '<div class="bullets">' + items.map(function (x) { return "<div>" + t(x) + "</div>"; }).join("") + "</div>";
  }

  function featureBoard(opts) {
    var chips = "";
    if (opts.chips) {
      chips = '<div class="chip-row">' + opts.chips.map(function (c) {
        return '<div class="chip">' + (c.swatch ? '<span class="chip-swatch" style="background:' + c.swatch + '"></span>' : "") + t(c.label) + "</div>";
      }).join("") + "</div>";
    }
    var bullets = "";
    if (opts.bullets) {
      bullets = '<div class="feature-bullets">' + opts.bullets.map(function (b) {
        return '<div class="feature-bullet"><span class="dot"></span><span>' + t(b) + "</span></div>";
      }).join("") + "</div>";
    }
    var imgs = opts.images.map(function (i) { return '<img src="images/' + i + '" alt="">'; }).join("");
    return (
      '<div class="feature-board reveal"><div class="feature-board-flex">' +
      '<div><div class="feature-label">' + t(opts.tag) + '</div><div class="feature-title">' + t(opts.title) + "</div>" +
      '<p class="feature-desc">' + t(opts.desc) + "</p>" + chips + bullets + "</div>" +
      "<div>" + imgs + "</div>" +
      "</div></div>"
    );
  }

  function stepBoard(opts) {
    var cells = opts.steps.map(function (s, i) {
      var imgs = (s.imgs || [s.img]).map(function (im) { return '<img src="images/' + im + '" alt="" style="width:' + (100 / (s.imgs ? s.imgs.length : 1)) + '%">'; }).join("");
      var imgWrap = s.imgs ? '<div style="display:flex;gap:8px;justify-content:center;width:100%">' + imgs + "</div>" : imgs;
      return (
        '<div class="step-cell">' + imgWrap +
        '<div class="step-cap">' + (opts.numbered !== false ? '<div class="step-no">' + String(i + 1).padStart(2, "0") + "</div>" : "") +
        "<p>" + t(s.text) + "</p></div></div>"
      );
    }).join("");
    return (
      '<div class="detail-block reveal"><div class="feature-label">' + t(opts.tag) + '</div>' +
      '<div class="detail-h3" style="margin-bottom:8px">' + t(opts.title) + "</div>" +
      '<p class="detail-h3-sub">' + t(opts.desc) + "</p>" +
      '<div class="step-grid cols' + opts.cols + '">' + cells + "</div></div>"
    );
  }

  function zoomImage(src, alt) {
    return (
      '<a class="zoom-img-wrap" href="images/' + src + '" target="_blank" rel="noopener" aria-label="' + (alt || "") + '">' +
      '<img src="images/' + src + '" alt="' + (alt || "") + '" loading="lazy">' +
      '<span class="zoom-hint">' + t(bi("Tap to view full size ↗", "탭하여 크게 보기 ↗")) + "</span>" +
      "</a>"
    );
  }

  function reflectionBlock(paragraphs) {
    var paras = paragraphs.map(function (p) { return "<p>" + t(p) + "</p>"; }).join("");
    return '<div class="detail-block reveal"><div class="reflection-card">' + paras + "</div></div>";
  }

  /* ---- Kyobo: hand-built charts + text components (no exported images) ---- */

  function kyoboLegend(items) {
    return '<div style="display:flex;gap:14px;flex-wrap:wrap;margin-bottom:12px;font-size:11.5px;color:rgba(47,42,38,0.6)">' +
      items.map(function (it) {
        return '<span style="display:inline-flex;align-items:center;gap:5px"><span style="width:10px;height:10px;border-radius:3px;background:' + it.color + ';display:inline-block;flex-shrink:0"></span>' + it.label + "</span>";
      }).join("") + "</div>";
  }

  function kyoboLineChartSVG() {
    var w = 300, h = 170, pad = 20;
    var years = ["2013", "2015", "2017", "2019", "2021"];
    var xs = years.map(function (_, i) { return pad + i * (w - 2 * pad) / (years.length - 1); });
    var studentVals = [96.8, 95.3, 93.9, 92.6, 91.4];
    var adultVals = [72.2, 65.4, 58.6, 52.6, 47.5];
    var min = 40, max = 100;
    function Y(v) { return pad + (1 - (v - min) / (max - min)) * (h - 2 * pad - 14); }
    function ptsFor(vals) { return vals.map(function (v, i) { return xs[i] + "," + Y(v); }).join(" "); }
    function dots(vals, color) {
      return vals.map(function (v, i) { return '<circle cx="' + xs[i] + '" cy="' + Y(v) + '" r="3.5" fill="' + color + '"></circle>'; }).join("");
    }
    var labels = years.map(function (yr, i) { return '<text x="' + xs[i] + '" y="' + (h - 2) + '" font-size="10" fill="rgba(47,42,38,0.45)" text-anchor="middle">' + yr + "</text>"; }).join("");
    return (
      '<svg viewBox="0 0 ' + w + ' ' + h + '" style="width:100%;height:auto;display:block" role="img" aria-label="Reading rate trend">' +
      '<polyline points="' + ptsFor(studentVals) + '" fill="none" stroke="#B7B2AC" stroke-width="2.5"></polyline>' +
      '<polyline points="' + ptsFor(adultVals) + '" fill="none" stroke="#34BE4E" stroke-width="2.5"></polyline>' +
      dots(studentVals, "#B7B2AC") + dots(adultVals, "#34BE4E") +
      '<text x="' + xs[0] + '" y="' + (Y(studentVals[0]) - 8) + '" font-size="11" font-weight="700" fill="#918d88" text-anchor="middle">96.8</text>' +
      '<text x="' + xs[4] + '" y="' + (Y(studentVals[4]) - 8) + '" font-size="11" font-weight="700" fill="#918d88" text-anchor="middle">91.4</text>' +
      '<text x="' + xs[0] + '" y="' + (Y(adultVals[0]) + 16) + '" font-size="11" font-weight="700" fill="#1f9e3f" text-anchor="middle">72.2</text>' +
      '<text x="' + xs[4] + '" y="' + (Y(adultVals[4]) - 8) + '" font-size="11" font-weight="700" fill="#1f9e3f" text-anchor="middle">47.5</text>' +
      labels +
      "</svg>"
    );
  }

  function kyoboAgeBarChart() {
    var rows = [
      { age: "20대", v19: 39.0, v21: 50.5 },
      { age: "30대", v19: 31.3, v21: 38.4 },
      { age: "40대", v19: 14.4, v21: 13.8 },
      { age: "50대", v19: 4.9, v21: 5.2 },
      { age: "60대+", v19: 2.0, v21: 2.3 }
    ];
    var max = 55;
    var cols = rows.map(function (r) {
      var h19 = (r.v19 / max) * 100, h21 = (r.v21 / max) * 100;
      return (
        '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;min-width:0">' +
        '<div style="display:flex;align-items:flex-end;gap:3px;height:100px">' +
        '<div style="width:13px;background:#C9C5C0;border-radius:4px 4px 0 0;height:' + h19 + '%"></div>' +
        '<div style="width:13px;background:#34BE4E;border-radius:4px 4px 0 0;height:' + h21 + '%"></div>' +
        "</div>" +
        '<div style="font-size:10px;font-weight:700;color:rgba(47,42,38,0.55);white-space:nowrap">' + r.v19 + "→" + r.v21 + "</div>" +
        '<div style="font-size:11.5px;font-weight:600">' + r.age + "</div>" +
        "</div>"
      );
    }).join("");
    return '<div style="display:flex;gap:6px;align-items:flex-end">' + cols + "</div>";
  }

  function kyoboStackedTrend() {
    var years = ["’16", "’17", "’18", "’19", "’20", "’21", "’22"];
    var segs = [[55, 25, 20], [52, 24, 24], [50, 23, 27], [47, 22, 31], [43, 21, 36], [38, 21, 41], [34, 20, 46]];
    var cols = years.map(function (yr, i) {
      var s = segs[i];
      return (
        '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;min-width:0">' +
        '<div style="display:flex;flex-direction:column-reverse;width:16px;height:100px;border-radius:4px;overflow:hidden">' +
        '<div style="height:' + s[0] + '%;background:#34BE4E"></div>' +
        '<div style="height:' + s[1] + '%;background:#C9C5C0"></div>' +
        '<div style="height:' + s[2] + '%;background:#3A3733"></div>' +
        "</div>" +
        '<div style="font-size:10px;color:rgba(47,42,38,0.5)">' + yr + "</div>" +
        "</div>"
      );
    }).join("");
    return '<div style="display:flex;gap:5px;align-items:flex-end">' + cols + "</div>";
  }

  function kyoboDeskResearchBlock() {
    return (
      '<div class="three-col">' +
      '<div class="info-card"><div class="info-card-label">' + t(bi("Reading Rate Trend (Students · Adults)", "독서율 변화 추이(성인·학생)")) + "</div>" +
      kyoboLegend([{ color: "#B7B2AC", label: t(bi("Students", "학생")) }, { color: "#34BE4E", label: t(bi("Adults", "성인")) }]) +
      kyoboLineChartSVG() +
      '<p style="font-size:12.5px;line-height:1.65;color:var(--muted-68);margin-top:12px">' + t(bi("A 2021 survey of 6,000 Korean adults (19+) by the Ministry of Culture, Sports and Tourism found that adults' overall annual reading rate has been declining.", "최근 문화체육관광부가 만 19세 이상 성인 6천명을 대상으로 '2021년 국민 독서실태'를 조사한 결과, 우리나라 성인의 연간 종합 독서율은 떨어지는 추이를 보였다.")) + "</p>" +
      "</div>" +
      '<div class="info-card"><div class="info-card-label">' + t(bi("E-book Reading Rate by Age (Adults)", "연령별 전자책 독서율 변화(성인)")) + "</div>" +
      kyoboLegend([{ color: "#C9C5C0", label: "2019" }, { color: "#34BE4E", label: "2021" }]) +
      kyoboAgeBarChart() +
      '<p style="font-size:12.5px;line-height:1.65;color:var(--muted-68);margin-top:14px">' + t(bi("While print reading declined, e-book reading rates trended upward.", "종이책 독서율은 낮아진 모습과 대조되게 전자책 독서율은 늘어나는 흐름을 보였다.")) + "</p>" +
      "</div>" +
      '<div class="info-card"><div class="info-card-label">' + t(bi("Kyobo Offline Book Sales Trend", "교보문고 오프라인 책 판매율 변화")) + "</div>" +
      kyoboLegend([{ color: "#34BE4E", label: t(bi("In-store", "영업점")) }, { color: "#C9C5C0", label: t(bi("Web", "웹")) }, { color: "#3A3733", label: t(bi("Mobile", "모바일")) }]) +
      kyoboStackedTrend() +
      '<p style="font-size:12.5px;line-height:1.65;color:var(--muted-68);margin-top:12px">' + t(bi("Kyobo's offline book sales have been declining, while web and mobile purchases are growing.", "교보문고의 오프라인 책 판매율은 감소하고 웹과 모바일을 통한 구매가 늘어나고 있다.")) + "</p>" +
      "</div>" +
      "</div>" +
      '<div class="callout-band">' + t(KYOBO_DESK_SUMMARY) + "</div>"
    );
  }

  function kyoboSwotBlock() {
    var statChips = '<div class="chip-row" style="margin-bottom:20px">' + KYOBO_SWOT.stats.map(function (s) { return '<div class="chip">' + t(s) + "</div>"; }).join("") + "</div>";
    function quad(label, items, tint) {
      return '<div style="background:' + tint + ';padding:22px 20px;border-radius:16px;min-width:0">' +
        '<div style="font-weight:700;font-size:15px;margin-bottom:10px">' + label + "</div>" +
        '<div style="display:flex;flex-direction:column;gap:6px">' + items.map(function (i) { return '<div style="font-size:12.5px;color:var(--muted-68)">' + t(i) + "</div>"; }).join("") + "</div>" +
        "</div>";
    }
    var grid = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px">' +
      quad("Strength", KYOBO_SWOT.strength, "rgba(52,190,78,0.14)") +
      quad("Weakness", KYOBO_SWOT.weakness, "rgba(47,42,38,0.05)") +
      quad("Opportunity", KYOBO_SWOT.opportunity, "rgba(47,42,38,0.05)") +
      quad("Threat", KYOBO_SWOT.threat, "rgba(52,190,78,0.14)") +
      "</div>";
    return statChips + grid + '<div class="callout-band" style="margin-top:20px">' + t(KYOBO_SWOT_SUMMARY) + "</div>";
  }

  function kyoboWebsiteAnalysisBlock() {
    var cards = KYOBO_WEBSITE_PROBLEMS.map(function (p, i) {
      return '<div class="decision-card reveal"><div class="decision-no">0' + (i + 1) + '</div><div><div class="t">' + t(p) + "</div></div></div>";
    }).join("");
    return cards + '<div class="callout-band" style="margin-top:6px">' + t(KYOBO_WEBSITE_SUMMARY) + "</div>";
  }

  function kyoboInterviewBlock() {
    var items = KYOBO_INTERVIEW_INSIGHTS.map(function (ins) {
      return '<div class="dark-card" style="flex:1 1 220px;min-width:0"><p style="color:#fff;font-weight:600">' + t(ins) + "</p></div>";
    }).join("");
    return '<p class="feature-desc" style="max-width:720px">' + t(KYOBO_INTERVIEW_INTRO) + "</p>" +
      '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:6px">' + items + "</div>";
  }

  function kyoboTinyBox(label, text, tint) {
    return '<div style="flex:1;min-width:0;background:' + tint + ';border-radius:16px;padding:16px 14px;text-align:center">' +
      '<div style="font-size:10.5px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--accent);margin-bottom:6px">' + label + "</div>" +
      '<div style="font-size:13px;font-weight:600;line-height:1.4">' + text + "</div></div>";
  }

  function kyoboAsIsToBeBlock() {
    var pairs = KYOBO_ASIS_TOBE.map(function (p) {
      return (
        '<div style="display:flex;align-items:center;gap:10px">' +
        kyoboTinyBox("AS-IS", t(p.asis), "rgba(52,190,78,0.12)") +
        '<div style="font-size:18px;color:var(--accent);flex-shrink:0">→</div>' +
        kyoboTinyBox("TO-BE", t(p.tobe), "var(--bg)") +
        "</div>"
      );
    }).join("");
    return '<div style="display:flex;flex-direction:column;gap:14px">' + pairs + "</div>";
  }

  function kyoboConceptBlock() {
    var cards = KYOBO_CONCEPT.map(function (c) {
      return '<div class="info-card" style="text-align:center"><h4 style="margin:0 0 10px;font-size:18px;font-family:\'Noto Serif KR\',serif">' + c.title + "</h4><p style=\"margin:0;font-size:13.5px;line-height:1.7;color:var(--muted-68)\">" + t(c.desc) + "</p></div>";
    }).join("");
    return '<div class="three-col">' + cards + "</div>";
  }

  function kyoboStyleGuideBlock() {
    var swatches = KYOBO_STYLE.colors.map(function (c) {
      var light = (c === "#F5F5F5" || c === "#D2E2D7" || c === "#D6F2DB");
      return '<div style="flex:1;min-width:84px;background:' + c + ";color:" + (light ? "#2f2a26" : "#fff") + ';border-radius:12px;padding:16px 10px;text-align:center;font-size:11px;font-weight:700">' + c + "</div>";
    }).join("");
    var colorCard = '<div class="info-card"><div class="info-card-label">' + t(bi("Color", "컬러")) + "</div>" +
      '<p style="font-size:13px;line-height:1.7;color:var(--muted-68);margin:0 0 16px">' + t(KYOBO_STYLE.colorNote) + "</p>" +
      '<div style="display:flex;gap:8px;flex-wrap:wrap">' + swatches + "</div></div>";
    var typoCard = '<div class="info-card"><div class="info-card-label">' + t(bi("Typography", "타이포그래피")) + "</div>" +
      '<p style="font-size:13px;line-height:1.7;color:var(--muted-68);margin:0 0 16px">' + t(KYOBO_STYLE.typeNote) + "</p>" +
      '<div style="display:flex;flex-direction:column;gap:12px">' +
      '<div style="font-size:24px;font-weight:700">본고딕 KR <span style="font-size:11px;font-weight:600;color:var(--muted-45)">KOR</span></div>' +
      '<div style="font-size:24px;font-weight:700;font-family:\'Poppins\',sans-serif">Poppins <span style="font-size:11px;font-weight:600;color:var(--muted-45);font-family:inherit">ENG</span></div>' +
      '<div style="font-size:24px;font-weight:700">Pretendard <span style="font-size:11px;font-weight:600;color:var(--muted-45)">ENG</span></div>' +
      "</div></div>";
    var buttonCard = '<div class="info-card"><div class="info-card-label">' + t(bi("Button", "버튼")) + "</div>" +
      '<p style="font-size:13px;line-height:1.7;color:var(--muted-68);margin:0 0 16px">' + t(KYOBO_STYLE.buttonNote) + "</p>" +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
      KYOBO_STYLE.buttons.map(function (b) { return '<div style="background:#34BE4E;color:#fff;padding:10px 18px;border-radius:999px;font-size:12.5px;font-weight:700">' + t(b) + "</div>"; }).join("") +
      "</div></div>";
    var iconCard = '<div class="info-card"><div class="info-card-label">' + t(bi("Iconography", "아이코노그래피")) + "</div>" +
      '<p style="font-size:13px;line-height:1.7;color:var(--muted-68);margin:0">' + t(KYOBO_STYLE.iconNote) + "</p></div>";
    return '<div class="two-col">' + colorCard + typoCard + "</div>" +
      '<div class="two-col" style="margin-top:20px">' + buttonCard + iconCard + "</div>";
  }

  function kyoboBannerSection() {
    var lead = '<div class="banner-lead"><div class="two-col">' +
      KYOBO_BANNER_LEAD.map(function (fn) { return '<img src="images/' + fn + '" alt="Banner design reference">'; }).join("") +
      "</div></div>";
    var rows = KYOBO_BANNER_ROWS.map(function (row) {
      var texts = row.items.map(function (it) {
        return '<div class="banner-row-text-item"><div class="label">' + t(it.label) + '</div><p>' + t(it.desc) + "</p></div>";
      }).join("");
      return (
        '<div class="banner-row reveal">' +
        '<div class="banner-row-texts">' + texts + "</div>" +
        '<div><img src="images/' + row.image + '" alt="' + t(row.items[0].label) + '"></div>' +
        "</div>"
      );
    }).join("");
    return lead + rows;
  }

  /* ------------------------------------------------------------------ */
  /* Page renderers                                                      */
  /* ------------------------------------------------------------------ */

  function renderHome() {
    var tags = WORKING_STYLE.map(function (w) { return '<div class="style-tag">' + (state.lang === "ko" ? w.ko : w.en) + "</div>"; }).join("");
    var cards = ABOUT_CARDS.map(function (c) {
      return '<div class="about-card reveal"><div class="about-num">' + c.no + '</div><h3>' + t(c.title) + "</h3><p>" + t(c.body) + "</p></div>";
    }).join("");
    return (
      '<section class="hero reveal"><div class="hero-inner">' +
      '<div class="badge">UX/UI Designer</div>' +
      "<h1 class=\"serif\">Heeyeon Jang</h1>" +
      "<p>" + t(TAGLINE) + "</p>" +
      '<div class="hero-ctas">' +
      '<a class="btn-light" href="' + BEHANCE + '" target="_blank" rel="noopener">Behance ↗</a>' +
      '<a class="btn-light" href="' + LINKEDIN + '" target="_blank" rel="noopener">LinkedIn ↗</a>' +
      "</div></div></section>" +
      '<section class="about-section reveal">' +
      '<div class="kicker">About</div>' +
      '<h2 class="section-title serif">' + t(ABOUT_H2) + "</h2>" +
      '<p class="detail-lede" style="margin-bottom:28px">' + t(ABOUT_BODY) + "</p>" +
      '<div class="style-tags">' + tags + "</div>" +
      '<div class="about-grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderCareer() {
    var competencies = CAREER_COMPETENCIES.map(function (c) {
      return '<div class="competency-card reveal"><div class="competency-num">' + c.no + '</div><div class="text">' + t(c.text) + "</div></div>";
    }).join("");
    var projects = CAREER_PROJECTS.map(function (p) {
      return (
        '<div class="career-project reveal">' +
        '<div class="career-project-head">' +
        '<div><div class="title">' + t(p.title) + '</div><div class="meta">' + p.period + " · " + t(p.role) + " · " + t(p.team) + "</div></div>" +
        "</div>" +
        '<div class="career-project-body">' +
        '<div><div class="label">Task</div><p>' + t(p.task) + "</p></div>" +
        '<div><div class="label">Result</div><p>' + t(p.result) + "</p></div>" +
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
      return '<div class="skill-group reveal"><h4>' + t(g.cat) + "</h4>" + rows + "</div>";
    }).join("");
    var langPills = LANGUAGES.map(function (l) {
      return '<div class="lang-pill">' + l.name + ' <span>' + l.level + "</span></div>";
    }).join("");

    return (
      '<section class="career-hero reveal">' +
      '<div class="kicker">Career</div>' +
      '<div class="career-header-row"><h2 class="section-title serif" style="margin-bottom:0">' + t(CAREER_TITLE) + "</h2>" +
      '<a class="back-btn" href="' + CAREER_RESUME_URL + '" target="_blank" style="margin-bottom:0">' + t(CAREER_VIEW_RESUME) + "</a></div>" +
      '<div class="career-meta"><span class="company">' + t(CAREER.company) + '</span><span class="role">' + t(CAREER.role) + '</span><span class="period">' + t(CAREER.period) + "</span></div>" +
      "<ul>" + CAREER.bullets.map(function (b) { return "<li>" + t(b) + "</li>"; }).join("") + "</ul>" +
      "</section>" +
      '<section class="reveal" style="padding-bottom:8px">' +
      '<h3 class="section-sub serif">Core Competencies</h3>' +
      '<div class="competency-grid">' + competencies + "</div>" +
      "</section>" +
      '<section class="career-projects">' + projects + "</section>" +
      '<section class="skills-section">' +
      '<h3 class="section-sub serif">Skills</h3>' +
      '<div class="skills-grid">' + skillGroups + "</div>" +
      '<div class="lang-pills">' + langPills + "</div>" +
      "</section>"
    );
  }

  function renderProjects() {
    var filters = PROJECT_FILTERS.map(function (f) {
      return '<button class="filter-pill' + (state.projFilter === f.id ? " active" : "") + '" onclick="app.setProjFilter(\'' + f.id + '\')">' + t(f.label) + "</button>";
    }).join("");
    var list = PROJECTS.filter(function (p) { return state.projFilter === "all" || p.type === state.projFilter; });
    var cards = list.map(function (p) {
      var bullets = p.bullets.map(function (b) { return "<div>• " + t(b) + "</div>"; }).join("");
      var hero = PROJECT_META[p.key] ? PROJECT_META[p.key].hero : null;
      return (
        '<div class="project-card reveal" onclick="app.setPage(\'' + p.key + '\')">' +
        (hero ? '<div class="project-card-img"><img src="images/' + hero + '" alt="' + p.name + ' cover" loading="lazy"></div>' : "") +
        '<div class="project-card-body">' +
        '<div class="project-card-top"><span class="project-card-no">' + p.no + '</span><span class="project-card-tag">' + p.tag + "</span></div>" +
        '<div class="project-card-title">' + t(p.title) + '</div>' +
        '<div class="project-card-name">' + p.name + '</div>' +
        '<p class="project-card-desc">' + t(p.desc) + "</p>" +
        '<div class="project-card-bullets">' + bullets + "</div>" +
        '<div class="project-card-cta">' + t(PROJECT_CTA) + "</div>" +
        "</div></div>"
      );
    }).join("");
    return (
      '<section class="projects-section reveal">' +
      '<div class="kicker">Projects</div>' +
      '<h2 class="section-title serif">Selected Works</h2>' +
      '<p class="detail-h3-sub" style="max-width:600px">' + t(PROJECTS_SUB) + "</p>" +
      '<div class="filter-row">' + filters + "</div>" +
      '<div class="project-grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderEducation() {
    var filters = EDU_FILTERS.map(function (f) {
      return '<button class="filter-pill' + (state.eduFilter === f.id ? " active" : "") + '" onclick="app.setEduFilter(\'' + f.id + '\')">' + t(f.label) + "</button>";
    }).join("");
    var list = EDU.filter(function (e) { return state.eduFilter === "all" || e.cat === state.eduFilter; });
    var items = list.map(function (e) {
      return (
        '<div class="edu-item reveal"><div class="edu-dot"></div>' +
        '<div class="edu-row">' +
        '<span class="edu-year">' + e.year + '</span>' +
        '<div class="edu-main"><div class="edu-title">' + t(e.title) + '</div><div class="edu-org">' + e.org + "</div></div>" +
        "</div>" +
        '<p class="edu-desc">' + t(e.desc) + "</p></div>"
      );
    }).join("");
    return (
      '<section class="education-section reveal">' +
      '<div class="kicker">Education &amp; Certifications</div>' +
      '<h2 class="section-title serif">' + t(EDU_TITLE) + "</h2>" +
      '<div class="filter-row">' + filters + "</div>" +
      '<div class="edu-timeline">' + items + "</div>" +
      "</section>"
    );
  }

  function renderActivities() {
    var cards = ACTIVITIES.map(function (a) {
      return (
        '<div class="activity-card reveal"><div class="activity-top"><span class="activity-tag">' + t(a.tag) + '</span><span class="activity-period">' + a.period + "</span></div>" +
        '<div class="activity-title">' + t(a.title) + '</div><p class="activity-desc">' + t(a.desc) + "</p></div>"
      );
    }).join("");
    return (
      '<section class="activities-section reveal">' +
      '<div class="kicker">Activities</div>' +
      '<h2 class="section-title serif">' + t(ACT_TITLE) + "</h2>" +
      '<div class="activity-grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderMaeari() {
    var insightItems = bulletList(MAEARI_INSIGHTS);
    var marketItems = bulletList(MAEARI_MARKET);
    var cvCards = MAEARI_CORE_VALUES.map(function (c) {
      return '<div class="info-card"><div class="info-card-label">' + t(L2.coreValue) + '</div><h4 style="margin:0 0 8px;font-size:16px">' + t(c.title) + '</h4><p style="margin:0;font-size:14px;line-height:1.7;color:var(--muted-68)">' + t(c.body) + "</p></div>";
    }).join("");
    var personaCards = MAEARI_PERSONAS.map(function (p) {
      return (
        '<div class="info-card" style="display:grid;grid-template-columns:120px 1fr;gap:20px;align-items:center">' +
        '<img src="images/' + p.photo + '" alt="" style="border-radius:16px">' +
        '<div><div class="info-card-label">' + p.tag + '</div><h4 style="margin:0 0 8px;font-size:15px">' + t(p.name) + '</h4><p style="margin:0 0 8px;font-size:13.5px;line-height:1.65;color:var(--muted-68)">' + t(p.body) + '</p><p style="margin:0;font-size:12.5px;color:var(--accent-dark);font-weight:600">' + t(L2.painPoint) + t(p.pain) + "</p></div>" +
        "</div>"
      );
    }).join("");
    var utTabs = MAEARI_UT.tabs.map(function (tb) {
      return '<button class="filter-pill' + (state.utTab === tb.id ? " active" : "") + '" onclick="app.setUtTab(\'' + tb.id + '\')">' + t(tb.label) + "</button>";
    }).join("");
    var activeTab = MAEARI_UT.tabs.filter(function (tb) { return tb.id === state.utTab; })[0] || MAEARI_UT.tabs[0];
    var utItems = activeTab.items.map(function (it) {
      return '<div class="info-card" style="padding:20px"><p style="margin:0 0 8px;font-size:13.5px;font-weight:700;color:var(--ink)">⚠ ' + t(it.problem) + '</p><p style="margin:0;font-size:13.5px;color:var(--accent-dark);font-weight:600">→ ' + t(it.solution) + "</p></div>";
    }).join("");
    var chips = MAEARI_LEVELS.map(function (l) { return { label: l.label, swatch: l.color }; });

    return (
      '<section class="detail-section">' +
      detailHeader("maeari") +
      block(L2.research, null,
        '<div class="two-col">' +
        infoCard(L2.interview, insightItems) +
        infoCard(L2.market, marketItems) +
        "</div>") +
      block(L2.coreValue, null, '<div class="two-col">' + cvCards + "</div>") +
      block(L2.personas, null, '<div class="two-col">' + personaCards + "</div>") +
      block(L2.flow, null,
        '<div class="three-col">' +
        '<div><img src="images/maeari-cv-3.jpg" alt="Flow Chart" style="border-radius:16px;border:1px solid var(--border-soft)"><p style="text-align:center;font-size:12.5px;color:var(--muted-45);margin-top:8px">Flow Chart</p></div>' +
        '<div><img src="images/maeari-cv-4.jpg" alt="Wireframe" style="border-radius:16px;border:1px solid var(--border-soft)"><p style="text-align:center;font-size:12.5px;color:var(--muted-45);margin-top:8px">Wireframe</p></div>' +
        '<div><img src="images/maeari-storyboard3.webp" alt="Story Board" style="border-radius:16px;border:1px solid var(--border-soft)"><p style="text-align:center;font-size:12.5px;color:var(--muted-45);margin-top:8px">Story Board</p></div>' +
        "</div>") +
      block(L2.ut, null,
        '<div class="filter-row">' + utTabs + "</div>" +
        '<p style="font-size:14.5px;line-height:1.75;color:var(--muted-68);max-width:820px;margin:0 0 20px">' + t(activeTab.summary) + "</p>" +
        '<div class="two-col">' + utItems + "</div>") +
      featureBoard({ tag: bi("Main Page", "메인 페이지"), title: bi("Hiking Info for Beginners", "초보자를 위한 등산 정보"), desc: bi("The main page provides guides and navigation for beginner hikers, along with course recommendations tailored to their level. The menu was designed as a bottom tab so users can check it easily on the trail.", "메인 페이지에서는 등산 초보자를 위한 가이드와 네비게이션, 레벨에 맞는 코스 추천 기능을 제공합니다. 사용자가 메뉴를 쉽게 확인할 수 있는 Bottom tab 형태로 구성했습니다."), chips: chips, images: ["maeari-feat-hiking2.webp"] }) +
      featureBoard({ tag: bi("Navigation", "내비게이션"), title: bi("Course Info With GPS", "GPS 코스 정보"), desc: bi("You can check your current location and the direction you need to go on the map, and see previously searched courses at a glance.", "현재 내가 있는 위치와 앞으로 가야 할 방향을 지도로 확인할 수 있으며 그 전에 검색한 코스까지 한눈에 볼 수 있습니다."), images: ["maeari-feat-gps2.webp"] }) +
      featureBoard({ tag: bi("Friend", "친구"), title: bi("Make Friends like Me", "나와 닮은 친구 만들기"), desc: bi("By categorizing location, age, hiking level, and gender, you can meet hiking friends who match you well.", "사는 지역, 나이, 등산 레벨, 성별을 카테고리화하여 나와 잘 맞는 등산 친구를 만날 수 있습니다."), bullets: [
        bi("Find friends similar to you through categories.", "카테고리를 통해 나와 비슷한 친구를 찾을 수 있습니다."),
        bi("Enter your location and set a range to search for friends within that area.", "내가 살고 있는 지역을 입력하고 범위를 설정하면 그 지역 내에서 친구가 검색됩니다."),
        bi("The manner-score system provides an indicator to check the other person before meeting offline.", "매너점수 시스템으로 오프라인 만남 전에 상대방을 확인할 수 있는 지표를 마련했습니다.")
      ], images: ["maeari-friend-list.webp", "maeari-friend-profile.webp"] }) +
      '<div class="detail-hero reveal"><img src="images/maeari-sg-4.jpg" alt="Friend screens"></div>' +
      featureBoard({ tag: bi("Photo", "사진"), title: bi("Take Pictures of Beautiful Places", "아름다운 장소 사진 촬영"), desc: bi("You can take and upload hiking verification photos with beautiful mountain scenery as the background.", "멋진 산의 풍경을 배경으로 등산 인증샷을 촬영하고 업로드할 수 있습니다."), bullets: [
        bi("Users can also upload photos they've already taken.", "사용자가 미리 찍어둔 사진도 업로드할 수 있습니다."),
        bi("You can upload multiple images. When uploading several, only the first photo appears in the preview.", "여러 장의 이미지를 업로드할 수 있습니다. 여러 장을 업로드할 경우 맨 첫번째 사진만 미리보기에 표시됩니다.")
      ], images: ["maeari-photo-upload.webp"] }) +
      featureBoard({ tag: bi("Chat", "채팅"), title: bi("Chat with Friends", "친구와 채팅하기"), desc: bi("You can chat with hiking companions and friends you've already gotten close to.", "등산할 친구, 이미 친해진 친구와 함께 채팅으로 대화할 수 있습니다."), images: ["maeari-chat-list.webp", "maeari-chat-convo.webp", "maeari-chat-profile2.webp"] }) +
      featureBoard({ tag: bi("My Page · Calendar", "마이페이지 · 캘린더"), title: bi("Manage My Schedule", "내 일정 관리하기"), desc: bi("You can manage and record your hiking schedule and share it with friends.", "나의 등산 일정을 관리, 기록하고 친구에게 공유할 수 있습니다."), bullets: [
        bi("Adding someone as a member in the calendar automatically shares the schedule with them.", "캘린더에서 멤버로 추가하면 자동으로 지정된 멤버에게 일정이 공유됩니다."),
        bi("As a registered schedule date approaches, a notification with a packing checklist for the course is sent to the user one day in advance.", "등록된 스케줄 날짜가 다가오면 하루 전에 코스에 맞는 준비물 리스트를 사용자에게 알림으로 보내줍니다.")
      ], images: ["maeari-schedule-members.webp", "maeari-schedule-list.webp"] }) +
      block(L2.reflection, null, "") +
      reflectionBlock(MAEARI_REFLECTION) +
      behanceCta("maeari") +
      "</section>"
    );
  }

  function renderPrime() {
    function barBlock(chart) {
      var bars = chart.bars.map(function (b) {
        return '<div class="survey-bar"><div class="survey-bar-top"><span>' + t(b[0]) + '</span><span style="font-weight:700">' + b[1] + '%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:' + b[1] + '%"></div></div></div>';
      }).join("");
      return '<div class="info-card"><div class="info-card-label">' + t(chart.title) + "</div>" + bars + "</div>";
    }
    var bgCards = PRIME_BACKGROUND.map(function (b) {
      return '<div class="info-card"><h4 style="margin:0 0 8px;font-size:16px">' + t(b.title) + '</h4><p style="margin:0;font-size:14px;line-height:1.7;color:var(--muted-68)">' + t(b.body) + "</p></div>";
    }).join("");
    var surveyCards = PRIME_SURVEY.charts.map(barBlock).join("");
    var nfChips = PRIME_COMPETITOR.netflix.chips.map(function (c, i) {
      return '<div class="comp-chip' + (PRIME_COMPETITOR.netflix.hi.indexOf(i) !== -1 ? " hi" : "") + '">' + t(c) + "</div>";
    }).join("");
    var pvChips = PRIME_COMPETITOR.prime.chips.map(function (c, i) {
      return '<div class="comp-chip' + (PRIME_COMPETITOR.prime.hi.indexOf(i) !== -1 ? " hi" : "") + '">' + t(c) + "</div>";
    }).join("");
    var solCards = PRIME_SOLUTION.map(function (s) {
      return '<div style="margin-bottom:10px"><h4 style="margin:0 0 6px;font-size:16px">' + t(s.title) + '</h4><p style="margin:0;font-size:14.5px;line-height:1.6;color:rgba(255,253,250,0.75)">' + t(s.body) + "</p></div>";
    }).join("");
    var featureCards = PRIME_FEATURES.map(function (f, i) {
      return '<div class="info-card"><div class="info-card-label">0' + (i + 1) + '</div><h4 style="margin:0 0 8px;font-size:16px">' + t(f.title) + '</h4><p style="margin:0;font-size:13.5px;line-height:1.65;color:var(--muted-68)">' + t(f.body) + "</p></div>";
    }).join("");
    var utItems = PRIME_UT.map(function (it) {
      return '<div class="info-card" style="padding:20px"><p style="margin:0 0 8px;font-size:13.5px;font-weight:700;color:var(--ink)">⚠ ' + t(it.problem) + '</p><p style="margin:0;font-size:13.5px;color:var(--accent-dark);font-weight:600">→ ' + t(it.solution) + "</p></div>";
    }).join("");

    return (
      '<section class="detail-section">' +
      detailHeader("prime") +
      block(L2.background_survey, null, '<div class="three-col">' + bgCards + "</div>") +
      block(bi("User Survey", "사용자 서베이"), PRIME_SURVEY.note, '<div class="three-col">' + surveyCards + "</div>") +
      block(L2.competitor, PRIME_COMPETITOR.note,
        '<div class="two-col">' +
        '<div><h4 style="font-size:15px;margin:0 0 10px">Netflix</h4><div style="display:flex;flex-direction:column;gap:8px">' + nfChips + "</div></div>" +
        '<div><h4 style="font-size:15px;margin:0 0 10px">Prime Video</h4><div style="display:flex;flex-direction:column;gap:8px">' + pvChips + "</div></div>" +
        "</div>") +
      block(L2.solution, null, '<div class="dark-card">' + solCards + "</div>") +
      block(L2.keyfeatures, null, '<div class="three-col">' + featureCards + "</div>") +
      block(L2.storyboard, null, '<div class="detail-hero" style="margin-bottom:0"><img src="images/prime-storyboard-2.webp" alt="Story board"></div>') +
      block(L2.ut, null, '<div class="three-col">' + utItems + "</div>") +
      featureBoard({ tag: L2.home_board, title: bi("Onboarding", "온보딩"), desc: bi("Meet the improved Amazon Prime Video, right now.", "개선된 아마존 프라임 비디오를 지금 바로 만나보세요."), bullets: [
        bi("Did you leave something unfinished? We placed it near the top so you can jump right back in.", "시청하다가 중단한 콘텐츠가 있나요? 곧바로 이어서 볼 수 있도록 상단에 배치하여 접근성을 높였어요."),
        bi("Find Originals available only on Prime Video, all gathered in one place.", "프라임 비디오에서만 볼 수 있는 오리지널 콘텐츠를 한 곳에 모았어요."),
        bi("Easily pick the genre you want from text-style buttons that fit within a single scroll.", "여러 장르 중 원하는 장르를 한 스크롤 안에서 쉽게 골라보세요."),
        bi("Not sure if this content fits your taste? Try it out first in short-form.", "이 콘텐츠가 내 취향에 맞을까요? 숏폼 미리보기로 먼저 확인해보세요.")
      ], images: ["prime-home-4.webp"] }) +
      stepBoard({ tag: L2.profile_board, title: bi("Build a Profile That's Safe and Fun", "나만의 안전하고 즐거운 프로필 만들기"), cols: 4,
        desc: bi("After logging in, easily create your own profile. Kids Profiles filter out violent content so children can watch safely.", "로그인 후, 자신만의 프로필을 쉽게 만들어보세요. 어린이를 위한 키즈 프로필은 폭력적인 콘텐츠를 걸러내어 안전하게 이용할 수 있습니다."),
        steps: [
          { img: "prime-profile-1.webp", text: bi("Tap New to create a profile. The shared account owner has a star mark by their name.", "New 버튼을 클릭해서 프로필을 만들어보세요. 공유 계정의 주인은 이름 앞에 별 표시가 되어 있어요.") },
          { img: "prime-profile-2.webp", text: bi("Set a name, photo, profile type, and password.", "이름과 프로필 사진, 프로필 종류와 비밀번호를 설정할 수 있어요.") },
          { img: "prime-profile-3.webp", text: bi("Set a password so shared users can't access your profile or watch history.", "공유 사용자가 내 프로필에 접속할 수 없도록 비밀번호를 설정해 보세요.") },
          { img: "prime-profile-4.webp", text: bi("Your profile is created! Ready to enjoy Amazon Prime Video?", "프로필 생성이 완료되었어요! 이제 아마존 프라임 비디오를 즐기러 가 볼까요?") }
        ] }) +
      stepBoard({ tag: L2.contents_board, title: bi("Content You Can Enjoy at a Glance", "한눈에 즐기는 콘텐츠"), cols: 3, numbered: false,
        desc: bi("See interesting content across movies, TV shows, sports, and more at a glance, and jump straight into whatever you want to watch.", "영화, TV쇼, 스포츠 등 다양한 분야의 재미있는 콘텐츠를 한눈에 확인하고, 원하는 작품을 바로 선택할 수 있어요."),
        steps: [
          { img: "prime-contents-1.webp", text: bi("Already watching something? Pick up where you left off.", "이미 시청 중인 콘텐츠가 있다면 이어서 감상해보세요.") },
          { img: "prime-contents-3.webp", text: bi("Choose Movies, TV Shows, Originals, Sports, or Kids, and pick a genre easily from text-style buttons.", "영화, TV쇼, 오리지널, 스포츠, 키즈 탭으로 유형을 고르고, 텍스트 버튼으로 장르도 쉽게 골라보세요.") },
          { img: "prime-contents-2.webp", text: bi("Want a quick trailer? Check out short-form previews in Featured Preview.", "짧은 예고편을 보고 싶다면 Featured preview에서 숏폼 형태로 볼 수 있어요.") }
        ] }) +
      stepBoard({ tag: L2.vd_board, title: bi("Watch Instantly, Anytime, Anywhere", "언제 어디서나 즉시 감상"), cols: 3, numbered: false,
        desc: bi("Enjoy the content you want to watch right away. If you'd like smooth playback regardless of your internet connection, downloading it ahead of time is a great option.", "보고 싶은 콘텐츠를 즉시 즐겨보세요. 인터넷 환경에 상관없이 원활한 시청을 원한다면, 미리 기기에 다운로드해두는 것도 좋은 방법이에요."),
        steps: [
          { imgs: ["prime-vd-1.webp", "prime-vd-2.webp"], text: bi("Check details on the content page, then tap Watch Now to start watching.", "콘텐츠 상세 페이지에서 정보를 확인하고 Watch Now를 클릭하여 감상해 보세요.") },
          { imgs: ["prime-vd-3.webp"], text: bi("Use X-Ray to instantly look up music, cast, and background info for each scene — a Prime Video original feature.", "엑스레이 기능을 활용하여 각 씬마다 음악, 등장인물과 배경 지식을 알아보세요. 프라임 비디오만의 오리지널 기능이에요.") },
          { imgs: ["prime-vd-4.webp", "prime-vd-5.webp"], text: bi("Download content so you can watch it offline. Find downloads in the Downloads tab.", "오프라인 환경에서도 감상할 수 있도록 다운로드해보세요. 다운로드한 콘텐츠는 Downloads에서 확인할 수 있어요.") }
        ] }) +
      stepBoard({ tag: L2.sports_board, title: bi("A Special Feature for Sports Fans", "스포츠 팬을 위한 특별 기능"), cols: 4,
        desc: bi("Pin the games you're interested in from the Sports section so you never miss a favorite match. With My Game, you can follow live scores without missing a beat!", "좋아하는 경기를 놓치지 않도록 스포츠 섹션에서 관심 경기에 핀을 꽂아보세요. MY GAME 기능으로 실시간 스코어를 빠짐없이 확인할 수 있답니다!"),
        steps: [
          { img: "prime-sports-1.webp", text: bi("A new My Game area appears at the top of the Sports page, showing live scores.", "스포츠 페이지 상단에 스코어를 확인할 수 있는 MY GAME 영역이 신규 생성되었어요.") },
          { img: "prime-sports-2.webp", text: bi("Tap Edit to see games you can favorite, then tap the pin button to add them.", "Edit을 누르면 즐겨찾기 할 수 있는 경기가 나타나요. 핀 버튼을 선택해서 즐겨찾기할 수 있어요.") },
          { img: "prime-sports-3.webp", text: bi("Check the games you've already pinned in My Pins.", "My pins에서 이미 핀을 꽂은(즐겨찾기한) 경기를 확인할 수 있어요.") },
          { img: "prime-sports-4.webp", text: bi("You can also pin a game from Today's Game — pin any match you don't want to miss today.", "Today's Game에서도 핀을 꽂을 수 있어요. 오늘 놓치고 싶지 않은 경기의 스코어를 확인해 보세요.") }
        ] }) +
      block(L2.reflection, null, "") +
      reflectionBlock(PRIME_REFLECTION) +
      behanceCta("prime") +
      "</section>"
    );
  }

  function renderKepco() {
    var probItems = bulletList(KEPCO_PROBLEMS);
    var solItems = '<div class="bullets" style="color:rgba(255,253,250,0.85)">' + KEPCO_SOLUTIONS.map(function (s) { return "<div>" + t(s) + "</div>"; }).join("") + "</div>";
    var decisionCards = KEPCO_DECISIONS.map(function (d, i) {
      return '<div class="decision-card reveal"><div class="decision-no">0' + (i + 1) + '</div><div><div class="t">' + t(d.title) + "</div><p>" + t(d.body) + "</p></div></div>";
    }).join("");
    var showcase = KEPCO_SHOWCASE.map(function (fn) {
      return '<img src="images/' + fn + '" alt="KEPCO final design">';
    }).join("");

    return (
      '<section class="detail-section">' +
      detailHeader("kepco") +
      block(L2.problem_solution, null,
        '<div class="two-col">' +
        infoCard(bi("Problem", "문제"), probItems) +
        '<div class="dark-card">' + solItems + "</div>" +
        "</div>") +
      block(L2.decisions, null, decisionCards) +
      block(L2.finaldesign, null, '<div class="showcase-stack">' + showcase + "</div>") +
      block(L2.reflection, null, "") +
      reflectionBlock(KEPCO_REFLECTION) +
      behanceCta("kepco") +
      "</section>"
    );
  }

  function renderKyobo() {
    return (
      '<section class="detail-section">' +
      detailHeader("kyobo") +
      block(bi("Overview", "Overview"), null, '<p class="feature-desc" style="max-width:820px">' + t(KYOBO_OVERVIEW) + "</p>") +
      block(bi("Desk Research", "Desk Research"), null, kyoboDeskResearchBlock()) +
      block(bi("SWOT Analysis", "SWOT Analysis"), null, kyoboSwotBlock()) +
      block(bi("Website Analysis", "웹사이트 분석"), null, kyoboWebsiteAnalysisBlock()) +
      block(bi("Interview", "Interview"), null, kyoboInterviewBlock()) +
      block(bi("AS-IS → TO-BE", "AS-IS → TO-BE"), null, kyoboAsIsToBeBlock()) +
      block(bi("Project Goal", "Project Goal"), null, '<div class="dark-card"><p style="font-size:16.5px;font-weight:600;line-height:1.7">' + t(KYOBO_GOAL) + "</p></div>") +
      block(bi("Wireframe", "Wireframe"), null, zoomImage("kyobo-wireframe.jpg", "Wireframe")) +
      block(bi("Concept", "Concept"), null, kyoboConceptBlock()) +
      block(bi("Style Guide", "Style Guide"), null, kyoboStyleGuideBlock()) +
      block(bi("Banner Design", "Banner Design"), null, kyoboBannerSection()) +
      block(L2.reflection, null, "") +
      reflectionBlock(KYOBO_REFLECTION) +
      behanceCta("kyobo") +
      "</section>"
    );
  }

  /* ------------------------------------------------------------------ */
  /* Root render + nav + scroll behaviors                                */
  /* ------------------------------------------------------------------ */

  var app = document.getElementById("app");
  var navPills = document.getElementById("navPills");
  var langToggle = document.getElementById("langToggle");
  var navPillsMobile = document.getElementById("navPillsMobile");
  var hamburgerBtn = document.getElementById("hamburgerBtn");
  var mobileMenu = document.getElementById("mobileMenu");

  function toggleMobileMenu() {
    if (!mobileMenu) return;
    var open = mobileMenu.classList.toggle("open");
    if (hamburgerBtn) hamburgerBtn.classList.toggle("open", open);
  }
  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    if (hamburgerBtn) hamburgerBtn.classList.remove("open");
  }

  function renderNav() {
    var activeId = PROJECT_DETAIL_PAGES.indexOf(state.page) !== -1 ? "projects" : state.page;
    var pillsHtml = NAV.map(function (n) {
      return '<button class="' + (n.id === activeId ? "active" : "") + '" onclick="app.setPage(\'' + n.id + '\')">' + n.label + "</button>";
    }).join("");
    navPills.innerHTML = pillsHtml;
    if (navPillsMobile) navPillsMobile.innerHTML = pillsHtml;
    var langHtml =
      '<button class="' + (state.lang === "en" ? "active" : "") + '" onclick="app.setLang(\'en\')">EN</button>' +
      '<button class="' + (state.lang === "ko" ? "active" : "") + '" onclick="app.setLang(\'ko\')">KR</button>';
    if (langToggle) langToggle.innerHTML = langHtml;
  }

  function render() {
    renderNav();
    var html = "";
    switch (state.page) {
      case "home": html = renderHome(); break;
      case "career": html = renderCareer(); break;
      case "projects": html = renderProjects(); break;
      case "education": html = renderEducation(); break;
      case "activities": html = renderActivities(); break;
      case "maeari": html = renderMaeari(); break;
      case "prime": html = renderPrime(); break;
      case "kepco": html = renderKepco(); break;
      case "kyobo": html = renderKyobo(); break;
      default: html = renderHome();
    }
    app.innerHTML = html;

    var emailLink = document.getElementById("footerEmail");
    if (emailLink) { emailLink.href = "mailto:" + t(EMAIL); emailLink.textContent = t(EMAIL); }
    var footerHeading = document.getElementById("footerHeading");
    if (footerHeading) { footerHeading.textContent = t(FOOTER_HEADING); }

    initReveal();
  }

  var revealObserver = null;
  function initReveal() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(function (el) { revealObserver.observe(el); });
  }

  function initScrollChrome() {
    var topBtn = document.getElementById("topBtn");
    window.addEventListener("scroll", function () {
      var y = window.scrollY || document.documentElement.scrollTop;
      if (y > 400) topBtn.classList.add("visible"); else topBtn.classList.remove("visible");
      if (y > 40) document.body.classList.add("tinted"); else document.body.classList.remove("tinted");
    }, { passive: true });
    topBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.documentElement.lang = state.lang;
  window.addEventListener("hashchange", router);
  document.addEventListener("DOMContentLoaded", function () {
    router();
    initScrollChrome();
  });
})();
