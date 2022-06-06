FROM node as build
WORKDIR /home/dwi_front
COPY package*.json ./

RUN npm i -g @quasar/cli
RUN npm init quasar
RUN npm install

COPY . ./
RUN quasar build

FROM steebchen/nginx-spa:stable
COPY --from=build /home/dwi_front/dist/spa /app
COPY --from=build /home/dwi_front/dist/spa/ /home/dwi_front/dist/
