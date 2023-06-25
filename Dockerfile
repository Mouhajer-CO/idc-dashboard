# Base Image
FROM node:18-alpine as node

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build --prod

# Nginx Server
FROM nginx:alpine

COPY --from=node /app/dist/idc-dashboard /usr/share/nginx/html
