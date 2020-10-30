const path = require('path')//각 파일들에 접근을 다 해주어야 한다 nodejs 내장 모듈
const {fileLoader,mergeTypes} = require('merge-graphql-schemas')

const typesArray = fileLoader(path.join(__dirname, '**/*.graphql'));

module.exports = mergeTypes(typesArray);