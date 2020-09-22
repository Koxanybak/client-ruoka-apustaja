FROM node:latest

WORKDIR /client-ruoka-apustaja

COPY . .

RUN npm i && \
    npm run build && \
    npm i -g serve

EXPOSE 5000

CMD [ "serve", "-s", "build" ]