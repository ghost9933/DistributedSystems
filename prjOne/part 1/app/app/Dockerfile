# Stage 1: Build environment
FROM node:20-alpine AS build-stage

WORKDIR /app

# Copy package.json and yarn.lock to install dependencies
COPY package.json yarn.lock ./

# Install dependencies for building the application
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn build

# Stage 2: Runtime environment
FROM node:20-alpine AS runtime-stage

WORKDIR /app

# Install a lightweight HTTP server
RUN yarn global add serve

# Copy built artifacts from the build stage to the runtime stage
COPY --from=build-stage /app/build /app/build

# Expose port 5000 for the server
EXPOSE 5000

# Start the server
CMD ["serve", "-s", "build", "-l", "5000"]
