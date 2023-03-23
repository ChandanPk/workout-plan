FROM node:19-alpine

RUN npm i -g nodemon

WORKDIR /mern-app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 4000

CMD [ "yarn", "dev" ]