// iteration #0 - GREEN
// class App {
//   sayHello() {
//     return 'Hello World!'
//   }
// }

// iteration #0 - REFACTOR
// class App {
//   sayHello(): string {
//     return 'Hello World!'
//   }
// }

// iteration #1 - GREEN
// class App {
//   sayHello(name?): string {
//     if (name) return 'Hello Forest!';
//     return 'Hello World!'
//   }
// }

// iteration #1 - REFACTOR
// class App {
//   sayHello(name?: string): string {
//     if (name) return 'Hello Forest!';
//     return 'Hello World!'
//   }
// }

// iteration #2 - GREEN
// class App {
//   sayHello(name?: string): string {
//     if (name) return 'Hello ' + name + '!';
//     return 'Hello World!'
//   }
// }

// iteration #2 - REFACTOR (step #1)
// class App {
//   sayHello(name?: string): string {
//     if (!name) name = 'World';
//     return 'Hello ' + name + '!';
//   }
// }

// iteration #2 - REFACTOR (step #2)
// class App {
//   sayHello(name: string = 'World'): string {
//     return 'Hello ' + name + '!';
//   }
// }

// iteration #2 - REFACTOR (step #3)
class App {
  sayHello(name: string = 'World'): string {
    return `Hello ${name}!`;
  }
}
