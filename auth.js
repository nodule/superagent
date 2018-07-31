module.exports = {
  name: "auth",
  ns: "superagent",
  description: "Set Authorization field value with `user` and `pass`",
  phrases: {
    active: "Setting Authorization field"
  },
  ports: {
    input: {
      request: {
        title: "Request",
        type: "function"
      },
      user: {
        title: "User",
        type: "string"
      },
      pass: {
        title: "Password",
        type: "string",
        format: "password"
      }
    },
    output: {
      request: {
        type: "Request",
        title: "Request"
      }
    }
  },
  fn: function auth(input, $, output, state, done, cb, on) {
    var r = function() {
      output.request = $.write('request', $.request.auth($.user, $.pass));
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}