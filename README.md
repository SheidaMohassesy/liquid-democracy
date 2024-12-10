# Liquid Democracy - Sample Project

This repository contains the source code for a **Liquid Democracy** application, developed as a sample project for a code assessment. The project demonstrates the use of modern front-end technologies, best practices in coding, and responsive design techniques.

## Overview

Liquid Democracy is a modern decision-making model that combines direct and representative democracy, allowing users to either vote on issues themselves or delegate their votes to trusted individuals. This sample application represents a simplified version of such a system.

## Features

- **Next.js Framework**: Utilizes Next.js for server-side rendering, optimized performance, and SEO-friendly features.
- **SCSS Styling**: Implements modular and maintainable SCSS for custom styles, including responsive design with mixins.
- **Reusable Components**: Structured components for scalability and ease of reuse, such as cards, lists, and headers.
- **Global State Management**: Context API is used to manage the application's state and maintain a clean and manageable architecture.
- **Responsive Design**: Ensures usability across different devices with responsive mixins and mobile-friendly styles.
- **Mock Data Integration**: Fetches mock data from a backend to simulate real-world API interactions.

## Dependencies

The project is built with the following key dependencies:

- [Next.js](https://nextjs.org/) - A React framework for production-grade applications.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [SASS](https://sass-lang.com/) - A CSS preprocessor for writing modular and reusable styles.
- [ESLint](https://eslint.org/) - A tool for identifying and fixing issues in JavaScript code.

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (v7 or later)

### Installation

1.  Clone this repository:

    `git clone https://github.com/SheidaMohassesy/liquid-democracy.git`

2.  Navigate to the project directory:

    `cd liquid-democracy`

3.  Install dependencies:

    `npm install`

### Running the Application

To start the development server:

`npm run dev`

The application will be available at http://localhost:3000.

### Building for Production

To create a production build:

`npm run build`

To serve the production build:

`npm run start`

## Highlights

- **`AppContext`**: Provides a global state for managing UI-specific states such as list or grid view selection.
- **Component Design**: Components like `Header`, `Card`, and `ContentContainer` showcase a modular and reusable approach to building UIs.
- **Styling**: Uses SCSS with variables and mixins for flexibility and scalability in responsive designs.

## Future Enhancements

- Add real API integration.
- Implement user authentication and role-based access control.
- Expand functionality to allow users to delegate votes.
- Add test cases using Jest or Cypress for unit and end-to-end testing.

## Contributing

Since this is a sample project, contributions are not expected. However, if you'd like to discuss improvements or provide feedback, feel free to reach out.

## License

This project is for demonstration purposes only and is not intended for production use. All rights reserved by Sheida Mohassesy.

---

Feel free to modify or expand this README as needed
