# Family connection app

This repository contains a production-minded starter for a private family connection platform.

## Included
- NestJS API backend
- Next.js web frontend
- React Native mobile app shell
- PostgreSQL/Prisma schema concept for family relationships, privacy, and story data
- Docker Compose for local infrastructure

## Quick start

1. Copy `.env.example` to `.env`
2. Start local infrastructure:
   npm install
   docker compose up -d
3. Start backend:
   npm run dev:api
4. Start web:
   npm run dev:web
5. Start mobile (optional):
   npm run dev:mobile

## Core domains
- Auth & family onboarding
- Dynamic family tree
- Story timeline & archive
- Private location map
- Privacy & access control

## Tech Stack
- Web: Next.js, Tailwind
- Mobile: React Native + Expo
- API: NestJS + TypeScript
- Database: PostgreSQL + PostGIS + Prisma
- Auth: Auth0 / Clerk / Keycloak compatible
- Storage: S3 / R2 compatible
