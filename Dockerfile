FROM node:20-bullseye

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "preview", "--host", "0.0.0.0"]
