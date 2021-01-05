const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('checks the callback of the UpperCase function', (done) => {
  uppercase('Hello', (callback) => {
    expect(callback).toBe('HELLO');
    done();
  });
});