'use strict';

        exports.handler = (event, context, callback) => {
            const request = event.Records[0].cf.request;
            const headers = request.headers;
            console.log(`Request uri before "${request.uri}"`);
            if (request.uri === '/can' || request.uri === '/us') {
               request.uri=request.uri+"/index.html";
                   console.log(`Request uri set to "${request.uri}"`);
                callback(null, request);
                return;
            }
            console.log(`Request uri set to "${request.uri}"`);
            callback(null, request);
        };
