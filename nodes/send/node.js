on.input.in = function() {
  output( { request: $.write('request', $.request.send($.in)) });
};
