# Build stage
FROM node:18.12.0 AS builder

WORKDIR /usr/src/app

COPY tsconfig*.json ./
COPY package*.json ./
COPY nest-cli.json ./
COPY ./src ./src
RUN npm ci --quiet --ignore-scripts \
    && npm run build

# Production stage
FROM node:18.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
RUN npm ci --quiet --ignore-scripts --only=production

# USER node
EXPOSE 3000
CMD ["npm", "run", "start:prod"]

STOPSIGNAL SIGINT
