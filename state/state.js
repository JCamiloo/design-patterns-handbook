class DocumentContext {
  constructor() {
    this.content = "";
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }
}

class BlankState {
  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }
}

class WithContentState {
  write(documentContext, text) {
    documentContext.content += " " + text;
  }
}

const doc = new DocumentContext();
doc.write("Starting text");
doc.write("Some description");
doc.write("Additional text");

console.log(doc.content);