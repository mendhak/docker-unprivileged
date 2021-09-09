FROM node:16-alpine

EXPOSE 3000

WORKDIR /code

RUN chown -R node /code

USER node

COPY --chown=node:node package.json package-lock.json hello-world.js data.txt /code/

RUN npm install

CMD [ "node", "hello-world.js" ]
