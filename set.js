module.exports = {
  name: "set",
  ns: "superagent",
  description: "Set Header",
  phrases: {
    active: "Setting header field `{{input.name}}`"
  },
  ports: {
    input: {
      request: {
        title: "Request",
        type: "Request"
      },
      name: {
        title: "Name",
        type: "string"
      },
      value: {
        title: "Value",
        type: "string"
      }
    },
    output: {
      request: {
        type: "Request",
        title: "Request"
      }
    }
  },
  fn: function set(input, output, state, done, cb, on) {
    var r = function() {
      output.request = input.request.set(input.name, input.value);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}