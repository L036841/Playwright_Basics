# Playwright_Basics

This repository contains Playwright automation examples and tests in both Python and JavaScript, including sample tests for Google and other web applications.

## Features

- Playwright tests in Python and JavaScript
- Cucumber BDD feature files and step definitions
- Example Playwright configuration
- GitHub Actions CI workflow

## Getting Started

### Prerequisites

- Python 3.7+
- Node.js (for JavaScript/TypeScript tests)
- [Playwright](https://playwright.dev/)
- [pytest](https://docs.pytest.org/)

### Setup

Clone the repository:
```bash
git clone https://github.com/L036841/Playwright_Basics.git
cd Playwright_Basics
```

Create and activate a Python virtual environment:
```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install Python dependencies:
```bash
pip install pytest playwright
playwright install
```

Install Node.js dependencies (for JS tests):
```bash
npm install
```

### Running Tests

#### Python

```bash
.venv/bin/python -m pytest tests/test_google.py -v
```

#### JavaScript

```bash
npx playwright test
```

### Project Structure

- `tests/` - Contains Python and JavaScript Playwright tests
- `features/` - Cucumber feature files and step definitions
- `playwright.config.js` - Playwright configuration
- `.github/workflows/` - GitHub Actions CI/CD workflows

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

MIT
