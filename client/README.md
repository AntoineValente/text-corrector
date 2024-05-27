## Introduction

This frontend app allows users to input text and receive detailed feedback on mistakes.

### Features:

- Text correction: detailed error identification with suggestions and explanations.
- User sign in / sign up: smooth process using Google Auth (UI Coming soon)
- Exercises: Practice writing skills based on previous errors. (Coming soon)

## Tech stack

This application is built using **TypeScript**, **React**, **Vite**, **Tailwind CSS** and the **TanStack Query**.

The main motivation behind choosing this tech stack was to have an easy-to-setup stack that allows for quick proof of concept (POC) development.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AntoineValente/text-corrector
```

2. Go the the client folder

```bash
cd client
```

3. Install dependencies:

```bash
npm i
# or
yarn
```

## Usage

1. Set the env variables (check `dist.env` for the dev values)

```
VITE_API_URL=
VITE_GOOGLE_LOGIN_URL=
```

2. Run the project

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

> As the sign in flow is not completed, for now you can go on the `VITE_GOOGLE_LOGIN_URL` in your browser to sign in through Google

## Todo

- [ ] Implement the sign in logic / screens
- [ ] Add the exercise feature
- [ ] Make it responsive
