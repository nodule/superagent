module.exports = {
  name: "accept",
  ns: "superagent",
  async: true,
  description: "Accept types",
  phrases: {
    active: "Accepting type `{{input.type}}`"
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
        fn: function __TYPE__(data, x, source, state, input, output) {
          var r = function() {
            output({
              request: input.request.accept(data)
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