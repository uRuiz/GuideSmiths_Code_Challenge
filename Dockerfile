# Docker Image which is used as foundation to create
# a custom Docker Image with this Dockerfile
FROM node:latest
 
# Set working directory
WORKDIR /app

# Copies everything over to Docker environment
COPY . .

# Installs all node packages
RUN npm install
 
# Uses port which is used by the actual application
EXPOSE 3000
 
# Finally runs the application
CMD [ "npm", "start" ]