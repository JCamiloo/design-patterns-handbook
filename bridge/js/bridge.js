class EncoderTextAbstraction {
  constructor(encoder) {
    this.encoder = encoder;
  }

  encode(str) {
    return this.encoder.encode(str);
  }

  decode(str) {
    return this.encoder.decode(str);
  }
}


class Base64EncoderImplementor {
  encode(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }

  decode(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }
}

class HTMLEncoderImplementor {
  encode(str) {
    return str.split(".").reduce((ac, e) => ac + `<p>${e.trim()}</p>`, "")
  }

  decode(str) {
    return str.split("</p>").reduce((ac, e) => e !== "" ? (ac + e.replace("<p>", "") + ". ") : ac + "", "" )
  }
}


const encoder1 = new EncoderTextAbstraction(new Base64EncoderImplementor());
console.log(encoder1.encode('hi there!'))
console.log(encoder1.decode('aGkgdGhlcmUh'))


const encoder2 = new EncoderTextAbstraction(new HTMLEncoderImplementor());
console.log(encoder2.encode("This is a text. This is other one. This is one more"))
console.log(encoder2.decode("<p>This is a text</p><p>This is other one</p><p>This is one more</p>"))
