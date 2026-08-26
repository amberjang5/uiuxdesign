/* Heeyeon Jang — UX/UI Portfolio (English static build)
   Plain vanilla JS. Hash-based routing, no frameworks, no build step. */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* Data                                                                */
  /* ------------------------------------------------------------------ */

  var CONTACT_EMAIL = "amberjang5@gmail.com";
  var BEHANCE = "https://www.behance.net/kelly3789";
  var LINKEDIN = "https://www.linkedin.com/in/heeyeon-j";
  var CAREER_RESUME_URL = "https://amberjang5.github.io/portfolio/career";

  var BEHANCE_URLS = {
    maeari: "https://www.behance.net/gallery/226604539/MAEARI-Hiking-community-app-UXUI-design",
    prime: "https://www.behance.net/gallery/227152215/Amazon-Prime-Video-App-UXUI-Renewal-Project",
    kepco: "https://www.behance.net/gallery/226632259/KEPCO-Website-UIUX-design-Renewal"
  };

  var NAV = [
    { id: "home", label: "Home" },
    { id: "career", label: "Career" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "activities", label: "Activities" }
  ];
  var PROJECT_DETAIL_PAGES = ["maeari", "prime", "kepco"];

  var ABOUT_CARDS = [
    { no: "01", title: "Small differences shape the user experience", body: "Studying visual design taught me that small differences — type size, spacing, information layout — determine how polished something feels. As a planner designing screens with wireframes and storyboards, I thought about how users would take in information, and after launch I tested the flow and details myself." },
    { no: "02", title: "I learn what I don't know", body: "When I struggled to communicate with developers while running a shopping mall system, I taught myself SQL. Whenever I find a gap in my knowledge, I learn what I need and apply it — and I keep learning new tools and skills in UX/UI the same way." },
    { no: "03", title: "Turning requirements into usable screens", body: "Rather than passing requirements along as-is, I review existing service policy and screen flow to sort out the functions and edge cases actually needed, then turn them into concrete wireframes and storyboards." },
    { no: "04", title: "Improving with user data, not intuition", body: "At Etsy I analyzed SEO keywords and compared competitor listings to improve pages, and by continuously analyzing views and sales data I achieved over 310 sales." }
  ];
  var WORKING_STYLE = ["Attention to Detail", "Growth Mindset", "Diligence", "Teamwork"];

  var CAREER = {
    company: "efusioni",
    role: "Commerce Planning Team, Associate",
    period: "2023.07 — 2025.10 (2 yr 4 mo)",
    bullets: [
      "Managed event planning design and system operations for a corporate group's employee shopping mall for about 2 years and 4 months",
      "Handled service operations, feature improvements, screen design, QA, and client communication",
      "Experience writing wireframes, storyboards, and test cases, and verifying releases",
      "Collaborated with developers and designers on new features and service enhancement projects"
    ]
  };

  var CAREER_COMPETENCIES = [
    { no: "01", text: "Shopping mall service operations planning" },
    { no: "02", text: "Analyzing business requirements and defining features to fit service policy" },
    { no: "03", text: "Screen design reflecting service policy (Wireframe, Storyboard)" },
    { no: "04", text: "Project schedule and requirements management" },
    { no: "05", text: "QA (writing test cases, functional & usability testing)" },
    { no: "06", text: "Release verification and operational stability" },
    { no: "07", text: "Collaboration with clients and the development team" },
    { no: "08", text: "Data validation and processing" }
  ];

  var CAREER_PROJECTS = [
    {
      id: 1, title: "Event & Promotion Operations", period: "2023.07 – 2024.03",
      role: "Service Operations Planning", team: "1 Planner, 3 Designers",
      task: "Supported the production of feature-event and promotion imagery for a corporate employee shopping mall, collaborated with designers to review event direction and design, managed client requirements and revisions, and oversaw production schedules and deliverable review.",
      result: "Launched feature events on schedule through careful timeline management and task distribution, and improved operational quality through ongoing banner monitoring."
    },
    {
      id: 2, title: "System Operations & Maintenance", period: "2024.03 – 2025.10",
      role: "Service Operations Planning · QA", team: "2 Planners, 1 Publisher, 1 Developer",
      task: "Operated and improved a corporate employee shopping mall service, analyzed business requirements and defined features, designed screens based on requirements (Wireframe, Storyboard), wrote test cases and performed functional testing (QA), verified functionality and stabilized operations after release, coordinated client requirements and revisions, aligned schedules and features with developers and publishers, validated and processed extracted data for delivery to clients, and handled system-related inquiries and issues in collaboration with the CS team.",
      result: "Organized operational requests into structured lists to improve communication between business stakeholders and project members, supported key-feature QA and operational stability throughout the maintenance period, and produced planning documents that translated client requirements into service policy — enabling smooth development and deployment."
    }
  ];

  var SKILL_GROUPS = [
    { cat: "Graphic Design", items: [
      { name: "Photoshop", level: "Intermediate-High", pct: 70 },
      { name: "Illustrator", level: "Advanced", pct: 85 },
      { name: "Figma", level: "Intermediate", pct: 55 }
    ]},
    { cat: "Publishing", items: [
      { name: "HTML / CSS", level: "Intermediate", pct: 55 }
    ]},
    { cat: "Documentation", items: [
      { name: "Excel", level: "Intermediate-High", pct: 70 },
      { name: "Powerpoint", level: "Advanced", pct: 85 },
      { name: "Google Sheets", level: "Intermediate-High", pct: 70 }
    ]}
  ];
  var LANGUAGES = [
    { name: "Korean", level: "NATIVE" },
    { name: "English", level: "INTERMEDIATE" }
  ];

  var PROJECT_FILTERS = [
    { id: "all", label: "All" },
    { id: "app", label: "App" },
    { id: "web", label: "Website" }
  ];
  var PROJECTS = [
    { id: 1, no: "01", type: "app", tag: "App Design", name: "MAEARI", title: "Hiking Community App",
      desc: "A hiking community app spanning trail recommendations, companion matching, and a photo community.",
      bullets: ["Core flows designed from user research", "Information structure that helps beginners find trails easily"],
      key: "maeari" },
    { id: 2, no: "02", type: "app", tag: "App Renewal", name: "Amazon Prime Video", title: "Prime Video App Renewal",
      desc: "Redesigned the information architecture and browsing experience of the existing Prime Video app.",
      bullets: ["Restructured the content discovery flow", "Improved the live sports viewing experience"],
      key: "prime" },
    { id: 3, no: "03", type: "web", tag: "Website Renewal", name: "KEPCO Energy", title: "KEPCO Website",
      desc: "Renewed the UI/UX of the Korea Electric Power Corporation official website.",
      bullets: ["A visual identity that builds trust", "Structure and navigation that make vast amounts of information easy to find"],
      key: "kepco" }
  ];

  var EDU_FILTERS = [
    { id: "all", label: "All" },
    { id: "education", label: "Education" },
    { id: "course", label: "Courses" },
    { id: "cert", label: "Certifications" },
    { id: "award", label: "Awards" }
  ];
  var EDU = [
    { year: "2014–2019", cat: "education", title: "Visual Design", org: "Kyung Hee University", desc: "Graduated · GPA 4.11 / 4.5" },
    { year: "2026.08", cat: "course", title: "Applied AI Foundations", org: "OpenAI", desc: "Learned how to turn repetitive tasks into structured workflows" },
    { year: "2026.08", cat: "course", title: "AI Foundations", org: "OpenAI", desc: "Learned core LLM concepts and prompt writing" },
    { year: "2023.04–06", cat: "course", title: "UX/UI Professional (Cohort 43)", org: "Remain", desc: "Hands-on practice from research to prototyping, usability testing, and portfolio" },
    { year: "2023.02–03", cat: "course", title: "Mobile UI/UX Web Design (Cohort 36)", org: "Hongsi Design Academy", desc: "Covered data visualization through prototyping and usability testing" },
    { year: "2022.11–2023.01", cat: "course", title: "UI/UX Web Publisher Training (Cohort 35)", org: "Hongsi Design Academy", desc: "Practiced HTML/CSS web-standards implementation and the GUI process" },
    { year: "2020.07", cat: "cert", title: "Craftsman Computer Graphics Operator", org: "HRD Korea", desc: "National technical qualification" },
    { year: "2018", cat: "award", title: "Encouragement Award", org: "Incheon Takju Label Design Contest", desc: "Zodiac-themed label design" },
    { year: "2018", cat: "award", title: "Bronze Prize", org: "Yeongcheon National Cemetery Illustration Contest", desc: "Illustration category" }
  ];

  var ACTIVITIES = [
    { period: "2013.08 – 2025.10", tag: "Community Service", title: "Geumcheon Food Market Volunteering", desc: "Handled monthly deliveries at a food market supporting low-income households." },
    { period: "2017.02", tag: "Illustration Group Show", title: "The 1995.5 Exhibition Club", desc: "Exhibited 15 illustrations as part of a 5-person project, handling venue booking, scheduling, and submissions." },
    { period: "2020.09 – 2022.11", tag: "Independent Work", title: "Etsy Printable Art Sales", desc: "Achieved 310+ sales through SEO keyword analysis and listing improvements." },
    { period: "2021.04 – 2022.11", tag: "Independent Work", title: "Naver OGQ Sticker Design", desc: "Sold 1,600+ sticker sets for Naver Blog and AfreecaTV." },
    { period: "2025.11 – 2026.07", tag: "Overseas Experience", title: "Working Holiday in Australia", desc: "Built English communication skills and adaptability collaborating with colleagues from diverse backgrounds." }
  ];

  /* ---- Project detail content ---- */

  var PROJECT_META = {
    maeari: { name: "MAEARI", tag: "App Design", hero: "maeari-hero.jpg",
      title: "MAEARI", desc: "A hiking community app that helps you hike without getting lost, alongside a hiking mate who matches you well.",
      meta: [
        { label: "Role", value: "UX Research · IA · UI Design · Usability Testing" },
        { label: "Period", value: "2023.04 – 06" },
        { label: "Tools", value: "Figma · Photoshop · Illustrator" },
        { label: "Type", value: "Mobile App · Hiking Community" },
        { label: "Contribution", value: "Planning 100% · Design 100%" },
        { label: "Team", value: "1 person (solo project)" }
      ] },
    prime: { name: "Amazon Prime Video", tag: "App Renewal", hero: "prime-hero-new.webp",
      title: "Amazon Prime Video Renewal", desc: "Redesigned Prime Video's browsing structure and sports-viewing experience amid streamflation and subscription fatigue.",
      meta: [
        { label: "Role", value: "UX Research · UI Redesign · Usability Testing" },
        { label: "Period", value: "2025" },
        { label: "Tools", value: "Figma · Photoshop" },
        { label: "Type", value: "App Renewal · OTT" },
        { label: "Contribution", value: "Planning 100% · Design 50%" },
        { label: "Team", value: "2 people (planning and design both shared)" }
      ] },
    kepco: { name: "KEPCO Energy", tag: "Website Renewal", hero: "kepco-hero.jpg",
      title: "KEPCO Website Renewal", desc: "Redesigned KEPCO's information structure and visuals with the goal of restoring trust and disclosing information transparently.",
      meta: [
        { label: "Role", value: "UX Research · Website Analysis · IA · UI Design" },
        { label: "Period", value: "2023.06 (4 weeks)" },
        { label: "Tools", value: "Figma · Photoshop · Illustrator" },
        { label: "Type", value: "Website Renewal" },
        { label: "Contribution", value: "Planning 100% · Design 100%" },
        { label: "Team", value: "4 people (planning shared / design individual)" }
      ] }
  };

  var MAEARI_INSIGHTS = [
    "They value their personal hiking experience.",
    "Stamina and distance determine whether they enjoy a hike.",
    "They want detailed information on what to bring.",
    "They respond positively to varied hiking experiences like trekking.",
    "Many hold a negative view of socializing-focused hiking clubs."
  ];
  var MAEARI_MARKET = [
    "Interest in hiking has grown since COVID, and 20s–30s beginners are joining one-off hiking crews through social media.",
    "Hiking crews have a key limitation: members can't see information about who they're hiking with, and there's little flexibility.",
    "Hobby apps tend to expand into more categories over time — to differentiate, we set our STP to focus solely on the individual hiking experience."
  ];
  var MAEARI_CORE_VALUES = [
    { title: "A Hiking Mate Who Matches You", body: "Find hiking friends who match your skill level, location, and age group, and hike with someone you can trust based on their manner score." },
    { title: "A Service Built for Hiking Beginners", body: "Check the trail on the map so you never get lost, and use level-based reviews to find a mountain that fits your fitness." }
  ];
  var MAEARI_PERSONAS = [
    { tag: "Persona 01", name: "Lee Yujin (22) · Beginner Hiker", body: "A beginner hiker always on the lookout for a good Instagram shot. She needs beginner-friendly features, and since she enjoys socializing on social media, she treats hiking as a way to make friends too.", pain: "Preparing for a hike, finding the trail on the way up and down, and getting home", photo: "maeari-persona-1.webp" },
    { tag: "Persona 02", name: "Kim Younghyun (32) · Fitness-Matched Exercise", body: "He wants to hike for enjoyable exercise and a healthy body. Knowing his stamina is limited, he needs courses matched to how much exertion he can handle.", pain: "Giving up midway during a hike, and the descent", photo: "maeari-persona-2.webp" }
  ];
  var MAEARI_LEVELS = [
    { color: "rgb(0,154,119)", label: "Green · Beginner" },
    { color: "#e07a4f", label: "Orange · Intermediate" },
    { color: "#c0392b", label: "Red · Advanced" },
    { color: "#2f2a26", label: "Black · Expert" }
  ];
  var MAEARI_UT = {
    tabs: [
      { id: "first", label: "Round 1 UT",
        summary: "In the first round of usability testing, the success rate was low for Mission 1 (finding a friend and checking their profile). The cause was unfamiliar wording — users were more familiar with “Course” than “Trail,” and wanted detailed labels like Beginner/Intermediate next to the level. Mission 2 (finding a course and adding it to the calendar) was completed successfully by everyone.",
        items: [
          { problem: "The manner score was hard to understand", solution: "Redesigned the manner-score UI and added an explanatory caption" },
          { problem: "Wording users don’t commonly use", solution: "Switched to more familiar wording and added level-name captions" },
          { problem: "Unclear whether “Challenge” meant a challenge or a photo story", solution: "Changed the challenge into a badge-illustration graphic" },
          { problem: "A non-interactive checkbox on the course detail page that users kept tapping", solution: "Kept the checkbox only in the calendar and removed it from the course detail page" }
        ] },
      { id: "second", label: "Round 2 UT",
        summary: "In the second round, every user succeeded at every mission, including Mission 1 — resolved within a minute by all participants this time. We did learn that users struggled where status values weren’t clearly labeled, and revised the UI accordingly.",
        items: [
          { problem: "Current location wasn’t visible in the Friends menu", solution: "Added a current-location button and a bottom-sheet control for selecting an area range" },
          { problem: "The calendar icon was hard to recognize", solution: "Changed it to an icon that reads more clearly as a calendar" },
          { problem: "No indication of which filters were applied on the friend search results screen", solution: "Displayed the applied filter values on the friend search page" },
          { problem: "“Add members” in the calendar didn’t read as a button", solution: "Added an arrow to make it clearly a button" }
        ] }
    ]
  };
  var MAEARI_REFLECTION = [
    "Planning a hiking community app for users in their 20s–30s was my first time designing a new service from scratch. Early on, I expanded features using a mind map based on frustrations I'd personally experienced, forming the hypothesis that this would be “a service for sharing the hiking experience with others.” After running user interviews, I found an important difference: relationships mostly stayed one-off, and users valued “the personal hiking experience itself” more than ongoing communication. Based on that insight, I redefined the service around recording one's own hiking experience, supporting beginners, and connecting people only when needed.",
    "The first interviews and usability tests I ever ran felt unfamiliar, but watching the service direction take shape as I observed real user reactions left a strong impression on me. That experience made me far more interested in the “planning stage,” and I went on to choose planning as my career, working as a planner for 2 years and 4 months. Looking back, this project's experience was the pivotal starting point that shaped my career path."
  ];

  var PRIME_BACKGROUND = [
    { title: "Streamflation", body: "As subscription prices kept rising, users became more selective about which services to keep." },
    { title: "Subscription Fatigue", body: "Subscribing to multiple OTT services at once made the fatigue of choosing what to watch worse." },
    { title: "Content Variety", body: "Our survey found that content variety and ease of continuing to watch were the key criteria for choosing a service." }
  ];
  var PRIME_SURVEY = {
    note: "Survey of 67 people who had used an OTT service at least once — many cited “content variety” as the main reason they kept using OTT.",
    charts: [
      { title: "Currently-Used OTT Ranking", bars: [["Netflix", 77.6], ["Tving", 44.8], ["Coupang Play", 38.8]] },
      { title: "Reasons to Keep Using", bars: [["Content variety", 67.5], ["Usability", 39.3], ["Uses it with family", 37.5]] },
      { title: "Reasons to Stop Using", bars: [["No content of interest", 76.2], ["Too expensive", 71.4], ["Found other hobbies", 14.3]] }
    ]
  };
  var PRIME_COMPETITOR = {
    note: "Netflix's strength lies in an immersive experience centered on original content, while Prime Video's strength is the broad user base secured through bundling.",
    netflix: { title: "Netflix", chips: ["#1 global OTT platform", "Vast content library", "Strong at producing original content", "With ads $7.99 · Standard $17.99"], hi: [2, 3] },
    prime: { title: "Prime Video", chips: ["Secured NBA rights, won core sports fans", "Secured a broad user base through bundling", "AI recommendations and audiobook acquisition", "With ads $8.99 · Ad-free $11.98"], hi: [1, 3] }
  };
  var PRIME_SOLUTION = [
    { title: "Reinforce Strengths", body: "Maximized content value with an intuitive interface so high-quality content is easier to enjoy" },
    { title: "Address Weaknesses", body: "Raised user satisfaction enough that mandatory ads feel acceptable" },
    { title: "Strengthen Market Competitiveness", body: "Delivered a personalized experience that satisfies everyone even when several people share one bundled Prime membership" }
  ];
  var PRIME_FEATURES = [
    { title: "Content at a Glance", body: "Let users see content across movies, TV shows, sports, and more at a glance, and jump straight into whatever they want." },
    { title: "Continue Watching at the Top", body: "Placed paused content at the top so users can resume it instantly, improving accessibility." },
    { title: "A Special Feature for Sports Fans", body: "Pinning a game of interest in the Sports section surfaces it in My Game, so users never miss a live score." },
    { title: "Easily Search for the Content You Want", body: "Enabled simple keyword search and filters so users can narrow countless results down to what they actually want." },
    { title: "Watch Instantly, Anytime, Anywhere", body: "Streamlined the download flow so users can watch smoothly regardless of their internet connection." }
  ];
  var PRIME_UT = [
    { problem: "Hard to find the favoriting feature in the Sports tab", solution: "Revised the UI at the top of the Sports tab" },
    { problem: "The toggle didn’t look expandable, which caused confusion", solution: "Redesigned the toggle icon" },
    { problem: "Too many tags made information hard to scan", solution: "Shortened tag titles and emphasized the Prime tag icon" }
  ];
  var PRIME_REFLECTION = [
    "Amazon Prime Video isn't an independent flagship service so much as a bundled benefit included with Amazon membership. Given that structure, a strategy centered on the primary service inevitably takes priority. Even so, since it holds the #2 spot in OTT market share and is used across many ages and countries, I concluded that helping a diverse user base consume content more conveniently was the better fit. Treating the broad user base secured through bundling as a strength, I improved the UX/UI around accessibility and ease of use, and validated it through three rounds of usability testing, confirming feedback that overall usability had improved.",
    "Through this project I learned that even for a service that isn't the main flagship, setting a clear direction that fits its role and context is an important factor in improving user experience."
  ];

  var KEPCO_PROBLEMS = [
    "Amid controversy over rate hikes and deficits that had eroded public trust, press releases and explanatory materials existed on the site, but the sheer volume made them hard to access.",
    "Excessive content volume and an unclear target audience left the information hierarchy confusing, with the structure skewed toward investors.",
    "Low-resolution images and icons, unresponsive hover buttons, and an excessive number of navigation items resulted in poor visual quality."
  ];
  var KEPCO_SOLUTIONS = [
    "Set the renewal direction around a KEPCO that rebuilds trust through transparent disclosure (AS-IS: lost trust → TO-BE: restored trust and transparent information).",
    "Grouped similar items from the crowded, complex navigation into 5 top-level categories, restructuring the information hierarchy.",
    "Visualized the direction of restored trust and transparent disclosure through a main visual built on a light-bulb graphic motif and glassmorphism."
  ];
  var KEPCO_DECISIONS = [
    { title: "Navigation Restructuring", body: "Grouped similar items from the crowded, complex existing navigation into 5 categories: Company, Disclosure, Business, Customer Center, and PR Center." },
    { title: "Glassmorphic Main Visual", body: "Created a bright, glowing light-bulb image to represent a power company, and applied glassmorphism to the top and bottom of the screen in line with the transparent-disclosure direction." },
    { title: "Nationwide Power Data on a Map", body: "Displayed real-time power supply status and nationwide branch offices on a map for at-a-glance viewing, applying the same glassmorphism to the map and info boxes for visual consistency with the main visual." },
    { title: "Disclosure to Rebuild Trust", body: "Placed management status for investors and a news/press-release section to communicate issues transparently rather than hiding them, and broadened communication touchpoints with brightness-consistent news images and social links." }
  ];
  var KEPCO_REFLECTION = [
    "The biggest challenge during planning was the range of controversies surrounding KEPCO. Rate hikes, deficit concerns, and political issues were all tangled together, and I had to think carefully about what message to convey. Early on, I considered minimizing the negative issues and leading with a mostly positive image, but I realized that downplaying problems users already felt firsthand could undermine trust further.",
    "Since rising electricity rates are an issue every citizen experiences directly, I decided transparency mattered more than concealment, so I set “trust” as the renewal's core direction and redefined the plan around a structure that communicates the key issues clearly."
  ];
  var KEPCO_SHOWCASE = ["kepco-showcase-1.jpg", "kepco-showcase-2-static.jpg", "kepco-showcase-3.jpg", "kepco-showcase-4.jpg",
    "kepco-showcase-5.jpg", "kepco-showcase-6.jpg", "kepco-showcase-7.jpg", "kepco-showcase-8.jpg"];

  /* ------------------------------------------------------------------ */
  /* State + router                                                      */
  /* ------------------------------------------------------------------ */

  var state = { page: "home", projFilter: "all", eduFilter: "all", careerExpanded: null, utTab: "first" };
  var VALID_PAGES = ["home", "career", "projects", "education", "activities", "maeari", "prime", "kepco"];

  function setPage(id) {
    if (location.hash.slice(1) === id) { state.page = id; render(); }
    else { location.hash = "#" + id; }
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  function setProjFilter(id) { state.projFilter = id; render(); }
  function setEduFilter(id) { state.eduFilter = id; render(); }
  function toggleCareer(id) { state.careerExpanded = state.careerExpanded === id ? null : id; render(); }
  function setUtTab(id) { state.utTab = id; render(); }

  window.app = {
    setPage: setPage,
    setProjFilter: setProjFilter,
    setEduFilter: setEduFilter,
    toggleCareer: toggleCareer,
    setUtTab: setUtTab
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
      return '<div class="meta-box"><div class="meta-box-label">' + m.label + '</div><div class="meta-box-val">' + m.value + "</div></div>";
    }).join("") + "</div>";
  }

  function detailHeader(key) {
    var m = PROJECT_META[key];
    return (
      '<button class="back-btn" onclick="app.setPage(\'projects\')">← Back to Projects</button>' +
      '<div class="detail-tagrow"><span class="detail-tag">' + m.tag + '</span><span class="detail-subline">' + m.name + "</span></div>" +
      '<h1 class="detail-title serif">' + m.title + "</h1>" +
      '<p class="detail-lede">' + m.desc + "</p>" +
      '<div class="detail-hero"><img src="images/' + m.hero + '" alt="' + m.name + ' cover"></div>' +
      metaGrid(m.meta)
    );
  }

  function behanceCta(key) {
    return '<div class="detail-block" style="margin-bottom:0"><a class="behance-cta" href="' + BEHANCE_URLS[key] + '" target="_blank" rel="noopener">View Full Case Study on Behance ↗</a></div>';
  }

  function block(h3, sub, inner) {
    return '<div class="detail-block reveal"><div class="detail-h3">' + h3 + "</div>" +
      (sub ? '<p class="detail-h3-sub">' + sub + "</p>" : "") + inner + "</div>";
  }

  function infoCard(title, bodyHtml) {
    return '<div class="info-card"><div class="info-card-label">' + title + "</div>" + bodyHtml + "</div>";
  }

  function bulletList(items) {
    return '<div class="bullets">' + items.map(function (t) { return "<div>" + t + "</div>"; }).join("") + "</div>";
  }

  function featureBoard(opts) {
    var chips = "";
    if (opts.chips) {
      chips = '<div class="chip-row">' + opts.chips.map(function (c) {
        return '<div class="chip">' + (c.swatch ? '<span class="chip-swatch" style="background:' + c.swatch + '"></span>' : "") + c.label + "</div>";
      }).join("") + "</div>";
    }
    var bullets = "";
    if (opts.bullets) {
      bullets = '<div class="feature-bullets">' + opts.bullets.map(function (b) {
        return '<div class="feature-bullet"><span class="dot"></span><span>' + b + "</span></div>";
      }).join("") + "</div>";
    }
    var imgs = opts.images.map(function (i) { return '<img src="images/' + i + '" alt="">'; }).join("");
    return (
      '<div class="feature-board reveal"><div class="feature-board-flex">' +
      '<div><div class="feature-label">' + opts.tag + '</div><div class="feature-title">' + opts.title + "</div>" +
      '<p class="feature-desc">' + opts.desc + "</p>" + chips + bullets + "</div>" +
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
        "<p>" + s.text + "</p></div></div>"
      );
    }).join("");
    return (
      '<div class="detail-block reveal"><div class="feature-label">' + opts.tag + '</div>' +
      '<div class="detail-h3" style="margin-bottom:8px">' + opts.title + "</div>" +
      '<p class="detail-h3-sub">' + opts.desc + "</p>" +
      '<div class="step-grid cols' + opts.cols + '">' + cells + "</div></div>"
    );
  }

  function reflectionBlock(paragraphs, img) {
    var cards = paragraphs.map(function (p) { return '<div class="reflection-card"><p>' + p + "</p></div>"; }).join("");
    return (
      '<div class="detail-block reveal" style="display:grid;grid-template-columns:1.3fr 0.8fr;gap:28px;align-items:center">' +
      "<div>" + cards + "</div>" +
      '<div><img src="images/' + img + '" alt="" style="border-radius:20px;border:1px solid var(--border-soft)"></div>' +
      "</div>"
    );
  }

  /* ------------------------------------------------------------------ */
  /* Page renderers                                                      */
  /* ------------------------------------------------------------------ */

  function renderHome() {
    var tags = WORKING_STYLE.map(function (w) { return '<div class="style-tag">' + w + "</div>"; }).join("");
    var cards = ABOUT_CARDS.map(function (c) {
      return '<div class="about-card reveal"><div class="about-num">' + c.no + '</div><h3>' + c.title + "</h3><p>" + c.body + "</p></div>";
    }).join("");
    return (
      '<section class="hero reveal"><div class="hero-inner">' +
      '<div class="badge">UX/UI Designer</div>' +
      "<h1 class=\"serif\">Heeyeon Jang</h1>" +
      '<p>I design service flows and screens by thinking through the whole user experience — not just what’s on screen, but how people actually get there.</p>' +
      '<div class="hero-ctas">' +
      '<a class="btn-light" href="' + BEHANCE + '" target="_blank" rel="noopener">Behance ↗</a>' +
      '<a class="btn-light" href="' + LINKEDIN + '" target="_blank" rel="noopener">LinkedIn ↗</a>' +
      "</div></div></section>" +
      '<section class="about-section reveal">' +
      '<div class="kicker">About</div>' +
      '<h2 class="section-title serif">A little about how I work</h2>' +
      '<div class="style-tags">' + tags + "</div>" +
      '<div class="about-grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderCareer() {
    var competencies = CAREER_COMPETENCIES.map(function (c) {
      return '<div class="competency-card reveal"><div class="competency-num">' + c.no + '</div><div class="text">' + c.text + "</div></div>";
    }).join("");
    var projects = CAREER_PROJECTS.map(function (p) {
      var open = state.careerExpanded === p.id;
      return (
        '<div class="career-project reveal' + (open ? " open" : "") + '">' +
        '<div class="career-project-head" onclick="app.toggleCareer(' + p.id + ')">' +
        '<div><div class="title">' + p.title + '</div><div class="meta">' + p.period + " · " + p.role + " · " + p.team + "</div></div>" +
        '<div class="career-project-toggle">+</div>' +
        "</div>" +
        '<div class="career-project-body">' +
        '<div><div class="label">Task</div><p>' + p.task + "</p></div>" +
        '<div><div class="label">Result</div><p>' + p.result + "</p></div>" +
        "</div></div>"
      );
    }).join("");
    var skillGroups = SKILL_GROUPS.map(function (g) {
      var rows = g.items.map(function (it) {
        return (
          '<div class="skill-row"><div class="skill-row-top"><span>' + it.name + '</span><span class="lvl">' + it.level + "</span></div>" +
          '<div class="skill-bar-track"><div class="skill-bar-fill" style="width:' + it.pct + '%"></div></div></div>'
        );
      }).join("");
      return '<div class="skill-group reveal"><h4>' + g.cat + "</h4>" + rows + "</div>";
    }).join("");
    var langPills = LANGUAGES.map(function (l) {
      return '<div class="lang-pill">' + l.name + ' <span>' + l.level + "</span></div>";
    }).join("");

    return (
      '<section class="career-hero reveal">' +
      '<div class="kicker">Career</div>' +
      '<div class="career-header-row"><h2 class="section-title serif" style="margin-bottom:0">Work Experience</h2>' +
      '<a class="back-btn" href="' + CAREER_RESUME_URL + '" target="_blank" rel="noopener" style="margin-bottom:0">View Career Résumé ↗</a></div>' +
      '<div class="career-meta"><span class="company">' + CAREER.company + '</span><span class="role">' + CAREER.role + '</span><span class="period">' + CAREER.period + "</span></div>" +
      "<ul>" + CAREER.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("") + "</ul>" +
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
      return '<button class="filter-pill' + (state.projFilter === f.id ? " active" : "") + '" onclick="app.setProjFilter(\'' + f.id + '\')">' + f.label + "</button>";
    }).join("");
    var list = PROJECTS.filter(function (p) { return state.projFilter === "all" || p.type === state.projFilter; });
    var cards = list.map(function (p) {
      var bullets = p.bullets.map(function (b) { return "<div>• " + b + "</div>"; }).join("");
      return (
        '<div class="project-card reveal" onclick="app.setPage(\'' + p.key + '\')">' +
        '<div class="project-card-top"><span class="project-card-no">' + p.no + '</span><span class="project-card-tag">' + p.tag + "</span></div>" +
        '<div class="project-card-title">' + p.title + '</div>' +
        '<div class="project-card-name">' + p.name + '</div>' +
        '<p class="project-card-desc">' + p.desc + "</p>" +
        '<div class="project-card-bullets">' + bullets + "</div>" +
        '<div class="project-card-cta">View Case Study →</div>' +
        "</div>"
      );
    }).join("");
    return (
      '<section class="projects-section reveal">' +
      '<div class="kicker">Projects</div>' +
      '<h2 class="section-title serif">Selected Work</h2>' +
      '<div class="filter-row">' + filters + "</div>" +
      '<div class="project-grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderEducation() {
    var filters = EDU_FILTERS.map(function (f) {
      return '<button class="filter-pill' + (state.eduFilter === f.id ? " active" : "") + '" onclick="app.setEduFilter(\'' + f.id + '\')">' + f.label + "</button>";
    }).join("");
    var list = EDU.filter(function (e) { return state.eduFilter === "all" || e.cat === state.eduFilter; });
    var items = list.map(function (e) {
      return (
        '<div class="edu-item reveal"><div class="edu-dot"></div>' +
        '<div class="edu-item-top"><span class="edu-year">' + e.year + '</span><span class="edu-title">' + e.title + '</span><span class="edu-org">' + e.org + "</span></div>" +
        '<p class="edu-desc">' + e.desc + "</p></div>"
      );
    }).join("");
    return (
      '<section class="education-section reveal">' +
      '<div class="kicker">Education</div>' +
      '<h2 class="section-title serif">Education &amp; Certifications</h2>' +
      '<div class="filter-row">' + filters + "</div>" +
      '<div class="edu-timeline">' + items + "</div>" +
      "</section>"
    );
  }

  function renderActivities() {
    var cards = ACTIVITIES.map(function (a) {
      return (
        '<div class="activity-card reveal"><div class="activity-top"><span class="activity-tag">' + a.tag + '</span><span class="activity-period">' + a.period + "</span></div>" +
        '<div class="activity-title">' + a.title + '</div><p class="activity-desc">' + a.desc + "</p></div>"
      );
    }).join("");
    return (
      '<section class="activities-section reveal">' +
      '<div class="kicker">Activities</div>' +
      '<h2 class="section-title serif">Activities</h2>' +
      '<div class="activity-grid">' + cards + "</div>" +
      "</section>"
    );
  }

  function renderMaeari() {
    var insightItems = bulletList(MAEARI_INSIGHTS);
    var marketItems = bulletList(MAEARI_MARKET);
    var cvCards = MAEARI_CORE_VALUES.map(function (c) {
      return '<div class="info-card"><div class="info-card-label">Core Value</div><h4 style="margin:0 0 8px;font-size:16px">' + c.title + '</h4><p style="margin:0;font-size:14px;line-height:1.7;color:var(--muted-68)">' + c.body + "</p></div>";
    }).join("");
    var personaCards = MAEARI_PERSONAS.map(function (p) {
      return (
        '<div class="info-card" style="display:grid;grid-template-columns:120px 1fr;gap:20px;align-items:center">' +
        '<img src="images/' + p.photo + '" alt="" style="border-radius:16px">' +
        '<div><div class="info-card-label">' + p.tag + '</div><h4 style="margin:0 0 8px;font-size:15px">' + p.name + '</h4><p style="margin:0 0 8px;font-size:13.5px;line-height:1.65;color:var(--muted-68)">' + p.body + '</p><p style="margin:0;font-size:12.5px;color:var(--accent-dark);font-weight:600">Pain point: ' + p.pain + "</p></div>" +
        "</div>"
      );
    }).join("");
    var utTabs = MAEARI_UT.tabs.map(function (t) {
      return '<button class="filter-pill' + (state.utTab === t.id ? " active" : "") + '" onclick="app.setUtTab(\'' + t.id + '\')">' + t.label + "</button>";
    }).join("");
    var activeTab = MAEARI_UT.tabs.filter(function (t) { return t.id === state.utTab; })[0] || MAEARI_UT.tabs[0];
    var utItems = activeTab.items.map(function (it) {
      return '<div class="info-card" style="padding:20px"><p style="margin:0 0 8px;font-size:13.5px;font-weight:700;color:var(--ink)">⚠ ' + it.problem + '</p><p style="margin:0;font-size:13.5px;color:var(--accent-dark);font-weight:600">→ ' + it.solution + "</p></div>";
    }).join("");
    var chips = MAEARI_LEVELS.map(function (l) { return { label: l.label, swatch: l.color }; });

    return (
      '<section class="detail-section">' +
      detailHeader("maeari") +
      block("Research", null,
        '<div class="two-col">' +
        infoCard("Interview Findings", insightItems) +
        infoCard("Market · Competitor Analysis", marketItems) +
        "</div>") +
      block("Core Value", null, '<div class="two-col">' + cvCards + "</div>") +
      block("Personas", null, '<div class="two-col">' + personaCards + "</div>") +
      block("Flow Chart · Wireframe · Story Board", null,
        '<div class="three-col">' +
        '<div><img src="images/maeari-cv-3.jpg" alt="Flow Chart" style="border-radius:16px;border:1px solid var(--border-soft)"><p style="text-align:center;font-size:12.5px;color:var(--muted-45);margin-top:8px">Flow Chart</p></div>' +
        '<div><img src="images/maeari-cv-4.jpg" alt="Wireframe" style="border-radius:16px;border:1px solid var(--border-soft)"><p style="text-align:center;font-size:12.5px;color:var(--muted-45);margin-top:8px">Wireframe</p></div>' +
        '<div><img src="images/maeari-storyboard3.webp" alt="Story Board" style="border-radius:16px;border:1px solid var(--border-soft)"><p style="text-align:center;font-size:12.5px;color:var(--muted-45);margin-top:8px">Story Board</p></div>' +
        "</div>") +
      block("Usability Testing", null,
        '<div class="filter-row">' + utTabs + "</div>" +
        '<p style="font-size:14.5px;line-height:1.75;color:var(--muted-68);max-width:820px;margin:0 0 20px">' + activeTab.summary + "</p>" +
        '<div class="two-col">' + utItems + "</div>") +
      featureBoard({ tag: "Main Page", title: "Hiking Info for Beginners", desc: "The main page provides guides and navigation for beginner hikers, along with course recommendations tailored to their level. The menu was designed as a bottom tab so users can check it easily on the trail.", chips: chips, images: ["maeari-feat-hiking2.webp"] }) +
      featureBoard({ tag: "Navigation", title: "Course Info With GPS", desc: "You can check your current location and the direction you need to go on the map, and see previously searched courses at a glance.", images: ["maeari-feat-gps2.webp"] }) +
      featureBoard({ tag: "Friend", title: "Make Friends like Me", desc: "By categorizing location, age, hiking level, and gender, you can meet hiking friends who match you well.", bullets: [
        "Find friends similar to you through categories.",
        "Enter your location and set a range to search for friends within that area.",
        "The manner-score system provides an indicator to check the other person before meeting offline."
      ], images: ["maeari-friend-list.webp", "maeari-friend-profile.webp"] }) +
      '<div class="detail-hero reveal"><img src="images/maeari-sg-4.jpg" alt="Friend screens"></div>' +
      featureBoard({ tag: "Photo", title: "Take Pictures of Beautiful Places", desc: "You can take and upload hiking verification photos with beautiful mountain scenery as the background.", bullets: [
        "Users can also upload photos they've already taken.",
        "You can upload multiple images. When uploading several, only the first photo appears in the preview."
      ], images: ["maeari-photo-upload.webp"] }) +
      featureBoard({ tag: "Chat", title: "Chat with Friends", desc: "You can chat with hiking companions and friends you've already gotten close to.", images: ["maeari-chat-list.webp", "maeari-chat-convo.webp", "maeari-chat-profile2.webp"] }) +
      featureBoard({ tag: "My Page · Calendar", title: "Manage My Schedule", desc: "You can manage and record your hiking schedule and share it with friends.", bullets: [
        "Adding someone as a member in the calendar automatically shares the schedule with them.",
        "As a registered schedule date approaches, a notification with a packing checklist for the course is sent to the user one day in advance."
      ], images: ["maeari-schedule-members.webp", "maeari-schedule-list.webp"] }) +
      block("Reflection", null, "") +
      reflectionBlock(MAEARI_REFLECTION, "maeari-hero.jpg") +
      behanceCta("maeari") +
      "</section>"
    );
  }

  function renderPrime() {
    function barBlock(chart) {
      var bars = chart.bars.map(function (b) {
        return '<div class="survey-bar"><div class="survey-bar-top"><span>' + b[0] + '</span><span style="font-weight:700">' + b[1] + '%</span></div><div class="survey-bar-track"><div class="survey-bar-fill" style="width:' + b[1] + '%"></div></div></div>';
      }).join("");
      return '<div class="info-card"><div class="info-card-label">' + chart.title + "</div>" + bars + "</div>";
    }
    var bgCards = PRIME_BACKGROUND.map(function (b) {
      return '<div class="info-card"><h4 style="margin:0 0 8px;font-size:16px">' + b.title + '</h4><p style="margin:0;font-size:14px;line-height:1.7;color:var(--muted-68)">' + b.body + "</p></div>";
    }).join("");
    var surveyCards = PRIME_SURVEY.charts.map(barBlock).join("");
    var nfChips = PRIME_COMPETITOR.netflix.chips.map(function (c, i) {
      return '<div class="comp-chip' + (PRIME_COMPETITOR.netflix.hi.indexOf(i) !== -1 ? " hi" : "") + '">' + c + "</div>";
    }).join("");
    var pvChips = PRIME_COMPETITOR.prime.chips.map(function (c, i) {
      return '<div class="comp-chip' + (PRIME_COMPETITOR.prime.hi.indexOf(i) !== -1 ? " hi" : "") + '">' + c + "</div>";
    }).join("");
    var solCards = PRIME_SOLUTION.map(function (s) {
      return '<div style="margin-bottom:10px"><h4 style="margin:0 0 6px;font-size:16px">' + s.title + '</h4><p style="margin:0;font-size:14.5px;line-height:1.6;color:rgba(255,253,250,0.75)">' + s.body + "</p></div>";
    }).join("");
    var featureCards = PRIME_FEATURES.map(function (f, i) {
      return '<div class="info-card"><div class="info-card-label">0' + (i + 1) + '</div><h4 style="margin:0 0 8px;font-size:16px">' + f.title + '</h4><p style="margin:0;font-size:13.5px;line-height:1.65;color:var(--muted-68)">' + f.body + "</p></div>";
    }).join("");
    var utItems = PRIME_UT.map(function (it) {
      return '<div class="info-card" style="padding:20px"><p style="margin:0 0 8px;font-size:13.5px;font-weight:700;color:var(--ink)">⚠ ' + it.problem + '</p><p style="margin:0;font-size:13.5px;color:var(--accent-dark);font-weight:600">→ ' + it.solution + "</p></div>";
    }).join("");

    return (
      '<section class="detail-section">' +
      detailHeader("prime") +
      block("Background", null, '<div class="three-col">' + bgCards + "</div>") +
      block("User Survey (n=67)", PRIME_SURVEY.note, '<div class="three-col">' + surveyCards + "</div>") +
      block("Competitor Analysis", PRIME_COMPETITOR.note,
        '<div class="two-col">' +
        '<div><h4 style="font-size:15px;margin:0 0 10px">Netflix</h4><div style="display:flex;flex-direction:column;gap:8px">' + nfChips + "</div></div>" +
        '<div><h4 style="font-size:15px;margin:0 0 10px">Prime Video</h4><div style="display:flex;flex-direction:column;gap:8px">' + pvChips + "</div></div>" +
        "</div>") +
      block("Solution", null, '<div class="dark-card">' + solCards + "</div>") +
      block("Key Features", null, '<div class="three-col">' + featureCards + "</div>") +
      block("Story Board", null, '<div class="detail-hero" style="margin-bottom:0"><img src="images/prime-storyboard-2.webp" alt="Story board"></div>') +
      block("Usability Testing", null, '<div class="three-col">' + utItems + "</div>") +
      featureBoard({ tag: "00 · Home", title: "Onboarding", desc: "Meet the improved Amazon Prime Video, right now.", bullets: [
        "Did you leave something unfinished? We placed it near the top so you can jump right back in.",
        "Find Originals available only on Prime Video, all gathered in one place.",
        "Easily pick the genre you want from text-style buttons that fit within a single scroll.",
        "Not sure if this content fits your taste? Try it out first in short-form."
      ], images: ["prime-home-3.webp"] }) +
      stepBoard({ tag: "01 · Profile Setting", title: "Build a Profile That's Safe and Fun", cols: 4,
        desc: "After logging in, easily create your own profile. Kids Profiles filter out violent content so children can watch safely.",
        steps: [
          { img: "prime-profile-1.webp", text: "Tap New to create a profile. The shared account owner has a star mark by their name." },
          { img: "prime-profile-2.webp", text: "Set a name, photo, profile type, and password." },
          { img: "prime-profile-3.webp", text: "Set a password so shared users can't access your profile or watch history." },
          { img: "prime-profile-4.webp", text: "Your profile is created! Ready to enjoy Amazon Prime Video?" }
        ] }) +
      stepBoard({ tag: "02 · Contents", title: "Content You Can Enjoy at a Glance", cols: 3, numbered: false,
        desc: "See interesting content across movies, TV shows, sports, and more at a glance, and jump straight into whatever you want to watch.",
        steps: [
          { img: "prime-contents-1.webp", text: "Already watching something? Pick up where you left off." },
          { img: "prime-contents-3.webp", text: "Choose Movies, TV Shows, Originals, Sports, or Kids, and pick a genre easily from text-style buttons." },
          { img: "prime-contents-2.webp", text: "Want a quick trailer? Check out short-form previews in Featured Preview." }
        ] }) +
      stepBoard({ tag: "03 · View & Download", title: "Watch Instantly, Anytime, Anywhere", cols: 3, numbered: false,
        desc: "Enjoy the content you want to watch right away. If you'd like smooth playback regardless of your internet connection, downloading it ahead of time is a great option.",
        steps: [
          { imgs: ["prime-vd-1.webp", "prime-vd-2.webp"], text: "Check details on the content page, then tap Watch Now to start watching." },
          { imgs: ["prime-vd-3.webp"], text: "Use X-Ray to instantly look up music, cast, and background info for each scene — a Prime Video original feature." },
          { imgs: ["prime-vd-4.webp", "prime-vd-5.webp"], text: "Download content so you can watch it offline. Find downloads in the Downloads tab." }
        ] }) +
      stepBoard({ tag: "04 · Sports", title: "A Special Feature for Sports Fans", cols: 4,
        desc: "Pin the games you're interested in from the Sports section so you never miss a favorite match. With My Game, you can follow live scores without missing a beat!",
        steps: [
          { img: "prime-sports-1.webp", text: "A new My Game area appears at the top of the Sports page, showing live scores." },
          { img: "prime-sports-2.webp", text: "Tap Edit to see games you can favorite, then tap the pin button to add them." },
          { img: "prime-sports-3.webp", text: "Check the games you've already pinned in My Pins." },
          { img: "prime-sports-4.webp", text: "You can also pin a game from Today's Game — pin any match you don't want to miss today." }
        ] }) +
      block("Reflection", null, "") +
      reflectionBlock(PRIME_REFLECTION, "prime-show-11.webp") +
      behanceCta("prime") +
      "</section>"
    );
  }

  function renderKepco() {
    var probItems = bulletList(KEPCO_PROBLEMS);
    var solItems = '<div class="bullets" style="color:rgba(255,253,250,0.85)">' + KEPCO_SOLUTIONS.map(function (s) { return "<div>" + s + "</div>"; }).join("") + "</div>";
    var decisionCards = KEPCO_DECISIONS.map(function (d, i) {
      return '<div class="decision-card reveal"><div class="decision-no">0' + (i + 1) + '</div><div><div class="t">' + d.title + "</div><p>" + d.body + "</p></div></div>";
    }).join("");
    var showcase = KEPCO_SHOWCASE.map(function (fn) {
      return '<img src="images/' + fn + '" alt="KEPCO final design">';
    }).join("");

    return (
      '<section class="detail-section">' +
      detailHeader("kepco") +
      block("Problem &amp; Solution", null,
        '<div class="two-col">' +
        infoCard("Problem", probItems) +
        '<div class="dark-card">' + solItems + "</div>" +
        "</div>") +
      block("Design Decisions", null, decisionCards) +
      block("Final Design", null, '<div class="showcase-stack">' + showcase + "</div>") +
      block("Reflection", null, "") +
      reflectionBlock(KEPCO_REFLECTION, "kepco-hero.jpg") +
      behanceCta("kepco") +
      "</section>"
    );
  }

  /* ------------------------------------------------------------------ */
  /* Root render + nav + scroll behaviors                                */
  /* ------------------------------------------------------------------ */

  var app = document.getElementById("app");
  var navPills = document.getElementById("navPills");

  function renderNav() {
    var activeId = PROJECT_DETAIL_PAGES.indexOf(state.page) !== -1 ? "projects" : state.page;
    navPills.innerHTML = NAV.map(function (n) {
      return '<button class="' + (n.id === activeId ? "active" : "") + '" onclick="app.setPage(\'' + n.id + '\')">' + n.label + "</button>";
    }).join("");
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
      default: html = renderHome();
    }
    app.innerHTML = html;
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

  window.addEventListener("hashchange", router);
  document.addEventListener("DOMContentLoaded", function () {
    router();
    initScrollChrome();
  });
})();
