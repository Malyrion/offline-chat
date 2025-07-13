# Offline Chat Backend

A Node.js backend API for the offline chat application, built with TypeScript, Express, and TypeORM.

## Prerequisites

- Node.js (version 18 or higher)
- PostgreSQL database
- npm

## Quick Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_DATABASE=offline_chat
   PORT=3000
   ```

3. **Run database migrations:**
   ```bash
   npm run migration:run
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Verify it's running:**
   Navigate to `http://localhost:3000/health`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run migration:run` - Run pending migrations
- `npm run migration:revert` - Revert last migration
- `npx typeorm migration:create src/migrations/<MigrationName>` - Revert last migration


## Project Structure

```
src/
├── groups/         # Group-related endpoints and logic
├── members/        # Group membership management
├── messages/       # Chat message handling
├── users/          # User management
├── utils/          # Database and utility functions
└── migrations/     # Database migration files
```

## API Endpoints

- `POST /users` - Create user
- `GET /groups/:userId` - Get user's groups
- `POST /groups` - Create new group
- `POST /groups/:groupId` - Join group
- `POST /groups/:groupId/messages` - Send message
- `GET /groups/:groupId/messages` - Get group messages

## Tech Stack

- **Node.js** with TypeScript
- **Express.js** for API framework
- **TypeORM** for database management
- **PostgreSQL** as database
- **JWT** for authentication