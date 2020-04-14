FROM node
WORKDIR /usr/src/app
COPY package.json ./
COPY restfull_server.js ./
RUN npm install
EXPOSE 8080
CMD [ "node", "restfull_server.js" ]
