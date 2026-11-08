FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
COPY apps/api-gateway-bff ./apps/api-gateway-bff
COPY libs/shared-types ./libs/shared-types

RUN npm install -g pnpm && pnpm install
RUN pnpm --filter api-gateway-bff build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/apps/api-gateway-bff/dist ./dist
COPY --from=builder /app/apps/api-gateway-bff/package.json ./
RUN npm install -g pnpm && pnpm install --production

EXPOSE 3000
CMD ["node", "dist/main.js"]