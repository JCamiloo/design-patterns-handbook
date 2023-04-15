interface Strategy {
  login(user: string, password: string): boolean;
}

export class LoginContext {
  constructor(private strategy: Strategy) {}

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string) {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements Strategy {
  login(user: string, password: string): boolean {
    if (user === 'admin' && password === 'pass') {
      return true;
    }

    return false;
  }
}

class LoginGoogleStrategy implements Strategy {
  login(user: string, password: string): boolean {
    if (user === 'user' && password === 'pass') {
      return true;
    }

    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
const authGoogle = new LoginContext(new LoginGoogleStrategy());
console.log(auth.login('admin', 'pass'));
console.log(authGoogle.login('admin', 'pass'));
