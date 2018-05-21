import { wrapHook } from 'nexusdk';
import Hook from './Hook';

const hook = new Hook();

export default wrapHook((properties, messages) => {
  const { trigger } = messages;
  const { port } = properties;

  hook.setProperties({ port }, trigger);
  hook.start();
});
