# 🌀 Whirlpool

A centralized API scheduler with a modern dashboard interface.

## Getting Started

1. Start the services:

```bash
docker compose up
```

2. Access the dashboard at `http://localhost:29009`
3. Redis is available at port `29008`

## Services

- **Dashboard**: NextJS-based interface running on port 29009
- **Redis**: Data persistence on port 29008

## Development

The project uses:

- Next.js for the frontend
- Redis for data storage
- Docker for containerization
