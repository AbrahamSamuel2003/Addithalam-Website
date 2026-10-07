export interface TeamMember {
  id: string;
  name: string;
  nameTa?: string;
  role: string;
  roleTa?: string;
  category: "Founding Members" | "Core Team" | "Patron & Advisory";
  categoryTa?: string;
  image: string;
  linkedin: string;
  bio: string;
  bioTa?: string;
  focusArea: string;
  focusAreaTa?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "muthu-sivanantha-moorthy",
    name: "Muthu Sivanantha Moorthy K",
    nameTa: "முத்து சிவானந்த மூர்த்தி கே",
    role: "Founder & Managing Trustee",
    roleTa: "நிறுவனர் & நிர்வாக அறங்காவலர்",
    category: "Founding Members",
    categoryTa: "நிறுவன உறுப்பினர்கள்",
    image: "/images/team/muthu.avif",
    linkedin: "https://www.linkedin.com/in/muthu-sivanantha-moorthy-k",
    focusArea: "Strategic Vision, Community Outreach & Institutional Partnerships",
    focusAreaTa: "மூலோபாய தொலைநோக்கு, சமூக தொடர்பு & நிறுவன கூட்டாண்மை",
    bio: "Muthu founded Addithalam Foundation with a conviction that economic background should never restrict access to a fulfilling career in technology. With extensive leadership experience in the IT industry, he oversees the foundation's strategic direction, curriculum evolution, and institutional partnerships, ensuring every student receives rigorous, dignified, and industry-grade education.",
    bioTa: "பொருளாதாரப் பின்னணி ஒருபோதும் தொழில்நுட்ப வேலைவாய்ப்பிற்குத் தடையாக இருக்கக்கூடாது என்ற உயரிய நோக்குடன் அடித்தளம் அறக்கட்டளையை நிறுவினார். தகவல் தொழில்நுட்பத் துறையில் உள்ள தலைமைத்துவ அனுபவத்துடன், அறக்கட்டளையின் வழிகாட்டுதல் மற்றும் நிறுவன கூட்டாண்மைகளை வழிநடத்தி வருகிறார்."
  },
  {
    id: "keerthana-kannan",
    name: "Keerthana Kannan",
    nameTa: "கீர்த்தனா கண்ணன்",
    role: "Co-Founder & Treasurer",
    roleTa: "இணை நிறுவனர் & பொருளாளர்",
    category: "Founding Members",
    categoryTa: "நிறுவன உறுப்பினர்கள்",
    image: "/images/team/keerthana.avif",
    linkedin: "https://www.linkedin.com/in/keerthana-kannan",
    focusArea: "Financial Governance, Operations & Women in Tech Initiatives",
    focusAreaTa: "நிதி நிர்வாகம், செயல்பாடுகள் & மகளிர் தொழில்நுட்ப முயற்சிகள்",
    bio: "As Co-Founder and Treasurer, Keerthana steers the financial stewardship, compliance, and operational execution of Addithalam Foundation. She is deeply passionate about expanding digital opportunities for women and homemakers, architecting specialized training tracks that facilitate smooth entry and re-entry into the modern tech workforce.",
    bioTa: "இணை நிறுவனர் மற்றும் பொருளாளராக, நிதி நிர்வாகம் மற்றும் செயல்பாடுகளை வழிநடத்துகிறார். பெண்கள் மற்றும் இல்லத்தரசிகளுக்கு டிஜிட்டல் வாய்ப்புகளை விரிவுபடுத்துவதில் மிகுந்த ஈடுபாடு கொண்டு, அவர்கள் நவீன தகவல் தொழில்நுட்பத் துறையில் எளிதாகப் பணியில் இணைய சிறப்புப் பயிற்சிகளை வடிவமைக்கிறார்."
  },
  {
    id: "jerome-rajadurai",
    name: "Jerome Rajadurai",
    nameTa: "ஜெரோம் ராஜதுரை",
    role: "Co-Founder & Trustee",
    roleTa: "இணை நிறுவனர் & அறங்காவலர்",
    category: "Founding Members",
    categoryTa: "நிறுவன உறுப்பினர்கள்",
    image: "/images/team/jerome.avif",
    linkedin: "https://www.linkedin.com/in/jeromerajadurai",
    focusArea: "Academic Curriculum, Technical Labs & Corporate Alliances",
    focusAreaTa: "கல்விப் பாடத்திட்டம், தொழில்நுட்ப ஆய்வகங்கள் & நிறுவன கூட்டணிகள்",
    bio: "Jerome brings deep engineering expertise and passion for mentorship to Addithalam. As Co-Founder and Trustee, he oversees technical training standards, hardware lab infrastructure, and corporate hiring partnerships, ensuring students transition seamlessly from project labs into professional engineering roles.",
    bioTa: "பொறியியல் நிபுணத்துவம் மற்றும் வழிகாட்டல் ஆர்வத்துடன் அடித்தளத்தில் செயல்படுகிறார். பயிற்சித் தரம், கணினி ஆய்வகக் கட்டமைப்பு மற்றும் பெருநிறுவன வேலைவாய்ப்புக் கூட்டாண்மைகளை மேற்பார்வையிட்டு, மாணவர்கள் எளிதாக மென்பொருள் பணிகளில் சேர உதவுகிறார்."
  },
  {
    id: "ajithkumar-r",
    name: "Ajithkumar R",
    nameTa: "அஜித்குமார் ரா",
    role: "Executive Committee Member",
    roleTa: "செயற்குழு உறுப்பினர்",
    category: "Core Team",
    categoryTa: "நிர்வாகக் குழு",
    image: "/images/team/ajith.avif",
    linkedin: "https://www.linkedin.com/in/ajithkumar-r",
    focusArea: "Program Operations, Student Welfare & Workshop Execution",
    focusAreaTa: "திட்டச் செயல்பாடுகள், மாணவர் நலம் & பட்டறை மேலாண்மை",
    bio: "Ajithkumar coordinates day-to-day operations and student engagement programs across Addithalam's learning centers. His hands-on involvement ensures that learners receive personalized academic support, seamless access to computing infrastructure, and timely career preparation assistance.",
    bioTa: "அடித்தளத்தின் கற்றல் மையங்களில் அன்றாட செயல்பாடுகள் மற்றும் மாணவர் ஈடுபாட்டுத் திட்டங்களை ஒருங்கிணைக்கிறார். மாணவர்கள் தனிப்பயனாக்கப்பட்ட கல்வி ஆதரவையும், கணினி உள்கட்டமைப்பையும் பெறுவதை உறுதிசெய்கிறார்."
  },
  {
    id: "jackson-paul-j",
    name: "Jackson Paul J",
    nameTa: "ஜாக்சன் பால் ஜே",
    role: "Secretary of IT & Digital Communications",
    roleTa: "தகவல் தொழில்நுட்ப & டிஜிட்டல் தொடர்புச் செயலாளர்",
    category: "Core Team",
    categoryTa: "நிர்வாகக் குழு",
    image: "/images/team/jackson.avif",
    linkedin: "https://www.linkedin.com/in/jacksonpaulj",
    focusArea: "Digital Infrastructure, Cloud Platforms & Communications",
    focusAreaTa: "டிஜிட்டல் கட்டமைப்பு, கிளவுட் தளங்கள் & தகவல் தொடர்பு",
    bio: "Jackson manages the digital technology stack, online learning platforms, and external communications for the foundation. He spearheads technical innovations that ensure hybrid delivery remains seamless, scalable, and accessible to students across Tamil Nadu.",
    bioTa: "அறக்கட்டளையின் டிஜிட்டல் தொழில்நுட்பத் தளம், இணைய வழிக் கற்றல் மற்றும் தகவல்தொடர்புகளை நிர்வகிக்கிறார். தமிழ்நாடு முழுவதிலும் உள்ள மாணவர்கள் எளிதில் அணுகக்கூடிய நவீன தொழில்நுட்ப அமைப்புகளை முன்னெடுத்து வருகிறார்."
  },
  {
    id: "sriyamini",
    name: "Sriyamini",
    nameTa: "ஸ்ரீயாமினி",
    role: "Core Committee Member",
    roleTa: "செயற்குழு உறுப்பினர்",
    category: "Core Team",
    categoryTa: "நிர்வாகக் குழு",
    image: "/images/team/sriyamini.avif",
    linkedin: "https://www.linkedin.com/in/sriyamini-j",
    focusArea: "Soft Skills, Student Engagement & Mentorship Coordination",
    focusAreaTa: "மென்திறன்கள், மாணவர் வழிகாட்டல் & உரையாடல் பயிற்சிகள்",
    bio: "Sriyamini drives student engagement and soft skills workshop design at Addithalam. She works closely with cohorts to build professional communication, interview confidence, and collaborative workplace readiness.",
    bioTa: "அடித்தளத்தில் மாணவர் மென்திறன் பட்டறைகளை வடிவமைத்து வழிநடத்துகிறார். தொழில்முறை உரையாடல், நேர்காணல் தன்னம்பிக்கை மற்றும் கூட்டுப் பணியிடத் திறன்களை வளர்ப்பதில் மாணவர்களுடன் இணைந்து பணியாற்றுகிறார்."
  },
  {
    id: "archana-kannan",
    name: "Archana Kannan",
    nameTa: "அர்ச்சனா கண்ணன்",
    role: "Core Committee Member",
    roleTa: "செயற்குழு உறுப்பினர்",
    category: "Core Team",
    categoryTa: "நிர்வாகக் குழு",
    image: "/images/team/archana.avif",
    linkedin: "https://www.linkedin.com/in/archana-kannan-4abaab216",
    focusArea: "Community Alliances, Volunteer Operations & Event Support",
    focusAreaTa: "சமூக கூட்டணிகள், தன்னார்வலர் செயல்பாடுகள் & நிகழ்வு ஒருங்கிணைப்பு",
    bio: "Archana leads volunteer onboarding and community outreach initiatives. She coordinates with industry volunteers, guest speakers, and community organizers to expand the reach and depth of Addithalam's free training programs.",
    bioTa: "தன்னார்வலர்களை இணைப்பது மற்றும் சமூக விரிவாக்க முயற்சிகளை முன்னெடுக்கிறார். தொழில்துறை தன்னார்வலர்கள் மற்றும் விருந்தினர் பேச்சாளர்களுடன் ஒருங்கிணைந்து இலவசப் பயிற்சித் திட்டங்களை விரிவுபடுத்துகிறார்."
  },
  {
    id: "praveen-gnanasekaran",
    name: "Praveen Gnanasekaran",
    nameTa: "பிரவீன் ஞானசேகரன்",
    role: "Advisor & Patron",
    roleTa: "மூத்த ஆலோசகர் & புரவலர்",
    category: "Patron & Advisory",
    categoryTa: "மூத்த ஆலோசகர்கள் & புரவலர்கள்",
    image: "/images/team/praveen.avif",
    linkedin: "https://www.linkedin.com/in/praveen-gnanasekaran-54a4676",
    focusArea: "Strategic Governance, Industry Advisory & Ecosystem Expansion",
    focusAreaTa: "மூலோபாய நிர்வாகம், தொழில் ஆலோசனைகள் & விரிவாக்கம்",
    bio: "Praveen provides strategic counsel and industry oversight to the leadership team. With decades of executive leadership in the enterprise technology landscape, he guides Addithalam in building scalable, sustainable, and internationally benchmarked educational frameworks.",
    bioTa: "தலைமைத்துவக் குழுவிற்கு மூலோபாய ஆலோசனைகளையும் தொழில் மேற்பார்வையையும் வழங்குகிறார். பெருநிறுவனத் தொழில்நுட்பத் துறையில் பல தசாப்த கால தலைமைப் பணி அனுபவத்துடன், அடித்தளத்தின் நிலையான கல்வி கட்டமைப்பை வழிநடத்துகிறார்."
  }
];
