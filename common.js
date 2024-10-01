// Retrieve the value of a URL parameter defined by the name parameters.
// Optionally return a default value if that parameter name was not found
// in the URL.
function getParameterByName(name, opt_default) {
  if (opt_default === null) {
    opt_default = "";
  }
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#/]*)"),
      results = regex.exec(location.search);
  return results === null ?
      opt_default :
      decodeURIComponent(results[1].replace(/\+/g, " "));
}
