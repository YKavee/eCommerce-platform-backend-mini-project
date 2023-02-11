# FROM node:16.15-alpine3.14
# RUN mkdir -p /opt/app
# WORKDIR /opt/app
# RUN adduser -S app
# COPY addressbook/ .
# RUN npm install
# RUN npm install --save pm2
# RUN chown -R app /opt/app
# USER app
# EXPOSE 3000
# CMD [ "npm", "run", "pm2" ]

# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /src

COPY package.json package.json
COPY package-lock.json package-lock.json

# Installing dependencies
RUN npm install

# Copying all the files in our project
COPY . /src

# Starting our application
# CMD [ "node", "server.js" ]
CMD  npm start

# Exposing server port
EXPOSE 8000