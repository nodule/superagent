output.request = superagent(input.method, input.url);
output.request.redirects(input.redirects);
if(input.withCredentials) {
  output.request.withCredentials();
}
