output = function() {
  $.request.end(function(err, res) {
    if(err) {
      cb({ error: $.create(err) });
    } else {
      cb({
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
};
