module.exports = {
  name: "api",
  ns: "superagent",
  description: "Super Agent is light-weight progressive ajax API",
  phrases: {
    active: "Creating superagent {{input.method}}: {{input.url}}"
  },
  ports: {
    input: {
      method: {
        title: "Method",
        type: "string",
        "enum": ["GET",
          "POST",
          "PUT",
          "HEAD",
          "DELETE"
        ],
        "default": "GET"
      },
      url: {
        title: "URL",
        type: "string",
        format: "url"
      },
      withCredentials: {
        title: "With Credentials",
        description: "enables the ability to send cookies from the origin, however only when \"Access-Control-Allow-Origin\" is not a wildcard (\"*\"), and \"Access-Control-Allow-Credentials\" is \"true\"",
        type: "boolean",
        "default": false
      }
    },
    output: {
      request: {
        type: "Request",
        title: "Request"
      }
    }
  },
  dependencies: {
    npm: {
      superagent: require('superagent')
    }
  },
  fn: function api(input, $, output, state, done, cb, on, superagent) {
    var r = function() {
      output.request = $.create(superagent($.method, $.url));
      if ($.withCredentials) {
        output.request.withCredentials();
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}