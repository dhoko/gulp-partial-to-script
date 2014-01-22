/* jshint node: true */
'use strict';

var es = require('event-stream');

/**
 * Get the content of your partial and add <script> before and after him
 * Default : id="viewname.toLowerCase() + -viewtpl"
 * Default : It works for .html partials
 * @param  {Object} config {suffix : Suffix for the ID, ext: ".html" }
 */
var partialToScript = function(config, data) {

  config        = config || {};
  config.suffix = config.suffix || '-viewtpl';
  config.ext    = config.ext || '.html';

  return es.map(function(file, cb) {

    var fileName  = file.path.replace(file.base,'').replace(config.ext,''),
        scriptOpen = '<script type="text/template" id="'+fileName.toLowerCase()+config.suffix+'">';

    file.contents = Buffer.concat([
      new Buffer(scriptOpen, data),
      file.contents,
      new Buffer('</script>', data)
    ]);
    cb(null, file);
  });
};

module.exports = partialToScript;
