module.exports = {
  name: "query",
  ns: "superagent",
  async: true,
  description: "The .query() method accepts objects, which when used with the GET method will form a query-string. The following will produce the path /search?query=Manny&range=1..5&order=desc.",
  phrases: {
    active: "Adding query string"
  },
  ports: {
    input: {
      request: {
        title: "Request",
        type: "Request"
      },
      query: {
        title: "Query",
        type: "object",
        async: true,
        fn: function __QUERY__(data, x, source, state, input, output) {
          var r = function() {
            output({
              request: input.request.query(data)
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