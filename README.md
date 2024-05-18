# BrightSpend

## Problem

Extensive financial illiteracy and lack of inclusivity.

## Populations Affected

- **Rural Areas:** People unable to access financial educational programs.
- **Kenyan Youth:** Individuals who want to learn financial management, investing, and accountability.
- **Urban Areas:** Populations earning good money but exhibiting poor money management habits, such as excessive drinking parties and endless road trips.

## Findings

- Populations aged 18 and above show basic financial literacy.
- Rural locations have low educational levels due to the absence of financial educational models in most schools.

## Competitors

- Most banking platforms do not provide adequate financial education.
- Competitors like Centonomy and Chums do not offer personalized financial literacy based on individual income.

## Solution

**BrightSpend** is a financial platform integrated with an AI model providing the following services:

1. Financial app coupled with an AI chatbot.
2. Helps clients keep track of their spending habits.
3. AI model with the ability to provide metrics.
4. AI model with a financial guide conversant with the East African financial market.
5. USSD implementation allowing for 2G and SMS use.
6. User login, registration, and authentication.

## Projects to be Implemented

1. AI model with a financial guide conversant with the East African financial market.
2. USSD implementation allowing for 2G and SMS use.

## Technology Stack

### Frontend

```json
{
  "name": "practice",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@ant-design/icons": "^5.3.7",
    "antd": "^5.17.2",
    "dompurify": "^3.1.3",
    "emoji-picker-react": "^4.9.2",
    "firebase": "^10.12.0",
    "framer-motion": "^11.2.3",
    "moment": "^2.30.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.23.1",
    "sonner": "^1.4.41"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.6",
    "vite": "^5.2.0"
  }
}
```

### Backend

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@google/generative-ai": "^0.11.2",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "nodemon": "^3.1.0"
  }
}
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation frontEnd

1. Clone the repository:
   ```sh
   git clone https://github.com/ramo-dev/brightspend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd BrightSpend
   ```

### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
### Installation backend

1. check backend for instructions
   
   <a href="https://github.com/ramo-dev/brightspendAi.git">BrightSpend Backend</a>
 


## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

- **Email:** annuar.dev@gmail.com
- **Project Link:** https://github.com/ramo-dev/brightspend

---

Feel free to reach out with any questions or contributions!
