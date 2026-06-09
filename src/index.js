import app from './app.js';
import config from '../config/config.js';

function main() {
    app.listen(config.expressPort);
    console.log('servidor levantado en el ', config.expressPort);
};

main();