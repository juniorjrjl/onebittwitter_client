FROM node:lts

RUN apt update && apt install -qq -y --no-install-recommends

ENV INSTALL_PATH /onebittwitter_client

RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package*.json ./

RUN yarn

RUN yarn global add cli-react

COPY . .
