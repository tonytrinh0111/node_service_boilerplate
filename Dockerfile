FROM node:11.0.0

ARG GIT_COMMIT
ENV LAST_COMMIT_SHA ${GIT_COMMIT}

RUN mkdir -p /app/server
WORKDIR /app/server
COPY . /app/server

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]