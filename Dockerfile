FROM node:19.6.0

WORKDIR /app
COPY . /app/

EXPOSE 3000

RUN yarn
ENTRYPOINT [ "yarn", "dev" ]