module.exports = function createFileMap(files) {
  var map = {};

  files = files instanceof Object ? files : {
    '': files
  };

  for (var target in files) {

    map[target] = files[target];
  }
  return map;
};
