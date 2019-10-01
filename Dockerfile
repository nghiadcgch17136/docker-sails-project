FROM node:10-alpine

WORKDIR /usr/src/app
COPY ./ /usr/src/app

RUN npm install
RUN npm install sails -g
RUN npm i -g nodemon

# ENTRYPOINT [ "./wait.sh" ]

CMD ["nodemon", "sails","lift"]