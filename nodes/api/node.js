output.request = superagent($.method, $.url);
if($.withCredentials) {
  output.request.withCredentials();
}
