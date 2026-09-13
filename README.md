# ClaimCheck

Evidence-based AI-assisted claim investigation and verification platform.

## Problem

People encounter claims online (politics, cricket, etc.) but lack an efficient
way to investigate whether those claims are accurate and understand the
evidence behind them.

## Core Principle

**Evidence first, AI second.** The system retrieves and ranks real evidence
before any AI analysis. It can say "insufficient evidence" rather than
manufacturing a verdict.

## Status

🚧 Phase 1 — Project Foundation (in progress)

## Tech Stack (tentative)

- Frontend: React + TypeScript
- Backend: Node.js + Express
- Database: PostgreSQL (pgvector for vector search later)
- Cache: Redis
- AI/Data processing: Python where useful
- LLM: TBD — free tier / low-cost, decided in Phase 4

## Verdict Categories

🟢 SUPPORTED · 🟢 MOSTLY ACCURATE · 🟡 MISLEADING · 🟠 UNSUPPORTED · 🔴 FALSE · ⚪ UNVERIFIABLE

## Setup

### Prerequisites

- Node.js (v18+)
- npm

### Backend

```powershell
cd backend
npm install
npm run dev
```

Runs on `http://localhost:5000`.

### Frontend

```powershell
cd frontend
npm install
npm run dev
```

Runs on `http://localhost:5173`.

### Environment Variables

Both `frontend` and `backend` have `.env.example` files. Copy them to `.env` and fill in values:

```powershell
cd backend
copy .env.example .env

cd ../frontend
copy .env.example .env
```

### Linting & Formatting

```powershell
npm run lint      # check for issues
npm run format    # auto-format code
```

Run inside `frontend` or `backend` as needed.

## License

TBD