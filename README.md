Project structure 
TASK-WORK/
│
├── config/                 # Configuration files (e.g., DB connection)
├── controllers/           # Controller logic for handling API requests
├── middleware/            # Custom middleware (e.g., error handling)
├── models/                # Database schema models
├── routes/                # API route definitions
├── services/              # Business logic and data handling
├── utils/                 # Utility/helper functions
├── validations/           # Input validation logic
│
├── app.js                 # Main Express setup
├── server.js              # Server entry point
├── .env                   # Environment variables (should be ignored by Git)
├── package.json           # Project metadata and dependencies
└── package-lock.json      # Exact versions of installed dependencies


database schema

| Field     | Type      |
| --------- | --------- |
| id        | INT (PK)  |
| userId    | INT (FK)  |
| amount    | DECIMAL   |
| method    | VARCHAR   |
| createdAt | TIMESTAMP |
| updatedAt | TIMESTAMP |


| Field     | Type      |
| --------- | --------- |
| id        | INT (PK)  |
| name      | VARCHAR   |
| email     | VARCHAR   |
| createdAt | TIMESTAMP |
| updatedAt | TIMESTAMP |




