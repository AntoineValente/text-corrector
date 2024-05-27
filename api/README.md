## Introduction

This API provides users with advanced correction capabilities for their writings, utilizing AI models to ensure precise and helpful feedback.

### Features

- Authentication and user management
- Analyzes and stores user texts and corrections
- Tailored exercises (Coming soon)

## Tech stack

This application is built using **Node.js**, **Nest.js**, **Typescript**, **TypeORM**, **PostgreSQL** & the **Gemini API**.

Decided to go with **NestJS** for its robust architecture and set of tools to easily implement features, **PostgreSQL** for the strict advantages of SQL to ensure data integrity, and **Gemini** because it was the most convenient model to use with a free tier.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AntoineValente/text-corrector
```

2. Go the the api folder

```bash
cd api
```

3. Install dependencies:

```bash
npm i
# or
yarn
```

## Usage

1. Set the env variables (check `dist.env` for the dev values)

```bash
GOOGLE_AI_API_KEY=
DB_TYPE=
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
JWT_SECRET=
JWT_EXPIRES_IN=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
PORT=
FRONTEND_URL=
```

2. Start a postgresql database

```bash
# One line example
docker run --rm --name postgres-db -p 5432:5432 -e POSTGRES_PASSWORD=password postgres
```

3. Run the project

```bash
npm run start:dev
# or
yarn start:dev
```

> ⚠️ If you are using the free tier of the Gemini API, you need to be based in the US to use it, for example, through a VPN.

## Todo

- [ ] Improve auth security (7d expiration for the jwt for now)
- [ ] Add tests
- [ ] Add the exercise feature
- [ ] Improve prompt to have more relevant results
