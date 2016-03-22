module.exports = {
  name: "send",
  ns: "superagent",
  async: true,
  description: "Send",
  phrases: {
    active: "Sending"
  },
  ports: {
    input: {
      request: {
        title: "Request",
        type: "Request"
      },
      "in": {
        title: "Data",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            output({
              request: $.write('request', $.request.send($.in))
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      request: {
        type: "Request",
        title: "Request"
      }
    }
  },
  state: {}
}