FROM alpine:edge
RUN apk add nodejs-current
RUN apk add npm

WORKDIR /opt/dockerweb

COPY server/package.json .

RUN apk add --no-cache python make gcc g++ \
    && npm install \
    && apk del python make gcc g++ \
    ;

COPY server/ .

EXPOSE 7777

VOLUME /var/run/docker.sock

CMD ["npm", "start"]

ENTRYPOINT ["npm"]
