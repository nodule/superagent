output = function() {

  $.request.end(function(err, res) {

    if(err) {

      cb({ error: err });

    } else {
      cb({
        res: res,
        body: res.body,
        headers: res.headers,
        status: res.status
      });
    }

    // server side and nextTick, could be done is too vroeg
    // server side superagent fails sometimes.
    // the weird thing is, first time it succeeds second time it fails.
    done();

  });

};
