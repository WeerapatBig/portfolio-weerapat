/* ============================================================================
   PROJECTS DATA — Weerapat B. Portfolio
   ----------------------------------------------------------------------------
   วิธีเพิ่มผลงานใหม่:
   1. คัดลอก object ของผลงานเดิมเป็น template
   2. เพิ่มเข้าไปใน array `projects` ด้านล่าง
   3. ใส่รูป screenshot ในโฟลเดอร์ /images/projects/
   4. บันทึก — เว็บจะอัปเดตอัตโนมัติ
   ============================================================================ */

const projects = [
  {
    id: "icetaowarmvibes",
    title: "Ice & Tao Warm Vibes",
    subtitle: "เว็บการ์ดงานแต่งงาน",
    year: "2026",
    category: "Wedding Website",
    role: "Designer & Developer",
    timeline: "2 สัปดาห์",
    tools: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    url: "https://icetaowarmvibes.netlify.app/",
    thumb: "images/icetao-thumb.webp",
    theme: "warm",
    accentColor: "#F5EDE2",
    device: "mobile",
    gallerySlug: "icetao",
    shots: 8,
    date: "มี.ค. 2026",
    views: 1860,
    overview: "เว็บการ์ดเชิญงานแต่งงานออนไลน์ของคู่ Ice & Tao ออกแบบให้เปิดบนมือถือเป็นหลัก ถ่ายทอดความอบอุ่นเป็นกันเอง พร้อมรายละเอียดงาน แกลเลอรีรูปคู่บ่าวสาว และระบบตอบรับเชิญ (RSVP) ในที่เดียว",
    highlights: [
      "ออกแบบ Mobile-first เปิดลื่น โหลดไวบนมือถือ",
      "ระบบ RSVP ตอบรับเชิญในตัว จัดการรายชื่อแขกง่าย",
      "แกลเลอรีรูปคู่บ่าวสาว + Timeline ลำดับงาน",
      "โทนอบอุ่นเป็นส่วนตัว ตรงคาแรกเตอร์ของคู่รัก",
    ],
    fit: "คู่บ่าวสาวที่อยากได้การ์ดเชิญออนไลน์สวย ๆ ส่งต่อทางมือถือได้ง่าย และอยากให้แขกตอบรับเชิญได้สะดวกในคลิกเดียว",
    features: [
      "หน้าต้อนรับพร้อมชื่อคู่บ่าวสาว",
      "รายละเอียดวัน-เวลา & สถานที่ พร้อมแผนที่",
      "แกลเลอรีรูปภาพ Pre-wedding",
      "ระบบ RSVP ตอบรับการเข้าร่วมงาน",
      "Timeline ลำดับงานในวันจริง",
    ],
    techDetail: "พัฒนาด้วย HTML5, CSS3 และ JavaScript ล้วน เน้นน้ำหนักเบาและโหลดเร็วบนมือถือ มี Lazy Loading รูปภาพ และ Animation ที่ลื่นไหล Deploy บน Netlify",
    tags: ["Wedding", "Mobile-first", "RSVP", "Gallery", "Animation", "Netlify"],
    summary: "เว็บการ์ดงานแต่งงานออนไลน์ที่ถ่ายทอดความอบอุ่นและเป็นส่วนตัวของคู่บ่าวสาว — มาพร้อมระบบ RSVP, แกลเลอรี, และ Timeline งาน",
    problem: "คู่บ่าวสาวต้องการการ์ดเชิญที่มากกว่าการ์ดกระดาษ — ต้องการเล่าเรื่องราวความรัก แสดงรายละเอียดงาน และให้แขกตอบรับเชิญได้สะดวก",
    goal: "สร้างเว็บไซต์การ์ดงานแต่งงานที่ใช้งานง่าย ดูอบอุ่น และโหลดเร็วบนทุกอุปกรณ์ พร้อมระบบที่ช่วยจัดการแขกผู้ร่วมงาน",
    designDirection: "ใช้โทนสีอบอุ่น (Cream, Soft Brown) ผสมกับ Typography ที่อ่อนหวานแบบ Serif Editorial ผสาน Photography คู่บ่าวสาวเข้ากับ Layout แบบเป็นธรรมชาติ",
    devApproach: "พัฒนาด้วย Vanilla JS + CSS3 เน้นน้ำหนักเบาและโหลดเร็ว — มีการ Optimize รูปภาพ Lazy Loading และ Animation ที่ smooth บนมือถือ",
    result: "เว็บโหลดเร็ว ใช้งานได้บนทุกอุปกรณ์ และได้รับ Feedback เชิงบวกจากแขกในงานที่เข้ามาดูการ์ดผ่านมือถือ",
    takeaways: "การออกแบบเว็บไซต์ที่มีความเป็นส่วนตัวสูง ต้องเข้าใจ Story ของลูกค้าจริงๆ — Typography และ Photography เป็นหัวใจของงานประเภทนี้",
    featured: true,
  },
  {
    id: "komes-portfolio",
    title: "Komes N.",
    subtitle: "Personal Portfolio Website",
    year: "2026",
    category: "Portfolio",
    role: "Designer & Developer",
    timeline: "3 สัปดาห์",
    tools: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    url: "https://komes147.github.io/komes.n/",
    thumb: "images/komes-thumb.webp",
    theme: "minimal",
    accentColor: "#EAF2FF",
    device: "desktop",
    gallerySlug: "komes",
    shots: 7,
    date: "ม.ค. 2026",
    views: 1240,
    overview: "เว็บไซต์ Portfolio ส่วนตัวของคุณ Komes นำเสนอผลงานและตัวตนอย่างมืออาชีพ ดีไซน์สะอาดเน้นผลงาน พร้อมโครงสร้างที่ขยายเพิ่มผลงานใหม่ได้ง่ายในอนาคต",
    highlights: [
      "ดีไซน์ Minimal สะอาดตา ดึงให้ผลงานเด่น",
      "โครงสร้างยืดหยุ่น เจ้าของอัปเดตผลงานเองได้",
      "โหลดเร็ว โฮสต์ฟรีบน GitHub Pages ต้นทุนศูนย์",
      "นำไปใช้สมัครงาน/รับงานฟรีแลนซ์ได้จริง",
    ],
    fit: "คนที่ต้องการเว็บ Portfolio ดูมืออาชีพไว้สมัครงานหรือรับงานฟรีแลนซ์ และอยากอัปเดตผลงานเองได้โดยไม่ต้องพึ่งคนอื่น",
    features: [
      "หน้าแนะนำตัว / About",
      "แกลเลอรีผลงานพร้อมรายละเอียด",
      "ช่องทางติดต่อครบ",
      "รองรับทุกขนาดหน้าจอ",
    ],
    techDetail: "Static Site เขียนด้วย HTML5, CSS3 และ JavaScript โฮสต์บน GitHub Pages ต้นทุน Hosting เป็นศูนย์ โครงสร้างไฟล์เป็นระเบียบ ทำให้อัปเดตเองได้ง่าย",
    tags: ["Portfolio", "Minimal", "Personal Brand", "Responsive", "GitHub Pages"],
    summary: "เว็บไซต์ Portfolio ส่วนตัวสำหรับลูกค้า — เน้นการนำเสนอผลงานและตัวตนอย่างเป็นมืออาชีพ พร้อมโครงสร้างที่ขยายเพิ่มผลงานใหม่ได้ง่าย",
    problem: "ลูกค้าต้องการเว็บ Portfolio ที่แสดงตัวตน ผลงาน และข้อมูลติดต่อในที่เดียว เพื่อใช้ในการสมัครงานและรับงาน Freelance",
    goal: "สร้าง Portfolio Website ที่ดูสะอาด มืออาชีพ และทำให้ลูกค้าสามารถอัปเดตผลงานเองได้ในอนาคต",
    designDirection: "Minimal Design ใช้โทนสีกลาง ๆ เน้น Typography ที่ชัดเจน และ Whitespace ที่เยอะ ทำให้ผลงานของลูกค้าโดดเด่น",
    devApproach: "Static Site บน GitHub Pages ลดต้นทุน Hosting เป็นศูนย์ — โครงสร้างไฟล์เป็นระเบียบ ทำให้ลูกค้าอัปเดตเองได้ง่าย",
    result: "ลูกค้านำไปใช้ในการสมัครงานและได้รับ Interview จากบริษัทที่สนใจ — เว็บใช้งานต่อเนื่องและอัปเดตเองได้",
    takeaways: "งานออกแบบให้ลูกค้าใช้งานต่อ ต้องคำนึงถึง Maintainability — โครงสร้าง Code ที่ Clean สำคัญพอ ๆ กับงานออกแบบ",
    featured: true,
  },
  {
    id: "plantica",
    title: "Plantica",
    subtitle: "Plant Shop Landing Page",
    year: "2025",
    category: "Landing Page / E-commerce",
    role: "Designer & Developer",
    timeline: "2 สัปดาห์",
    tools: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    url: "https://plantica.shopchain.store/",
    thumb: "images/plantica-thumb.webp",
    theme: "nature",
    accentColor: "#E8F0E5",
    device: "desktop",
    gallerySlug: "plantica",
    shots: 10,
    date: "พ.ย. 2025",
    views: 980,
    overview: "Landing Page ของร้านขายต้นไม้ Plantica นำเสนอ Brand Story หมวดหมู่สินค้า และช่องทางติดต่อในหน้าเดียว สร้างความน่าเชื่อถือและดันลูกค้าไปสู่ LINE Official ของร้าน",
    highlights: [
      "Hero ภาพต้นไม้คุณภาพสูง สะดุดตาทันทีที่เข้า",
      "Smooth scroll ลื่นไหลทั้งหน้า",
      "CTA เชื่อม LINE Official ของร้านโดยตรง",
      "โหลดเร็ว เปิดบนมือถือลื่น",
    ],
    fit: "ร้านค้าหรือแบรนด์ขนาดเล็กที่อยากมีหน้าเว็บดูมืออาชีพไว้ปิดการขาย และนำลิงก์ไปใช้ในแคมเปญโฆษณาออนไลน์",
    features: [
      "Hero + Brand Story",
      "หมวดหมู่สินค้า",
      "ปุ่ม/ฟอร์มติดต่อร้าน",
      "เชื่อมต่อ LINE Official",
    ],
    techDetail: "Single Page Application ที่โหลดเร็ว เขียนด้วย HTML5, CSS3 และ JavaScript เน้น Responsive Design และ Smooth Scroll ระหว่าง Section",
    tags: ["Landing Page", "E-commerce", "Plants", "LINE", "Responsive"],
    summary: "Landing Page ของร้านขายต้นไม้ — นำเสนอสินค้าและสร้างความน่าเชื่อถือให้ร้าน พร้อม Call-to-Action ที่นำไปสู่การติดต่อสั่งซื้อ",
    problem: "ร้านขายต้นไม้ต้องการหน้าเว็บที่ดูเป็นมืออาชีพมากกว่าหน้าโซเชียลเดิม เพื่อสร้างความน่าเชื่อถือและขยายฐานลูกค้า",
    goal: "ทำ Landing Page ที่นำเสนอ Brand Story, Product Categories และ Contact ในหน้าเดียว — โหลดเร็ว และใช้งานได้บนมือถือ",
    designDirection: "ใช้โทนสีเขียวธรรมชาติ ผสม Earth Tone — ภาพถ่ายต้นไม้คุณภาพสูง วางเป็น Hero Section ที่สะดุดตาเมื่อเข้าเว็บ",
    devApproach: "Single Page Application ที่โหลดเร็ว — มี Smooth Scroll ระหว่าง Section, Form ติดต่อร้าน, และเชื่อมต่อไปยัง LINE Official ของร้าน",
    result: "ร้านได้ลูกค้าใหม่จากเว็บไซต์ และนำลิงก์ไปใช้ในแคมเปญโฆษณาออนไลน์ — Conversion จากเว็บไปยัง LINE ดีขึ้น",
    takeaways: "Landing Page ของร้านค้า ต้องลด friction ระหว่างความสนใจกับการติดต่อ — CTA ที่ชัดเจนสำคัญมากกว่าความสวยงาม",
    featured: true,
  },
  {
    id: "wallopes",
    title: "Wallopes",
    subtitle: "Premium Wallet Landing Page",
    year: "2025",
    category: "Landing Page / Product",
    role: "Designer & Developer",
    timeline: "2 สัปดาห์",
    tools: ["HTML5", "CSS3", "JavaScript", "Animation"],
    url: "https://wallopes.wisdomcenter.store/",
    thumb: "images/wallopes-thumb.webp",
    theme: "premium",
    accentColor: "#3E2C1F",
    device: "desktop",
    gallerySlug: "wallopes",
    shots: 8,
    date: "ต.ค. 2025",
    views: 1520,
    overview: "Landing Page ของแบรนด์กระเป๋าสตางค์พรีเมียม Wallopes นำเสนอสินค้าให้ดูหรูหราน่าเชื่อถือ ด้วย Photography เป็นพระเอกและ Animation ที่นุ่มนวล สร้างความรู้สึก 'อยากได้' ตั้งแต่แรกเห็น",
    highlights: [
      "Dark Premium aesthetic โทนหนัง-ทองหรูหรา",
      "Product card พร้อม hover animation",
      "Parallax effect บางส่วน เพิ่มมิติ",
      "เน้น Performance ลื่นบนมือถือ",
    ],
    fit: "แบรนด์สินค้าพรีเมียมที่อยากให้หน้าเว็บยกระดับภาพลักษณ์ และสร้างความรู้สึกอยากซื้อตั้งแต่วินาทีแรก",
    features: [
      "Hero นำเสนอสินค้าแบบพรีเมียม",
      "Product showcase",
      "Hover & Parallax animation",
      "CTA นำไปสู่การสั่งซื้อ",
    ],
    techDetail: "เขียนด้วย HTML5, CSS3 และ JavaScript พร้อม Smooth Scroll, Parallax บางส่วน และ Hover Animation เน้น Performance บนมือถือ",
    tags: ["Landing Page", "Premium", "Product", "Animation"],
    summary: "Landing Page สำหรับแบรนด์กระเป๋าสตางค์พรีเมียม — เน้นการนำเสนอ Product แบบ Premium ที่ให้ความรู้สึกหรูหรา น่าเชื่อถือ",
    problem: "แบรนด์กระเป๋าสตางค์ต้องการ Landing Page ที่ทำให้สินค้าดูพรีเมียมและสร้างความรู้สึก 'อยากได้' กับลูกค้าทันทีที่เข้ามาดู",
    goal: "ออกแบบหน้าเว็บที่ทำให้สินค้าดูพรีเมียม — Photography เป็นพระเอก, Typography เป็นรอง, CTA ที่นำไปสู่การสั่งซื้อ",
    designDirection: "ใช้ Dark Premium Aesthetic — โทนสีน้ำตาลหนัง สีดำเข้ม Gold Accent — ภาพถ่ายสินค้าคุณภาพสูงเป็น Hero",
    devApproach: "Smooth Scroll, Parallax effect บางส่วน — Product Card ที่มี Hover Animation — เน้น Performance บนมือถือ",
    result: "เว็บถ่ายทอด Brand Identity ของกระเป๋าได้ดี — ลูกค้ารู้สึกว่าสินค้าน่าซื้อมากขึ้นจากการที่ Presentation ดูพรีเมียม",
    takeaways: "งานสินค้าพรีเมียม Photography และ Whitespace สำคัญ ที่สุด — ดีไซน์ที่น้อยและจัดวางดี ขายได้มากกว่าดีไซน์ที่ยัดเยียด",
    featured: true,
  },

  /* ----------------------------------------------------------------------
     TEMPLATE สำหรับเพิ่มผลงานใหม่ — Copy block ด้านล่าง แล้ว uncomment

  {
    id: "project-slug",                            // URL slug, ห้ามมีเว้นวรรค
    title: "Project Name",                         // ชื่อผลงาน
    subtitle: "Subtitle / Category",               // คำขยาย
    year: "2026",                                  // ปี
    category: "Web Design",                        // หมวด
    role: "Designer & Developer",                  // บทบาท
    timeline: "4 สัปดาห์",                          // ระยะเวลา
    tools: ["React", "Tailwind", "Vercel"],        // เครื่องมือ
    url: "https://example.com",                    // ลิงก์ผลงานจริง
    thumb: "images/projects/xxx-thumb.jpg",        // path รูป thumbnail
    theme: "warm",                                 // warm | minimal | nature | premium | tech
    accentColor: "#F5EDE2",                        // สีแอคเซนต์ของโปรเจค
    summary: "...",                                // สรุปสั้น 1 ประโยค
    problem: "...",                                // ปัญหา / โจทย์
    goal: "...",                                   // เป้าหมาย
    designDirection: "...",                        // ทิศทางการออกแบบ
    devApproach: "...",                            // วิธีพัฒนา
    result: "...",                                 // ผลลัพธ์
    takeaways: "...",                              // สิ่งที่เรียนรู้
    featured: true,                                // ให้แสดงในหน้าแรกไหม
  },
  ---------------------------------------------------------------------- */
];

/* ============================================================================
   SITE CONFIG — ตั้งค่าทั่วไปของเว็บไซต์ แก้ไขได้ที่นี่
   ============================================================================ */

const siteConfig = {
  // Personal Info
  name: "Weerapat B.",
  role: "Web Designer / Developer",
  studio: "Big W. Studio",
  tagline: "Design that feels right. Code that works.",
  taglineTh: "ดีไซน์ที่รู้สึกใช่ โค้ดที่ใช้งานได้จริง",
  location: "Bangkok, Thailand",

  // Statistics (ปรับตัวเลขจริงได้ตามต้องการ)
  stats: {
    projects: projects.length,
    yearsExp: 3,
    clients: 8,
  },

  // Contact Channels
  contact: {
    email: "bigweerapat1@gmail.com",
    phone: "+66 83-035-7515",
    phoneDisplay: "083-035-7515",
    instagram: "big.weerapat",
    instagramUrl: "https://instagram.com/big.weerapat",
    // linkedin: "your-linkedin",  // ← เปิดใช้ตอนที่ Set-up LinkedIn เสร็จ
    // linkedinUrl: "https://linkedin.com/in/your-profile",
  },

  // Process Steps (6 ขั้นตอน — เล่าครบตั้งแต่คุยจนเปิดเว็บ)
  process: [
    {
      step: "01",
      title: "ปรึกษา & เข้าใจโจทย์",
      desc: "เริ่มด้วยการพูดคุย ทำความเข้าใจเป้าหมาย กลุ่มลูกค้า ปัญหาที่อยากแก้ และสิ่งที่อยากได้จากเว็บไซต์",
      duration: "30-60 นาที",
    },
    {
      step: "02",
      title: "เสนอขอบเขต ราคา & ไทม์ไลน์",
      desc: "สรุปขอบเขตงาน ใบเสนอราคาแบบ Fixed Price และ Timeline เป็นชุดเดียวที่ชัดเจน ไม่มีค่าใช้จ่ายซ่อน — เมื่อตกลง วางมัดจำ 50% เพื่อเริ่มงาน",
      duration: "1-2 วัน",
    },
    {
      step: "03",
      title: "ออกแบบ (Design)",
      desc: "ออกแบบ UI และ Layout ให้ดูก่อน ปรับจนลงตัวกับแบรนด์และความต้องการของคุณ",
      duration: "1-2 สัปดาห์",
    },
    {
      step: "04",
      title: "พัฒนา (Development)",
      desc: "ลงมือเขียนโค้ดให้ใช้งานได้จริง โหลดเร็ว เสถียร และรองรับทุกขนาดหน้าจอ พร้อมส่งความคืบหน้าให้ดูเป็นระยะ",
      duration: "1-3 สัปดาห์",
    },
    {
      step: "05",
      title: "ตรวจสอบ & แก้ไข",
      desc: "รีวิวงานร่วมกัน แก้ไขตามรอบที่ตกลงไว้ พร้อมทดสอบทุกหน้าจอ ทุกลิงก์ ให้ใช้งานได้ลื่นไหล",
      duration: "3-5 วัน",
    },
    {
      step: "06",
      title: "ส่งมอบ & เปิดใช้งาน",
      desc: "Deploy เว็บขึ้นใช้งานจริง สอนวิธีใช้และแก้ไขเบื้องต้น พร้อมดูแลหลังส่งมอบให้คุณมั่นใจ",
      duration: "ส่งมอบจริง",
    },
  ],

  // Services
  services: [
    {
      title: "Web Design",
      fit: "ธุรกิจที่ต้องการเว็บสวย ใช้งานง่าย และสร้างความประทับใจลูกค้า",
      desc: "Big W. Studio มุ่งเน้นการออกแบบเว็บไซต์ที่ไม่เพียงแต่สวยงาม แต่ยังใช้งานง่ายและตอบโจทย์ความต้องการของธุรกิจคุณ ด้วยทีมงานนักออกแบบมืออาชีพ เราจะช่วยให้เว็บไซต์ของคุณโดดเด่นเหนือใครและสร้างความประทับใจแรกให้กับผู้เข้าชม",
    },
    {
      title: "Mobile Content",
      fit: "ธุรกิจที่ต้องการส่ง SMS, LINE, IVR เชื่อมต่อกับลูกค้าไม่ให้พลาดข่าวสาร",
      desc: "ให้บริการทางด้าน SMS, IVR, USSD, LINE, เชื่อมต่อระบบลูกค้าเข้ากับระบบข้อความเพื่อไม่ให้พลาดทุกข่าวสารและข้อมูล รองรับทุกระบบและเครือข่าย",
    },
    {
      title: "Application Develop",
      fit: "ธุรกิจที่ต้องการแอปมือถือหรือเว็บแอปครบครัน ตอบโจทย์การใช้งาน",
      desc: "เชี่ยวชาญในการพัฒนาแอปพลิเคชันที่ครบครันและตอบโจทย์ทุกความต้องการ ไม่ว่าคุณจะต้องการแอปสำหรับธุรกิจ, การบริการ, หรือความบันเทิง เราสามารถสร้างแอปที่มีประสิทธิภาพสูงสุดให้กับคุณ",
    },
    {
      title: "Customise on Request",
      fit: "ทุกธุรกิจที่มีความต้องการเฉพาะ ต้องการระบบหรือฟีเจอร์ปรับแต่ง",
      desc: "เราเข้าใจว่าทุกธุรกิจมีความต้องการที่แตกต่างกัน ดังนั้นเราจึงให้บริการปรับแต่งเว็บไซต์และแอปพลิเคชันตามคำขอของคุณ ให้คุณได้สิ่งที่ต้องการอย่างแท้จริง",
    },
  ],
};

// Export to global scope (สำหรับ vanilla JS)
if (typeof window !== "undefined") {
  window.projects = projects;
  window.siteConfig = siteConfig;
}
