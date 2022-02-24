FROM lighty262/afw:latest AS afw

WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["npm","start"]
