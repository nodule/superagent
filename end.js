module.exports = {
  name: "end",
  ns: "superagent",
  description: "End request",
  phrases: {
    active: "Starting request"
  },
  ports: {
    input: {
      request: {
        title: "Request",
        type: "function"
      }
    },
    output: {
      error: {
        type: "Error",
        title: "Error"
      },
      res: {
        type: "Response",
        title: "Response"
      },
      body: {
        type: "string",
        title: "Body"
      },
      headers: {
        type: "string",
        title: "Headers"
      },
      status: {
        type: "string",
        title: "Status"
      }
    }
  },
  on: {},
  fn: function end(input, $, output, state, done, cb, on) {
    var r = function() {
      $.request.end(function(err, res) {
        if (err) {
          output({
            error: $.create(err)
          });
        } else {
          output({
            res: $.create(res),
            body: $.create(res.body),
            headers: $.create(res.headers),
            status: $.create(res.status)
          });
        }

        // server side and nextTick, could be done is too vroeg
        // server side superagent fails sometimes.
        // the weird thing is, first time it succeeds second time it fails.
        done();
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}