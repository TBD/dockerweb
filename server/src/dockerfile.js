import tar from 'tar-stream';

var pack = tar.pack();

pack.entry({ name: 'Dockerfile' }, `
FROM alpine:latest

CMD ["/bin/sh"]
`);

pack.finalize();

export default pack;
