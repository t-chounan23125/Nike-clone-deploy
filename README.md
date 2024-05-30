# Nike Cloning Project

This project aims to clone the Nike website to practice and demonstrate front-end development skills. The project includes a responsive design, navigation, and several interactive elements, mimicking the look and feel of the official Nike website. Tailwind CSS is used for styling, and web components are used for creating reusable UI elements. Dynamic data is loaded to enhance interactivity.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Acknowledgments](#acknowledgments)
- [Conclusion](#conclusion)

## Project Overview
The Nike Cloning Project is a front-end development exercise focused on replicating the design and functionality of the Nike website. This project leverages Tailwind CSS for styling, web components for modular UI elements, and dynamic data for enhanced interactivity. It is intended for educational purposes, helping developers practice modern web development techniques.

## Features
- Responsive design using Tailwind CSS
- Navigation bar with dropdown menus
- Modular and reusable web components
- Dynamic data loading

## Technologies Used
- HTML
- Tailwind CSS
- JavaScript
- Web Components

## Installation
To set up this project locally, follow these steps:

1. **Clone the Repository**:
    - Open a terminal or command prompt and navigate to the directory where you want to clone the project.
    - Use the `git clone` command followed by the URL of the remote repository you cloned from GitLab:
      ```bash
      git clone https://git.clp.kr/anbschool/2nd/tech-a-project.git
      ```
2. **Install Dependencies**:
    - Navigate to the cloned project directory:
      ```bash
      cd 2nd-mission
      ```
    - Since `node_modules` is likely excluded in the `.gitignore` file, you'll need to reinstall the project's dependencies using npm:
      ```bash
      npm install
      ```
    - This command downloads and installs all the necessary packages listed in the `package.json` file, including Tailwind CSS and any other project dependencies.

3. **Run/Build the Project**:
    - Run the following cmd:
      ```bash
      npm run build
      ```

4. **View the Website**:
    - Open the `index.html` file in your text editor or code editor.
    - Right-click on the `index.html` file and select "Open with" or "Open in Browser" (depending on your operating system).

## Usage
- Navigate through the website using the navigation bar.
- Explore different sections to see the replicated design and functionality.
- Interact with product displays and dropdown menus to see animations and transitions.
- Observe how dynamic data is loaded and displayed using web components.

## Project Structure
```plaintext
TepChounan-Nike-Clone/
├── src/
│   ├── image/
│       └── [image files]
|   ├── css/
│       └── [styles files]
|   ├── script/
│       └── [scripts files]
|       └── components/
|            └── [components files]
│   ├── converse.html
│   ├── index.html
│   ├── new&feature.html
│   └── news.html
|
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```

## Acknowledgments
Inspired by the official Nike website.
Thanks to all contributors and resources that helped in the creation of this project.

## Conclusion
This project successfully replicates the Nike website, providing a practical way to hone front-end development skills. By adhering to a clear project structure and using modern web technologies like Tailwind CSS and web components, the project demonstrates effective use of responsive design, modularity, and dynamic data handling. We welcome contributions and feedback to improve this project further. Thank you for exploring and contributing to the Nike Cloning Project!