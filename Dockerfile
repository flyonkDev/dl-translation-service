FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm@10.32.1

# Copy workspace config
COPY package.json pnpm-workspace.yaml .npmrc ./
COPY pnpm-lock.yaml ./

# Copy packages and apps needed for backend
COPY packages/ ./packages/
COPY apps/backend/ ./apps/backend/

# Install all workspace dependencies
RUN pnpm install --frozen-lockfile

# Generate Prisma client
RUN pnpm --filter backend exec prisma generate

# Build backend
RUN pnpm --filter backend build

# Verify dist was created
RUN ls -la /app/apps/backend/dist/

EXPOSE 3001

WORKDIR /app/apps/backend
CMD npx prisma migrate deploy && node dist/src/main
