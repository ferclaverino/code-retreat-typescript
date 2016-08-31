// iteration #0 - RED
describe('Given the simplest app', () => {
  var app = new App();
  it('should say hello', () => {
    expect(app.sayHello()).toBe('Hello World!');
  });
  // iteration #1 - RED
  it('should say hello to Forest', () => {
    expect(app.sayHello('Forest')).toBe('Hello Forest!');
  });
  // iteration #2 - RED
  it('should say hello to Gump', () => {
    expect(app.sayHello('Gump')).toBe('Hello Gump!');
  });
});
