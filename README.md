# Pickflix — Movie Discovery & Recommendation Platform

Pickflix is a Netflix-inspired movie and TV discovery platform that helps users explore titles, discover trailers, browse by genre, and find information about movies and shows.

## Features

- **Movie Discovery:** Browse movies and discover titles organized by genre.
- **TV Show Discovery:** Explore TV series and genre-based collections.
- **Trailer Previews:** Watch movie trailers through YouTube embeds.
- **Detailed Title Pages:** View descriptions, ratings, cast information, and other available movie and TV details.
- **Search:** Find movies through the search interface.
- **External Ratings and Metadata:** Retrieve movie information and ratings through TMDB and OMDb integrations.
- **Backend API:** Handle API requests through an Express.js backend.
- **Database Integration:** Store movie records using MongoDB and Mongoose.
- **Skeleton Loading UI:** Display loading animations while content is being fetched.
- **Caching and Rate Limiting:** Includes utilities to help manage API requests and improve backend performance.

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React, JavaScript, CSS |
| Build Tool | Vite |
| Routing | React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Movie and TV Data | TMDB API |
| Additional Movie Metadata | OMDb API |
| HTTP Requests | Fetch API, Axios |
| Caching | NodeCache |

## Architecture

Pickflix follows a frontend–backend architecture.

1. **React Frontend:** Renders the user interface, handles navigation, and displays movies, TV shows, and title details.
2. **Express Backend:** Provides API routes and handles requests for movie and TV information.
3. **External APIs:** TMDB supplies movie and TV data, while OMDb provides additional movie metadata and ratings.
4. **MongoDB Database:** Stores movie records using Mongoose.
5. **Caching and Request Controls:** Backend utilities support caching and API rate limiting.

```text
React + Vite Frontend
        |
        | HTTP Requests
        v
Node.js + Express Backend
        |
        +------> TMDB API
        |
        +------> OMDb API
        |
        +------> MongoDB
```

## Project Structure

```text
Pickflix/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   └── pages/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database
- TMDB API key
- OMDb API key

### 1. Clone the Repository

```bash
git clone https://github.com/anmol-ananthraj/Pickflix.git
cd Pickflix
```

### 2. Set Up the Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory using `.env.example` as a template.

Add your configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
TMDB_API_KEY=your_tmdb_api_key
OMDB_API_KEY=your_omdb_api_key
```

Replace the placeholder values with your own credentials. Never commit your real `.env` file or expose API keys in a public repository.

Start the backend server:

```bash
npm run dev
```

The backend uses port `5000` by default.

### 3. Set Up the Frontend

Open a second terminal from the project root and run:

```bash
cd frontend
npm install
npm run dev
```

Vite will display the local development URL in the terminal, usually:

`http://localhost:5173`

The frontend currently uses `http://localhost:5000/api` for backend requests, so the backend must be running for API-powered features to work locally.

## Environment Variables

| Variable | Purpose |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |
| `TMDB_API_KEY` | TMDB API key |
| `OMDB_API_KEY` | OMDb API key |

Keep your real environment variables private. The `.env.example` file documents the required configuration without containing your actual credentials.

## Future Improvements

- Content-based movie recommendations using genres, descriptions, and other movie metadata.
- Personalized recommendations based on user preferences and watch history.
- User accounts, watchlists, and custom ratings.
- Expanded community review integrations.
- Automated testing, production deployment, and monitoring.

## Project Goal

Pickflix is a full-stack development project focused on building a movie discovery experience while exploring frontend development, REST API integration, backend architecture, database operations, caching, and deployment.

## Author

**Anmol Ananthraj**

- [GitHub Profile](https://github.com/anmol-ananthraj)
- [Pickflix Repository](https://github.com/anmol-ananthraj/Pickflix)
