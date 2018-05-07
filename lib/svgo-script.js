const config = {
  plugins: [
    { cleanupAttrs: true },
    { removeDoctype: true },
    { removeXMLProcInst: false },
    { removeMetadata: true },
    { removeTitle: true },
    { removeDesc: true },
    { removeXMLNS: false },
    { removeEditorsNSData: true },
    { removeHiddenElems: true },
    { removeEmptyContainers: true },
    { removeViewBox: false },
    { convertStyleToAttrs: true },
    { convertPathData: true },
    { convertTransform: true },
    { removeUnknownsAndDefaults: true },
    { removeNonInheritableGroupAttrs: true },
    { removeUselessStrokeAndFill: true },
    { cleanupIDs: true },
    { cleanupListOfValues: true },
    { collapseGroups: true },
    { removeRasterImages: true },
    { mergePaths: false },
    { convertShapeToPath: false },
    { removeDimensions: true },
    { removeScriptElement: true },
  ]
};

const makeSvg = () => {
  const fs = require('fs');
  const path = require('path');
  const SVGO = require('svgo');
  const outputFolderPath = path.resolve(__dirname, '..', 'src', 'assets', 'imgs', 'game-items', 'min');
  const inputFolderPath = path.resolve(__dirname, '..', 'src', 'assets', 'imgs', 'game-items/');

  const svgo = new SVGO(config);

  fs.readdir(inputFolderPath, (err, elems) => {
    if(err) throw err;

    const files = elems.map(name => {
      const filepath = path.resolve(inputFolderPath, name);

      if(fs.lstatSync(filepath).isFile()) {
        return { filename: name, filepath };
      }

      return;
    })
      .filter(n => n);

    return files.forEach(({ filename, filepath }) => {
      return fs.readFile(filepath, (err, data) => {
        if(err) throw err;

        return svgo.optimize(data, {path: filepath}).then((result) => {
          const outputpath = path.resolve(outputFolderPath, filename);
          const data = result.data;

          return fs.writeFile(outputpath, data, (err) => { if(err) throw err; });
        });
      });
    });
  });
}

(() => {
  return makeSvg();
})();
