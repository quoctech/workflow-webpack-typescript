import UserModule from './user.module';

const user = new UserModule('Webpack');
user.name = 'Webpack v5';

console.log('Test', user.name);
user.getInfo();