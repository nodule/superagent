module.exports = {
  name: "type",
  ns: "superagent",
  async: true,
  description: "Content type",
  phrases: {
    active: "Content type `{{input.type}}`"
  },
  ports: {
    input: {
      request: {
        title: "Request",
        type: "Request"
      },
      type: {
        title: "Type",
        type: "string",
        async: true,
        fn: function __TYPE__(data, source, state, input, $, output) {
          var r = function() {
            output({
              request: $.write('request', $.request.type($.type))
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