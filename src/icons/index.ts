const context = require.context('./', false, /.svg$/);
export default context.keys().reduce((icons, key) => {
  const name = key.slice(5, -4);
  icons[name] = context(key);
  return icons;
}, {} as { [x: string]: any });
