# Strabo-www

Strabo-www is a Next.js project designed as a game to generate stories based on predefined characters with the help of AI.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- Generate stories using Google's Gemini API.
- Predefined characters to create unique storylines.
- Branching gameplay where each choice feeds the next chapter until a finale.
- Interactive UI designed with Tailwind CSS and DaisyUI.
- Animations powered by Motion and sound effects via Howler.

## Requirements

- [Bun](https://bun.sh) 1.3 or newer.
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).

## Installation

To install the project dependencies, run:

```bash
bun install
```

## Environment Variables

Copy the example file and fill in your key:

```bash
cp .env.example .env
```

| Variable         | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| `GEMINI_API_KEY` | API key used to call the Gemini API for story generation. Required. |

The key is only ever read server-side, in the `generatePath` server action.

## Usage

To start the development server, use:

```bash
bun run dev
```

To build the project, use:

```bash
bun run build
```

To start the production server, use:

```bash
bun run start
```

To lint the project, use:

```bash
bun run lint
```

## Scripts

- `dev`: Starts the development server on port 5070.
- `build`: Builds the project for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for linting errors.
- `format`: Formats the codebase with Prettier.

## Technologies Used

- **Next.js**: Framework for server-side rendering and static web applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed JavaScript across the whole codebase.
- **Google Gen AI SDK (`@google/genai`)**: Client for the Gemini API used to generate story branches.
- **Tailwind CSS**: Utility-first CSS framework.
- **DaisyUI**: UI components for Tailwind CSS.
- **Motion**: Animation library used across the selection and gameplay screens.
- **Howler**: Audio library for the game's sound effects.
- **Zustand**: State management library.

## License

This project is licensed under the MIT License.
