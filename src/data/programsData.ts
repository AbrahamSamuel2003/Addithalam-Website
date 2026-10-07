export interface Program {
  id: string;
  slug: string;
  title: string;
  titleTa?: string;
  shortDescription: string;
  shortDescriptionTa?: string;
  fullDescription: string;
  fullDescriptionTa?: string;
  targetAudience: string;
  targetAudienceTa?: string;
  duration: string;
  durationTa?: string;
  schedule: string;
  scheduleTa?: string;
  mode: string;
  modeTa?: string;
  cost: string;
  costTa?: string;
  badge: string;
  badgeTa?: string;
  image: string;
  skills: string[];
  skillsTa?: string[];
  curriculum: {
    moduleTitle: string;
    topics: string[];
  }[];
  curriculumTa?: {
    moduleTitle: string;
    topics: string[];
  }[];
  outcomes: string[];
  outcomesTa?: string[];
  eligibility: string[];
  eligibilityTa?: string[];
}

export const programsData: Program[] = [
  {
    id: "tech-skills",
    slug: "technical-skills",
    title: "IT Technical Skills Development",
    titleTa: "தகவல் தொழில்நுட்ப திறன்கள் (IT Technical Skills)",
    image: "/images/programs/technical-skills.jpg",
    shortDescription: "Comprehensive, industry-aligned technical training in modern programming, web development, databases, and cloud fundamentals.",
    shortDescriptionTa: "நவீன நிரலாக்கம், வலைத்தள உருவாக்கம், தரவுத்தளங்கள் மற்றும் கிளவுட் அடிப்படைகளில் நேரடி தொழிற்துறை பயிற்சி.",
    fullDescription: "Designed to take learners from basic computer literacy to building production-ready applications. The curriculum reflects real-world engineering standards demanded by modern technology firms in Chennai and across India.",
    fullDescriptionTa: "அடிப்படைக் கணினி அறிவில் தொடங்கி முழுமையான மென்பொருள் செயலிகளை உருவாக்கும் வரை மாணவர்களை தயார்படுத்துகிறது. நவீன தகவல் தொழில்நுட்ப நிறுவனங்களின் எதிர்பார்ப்புகளுக்கு ஏற்ப பாடத்திட்டம் வடிவமைக்கப்பட்டுள்ளது.",
    targetAudience: "Underprivileged students, college dropouts, and aspiring developers with limited access to formal IT coaching.",
    targetAudienceTa: "பொருளாதாரத்தில் பின்தங்கிய மாணவர்கள், படிப்பை பாதியில் நிறுத்தியவர்கள் மற்றும் ஐடி பயிற்சி பெற இயலாத இளைஞர்கள்.",
    duration: "6 Months (Full-Time / Hybrid)",
    durationTa: "6 மாதங்கள் (முழுநேரம் / கலப்பு முறை)",
    schedule: "Monday to Friday, 9:30 AM - 1:30 PM",
    scheduleTa: "திங்கள் முதல் வெள்ளி, காலை 9:30 - மதியம் 1:30",
    mode: "Classroom Lab & Hybrid Online",
    modeTa: "நேரடி கணினி ஆய்வகம் & ஆன்லைன்",
    cost: "100% Free of Cost",
    costTa: "100% முற்றிலும் இலவசம்",
    badge: "Core Engineering Track",
    badgeTa: "முக்கிய மென்பொருள் பயிற்சி",
    skills: [
      "Computer & Internet Fundamentals",
      "Python & Java Object-Oriented Programming",
      "HTML5, CSS3 & Responsive Web Design",
      "JavaScript & Frontend Framework Basics",
      "Relational Databases (SQL & PostgreSQL)",
      "Cloud Computing & DevOps Basics",
      "Cybersecurity & Online Safety Hygiene"
    ],
    skillsTa: [
      "கணினி & இணைய அடிப்படைகள்",
      "பைதான் & ஜாவா நிரலாக்கம்",
      "HTML5, CSS3 வலைத்தள வடிவமைப்பு",
      "ஜாவாஸ்கிரிப்ட் & பிரண்ட்எண்ட் அடிப்படைகள்",
      "தரவுத்தளங்கள் (SQL & PostgreSQL)",
      "கிளவுட் & டெவொப்ஸ் அடிப்படைகள்",
      "இணையப் பாதுகாப்பு மற்றும் வழிகாட்டுதல்"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Foundations of Computing & Web",
        topics: [
          "Computer architecture & operating system fundamentals",
          "Command line interface (CLI) and Git version control",
          "HTML5 semantic layout, modern CSS styling and responsive grids"
        ]
      },
      {
        moduleTitle: "Module 2: Programming Fundamentals (Python & Java)",
        topics: [
          "Data structures, control flows, and functional programming",
          "Object-oriented design patterns and modular codebases",
          "Algorithm problem-solving and debugging techniques"
        ]
      },
      {
        moduleTitle: "Module 3: Database Engineering & API Integration",
        topics: [
          "Relational database design, normalisation, and complex SQL queries",
          "Building RESTful APIs and connecting backends to client apps",
          "Authentication, security standards, and CRUD operations"
        ]
      },
      {
        moduleTitle: "Module 4: Cloud Infrastructure & Capstone Deployment",
        topics: [
          "Introduction to Cloud Hosting (AWS / DigitalOcean) and CI/CD basics",
          "Container fundamentals and web server deployment",
          "End-to-end full-stack capstone project hosted on live domains"
        ]
      }
    ],
    curriculumTa: [
      {
        moduleTitle: "பிரிவு 1: கணினி மற்றும் வலைத்தள அடிப்படைகள்",
        topics: [
          "கணினி அமைப்பு மற்றும் இயங்குதளத்தின் அடிப்படைகள்",
          "கட்டளை வரி இடைமுகம் (CLI) மற்றும் கிட் (Git) பதிப்புக் கட்டுப்பாடு",
          "HTML5 மற்றும் CSS3 வலைப்பக்க வடிவமைப்பு"
        ]
      },
      {
        moduleTitle: "பிரிவு 2: நிரலாக்க அடிப்படைகள் (பைதான் & ஜாவா)",
        topics: [
          "தரவு கட்டமைப்புகள், நிபந்தனை கட்டுப்பாடுகள் மற்றும் செயல்பாடுகள்",
          "பொருள்சார் நிரலாக்கக் கோட்பாடுகள் (OOP)",
          "அல்காரிதம் சிக்கல் தீர்க்கும் முறைகள் மற்றும் பிழை திருத்துதல்"
        ]
      },
      {
        moduleTitle: "பிரிவு 3: தரவுத்தளம் மற்றும் ஏபிஐ (API) உருவாக்கம்",
        topics: [
          "தரவுத்தள வடிவமைப்பு மற்றும் SQL வினவல்கள்",
          "RESTful API உருவாக்கம் மற்றும் இணைப்புகள்",
          "பயனர் அங்கீகாரம் மற்றும் பாதுகாப்பு நடைமுறைகள்"
        ]
      },
      {
        moduleTitle: "பிரிவு 4: கிளவுட் கட்டமைப்பு மற்றும் நேரடித் திட்டங்கள்",
        topics: [
          "கிளவுட் ஹோஸ்டிங் மற்றும் சர்வர் பயன்பாடுகள்",
          "மென்பொருள் தானியக்க நடைமுறைகள்",
          "நேரடி இணையதளத்தில் முழுமையான மென்பொருள் திட்டம் பதிவேற்றம்"
        ]
      }
    ],
    outcomes: [
      "Proficiency in developing and deploying functional web applications",
      "Verified GitHub project portfolio with real-world repositories",
      "Direct eligibility for junior developer and QA engineering interviews"
    ],
    outcomesTa: [
      "முழுமையான வலைத்தளங்களை உருவாக்கி நேரலையில் பதிவேற்றும் திறன்",
      "சான்றளிக்கப்பட்ட GitHub திட்டப்பணிகள் மற்றும் மாதிரி களஞ்சியங்கள்",
      "மென்பொருள் நிறுவனங்களின் நேரடி வேலைவாய்ப்பு நேர்காணல் தகுதி"
    ],
    eligibility: [
      "Passed 12th Standard or pursuing / completed Diploma / Degree",
      "Annual family income within verified underprivileged threshold",
      "Demonstrated passion and commitment to complete the full 6-month coursework"
    ],
    eligibilityTa: [
      "12-ஆம் வகுப்பு தேர்ச்சி அல்லது டிப்ளமோ / பட்டப்படிப்பு பயில்பவர்கள் அல்லது முடித்தவர்கள்",
      "பொருளாதார ரீதியாக பின்தங்கிய குடும்பப் பின்னணி",
      "6 மாத கால பயிற்சியை முழுமையாக முடிக்கும் ஆர்வம் மற்றும் அர்ப்பணிப்பு"
    ]
  },
  {
    id: "soft-skills",
    slug: "soft-skills",
    title: "Soft Skills & Professional Communication",
    titleTa: "மென்திறன் & உரையாடல் பயிற்சி (Soft Skills)",
    image: "/images/programs/soft-skills.jpg",
    shortDescription: "Essential workplace skills covering business communication, emotional intelligence, collaborative teamwork, and leadership.",
    shortDescriptionTa: "அலுவலக ஆங்கிலத் தொடர்பு, உணர்வுசார் நுண்ணறிவு, குழுப்பணி மற்றும் தலைமைத்துவப் பயிற்சிகள்.",
    fullDescription: "Technical excellence must be paired with clear communication and personal confidence. This program equips first-generation learners to communicate effectively, navigate professional workplaces, and present ideas assertively.",
    fullDescriptionTa: "தொழில்நுட்ப அறிவோடு சிறப்பான தகவல் தொடர்பும் தன்னம்பிக்கையும் இணையும்போதே முழு வெற்றி கிட்டும். முதல் தலைமுறை மாணவர்கள் கார்ப்பரேட் சூழலில் நம்பிக்கையோடு உரையாட இப்பயிற்சி உதவுகிறது.",
    targetAudience: "Students preparing for corporate campus placements and first-time job seekers.",
    targetAudienceTa: "வேலைவாய்ப்பு நேர்காணலுக்குத் தயாராகும் மாணவர்கள் மற்றும் முதல் முறை வேலை தேடுபவர்கள்.",
    duration: "8 Weeks (Part-Time)",
    durationTa: "8 வாரங்கள் (பகுதி நேரம்)",
    schedule: "3 Days/Week, 2 Hours per Session",
    scheduleTa: "வாரத்தில் 3 நாட்கள், நாள் ஒன்றுக்கு 2 மணி நேரம்",
    mode: "In-Person Interactive Workshops",
    modeTa: "நேரடி பயிற்சிப் பட்டறைகள்",
    cost: "100% Free of Cost",
    costTa: "100% முற்றிலும் இலவசம்",
    badge: "Workplace Readiness",
    badgeTa: "அலுவலகத் தகுதிப் பயிற்சி",
    skills: [
      "Verbal & Written Business English",
      "Collaborative Team Dynamics",
      "Time Management & Prioritisation",
      "Emotional Intelligence & Conflict Resolution",
      "Leadership & Taking Initiative",
      "Public Speaking & Presentation Skills"
    ],
    skillsTa: [
      "அலுவலக ஆங்கிலப் பேச்சு & எழுத்துத் திறன்",
      "குழுவாக இணைந்து பணியாற்றும் திறன்",
      "நேர மேலாண்மை மற்றும் திட்டமிடல்",
      "உணர்வுசார் நுண்ணறிவு & சிக்கல் தீர்த்தல்",
      "தலைமைத்துவம் மற்றும் முன்முயற்சி",
      "மேடைப் பேச்சு மற்றும் விளக்கக்காட்சி"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Professional Communication",
        topics: [
          "Clear spoken English for workplace contexts",
          "Professional email writing, documentation, and reporting",
          "Active listening and non-verbal communication cues"
        ]
      },
      {
        moduleTitle: "Module 2: Workplace Collaboration & Ethics",
        topics: [
          "Cross-functional team coordination and consensus building",
          "Professional ethics, accountability, and time discipline",
          "Managing work pressure and constructive feedback reception"
        ]
      },
      {
        moduleTitle: "Module 3: Public Speaking & Pitching",
        topics: [
          "Slide deck structuring and storytelling principles",
          "Overcoming stage anxiety and delivering technical presentations",
          "Interactive group discussions and impromptu debates"
        ]
      }
    ],
    curriculumTa: [
      {
        moduleTitle: "பிரிவு 1: தொழில்முறை உரையாடல்",
        topics: [
          "அலுவலக சூழலுக்கான தெளிவான ஆங்கிலப் பேச்சு பயிற்சி",
          "மின்னஞ்சல் எழுதுதல் மற்றும் தொழில்முறை அறிக்கைகள் தயாரித்தல்",
          "கூர்ந்து கவனிக்கும் திறன் மற்றும் உடல் மொழி"
        ]
      },
      {
        moduleTitle: "பிரிவு 2: குழுப்பணி மற்றும் அலுவலக நெறிமுறைகள்",
        topics: [
          "குழு ஒருங்கிணைப்பு மற்றும் கூட்டு முடிவெடுத்தல்",
          "தொழில்முறை ஒழுக்கம் மற்றும் நேரக் கட்டுப்பாடு",
          "பணிச் சுமையை கையாளுதல் மற்றும் ஆக்கபூர்வ கருத்துக்களை ஏற்றுக்கொள்ளுதல்"
        ]
      },
      {
        moduleTitle: "பிரிவு 3: மேடைப் பேச்சு மற்றும் விளக்கக்காட்சிகள்",
        topics: [
          "விளக்கக்காட்சி தயாரிக்கும் முறைகள் மற்றும் கருத்து வெளிப்பாடு",
          "மேடை பயத்தை வென்று தொழில்நுட்பக் கருத்துக்களை பகிர்தல்",
          "குழு விவாதங்கள் மற்றும் உடனடிப் பேச்சுப் பயிற்சிகள்"
        ]
      }
    ],
    outcomes: [
      "Confidence in expressing technical solutions in English",
      "Ability to handle group discussions and team presentations",
      "Strong professional etiquette suitable for corporate IT firms"
    ],
    outcomesTa: [
      "ஆங்கிலத்தில் தொழில்நுட்பக் கருத்துக்களை சரளமாக வெளிப்படுத்தும் தன்னம்பிக்கை",
      "குழு விவாதங்கள் மற்றும் நேர்காணல்களை வெற்றிகரமாக எதிர்கொள்ளும் திறன்",
      "முன்னணி ஐடி நிறுவனங்களுக்குத் தேவையான தொழில்முறை ஒழுக்கம்"
    ],
    eligibility: [
      "Open to all enrolled Addithalam students and affiliated community learners",
      "Basic understanding of conversational English"
    ],
    eligibilityTa: [
      "அடித்தளம் அறக்கட்டளையின் அனைத்து மாணவர்களுக்கும் அனுமதி",
      "அடிப்படை ஆங்கிலப் புரிதல் போதுமானது"
    ]
  },
  {
    id: "mentorship",
    slug: "mentorship",
    title: "1-on-1 Industry Mentorship Program",
    titleTa: "நேரடி வழிகாட்டல் திட்டம் (1-on-1 Mentorship)",
    image: "/images/programs/mentorship.jpg",
    shortDescription: "Personalized guidance pairing each student with an experienced software engineer or IT leader from leading tech enterprises.",
    shortDescriptionTa: "ஒவ்வொரு மாணவருக்கும் முன்னணி நிறுவன மென்பொருள் வல்லுநர் மூலம் நேரடி வழிகாட்டல் மற்றும் ஆலோசனை.",
    fullDescription: "Navigating a career in technology requires insights that textbooks cannot provide. Our mentorship track pairs students one-on-one with seasoned professionals who provide code reviews, career path guidance, and emotional support.",
    fullDescriptionTa: "தொழில்நுட்ப உலகில் சாதிக்க புத்தக அறிவைத் தாண்டிய கள அனுபவம் தேவை. அனுபவமிக்க பொறியாளர்களுடன் மாணவர்களை இணைத்து, திட்டப் பிழைகளை திருத்தி, சரியான தொழில் பாதையை அமைத்துக் கொடுக்கிறோம்.",
    targetAudience: "Advanced learners in their final phase of technical training.",
    targetAudienceTa: "தொழில்நுட்பப் பயிற்சியின் இறுதி கட்டத்தில் உள்ள மாணவர்கள்.",
    duration: "12 Weeks (Bi-Weekly Touchpoints)",
    durationTa: "12 வாரங்கள் (இருவாரத்திற்கு ஒருமுறை)",
    schedule: "Flexible Weekend & Evening Mentoring Calls",
    scheduleTa: "வார இறுதி மற்றும் மாலை நேர நெகிழ்வான அழைப்புகள்",
    mode: "Online 1-on-1 & Quarterly In-Person Meetups",
    modeTa: "ஆன்லைன் 1-on-1 & நேரடி சந்திப்புகள்",
    cost: "100% Free of Cost",
    costTa: "100% முற்றிலும் இலவசம்",
    badge: "Individualized Guidance",
    badgeTa: "தனிநபர் வழிகாட்டல்",
    skills: [
      "Industry Code Review & Architectural Standards",
      "Career Roadmap Strategy",
      "Real-world Technical Problem Solving",
      "Networking & Professional Branding",
      "Confidence Building & Impostor Syndrome Management"
    ],
    skillsTa: [
      "நிறுவன குறியீட்டுத் தரம் & கட்டமைப்பு ஆய்வு",
      "தொழில் வளர்ச்சி திட்டமிடல்",
      "நடைமுறை தொழில்நுட்ப சிக்கல் தீர்த்தல்",
      "நெட்வொர்க்கிங் & தொழில்முறை பிராண்டிங்",
      "தன்னம்பிக்கை வளர்த்தல் & மன அழுத்தம் கையாளுதல்"
    ],
    curriculum: [
      {
        moduleTitle: "Phase 1: Diagnostic Assessment & Goal Setting",
        topics: [
          "Individual skill audit and career aspiration mapping",
          "Setting structured 90-day development milestones",
          "Establishing recurring check-in rhythms and communication channels"
        ]
      },
      {
        moduleTitle: "Phase 2: Project Mentorship & Code Standards",
        topics: [
          "Bi-weekly code reviews against industry cleanliness standards",
          "Architecture reviews and optimization recommendations",
          "Simulated sprint planning and Agile task management"
        ]
      },
      {
        moduleTitle: "Phase 3: Career Navigation & Transition",
        topics: [
          "Resume tuning and portfolio presentation to hiring managers",
          "Personalized interview simulation with direct feedback",
          "Ongoing guidance through the job offer evaluation phase"
        ]
      }
    ],
    curriculumTa: [
      {
        moduleTitle: "கட்டம் 1: திறன் மதிப்பீடு மற்றும் இலக்கு நிர்ணயம்",
        topics: [
          "தனிநபர் திறன் ஆய்வு மற்றும் விருப்பமான வேலைவாய்ப்பு இலக்குகள்",
          "90 நாட்களுக்கான தெளிவான பயிற்சி மைல்கற்கள்",
          "வழிகாட்டியுடன் தொடர் உரையாடலுக்கான அட்டவணை"
        ]
      },
      {
        moduleTitle: "கட்டம் 2: திட்ட வழிகாட்டல் மற்றும் குறியீட்டுத் தரம்",
        topics: [
          "இருவாரத்திற்கு ஒருமுறை திட்டக் குறியீடுகளை ஆய்வு செய்தல்",
          "மென்பொருள் கட்டமைப்பு மற்றும் உகந்த மாற்றங்கள்",
          "நிறுவன நடைமுறைகளின்படி பணிகளைப் பிரித்து செய்தல்"
        ]
      },
      {
        moduleTitle: "கட்டம் 3: வேலைவாய்ப்பு வழிகாட்டல்",
        topics: [
          "சுயவிவரக் குறிப்பை செம்மைப்படுத்துதல் மற்றும் போர்ட்ஃபோலியோ வழிகாட்டல்",
          "நேரடி மாதிரி நேர்காணல் மற்றும் ஆலோசனைகள்",
          "வேலை வாய்ப்பு சலுகைகளை தேர்வு செய்வதற்கான தொடர் ஆதரவு"
        ]
      }
    ],
    outcomes: [
      "Direct connection to a senior industry mentor",
      "Refined code quality matching enterprise expectations",
      "Actionable roadmap for continuous professional growth"
    ],
    outcomesTa: [
      "முன்னணி மென்பொருள் நிபுணருடன் நேரடித் தொடர்பு",
      "நிறுவனத் தரத்திற்கு இணையான தூய்மையான குறியீட்டுத் திறன்",
      "தொடர்ச்சியான தொழில் வளர்ச்சிக்கான தெளிவான பாதை"
    ],
    eligibility: [
      "Must have completed at least 50% of the Technical Skills curriculum",
      "Consistent attendance and active participation in projects"
    ],
    eligibilityTa: [
      "தொழில்நுட்பப் பாடத்திட்டத்தில் குறைந்தது 50% முடித்திருக்க வேண்டும்",
      "வகுப்புகளில் தொடர்ச்சியான வருகை மற்றும் ஈடுபாடு அவசியம்"
    ]
  },
  {
    id: "career-guidance",
    slug: "career-guidance",
    title: "Career Guidance & Placement Preparation",
    titleTa: "வேலைவாய்ப்பு வழிகாட்டுதல் & நேர்காணல் பயிற்சி",
    image: "/images/programs/career-guidance.jpg",
    shortDescription: "Targeted support for resume crafting, technical interview simulations, HR interview readiness, and job application strategy.",
    shortDescriptionTa: "சுயவிவரக் குறிப்பு (Resume) தயாரிப்பு, மாதிரி நேர்காணல்கள், HR பயிற்சிகள் மற்றும் வேலை தேடல் வழிகாட்டல்.",
    fullDescription: "We bridge the gap between skill acquisition and formal employment. Our placement readiness track provides thorough interview simulations, resume engineering, and direct connections to hiring partners.",
    fullDescriptionTa: "கற்ற கல்விக்கும் நிறுவன வேலைவாய்ப்பிற்கும் இடையே உள்ள இடைவெளியை இணைக்கிறோம். முழுமையான மாதிரி நேர்காணல்கள் மற்றும் நிறுவன வேலைவாய்ப்புகளுடன் நேரடி தொடர்பை ஏற்படுத்துகிறோம்.",
    targetAudience: "Graduating students and job-seeking candidates.",
    targetAudienceTa: "படிப்பு முடித்த மாணவர்கள் மற்றும் வேலை தேடும் இளைஞர்கள்.",
    duration: "6 Weeks Intensive",
    durationTa: "6 வாரங்கள் தீவிரப் பயிற்சி",
    schedule: "Saturday & Sunday Workshops",
    scheduleTa: "சனி & ஞாயிறு சிறப்பு வகுப்புகள்",
    mode: "In-Person Classroom & Mock Labs",
    modeTa: "நேரடி வகுப்பறை & மாதிரி ஆய்வகம்",
    cost: "100% Free of Cost",
    costTa: "100% முற்றிலும் இலவசம்",
    badge: "Placement Readiness",
    badgeTa: "வேலைவாய்ப்புத் தயார்நிலை",
    skills: [
      "Technical Resume Optimization",
      "LinkedIn & GitHub Profile Branding",
      "Data Structures & Algorithms Interview Drills",
      "Behavioral & HR Question Preparation",
      "Job Portal Navigation & Salary Negotiation"
    ],
    skillsTa: [
      "தொழில்நுட்ப ரெஸ்யூமே மேம்பாடு",
      "லிங்க்ட்இன் & கிட்ஹப் சுயவிவர பிராண்டிங்",
      "தரவு கட்டமைப்புகள் & அல்காரிதம் நேர்காணல் பயிற்சிகள்",
      "HR மற்றும் நடத்தைசார் கேள்விகளுக்கான தயாரிப்பு",
      "வேலை போர்ட்டல்கள் மற்றும் சம்பள பேச்சுவார்த்தை"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Professional Branding & Resume Crafting",
        topics: [
          "Structuring ATS-compliant resumes with quantifiable project impacts",
          "Crafting professional LinkedIn profiles and GitHub READMEs",
          "Creating impactful video introductions and portfolio summaries"
        ]
      },
      {
        moduleTitle: "Module 2: Technical Interview Simulation",
        topics: [
          "Live coding whiteboard challenges and problem walkthroughs",
          "System design fundamentals for entry-level engineering roles",
          "Handling edge cases and explaining algorithmic complexity"
        ]
      },
      {
        moduleTitle: "Module 3: HR & Behavioral Readiness",
        topics: [
          "STAR method formulation for situational questions",
          "Handling career gap explanations and salary expectation discussions",
          "Post-interview follow-up etiquette and professional offer assessment"
        ]
      }
    ],
    curriculumTa: [
      {
        moduleTitle: "பிரிவு 1: சுயவிவரக் குறிப்பு & தொழில்முறை பிராண்டிங்",
        topics: [
          "நவீன ATS முறையில் ரெஸ்யூமே தயாரித்தல்",
          "தொழில்முறை LinkedIn மற்றும் GitHub சுயவிவரம் உருவாக்குதல்",
          "போர்ட்ஃபோலியோ பக்கங்களை வடிவமைத்தல்"
        ]
      },
      {
        moduleTitle: "பிரிவு 2: மாதிரி தொழில்நுட்ப நேர்காணல்கள்",
        topics: [
          "நேரடி குறியீட்டுச் சவால்கள் மற்றும் தீர்வுகள்",
          "தொடக்கநிலை பொறியாளர்களுக்கான கட்டமைப்பு அடிப்படைகள்",
          "சிக்கலான குறியீடுகளை நேர்காணலில் விளக்கும் முறை"
        ]
      },
      {
        moduleTitle: "பிரிவு 3: HR மற்றும் நடத்தைசார் நேர்காணல் தயார்நிலை",
        topics: [
          "STAR முறைப்படி கேள்விகளுக்கு பதிலளிக்கும் உத்தி",
          "படிப்பு இடைவெளிகள் மற்றும் சம்பள எதிர்பார்ப்புகளைப் பேசுதல்",
          "நேர்காணலுக்குப் பிந்தைய தகவல் தொடர்பு முறைகள்"
        ]
      }
    ],
    outcomes: [
      "Polished, industry-standard resume and active online portfolio",
      "Experience facing realistic technical and HR interview panels",
      "Direct referral to partner recruiting drives and hiring networks"
    ],
    outcomesTa: [
      "உயர்தர ரெஸ்யூமே மற்றும் நேரடி போர்ட்ஃபோலியோ",
      "உண்மையான தொழில்நுட்ப மற்றும் HR நேர்காணல்களை எதிர்கொள்ளும் அனுபவம்",
      "நிறுவன வேலைவாய்ப்பு முகாம்களில் நேரடிப் பரிந்துரை"
    ],
    eligibility: [
      "Graduating cohorts from Addithalam programs or underprivileged college final-year students"
    ],
    eligibilityTa: [
      "அடித்தளம் பயிற்சியை முடித்தவர்கள் அல்லது கல்லூரியின் இறுதியாண்டு மாணவர்கள்"
    ]
  },
  {
    id: "college-training",
    slug: "college-training",
    title: "College Student Career Readiness",
    titleTa: "கல்லூரி மாணவர் தொழில் தயார்நிலைத் திட்டம்",
    image: "/images/programs/college-training.jpg",
    shortDescription: "Structured institutional training delivered in partnership with government and tier-3 colleges to make undergraduates industry-ready.",
    shortDescriptionTa: "அரசு மற்றும் கிராமப்புற கல்லூரி மாணவர்களை தொழிற்துறைக்கு தயார்படுத்தும் சிறப்புப் பயிற்சித் திட்டம்.",
    fullDescription: "Recognizing that university curricula often lag behind rapid industry changes, Addithalam partners directly with colleges in and around Chennai to deliver hands-on, practical software development bootcamps on campus.",
    fullDescriptionTa: "கல்லூரிப் பாடத்திட்டங்களுக்கும் ஐடி துறை தேவைகளுக்கும் இடையேயான இடைவெளியைக் குறைக்க, சென்னையைச் சுற்றியுள்ள கல்லூரிகளுடன் இணைந்து வளாகத்திலேயே நேரடி செய்முறைப் பயிற்சிகளை வழங்குகிறோம்.",
    targetAudience: "2nd, 3rd, and final-year undergraduate students from economically challenged colleges.",
    targetAudienceTa: "2, 3 மற்றும் இறுதியாண்டு இளங்கலை கல்லூரி மாணவர்கள்.",
    duration: "1 Semester (120 Hours Total)",
    durationTa: "1 பருவம் (மொத்தம் 120 மணி நேரம்)",
    schedule: "Integrated with College Academic Timetable",
    scheduleTa: "கல்லூரி வகுப்பறை நேரங்களுடன் ஒருங்கிணைக்கப்பட்டது",
    mode: "On-Campus Computer Labs & Online Sandbox",
    modeTa: "கல்லூரி கணினி ஆய்வகம் & ஆன்லைன்",
    cost: "100% Free of Cost (Institutional MOU)",
    costTa: "100% முற்றிலும் இலவசம் (MOU ஒப்பந்தம்)",
    badge: "Institutional Partnership",
    badgeTa: "கல்வி நிறுவனக் கூட்டாண்மை",
    skills: [
      "Full-Stack Web Development Foundations",
      "Industry-Standard Version Control",
      "Database Architecture & Optimization",
      "Problem Solving in Python & Java",
      "Campus Placement Aptitude & Soft Skills"
    ],
    skillsTa: [
      "முழுமையான வலைத்தள உருவாக்கம்",
      "Git பதிப்புக் கட்டுப்பாடு",
      "தரவுத்தள கட்டமைப்பு மற்றும் மேம்பாடு",
      "பைதான் & ஜாவா நிரலாக்கம்",
      "வளாக வேலைவாய்ப்புக்கான மென்திறன்கள்"
    ],
    curriculum: [
      {
        moduleTitle: "Semester Track 1: Modern Software Stack",
        topics: [
          "Transitioning from theoretical computer science to industry stacks",
          "Modern JavaScript (ES6+), React foundations, and backend APIs",
          "Database integration and hosting on cloud platforms"
        ]
      },
      {
        moduleTitle: "Semester Track 2: Project Incubation",
        topics: [
          "Team-based software engineering following Agile workflows",
          "Peer code reviews, automated unit testing, and Git branch management",
          "Final campus project showcase evaluated by external tech leaders"
        ]
      }
    ],
    curriculumTa: [
      {
        moduleTitle: "பருவப் பயிற்சி 1: நவீன மென்பொருள் கட்டமைப்பு",
        topics: [
          "கோட்பாட்டு அறிவிலிருந்து நிறுவன மென்பொருள் பயன்பாட்டிற்கு மாறுதல்",
          "நவீன ஜாவாஸ்கிரிப்ட் மற்றும் ரியாக்ட் (React) அடிப்படைகள்",
          "தரவுத்தள இணைப்பு மற்றும் கிளவுட் பதிவேற்றம்"
        ]
      },
      {
        moduleTitle: "பருவப் பயிற்சி 2: மாதிரித் திட்ட உருவாக்கம்",
        topics: [
          "குழுவாக இணைந்து மென்பொருள் திட்டங்களை உருவாக்குதல்",
          "குறியீட்டு மதிப்பாய்வு மற்றும் கிட்ஹப் மேலாண்மை",
          "தொழில்நுட்ப நிபுணர்கள் முன்னிலையில் இறுதி திட்ட சமர்ப்பிப்பு"
        ]
      }
    ],
    outcomes: [
      "Substantial increase in on-campus placement conversion rates",
      "Practical project experience bridging academic theory to enterprise code",
      "Joint certificate of completion endorsed by Addithalam Foundation"
    ],
    outcomesTa: [
      "கல்லூரி வளாக வேலைவாய்ப்புகளில் மாணவர்களின் வெற்றி விகிதம் அதிகரிப்பு",
      "நடைமுறை திட்ட அனுபவத்தின் மூலம் நிறுவன வேலைவாய்ப்புக்கு தயார்நிலை",
      "அடித்தளம் அறக்கட்டளையின் அங்கீகரிக்கப்பட்ட சான்றிதழ்"
    ],
    eligibility: [
      "Students enrolled in partner colleges; nomination through college placement cell"
    ],
    eligibilityTa: [
      "கூட்டாளர் கல்லூரிகளில் பயிலும் மாணவர்கள்; கல்லூரி வேலைவாய்ப்பு பிரிவு மூலம் தேர்வு"
    ]
  },
  {
    id: "women-in-tech",
    slug: "women-in-tech",
    title: "Women Empowerment in Tech",
    titleTa: "தொழில்நுட்பத்தில் பெண்கள் முன்னேற்றம் (Women in Tech)",
    image: "/images/programs/women-in-tech.jpg",
    shortDescription: "Specialized technology training, career re-entry tracks, flexible schedules, and dedicated mentorship for women and homemakers.",
    shortDescriptionTa: "பெண்கள் மற்றும் இல்லத்தரசிகள் வேலைவாய்ப்பு பெற நெகிழ்வான நேரப் பயிற்சிகள் மற்றும் வழிகாட்டல்.",
    fullDescription: "Financial independence transforms families and communities. This program provides a welcoming, supportive, and flexible learning environment tailored for women seeking their first tech job or re-entering the workforce after a career break.",
    fullDescriptionTa: "பெண்களின் பொருளாதார சுதந்திரமே குடும்பத்தின் முன்னேற்றம். முதல் முறை வேலை தேடும் இளம்பெண்களுக்கும், இடைவெளிக்குப் பின் மீண்டும் பணிக்கு வர விரும்பும் இல்லத்தரசிகளுக்கும் ஏற்ற சிறப்புப் பயிற்சி.",
    targetAudience: "Women graduates, homemakers, and young women from underserved communities.",
    targetAudienceTa: "பட்டதாரி பெண்கள், குடும்பத்தலைவிகள் மற்றும் எளிய குடும்பத்து இளம் பெண்கள்.",
    duration: "4 to 6 Months (Flexible Schedule)",
    durationTa: "4 முதல் 6 மாதங்கள் (நெகிழ்வான நேரம்)",
    schedule: "Morning & Afternoon Batches with Remote Support",
    scheduleTa: "காலை மற்றும் மதிய நேர சிறப்பு வகுப்புகள்",
    mode: "Hybrid Classroom & Dedicated Online Community",
    modeTa: "கலப்பு நேரடி வகுப்பறை & ஆன்லைன் சமூகம்",
    cost: "100% Free of Cost",
    costTa: "100% முற்றிலும் இலவசம்",
    badge: "Empowerment Track",
    badgeTa: "பெண்கள் முன்னேற்றப் பிரிவு",
    skills: [
      "Web Application Development & Design",
      "Digital Productivity Tools & Automation",
      "Remote Work Best Practices & Freelancing",
      "Professional Confidence & Networking",
      "Resume Rebuilding for Career Re-entry"
    ],
    skillsTa: [
      "வலைத்தள உருவாக்கம் மற்றும் வடிவமைப்பு",
      "டிஜிட்டல் கருவிகள் மற்றும் ஆட்டோமேஷன்",
      "வீட்டிலிருந்தே பணிபுரியும் (Remote Work) உத்திகள்",
      "தொழில்முறை தன்னம்பிக்கை & நெட்வொர்க்கிங்",
      "மறுவேலைவாய்ப்புக்கான ரெஸ்யூமே தயாரிப்பு"
    ],
    curriculum: [
      {
        moduleTitle: "Module 1: Digital Foundations & Modern Coding",
        topics: [
          "Digital literacy, software development fundamentals, and web tools",
          "Frontend development (HTML, CSS, JavaScript) and modern UI layout",
          "Practical mini-projects designed for flexible pacing"
        ]
      },
      {
        moduleTitle: "Module 2: Career Re-entry Strategy & Freelance Pathways",
        topics: [
          "Navigating career breaks with confidence and strategic positioning",
          "Freelance platforms, remote collaboration tools, and client communications",
          "Building a specialized portfolio highlighting modern tech proficiencies"
        ]
      },
      {
        moduleTitle: "Module 3: Women Leadership & Mentor Circles",
        topics: [
          "Exclusive mentorship circles led by successful women tech leaders",
          "Peer support groups, work-life balance strategies, and interview readiness",
          "Direct placement assistance with equal-opportunity corporate partners"
        ]
      }
    ],
    curriculumTa: [
      {
        moduleTitle: "பிரிவு 1: டிஜிட்டல் அடிப்படைகள் மற்றும் நிரலாக்கம்",
        topics: [
          "கணினி அடிப்படைகள் மற்றும் இணைய மேம்பாட்டுக் கருவிகள்",
          "HTML, CSS, JavaScript கொண்டு எளிய வலைப்பக்கங்களை உருவாக்குதல்",
          "நெகிழ்வான வேகத்தில் முடிக்கக்கூடிய சிறு திட்டப்பணிகள்"
        ]
      },
      {
        moduleTitle: "பிரிவு 2: மறுவேலைவாய்ப்பு மற்றும் ஃப்ரீலான்சிங் வழிகள்",
        topics: [
          "பணி இடைவெளிகளைக் கடந்து தன்னம்பிக்கையுடன் வேலை தேடுதல்",
          "வீட்டிலிருந்தே பணிபுரியும் வாய்ப்புகள் மற்றும் தகவல் தொடர்பு",
          "நவீன தொழில் நுட்பத் திறன்களை வெளிப்படுத்தும் போர்ட்ஃபோலியோ"
        ]
      },
      {
        moduleTitle: "பிரிவு 3: பெண் தலைவர்களின் நேரடி வழிகாட்டல்",
        topics: [
          "முன்னணி பெண் மென்பொருள் பொறியாளர்களின் நேரடி ஆலோசனைகள்",
          "குடும்பம்-வேலை சமநிலை உத்திகள் மற்றும் நேர்காணல் தயார்நிலை",
          "சமவாய்ப்பு வழங்கும் ஐடி நிறுவனங்களின் வேலைவாய்ப்பு ஆதரவு"
        ]
      }
    ],
    outcomes: [
      "Viable pathway to financial independence and professional employment",
      "Lifelong network of supportive women engineers and industry mentors",
      "Flexible career options including full-time, remote, or freelance technical work"
    ],
    outcomesTa: [
      "சுயசார்பு மற்றும் பொருளாதார சுதந்திரத்திற்கான தெளிவான பாதை",
      "தொடர்ச்சியான ஆதரவு தரும் பெண் பொறியாளர்களின் நெட்வொர்க்",
      "முழுநேர வேலை, ரிமோட் வேலை அல்லது ஃப்ரீலான்ஸ் பணிக்கான வாய்ப்புகள்"
    ],
    eligibility: [
      "Women from all backgrounds with a basic desire to build a career in technology",
      "No prior coding experience required"
    ],
    eligibilityTa: [
      "தொழில்நுட்பத்தில் சாதிக்க விரும்பும் அனைத்துப் பின்னணி கொண்ட பெண்கள்",
      "முந்தைய கணினி அறிவோ அல்லது நிரலாக்க அனுபவமோ தேவையில்லை"
    ]
  }
];
