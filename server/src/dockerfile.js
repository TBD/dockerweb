import tar from 'tar-stream';

var pack = tar.pack();

pack.entry({ name: 'Dockerfile' }, `
FROM alpine:latest
RUN apk add nodejs-current
RUN apk add npm
CMD ["/bin/sh"]
`);

pack.finalize();

export default pack;
