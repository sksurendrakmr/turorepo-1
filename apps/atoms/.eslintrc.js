module.exports = {
    ...require('@surikmr1/config/eslint-react.js'),
    parserOptions:{
        tsconfigRootDir:__dirname,
        project: ['./tsconfig.json'],
    },
}