# Ticket2

This is a simple Angular project to create tests with Jest.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed (https://nodejs.org/)
- Angular CLI installed (`npm install -g @angular/cli`)

## Installation

To install Ticket2, follow these steps:

1. Clone the repository:
   ```
   git clone https://yourprojecturl.git
   ```
2. Navigate to the project directory:
   ```
   cd ticket2
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Run

To run the application, you need to start both the server and the application itself:

1. Launch json-server (mock backend):
   ```
   npm run start:server
   ```
2. Launch the Angular application:
   ```
   ng serve
   ```

The application will be available at `http://localhost:4200/`.

## Testing

To run the tests:

- Execute all tests:
  ```
  npm run test
  ```
- Execute tests with coverage report:
  ```
  npm run test:coverage
  ```

## Used Commands

During development, the following commands were used:

- Install json-server for a mock backend:
  ```
  npm install json-server --save-dev
  ```
- Setup Jest for Angular testing:
  ```
  import 'jest-preset-angular/setup-jest';
  ```
- Uninstall Karma (default Angular testing framework) and related packages:
  ```
  npm uninstall karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
  ```

