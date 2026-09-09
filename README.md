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

Setup instructions will be added as the project is scaffolded.

## License

TBD