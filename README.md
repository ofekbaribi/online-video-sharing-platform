# ViewTube - Video Sharing Platform

## Overview
ViewTube is a comprehensive video-sharing platform that allows users to upload, watch, and interact with videos across multiple platforms, including web and mobile. The platform includes features such as video playback, commenting, like/dislike functionality, video uploading, and user management. This document details the structure and implementation of the ViewTube project, covering the Web frontend, Android mobile application, and Server-Side backend.

## Features

### Shared Features (Across Web and Android)
- **Video Playback**: Users can watch videos with a responsive and user-friendly player.
- **Video Details Management**: View and edit uploaded video titles and descriptions.
- **Video Sharing**: Easily share videos with friends and other users.
- **Comments Section**: Interact with other users by commenting on videos.
- **Related Videos**: Explore related videos based on your current viewing.
- **User Management**: Create and manage user profiles, including likes, uploads, and comments.
- **Dark Mode**: Toggle between light and dark modes to match personal preferences.

## Technologies Used

### Web Frontend
- **Framework**: React.js
- **State Management**: Context API
- **Styling**: CSS Modules
- **Routing**: React Router

### Android Frontend
- **Framework**: Android SDK
- **Styling**: XML with Material Components

### Backend
- **Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose for object modeling)
- **Authentication**: JWT (JSON Web Tokens)
- **File Handling**: Multer (for video file and thumbnail uploads)

## Installation and Setup

### Web Project

#### Prerequisites
- **Node.js** (version 14.x or later)
- **npm** (Node Package Manager)

#### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ofekbaribi/ViewTube-Web
   cd ViewTube-Web
   npm install
   ```

2. **Run the Application**:
   ```bash
   npm start
   ```

### Android Project

#### Prerequisites
- **Android Studio** (version 4.0 or later)
- **Android device or emulator** running API level 21 (Lollipop) or higher

#### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ZivElbaz/android-video-sharing-platform
   ```

2. **Open and Run the Project**:
   - Open Android Studio.
   - Import the project you just cloned.
   - Build the project and run it on your Android device or emulator.

### Server-Side Project

#### Prerequisites
- **Node.js** (version 14.x or later)
- **npm** (Node Package Manager)
- **MongoDB** (either a running instance locally or a connection string provided in environment variables)

#### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ofekbaribi/ViewTube-Server
   cd ViewTube-Server
   npm install
   ```

2. **Run the Server**:
   ```bash
   npm start
   ```

## Working Process

### Web Project
- **Task Assignment**: Each team member was assigned distinct pages to create, focusing on both design and implementation of the required logic.
- **Design Implementation**: User interfaces were designed to be intuitive and visually appealing.
- **Logical Infrastructure**: Context API was used for state management, gathering data for each component.
- **Coordination and Integration**: Team members coordinated to ensure compatibility and cohesion, integrating components into a seamless website.
- **Testing and Refinement**: After combining all components, thorough testing was conducted, followed by refinements based on feedback.

### Android Project
- **Task Assignment**: Modules like video playback, user management, and community interactions were divided among team members.
- **Design Implementation**: Mobile-specific designs were implemented to ensure an intuitive and user-friendly interface.
- **Logical Infrastructure**: Android architecture components were used for robust state management.
- **Coordination and Integration**: Regular synchronization ensured seamless integration into the mobile app.
- **Testing and Refinement**: Comprehensive testing across devices ensured smooth and bug-free performance.

### Server-Side Project
- **Task Assignment**: Specific tasks such as user authentication, video management, or comments handling were assigned to team members.
- **Implementation**: Backend logic was implemented using Express.js and MongoDB, focusing on scalability and performance.
- **Integration**: RESTful APIs were created for seamless communication between the backend and frontend.
- **Testing and Refinement**: Rigorous testing ensured the reliability and security of API endpoints.

## Development Team
- **Ofek Baribi**
- **Ziv Elbaz**
- **Yuval Maaravi**
