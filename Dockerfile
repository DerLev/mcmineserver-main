FROM node:16-alpine

RUN apk add git

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY . .
RUN npm ci

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN chown nextjs:nodejs .next/ -R

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME=0.0.0.0

LABEL org.opencontainers.image.source="https://github.com/DerLev/mcmineserver-main"
LABEL org.opencontainers.image.licenses="MIT"

CMD ["npm", "run", "start"]
