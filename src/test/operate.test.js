import operate from '../logic/operate';

describe('Operate', () => {
  it('Should perform addition', () => {
    const operation = operate('6', '7', '+');
    expect(operation).toBe('13');
  });
  it('Should perform subtraction', () => {
    const operation = operate('10', '3', '-');
    expect(operation).toBe('7');
  });

  it('Should perform modulus', () => {
    const operation = operate('50', '10', '%');
    expect(operation).toBe('0');
  });

  it('Should perform division', () => {
    const operation = operate('30', '3', '÷');
    expect(operation).toBe('10');
  });
});
