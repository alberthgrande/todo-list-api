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

# 🚀 Run the API

- npx ts-node-dev src/server.ts
