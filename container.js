const awilix = require('awilix');
const Lifetime = awilix.Lifetime;

module.exports = () => {
    const container = awilix.createContainer();

    container.register('container', container);

    container.loadModules([
        'services/**/*.js'
    ], {
        formatName: 'camelCase',
        resolverOptions: {
            lifetime: Lifetime.SINGLETON
        }
    });

    return container;
};
