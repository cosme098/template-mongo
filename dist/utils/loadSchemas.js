"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.injectModel = void 0;
var glob = require('glob-fs')({ gitignore: true });
function injectModel(instance, modelName) {
    let file = glob
        .readdirSync('../**/*.schema.ts')
        .find((_path) => _path.toLocaleLowerCase().includes(modelName.toLocaleLowerCase()));
    if (!file)
        throw new Error(`The schema ${modelName} not found`);
    file = file.replace('src', '..').replace('.ts', '');
    return Promise.resolve(`${file}`).then(s => require(s)).then((_file) => {
        if (!_file)
            throw new Error(`The schema ${modelName} not found in this path: ${file}`);
        return instance.model(modelName, _file[modelName]);
    });
}
exports.injectModel = injectModel;
//# sourceMappingURL=loadSchemas.js.map