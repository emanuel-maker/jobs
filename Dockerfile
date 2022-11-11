FROM node:17-alpine

WORKDIR /app
COPY . .

RUN npm i
CMD ["npm","run","extract:info"]