"use strict";
global.window = global; // hack: ensure openpgp does not think we are running in nodejs (we arent)
global.openpgp = require('./lib/openpgp.js');
delete global.window; // end hack
var application = require("application");
application.mainModule = "main-page";
application.cssFile = "./app.css";
application.start();
//# sourceMappingURL=app.js.map