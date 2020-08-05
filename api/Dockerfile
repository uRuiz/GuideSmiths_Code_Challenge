# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:13.12.0-alpine
 
# Set working directory
WORKDIR /node/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./
 
# Installs all node packages
RUN npm install
RUN npm install react-scripts@3.4.1 -g
 
# Copies everything over to Docker environment
COPY . ./
 
# Uses port which is used by the actual application
EXPOSE 9000
 
# Finally runs the application
CMD [ "npm", "start" ]