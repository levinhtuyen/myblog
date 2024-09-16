exports = {   apps: [
  {
    name: 'qrcode-custom.com',
    exec_mode: 'cluster',
    einstances: '1',
    script: './.output/server/index.mjs',
    env: {
      PORT: 4301
    }
  },
],
};
