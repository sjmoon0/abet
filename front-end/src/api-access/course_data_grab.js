// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

const REMOTE_MONGO_IP="0.0.0.0";

// Make the actual CORS request.
export function makeCorsGETRequest(path,data,action) {
  // This is a sample server that supports CORS.
  var url = `http://${REMOTE_MONGO_IP}:3030/${path}`;

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    //alert('Response from CORS request to ' + url + ': ' + text);
    action(JSON.parse(text));
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send(data);
}
