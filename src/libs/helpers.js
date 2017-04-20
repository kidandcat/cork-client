let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

let multiStyle = function() {
  let args = arguments;
  let style = arguments[0];
  let out = {};

  for (var p in args) {
    if (args.hasOwnProperty(p)) {
      if (args[p] !== style) {
        out = Object.assign(out, style[args[p]]);
      }
    }
  }

  return out;
}

let uid = function() {
  var text = "J";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export {
  isNumber,
  multiStyle,
  uid
};
