FROM node:latest

WORKDIR /client-ruoka-apustaja

COPY . .

RUN npm i && \
    npm run build && \
    npm i -g serve

USER client

EXPOSE 3000

CMD [ "serve", "-s", "build" ]