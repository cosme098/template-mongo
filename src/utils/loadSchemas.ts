var glob = require('glob-fs')({ gitignore: true });
import { Connection } from 'mongoose';

export function injectModel(instance: Connection, modelName: string) {
  let file: string = glob
    .readdirSync('../**/*.schema.ts')
    .find((_path: string) =>
      _path.toLocaleLowerCase().includes(modelName.toLocaleLowerCase()),
    );
  if (!file) throw new Error(`The schema ${modelName} not found`);

  file = file.replace('src', '..').replace('.ts', '');

  return import(file).then((_file) => {
    if (!_file)
      throw new Error(
        `The schema ${modelName} not found in this path: ${file}`,
      );
    return instance.model(modelName, _file[modelName]);
  });
}
