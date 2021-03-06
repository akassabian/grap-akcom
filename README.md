# GRAP
GraphQL Yoga, React, Apollo, Prisma

## Requirements

Install on the host:
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/)

## Getting Started

1. Clone this repository
1. Duplicate `backend/.env-example` as `.env` in `backend/`
1. Duplicate `backend/prisma/.env-example` as `.env` in `backend/prisma/`
1. Run `npm install` in `backend/` and `frontend/`
1. Run `docker-compose up` in `/backend/prisma`
1. Run `npm install -g prisma` (may replace this instruction with a local install as per Prisma's manual)
1. If Prisma 404s on Docker (eg. legacy Docker on Windows) then (a) run `prisma init`, (b) choose `demo server`, and (c) update `PRISMA_ENDPOINT` in `backend/prisma/.env`
1. Run `prisma deploy` in `backend/prisma`
1. Run `npm run dev` in `backend/` and `frontend/`

## Setup New Client to Push to Dokku

1. On local client `run ssh-keygen -t rsa`
1. Login to root of server where dokku is installed and add ssh key for root (name root@host as dokku-root in local ssh config file)
1. Copy public key to server using root
1. As root, run `dokku ssh-keys:add dokku path/to/id_rsa.pub`
1. Use local ssh config so host name `dokku` points to `dokku@dokku-ip`
1. on local, run `git remote add akcom_back dokku:akcom-back`
1. on local, run `git remote add akcom_front dokku:akcom_front`

## Dokku Deploy

1. `git subtree push --prefix backend akcom_back master`
1. `git subtree push --prefix frontend akcom_front master`

## Dokku Useful Commands
1. `sudo dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git`
1. `dokku letsencrypt:auto-renew`

## Styles
`frontend/components/Page.js` contains main styles

## Links of Interest

- [http://localhost:7777/](http://localhost:7777/) : Front-end
- [http://localhost:4000/](http://localhost:4000/) : GraphQL Playground for backend
- [http://localhost:4466/](http://localhost:4466/) : GraphQL Playground directly on Prisma (only if Prisma is on local Docker)
- [http://localhost:4466/_admin](http://localhost:4466/_admin) : Prisma admin GUI (only if Prisma is on local Docker)

## Dues

Inspired by [Wes Bos](https://advancedreact.com/)
