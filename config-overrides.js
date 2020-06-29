const path = require('path');
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

module.exports = function(config,env) {
    return Object.assign(
        config,
        override(
            fixBabelImports('import', {
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: 'css'
            }),
            addWebpackAlias({
                '@sirius/assets': path.resolve(__dirname, 'src/assets'),
                '@sirius/components': path.resolve(__dirname, 'src/components'),
                '@sirius/config': path.resolve(__dirname, 'src/config'),
                '@sirius/containers': path.resolve(__dirname, 'src/containers'),
                '@sirius/redux': path.resolve(__dirname, 'src/redux'),
                '@sirius/lib': path.resolve(__dirname, 'src/library'),
                '@sirius/ui': path.resolve(__dirname, 'src/UI'),
                '@sirius/pages': path.resolve(__dirname, 'src/pages'),
            })
        )(config, env)
    );
};