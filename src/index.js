import nexusdk from 'nexusdk';
import Hook from './Hook';

const hook = new Hook();

nexusdk.on('start', ({ port }) => {
  hook.setProperties({ port }, nexusdk.sendMessage);
  hook.start();
});

nexusdk.on('stop', () => {
  hook.stop();
});

nexusdk.on('exit', () => {
  hook.stop();
  process.exit(1);
});

