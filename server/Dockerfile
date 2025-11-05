# syntax=docker/dockerfile:1
FROM node:20-slim
WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
EXPOSE 3000
CMD ["pnpm", "start"]
    