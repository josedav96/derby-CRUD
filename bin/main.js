const path = require('path');
const derbyStarter = require('derby-starter');

const port = process.env.port || 3001;

derbyStarter.run(
    path.join(__dirname,'..','app'),
    {
        port,
        static: path.join(__dirname, '..', 'public')
    }
);


