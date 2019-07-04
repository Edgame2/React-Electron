const os = require('os');
const storage = require('electron-json-storage');

const path = storage.setDataPath(os.tmpdir());

module.exports.path = path;