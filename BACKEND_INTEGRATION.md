# Frontend API & Integration Guide (Devub Technologies)

Welcome! This frontend is built with **React**, **Vite**, and **Tailwind CSS**. It is structured in a clean, human-written architectural pattern so you can integrate your backend seamlessly.

---

## 1. Quick Switch: Mock Data ↔ Real Backend

In the root directory, there is a `.env` file (copied from `.env.example`):

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_USE_MOCK=true
```

- When **`VITE_USE_MOCK=true`**:
  The UI runs standalone using the mock datasets in `src/data/mockData.js`.
- When **`VITE_USE_MOCK=false`**:
  All requests route via `src/services/api.js` directly to your backend API (`VITE_API_BASE_URL`).

---

## 2. Authentication

The generic request helper in `src/services/api.js` automatically looks for an authentication token in `localStorage`:

```javascript
localStorage.setItem('token', 'your_jwt_or_bearer_token');
```

When present, every API call automatically includes:
`Authorization: Bearer <token>`

---

## 3. Endpoints & Expected Payloads

### `GET /api/portfolio`
Query parameters (optional): `?category=Design` (or `Development`, `Others`). If omitted, returns all.

**Response Schema (200 OK):**
```json
[
  {
    "id": 1,
    "category": "Design",
    "title": "Apex Labs Dashboard",
    "description": "A high-fidelity design system for a scaling fintech platform...",
    "image": "https://..."
  }
]
```

---

### `GET /api/case-studies`
Returns featured case studies.

**Response Schema (200 OK):**
```json
[
  {
    "id": 1,
    "tag": "Cloud / Automation",
    "title": "FlowState Financial",
    "description": "Discover how Devub Technologies designed a highly available cluster...",
    "image": "https://..."
  }
]
```

---

### `GET /api/process`
Returns the bento-grid creative process cards.

**Response Schema (200 OK):**
```json
[
  {
    "id": 1,
    "type": "image",
    "label": "DESIGN",
    "title": "Design workshops",
    "subtitle": "Aligning product vision with a clear, scalable UI system.",
    "image": "https://...",
    "size": "large"
  },
  {
    "id": 4,
    "type": "quote",
    "label": "STRATEGY",
    "quote": "\"We don't just build UI — we build systems that scale.\"",
    "author": "DEVUB TECHNOLOGIES",
    "size": "small"
  }
]
```

---

### `GET /api/faq`
Returns accordion FAQ items.

**Response Schema (200 OK):**
```json
[
  {
    "id": 1,
    "question": "How long does a custom dashboard setup take?",
    "answer": "Typically our custom application stack is delivered within 4-6 weeks..."
  }
]
```

---

### `GET /api/hero-stats`
Returns the 3 key metric figures displayed below the hero.

**Response Schema (200 OK):**
```json
[
  { "value": "120+", "label": "Projects Delivered" },
  { "value": "98%", "label": "Client Satisfaction" },
  { "value": "4–6wk", "label": "Avg. Delivery Time" }
]
```

---

### `POST /api/contact`
Receives contact form submissions.

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Acme Corp",
  "message": "We need help building a cloud web app."
}
```

**Response Schema (200 OK):**
```json
{
  "success": true,
  "message": "We'll be in touch!"
}
```

---

## 4. Folder Structure

```text
src/
├── components/          # Reusable UI building blocks (Navbar, Footer, Button, SectionLabel)
├── sections/            # Page sections (Hero, Services, Portfolio, CaseStudies, CreativeProcess, FAQ, Contact)
├── pages/               # Top-level route views (HomePage.jsx)
├── services/            # API call abstractions (api.js)
├── data/                # Mock data fallback (mockData.js)
├── App.jsx              # Main routing & layout
├── main.jsx             # React entry point
└── index.css            # Tailwind directives & global styling
```

## 5. CORS
Make sure your backend server allows requests from `http://localhost:5173` (Vite's default port) during development.

