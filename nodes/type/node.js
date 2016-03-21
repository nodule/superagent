on.input.type = function() {
  output( { request: $.write('request', $.request.type($.type)) });
};
