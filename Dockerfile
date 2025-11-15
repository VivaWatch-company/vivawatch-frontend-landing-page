# Set node version
FROM node:22-alpine as base

# Add necessary libraries
RUN apk add --no-cache g++ make py3-pip libc6-compat

# Set work directory
WORKDIR /app

# Copy package
COPY package*.json ./

# Install deps
RUN npm ci

# Expose port
EXPOSE 3000

# TODO implement build to production

# Dev setup
FROM base as dev

# Environment
ENV ENVIRONMENT=development



# Copy Project
COPY . .

# Run project
CMD ["npm", "run", "dev"]
