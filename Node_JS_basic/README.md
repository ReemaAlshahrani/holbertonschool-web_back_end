# Node.js Basic Project

A comprehensive practical project covering Node.js fundamentals, file system operations, HTTP server creation using the native `http` module and `Express` framework, and structuring a full server following the MVC architecture pattern with ES6 syntax and Babel.

## Project Files Overview

| File Path | Type | Description |
| :--- | :--- | :--- |
| `0-console_working_with_node.js` | Source Code | Contains `displayMessage` function to output text to STDOUT. |
| `1-stdin.js` | Source Code | Interactive CLI script that reads user input from STDIN. |
| `2-read_file.js` | Source Code | Synchronous CSV file reading (`fs.readFileSync`) to parse student data. |
| `3-read_file_async.js` | Source Code | Asynchronous CSV file reading (`fs.readFile`) returning a Promise. |
| `4-http.js` | Source Code | Basic HTTP server using Node's built-in `http` module listening on port 1245. |
| `5-http.js` | Source Code | Advanced HTTP server handling routing (`/` and `/students`) with async database reads. |
| `6-http_express.js` | Source Code | Simple HTTP server built with the Express framework listening on port 1245. |
| `7-http_express.js` | Source Code | Advanced Express HTTP server displaying student statistics from CSV. |
| `full_server/utils.js` | Source Code | Helper utility `readDatabase` to read and parse CSV data asynchronously using ES6 syntax. |
| `full_server/controllers/AppController.js` | Controller | `AppController` class containing static `getHomepage` method for route `/`. |
| `full_server/controllers/StudentsController.js` | Controller | `StudentsController` class managing `/students` and `/students/:major` routes. |
| `full_server/routes/index.js` | Routes | Route mappings linking application endpoints to Controller actions. |
| `full_server/server.js` | Entry Point | Express server entry point structured using MVC architecture and ES6/Babel. |
| `database.csv` | Database | CSV database file containing student names and fields of study (`CS` / `SWE`). |
| `package.json` | Config | NPM package manifest containing dependencies and execution scripts. |
| `.babelrc` | Config | Babel compiler configuration enabling ES6 modules (`import` / `export`). |
| `.eslintrc.js` | Config | ESLint configuration file enforcing Holberton code style rules. |
| `README.md` | Documentation | Project documentation and file summary. |

## Installation and Usage

1. **Install dependencies:**
   ```bash
   npm install
