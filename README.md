# 🔧 Step-by-Step Setup

- npm init -y
- npm install express mongoose cors dotenv
- npm install --save-dev typescript ts-node-dev @types/node @types/express @types/cors
- npx tsc --init

# 🔐 Authentication Features to Add

- User model and registration
- Login with password + JWT
- Middleware to protect routes (e.g., authMiddleware)
- Secure password hashing (using bcrypt)

# 📦 Install Required Packages

- npm install bcryptjs jsonwebtoken
- npm install --save-dev @types/bcryptjs @types/jsonwebtoken

# Implement unit tests for the API

```
- ✅ Tools:
- Jest: JavaScript testing framework
- Supertest: To test HTTP requests
- ts-jest: TypeScript support for Jest
- mongodb-memory-server: In-memory MongoDB for testing (no real DB required)
```

## 📦 Step 1: Install Dev Dependencies

- npm install --save-dev jest ts-jest supertest @types/jest @types/supertest mongodb-memory-server

## ⚙️ Step 2: Configure Jest

```
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.ts'],
};
```

## package.json

```
"scripts": {
  "test": "jest"
}
```

# 🚀 Run the API

- npx ts-node-dev src/server.ts

[Todo List API](https://roadmap.sh/projects/todo-list-api)

[Github - Todo List API](https://github.com/alberthgrande/todo-list-api)
