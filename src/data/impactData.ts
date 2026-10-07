export interface Metric {
  value: string;
  label: string;
  labelTa?: string;
  description: string;
  descriptionTa?: string;
}

export interface Story {
  id: string;
  name: string;
  nameTa?: string;
  background: string;
  backgroundTa?: string;
  program: string;
  programTa?: string;
  outcomeRole: string;
  outcomeRoleTa?: string;
  quote: string;
  quoteTa?: string;
  companyCategory: string;
  companyCategoryTa?: string;
}

export const impactMetrics: Metric[] = [
  {
    value: "500+",
    label: "Learners Upskilled",
    labelTa: "பயிற்சி பெற்ற மாணவர்கள்",
    description: "Equipped with industry-grade programming, problem solving, and soft skills.",
    descriptionTa: "தொழில்நுட்ப குறியீட்டுத் திறன், சிக்கல் தீர்க்கும் அறிவு மற்றும் மென்திறன்களுடன் கூடிய பயிற்சி."
  },
  {
    value: "120+",
    label: "Women in Tech Empowered",
    labelTa: "தொழில்நுட்பத்தில் சாதிக்கும் பெண்கள்",
    description: "Supported through flexible skilling, career re-entry, and mentor circles.",
    descriptionTa: "நெகிழ்வான நேரப் பயிற்சி, தொழில் மீள்நுழைவு மற்றும் பெண் வழிகாட்டிகள் மூலம் ஆதரவு."
  },
  {
    value: "45+",
    label: "Industry Mentors",
    labelTa: "தொழில்துறை வழிகாட்டிகள்",
    description: "Senior engineers and leaders providing dedicated 1-on-1 career navigation.",
    descriptionTa: "மாணவர்களுக்கு 1-on-1 வழிகாட்டுதல் வழங்கும் முன்னணி நிறுவன மென்பொருள் வல்லுநர்கள்."
  },
  {
    value: "100%",
    label: "Free & Merit-Based",
    labelTa: "முற்றிலும் இலவசம்",
    description: "Zero tuition fees or hidden charges for any student from day one.",
    descriptionTa: "எந்தவித கட்டணமும் இன்றி திறமையின் அடிப்படையில் வழங்கப்படும் முழுமையான இலவசப் பயிற்சி."
  }
];

export const learnerStories: Story[] = [
  {
    id: "story-1",
    name: "Karthik R.",
    nameTa: "கார்த்திக் ரா.",
    background: "First-generation graduate from an agricultural family in rural Tamil Nadu with no prior coding background.",
    backgroundTa: "கிராமப்புற விவசாயக் குடும்பத்தில் இருந்து வந்த முதல் தலைமுறைப் பட்டதாரி; முன்னனுபவம் இன்றி தொழில்நுட்பம் பயின்றவர்.",
    program: "IT Technical Skills & 1-on-1 Mentorship",
    programTa: "தகவல் தொழில்நுட்பத் திறன் & நேரடி வழிகாட்டல்",
    outcomeRole: "Junior Full-Stack Developer",
    outcomeRoleTa: "ஜூனியர் ஃபுல்-ஸ்டேக் டெவலப்பர்",
    companyCategory: "Chennai Tech Enterprise",
    companyCategoryTa: "சென்னை முன்னணி தொழில்நுட்ப நிறுவனம்",
    quote: "Before Addithalam, tech felt like an unreachable world behind expensive coaching fees. Here, I received not just free training in Python and SQL, but a mentor who reviewed my code line by line and prepared me for real engineering interviews.",
    quoteTa: "அடித்தளம் அறக்கட்டளையில் இணைவதற்கு முன்பு, அதிக கட்டணம் காரணமாக தொழில்நுட்பத் துறை எட்டாக்கனியாக இருந்தது. இங்கு பைதான் மற்றும் எஸ்கியூஎல் பயிற்சியுடன், எனது குறியீட்டை வரிரீதியாக ஆய்வு செய்து நிஜ நேர்காணல்களுக்கு தயார்படுத்திய வழிகாட்டியும் எனக்குக் கிடைத்தார்."
  },
  {
    id: "story-2",
    name: "Priyadarshini M.",
    nameTa: "பிரியதர்ஷினி மா.",
    background: "Homemaker seeking to re-enter the professional workforce after a 4-year career break.",
    backgroundTa: "4 வருட தொழில் இடைவெளிக்குப் பிறகு மீண்டும் வேலைக்குச் செல்ல விரும்பிய இல்லத்தரசி.",
    program: "Women Empowerment in Tech",
    programTa: "தொழில்நுட்பத்தில் பெண்கள் முன்னேற்றம்",
    outcomeRole: "Frontend Web Specialist",
    outcomeRoleTa: "ஃபிரண்ட்-எண்ட் வலை வல்லுநர்",
    companyCategory: "Digital Solutions Firm",
    companyCategoryTa: "டிஜிட்டல் சொல்யூஷன்ஸ் நிறுவனம்",
    quote: "The flexible morning batches and the supportive community of women learners gave me the confidence to code again. Today, I am financially independent and contributing to live software products.",
    quoteTa: "நெகிழ்வான காலை நேர வகுப்புகளும், பெண் கற்போரின் ஆதரவான சூழலும் எனக்கு மீண்டும் குறியீடு எழுதும் தன்னம்பிக்கையை அளித்தன. இன்று நான் பொருளாதார ரீதியாக சுதந்திரம் பெற்று, நேரடி மென்பொருள்களை உருவாக்கி வருகிறேன்."
  },
  {
    id: "story-3",
    name: "Vignesh S.",
    nameTa: "விக்னேஷ் சா.",
    background: "Final-year college student from a tier-3 engineering institution with limited campus recruitment.",
    backgroundTa: "வளாகத் தேர்வுகள் குறைவாக உள்ள கல்லூரியில் பயின்ற இறுதி ஆண்டு பொறியியல் மாணவர்.",
    program: "College Student Career Readiness",
    programTa: "கல்லூரி மாணவர்களுக்கான தொழில் தயார்நிலை",
    outcomeRole: "Software Engineering Intern",
    outcomeRoleTa: "மென்பொருள் பொறியியல் பயிற்சி ஊழியர்",
    companyCategory: "SaaS Product Startup",
    companyCategoryTa: "சாஸ் (SaaS) தயாரிப்பு ஸ்டார்ட்அப் நிறுவனம்",
    quote: "The hands-on project incubation and mock technical interviews bridged the gap between our college syllabus and real industry expectations. It opened a door that changed the trajectory of my career.",
    quoteTa: "நடைமுறை திட்டப் பணிகளும் மாதிரி தொழில்நுட்ப நேர்காணல்களும் கல்லூரி பாடத்திட்டத்திற்கும் தொழில் துறை எதிர்பார்ப்பிற்கும் இடையே உள்ள இடைவெளியைக் குறைத்தன. இது எனது வாழ்க்கைப் பாதையையே மாற்றியமைத்தது."
  }
];

export const opportunityGapSteps = [
  {
    stage: "01",
    title: "Access",
    titleTa: "அணுகல்",
    description: "Removing the economic barrier by providing high-speed computers, development labs, and zero-fee training.",
    descriptionTa: "அதிவேக கணினிகள், ஆய்வகங்கள் மற்றும் இலவசப் பயிற்சிகள் மூலம் பொருளாதாரத் தடையை நீக்குதல்."
  },
  {
    stage: "02",
    title: "Skills",
    titleTa: "திறன்கள்",
    description: "Building production-grade competence across programming languages, system architecture, and modern web frameworks.",
    descriptionTa: "நிரலாக்க மொழிகள், கட்டமைப்பு மற்றும் நவீன வலை வடிவமைப்பில் தொழில்முறைத் திறன்களை உருவாக்குதல்."
  },
  {
    stage: "03",
    title: "Confidence",
    titleTa: "நம்பிக்கை",
    description: "Nurturing professional communication, public speaking, teamwork, and interview resilience.",
    descriptionTa: "தொழில்முறை உரையாடல், மேடைப் பேச்சு, குழுப்பணி மற்றும் நேர்காணல் தன்னம்பிக்கையை வளர்த்தல்."
  },
  {
    stage: "04",
    title: "Opportunity",
    titleTa: "வாய்ப்பு",
    description: "Connecting verified learners directly to hiring partners, industry mentors, and salaried technical roles.",
    descriptionTa: "பயிற்சி பெற்ற மாணவர்களை வேலைவாய்ப்பு நிறுவனங்கள், வழிகாட்டிகள் மற்றும் தொழில்நுட்பப் பணிகளுடன் நேரடியாக இணைத்தல்."
  }
];
