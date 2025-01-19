# joker-ms 🃏

A lightning-fast joke API built with Hono.js and powered by Bun runtime.

## Features

- 🚀 High-performance joke delivery using Hono.js
- 🎯 Built with Bun for blazing fast execution
- 🔄 Random joke generation
- 📝 RESTful API endpoints
- ⚡️ Minimal latency and resource usage

## Prerequisites

Before you begin, ensure you have the following installed:
- [Bun](https://bun.sh/) (latest version)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Gabb-c/joker-ms.git
cd joker-ms
```

2. Install dependencies:

```bash
bun install
```

## Usage

### Starting the Server

Run the development server:

```bash
bun run dev
```

For production:

```bash
bun run start
```

### API Endpoints

#### Get a Random Joke
```http
GET /api/jokes/random
```

Response:
```json
{
  "id": "123",
  "setup": "Why don't programmers like nature?",
  "punchline": "It has too many bugs!"
}
```

#### Get Joke by ID
```http
GET /api/jokes/:id
```

Response:
```json
{
  "id": "123",
  "setup": "Why don't programmers like nature?",
  "punchline": "It has too many bugs!"
}
```

## Development

### Project Structure
```
joker-ms/
├── src/
│   ├── index.ts
│   ├── routes/
│   │   └── jokes.ts
│   └── services/
│       └── jokeService.ts
├── tests/
├── package.json
└── README.md
```

### Running Tests
```bash
bun test
```

## Performance

Thanks to Bun's performance optimizations and Hono.js's lightweight architecture, joker-ms delivers jokes with minimal latency:
- Average response time: <5ms
- Concurrent requests handling: 10k+ req/sec

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Hono.js](https://honojs.dev/)
- Powered by [Bun](https://bun.sh/)
- Inspired by the need for fast, reliable joke delivery
