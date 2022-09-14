import calculate from '../logic/calculate';

describe('Calculator', () => {
  it('Should perform basic addition', () => {
    const operation = calculate({ total: 5, next: 5, operation: '+' }, '=');
    expect(operation.total).toBe('10');
  });

  it('should perform basic subtraction', () => {
    const subtract = calculate({ total: 9, next: 5, operation: '-' }, '=');
    expect(subtract.total).toBe('4');
  });

  it('Should reset the screen', () => {
    const reset = calculate({ total: 7, next: 5, operation: null }, 'AC');
    expect(reset).toEqual({ total: null, next: null, operation: null });
  });
});
