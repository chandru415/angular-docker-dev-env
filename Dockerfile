FROM node:14-stretch-slim as build-step
RUN npm install -g @angular/cli 
WORKDIR /app
# copy packages files to container destination
COPY ./package*.json ./
# copy, root directory
COPY . .

# Stage 2
FROM build-step as Dev
ENV NODE_ENV=development
RUN npm ci
EXPOSE 4200

CMD ng serve --host 0.0.0.0