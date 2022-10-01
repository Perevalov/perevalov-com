# build environment
FROM node as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts --silent
COPY . ./
ENV NODE_OPTIONS=--openssl-legacy-provider
ENV PUBLIC_URL=http://perevalov.com
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx/certs /etc/nginx/certs
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
