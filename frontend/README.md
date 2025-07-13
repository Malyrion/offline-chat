# Offline Chat Frontend

A React-based chat application with offline support, built with TypeScript, Vite, and Chakra UI.

## Prerequisites

- Node.js (version 18 or higher)
- npm

## Quick Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
    BACKEND_URL=http://localhost:3000
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # React components (atomic design)
├── hooks/         # Custom React hooks
├── services/      # API services and mutations
├── store/         # Zustand state management
├── utils/         # Utility functions
└── domain/        # TypeScript type definitions
```

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development
- **Chakra UI** for components
- **Zustand** for state management
- **React Query** for API calls
- **IndexedDB** for offline storage

