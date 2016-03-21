output.request = $.create(superagent($.method, $.url));
if($.withCredentials) {
  output.request.withCredentials();
}
