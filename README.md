# Portfolio — Weerapat B. (Big W. Studio)

เว็บไซต์ Portfolio ส่วนตัวสำหรับ **Weerapat B.** ภายใต้แบรนด์ **Big W. Studio**

---

## 📂 โครงสร้างไฟล์

```
portfolio-weerapat-B/
├── index.html                     ← หน้าหลัก
├── project.html                   ← หน้า detail ของแต่ละโปรเจค (dynamic)
├── README.md                      ← ไฟล์นี้
│
├── assets/
│   ├── css/
│   │   └── styles.css             ← Stylesheet ทั้งหมด
│   └── js/
│       ├── projects-data.js       ⭐ ไฟล์หลักที่จะแก้ — เพิ่ม/แก้ผลงานที่นี่
│       ├── main.js                ← Script ของหน้าหลัก
│       └── project-detail.js      ← Script ของหน้า detail
│
└── images/
    ├── logo.svg                   ← Logo (placeholder — ควรแทนที่ด้วยไฟล์จริง)
    └── projects/                  ← วางรูป screenshot ของแต่ละโปรเจคที่นี่
```

---

## 🚀 วิธีเริ่มใช้งาน

### 1. เปิดดูเว็บในเครื่อง

วิธีที่ง่ายที่สุด: เปิดไฟล์ `index.html` ด้วย browser โดยตรง  
แต่แนะนำให้ใช้ Local Server เพื่อให้ทำงานเต็มประสิทธิภาพ:

**ถ้ามี Python:**
```bash
cd D:\Dev\portfolio-weerapat-B
python -m http.server 8000
```
เปิด browser ไปที่ `http://localhost:8000`

**ถ้ามี Node.js:**
```bash
npx serve .
```

**ถ้าใช้ VS Code:**  
ติดตั้ง extension **"Live Server"** แล้วคลิกขวาที่ `index.html` → Open with Live Server

---

## ✏️ วิธีเพิ่ม/แก้ไขผลงาน

ทุกข้อมูลของผลงานอยู่ในไฟล์เดียว: **`assets/js/projects-data.js`**

### เพิ่มผลงานใหม่:

1. เปิด `assets/js/projects-data.js`
2. ดูที่ comment block ด้านล่าง (`TEMPLATE สำหรับเพิ่มผลงานใหม่`)
3. Copy block ของ project เก่าเป็น template หรือ uncomment template ที่เตรียมไว้
4. แก้ไขข้อมูล:

```javascript
{
  id: "my-new-project",              // ห้ามซ้ำกับ project อื่น, ห้ามมีเว้นวรรค
  title: "My New Project",
  subtitle: "Landing Page",
  year: "2026",
  category: "Web Design",
  role: "Designer & Developer",
  timeline: "3 สัปดาห์",
  tools: ["React", "Tailwind", "Vercel"],
  url: "https://yourproject.com",
  thumb: "images/projects/myproject-thumb.jpg",
  theme: "minimal",                  // เลือก: warm, minimal, nature, premium
  accentColor: "#EAF2FF",
  summary: "สรุปสั้นๆ 1 ประโยค",
  problem: "ปัญหาที่ลูกค้าเจอ...",
  goal: "เป้าหมายของโปรเจค...",
  designDirection: "ทิศทางการออกแบบ...",
  devApproach: "วิธีพัฒนา...",
  result: "ผลลัพธ์ที่ได้...",
  takeaways: "สิ่งที่เรียนรู้...",
  featured: true,                    // true = แสดงในหน้าแรก, false = ซ่อน
},
```

5. บันทึก — เว็บอัปเดตอัตโนมัติเมื่อ refresh

### Theme ที่มีให้เลือก (สำหรับการ์ดในหน้าแรก):

| Theme | เหมาะกับ | สีหลัก |
|-------|---------|-------|
| `warm` | เว็บงานแต่ง, ของขวัญ, ของหวาน | Cream / Brown |
| `minimal` | Portfolio, Personal site | White / Gray |
| `nature` | ต้นไม้, ออร์แกนิก, สุขภาพ | Green |
| `premium` | สินค้าหรู, แฟชั่น, เครื่องหนัง | Dark Brown |

ถ้าต้องการเพิ่ม theme ใหม่ ไปแก้ที่ `assets/css/styles.css` (หา section `Theme: warm/minimal/...`)

---

## 📝 แก้ไขข้อมูลส่วนตัว / ช่องทางติดต่อ

เปิด **`assets/js/projects-data.js`** ไปที่ section `siteConfig` ด้านล่าง:

```javascript
contact: {
  email: "bigweerapat1@gmail.com",
  phone: "+66 83-035-7515",
  phoneDisplay: "083-035-7515",
  instagram: "big.weerapat",
  instagramUrl: "https://instagram.com/big.weerapat",
  // linkedin: "your-linkedin",       ← uncomment เมื่อพร้อมใช้
  // linkedinUrl: "https://linkedin.com/in/your-profile",
},
```

### เมื่อ LinkedIn พร้อม:
แค่ uncomment 2 บรรทัด `linkedin:` และ `linkedinUrl:` → กรอกข้อมูล → บันทึก  
ระบบจะแสดงการ์ด LinkedIn ในหน้า Contact อัตโนมัติ

---

## 🎨 แก้ไข Process / Services

ยังอยู่ในไฟล์ `projects-data.js` — section `siteConfig`:

```javascript
process: [
  {
    step: "01",
    title: "ปรึกษาโปรเจค",
    desc: "...",
    duration: "30-60 นาที",
  },
  // ...
],

services: [
  {
    icon: "design",   // เลือก: design, code, site
    title: "Web Design",
    desc: "...",
  },
  // ...
],
```

---

## 🖼️ การใช้ Logo จริง

ตอนนี้ Logo เป็น SVG placeholder ที่ผมเขียนตามแบบ Brand Guide  
เมื่อมีไฟล์ Logo จริง:

**ถ้าเป็น SVG:**
1. แทนที่ไฟล์ `images/logo.svg`
2. ถ้าจะให้แสดงสีตามตัวแปร CSS ได้ ให้แก้ไฟล์ `index.html` และ `project.html` หาส่วน `<!-- Inline SVG logo -->` แล้วเปลี่ยน path ของ SVG

**ถ้าเป็น PNG/JPG:**
1. วางไฟล์ใน `images/` (เช่น `logo.png`)
2. แก้ HTML — เปลี่ยน `<svg>...</svg>` เป็น `<img src="images/logo.png" alt="WB Logo" width="44" height="36">`

---

## 🖼️ การใส่ Screenshot ของผลงาน

ตอนนี้การ์ดผลงานใช้ CSS mockup สวยๆ อยู่แล้ว ถ้าอยากใช้รูป screenshot จริง:

1. capture screenshot ของเว็บไซต์ (ขนาดแนะนำ: 1600x1000px)
2. บันทึกเป็น JPG/PNG ในโฟลเดอร์ `images/projects/`  
   เช่น `images/projects/icetao-thumb.jpg`
3. เปลี่ยน `thumb:` ในข้อมูล project ให้ตรงกับ path ของไฟล์
4. ใน `assets/js/main.js` หาฟังก์ชัน `renderMockup()` แล้วเพิ่มเงื่อนไขให้ใช้ `<img>` แทน mockup ถ้ามี thumb

---

## 🌐 วิธี Deploy ขึ้นเว็บจริง

### ตัวเลือกที่ง่ายและฟรี:

**1. Netlify (แนะนำ):**
- เข้า [netlify.com](https://netlify.com) → Sign up
- ลาก Folder `portfolio-weerapat-B` ทั้งหมด ไปวางในหน้า Deploy
- ได้ URL ใช้ได้ทันที (เช่น `weerapat-b.netlify.app`)
- ถ้ามี domain ของตัวเอง สามารถผูกได้ฟรี

**2. Vercel:**
- เข้า [vercel.com](https://vercel.com)
- Sign up ด้วย GitHub
- เชื่อมต่อ repository หรือ drag-drop folder

**3. GitHub Pages:**
- Push code ขึ้น GitHub
- ไปที่ Settings → Pages → เลือก main branch
- ได้ URL: `username.github.io/repo-name`

---

## 🔧 Customization เพิ่มเติม

### เปลี่ยนสี Brand:
แก้ที่ `assets/css/styles.css` ที่ตัวแปร CSS ด้านบนสุด:

```css
:root {
  --color-navy: #101828;     /* สีหลัก */
  --color-mint: #36F2A5;     /* สี Accent */
  /* ... */
}
```

### เปลี่ยน Font:
ถ้าอยากเปลี่ยนฟอนต์ — แก้ที่:
1. `<link>` ใน HTML ทั้งสองไฟล์ (เปลี่ยนเป็นฟอนต์ที่ต้องการจาก Google Fonts)
2. ตัวแปร `--font-heading`, `--font-body`, `--font-mono` ใน `styles.css`

---

## 🛠️ การทดสอบ

### ก่อน Deploy ทุกครั้ง:

1. ตรวจสอบทุก link → กดได้ไม่พัง
2. ทดสอบบนมือถือ (เปิด DevTools → Toggle Device → iPhone/Android)
3. ลองกดเข้าทุก project ดูว่า detail page โหลดถูก
4. ทดสอบ Contact links (Email เปิดได้, IG เปิดได้, โทรได้)
5. ทดสอบ Mobile menu

---

## 📞 ติดต่อ (ในเว็บไซต์)

- 📧 Email: bigweerapat1@gmail.com
- 📱 Phone: +66 83-035-7515
- 📷 Instagram: [@big.weerapat](https://instagram.com/big.weerapat)

---

**Built with ❤️ for Big W. Studio**  
*"Design that feels right. Code that works."*
