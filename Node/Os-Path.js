const os = require('os');
const path = require('path');

console.log(os.platform());
console.log(os.arch());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.type());
console.log(os.uptime());
console.log(os.userInfo());
console.log(os.homedir());
console.log(os.networkInterfaces());
console.log(os.cpus());

//Path functions
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.join('/foo', 'bar', 'baz/asdf')); // '/foo/bar/baz/asdf'
console.log(path.resolve('foo', 'bar')); // '/current/working/directory/foo/bar'
console.log(path.normalize('/foo/bar//baz/..')); // '/foo/bar'
console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('bar/baz'));  // false
console.log(path.relative('/foo/bar', '/foo/bar/baz/qux')); // 'baz/qux'
console.log(path.parse('/home/user/file.txt'));
console.log(path.format({
  dir: '/Users/gerald/project',
  base: 'file.txt'
}));
