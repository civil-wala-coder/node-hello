FROM node
WORKDIR /app/server
COPY . /app/server/
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "dev" ]