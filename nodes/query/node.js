on.input.query = function() {
  output({ request: $.write('request', $.request.query($.query)) } );
};
