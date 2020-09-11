# GRAP
GraphQL Yoga, React, Apollo, Prisma

## Requirements

Install on the host:
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/)

## Getting Started

1. Clone this repository
1. Duplicate `backend/.env-example` as `.env` in `backend/`
1. Run `npm install` in `backend/` and `frontend/`
1. Run `docker-compose up` in `/backend/prisma`
1. Run `npm install -g prisma` (should replace this instruction with a local install as per Prisma's manual)
1. Run `prisma deploy` in `backend/prisma`
1. Run `npm run dev` in `backend/` and `frontend/`


## Links of Interest

- [http://localhost:7777/](http://localhost:7777/) : Front-end
- [http://localhost:4000/](http://localhost:4000/) : GraphQL Playground for backend
- [http://localhost:4466/](http://localhost:4466/) : GraphQL Playground directly on Prisma

## Dues

Inspired by [Wes Bos](https://advancedreact.com/)
