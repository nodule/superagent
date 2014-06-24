output = function() {

  input.request.end(function(err, res) {

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

  });

};
