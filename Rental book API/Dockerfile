FROM node:18.17.0

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=development
ENV PORT=5000
ENV DATABASE=mongodb+srv://ayushmore:<PASSWORD>@cluster0.t1ebzbt.mongodb.net/
ENV DATABASE_PASSWORD=xJ2AVerf7eReJPoo

ENV JWT_SECRET=my-ultra-secure-and-ultra-long-secret
ENV JWT_EXPIRES_IN=90d
ENV JWT_COOKIE_EXPIRES_IN=90

EXPOSE 5000

CMD ["npm","start"]