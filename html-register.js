const fs = require('fs')
const cache = {}
require.extensions['.html'] = function(module, filename) {
  // change time
  const {ctimeMs} = fs.statSync(filename)
  if (cache[filename] && cache[filename].ctimeMs === ctimeMs) {
    module.exports = cache[filename].content
  } else {
    const content = fs.readFileSync(filename, {
      encoding: 'utf8'
    })
    // set cache
    cache[filename] = {
      content,
      ctimeMs
    }
    module.exports = content
  }
}