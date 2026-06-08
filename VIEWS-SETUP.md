# ตั้งค่าตัวนับวิวจริง (Netlify + Upstash Redis)

ตัวนับวิวต่อโปรเจคในหน้า `project.html` นับวิวจริงข้ามผู้ใช้ทุกคน
ทำงานเมื่อ **deploy ขึ้น Netlify แล้วเท่านั้น** (บน localhost จะโชว์ตัวเลข placeholder จาก `projects-data.js`)

## ขั้นตอน

### 1. สมัคร Upstash + สร้าง Redis (ฟรี)
1. ไป https://upstash.com → สมัคร → **Create Database** (เลือก Redis, region ใกล้ไทย เช่น Singapore)
2. ในหน้า database เลื่อนหา **REST API** แล้วคัดลอก 2 ค่า:
   - `UPSTASH_REDIS_REST_URL`  (เช่น `https://xxxx.upstash.io`)
   - `UPSTASH_REDIS_REST_TOKEN`

### 2. Deploy เว็บขึ้น Netlify (ผ่าน Git แนะนำ — ให้ Functions ทำงาน)
1. push โค้ดขึ้น GitHub
2. ที่ Netlify → **Add new site → Import from Git** → เลือก repo
3. Build command: ปล่อยว่าง · Publish directory: `.` (มี `netlify.toml` ตั้งให้แล้ว)

### 3. ใส่ Environment Variables ใน Netlify
Site settings → **Environment variables** → เพิ่ม:
| Key | Value |
|-----|-------|
| `UPSTASH_REDIS_REST_URL` | (จาก Upstash) |
| `UPSTASH_REDIS_REST_TOKEN` | (จาก Upstash) |

จากนั้น **Deploys → Trigger deploy** ใหม่อีกครั้ง

### 4. เสร็จ
เปิดหน้า project บนเว็บจริง — เลข 👁 จะนับจากผู้ใช้จริง
- กันสแปม: นับ **1 ครั้ง / โปรเจค / เครื่อง / วัน** (กัน refresh รัว)
- ฟังก์ชันรับเฉพาะ id ที่อนุญาต (กันคนยิงมั่ว) — ถ้าเพิ่มโปรเจคใหม่ อย่าลืมเพิ่ม id ใน `ALLOWED` ที่ `netlify/functions/views.mjs`

## ใช้ Vercel แทน?
ย้ายไฟล์ไป `api/views.mjs` แล้วเปลี่ยน `ENDPOINT` ใน `assets/js/project-detail.js`
จาก `/.netlify/functions/views` เป็น `/api/views` (ตรรกะเหมือนกัน)
