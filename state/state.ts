interface State {
  next(ticket: Ticket): number | null;
  add(ticket: Ticket, quantity: number): void;
}

class Ticket {
  quantity: number;
  private state: State;
  private number: number;
  readonly limit: number;

  constructor(limit: number) {
    this.limit = limit;
    this.quantity = 0;
    this.number = 0;
    this.state = new EmptyState();
  }

  get getNumber() {
    return this.number++;
  }

  set setState(state: State) {
    this.state = state;
  }

  get getState() {
    return this.state;
  }

  next() {
    return this.state.next(this);
  }

  add(quantity: number) {
    return this.state.add(this, quantity);
  }
}

class EmptyState implements State {
  next(ticket: Ticket): number | null {
    return null;
  }

  add(ticket: Ticket, quantity: number) {
    if (quantity < ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new WithDataState();
    } else if (quantity === ticket.limit) {
      ticket.quantity = quantity;
      ticket.setState = new FullState();
    }
  }
}

class WithDataState implements State {
  next(ticket: Ticket) {
    ticket.quantity--;

    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    }

    return ticket.getNumber;
  }

  add(ticket: Ticket, quantity: number) {
    if (ticket.quantity + quantity < ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState = new WithDataState();
    } else if (ticket.quantity + quantity === ticket.limit) {
      ticket.quantity += quantity;
      ticket.setState = new FullState();
    }
  }
}

class FullState implements State {
  next(ticket: Ticket) {
    ticket.quantity--;

    if (ticket.quantity <= 0) {
      ticket.setState = new EmptyState();
    } else {
      ticket.setState = new WithDataState();
    }

    return ticket.getNumber;
  }

  add(ticket: Ticket, quantity: number) {
    console.log("ticket full");
  }
}

const ticket = new Ticket(5);
console.log(ticket.getState);
console.log(ticket.next());
ticket.add(6);
console.log(ticket.getState);
console.log(ticket.next());
ticket.add(4);
console.log(ticket.getState);
console.log(ticket.next());
console.log(ticket.next());
ticket.add(3);
console.log(ticket.getState);
ticket.add(1);
