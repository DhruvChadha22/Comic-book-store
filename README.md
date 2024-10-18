# Getting Started

## Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js, npm and yarn

## Installation

- Clone the repository:

```bash
git clone https://github.com/DhruvChadha22/comic-book-api.git
```

- Navigate to the project directory:

```bash
cd comic-book-api
```

- Install dependencies:

```bash
yarn install
```

## Environment Variables

- Copy variables from .env.example to .env

```bash
cp .env.example .env
```

You can set up Database URL using One of Two Methods Stated Below:

### Using Docker

- Run a docker postgres container with port mapping

```bash
docker run -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

### Without Docker

- Create a new postgres project on cloud providers like neon.db, supabase etc.
- Paste the database url string in the env variable

## Migrating Database

- Migrate the database schema

```bash
yarn prisma migrate dev
```

- Run the seeding command to get dummy data

```bash
yarn prisma db seed
```

# Usage

- Run the development server

```bash
yarn dev
```

## API Documentation

- Go to http://localhost:8000/docs when server is running to access the API Docs
