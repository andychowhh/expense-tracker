FROM node:18-alpine

# Reuse the old commits if dependencies are not changed
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app

WORKDIR /app
COPY . .

RUN npm run build

CMD [ "npm", "run", "dev" ]