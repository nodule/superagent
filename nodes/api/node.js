output.request = superagent(input.method, input.url);
if(input.withCredentials) {
  output.request.withCredentials();
}
