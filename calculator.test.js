const Calculator = require('./calculator')

describe('Add', () => {
  it('10+20 equal to 30', () => {
    expect(Calculator.add(10,20)).toBe(30)
  });

  it('10+20.5 equal to 30.5', () => {
    expect(Calculator.add(10,20.5)).toBe(30.5)
  });

  it('0.1+0.2 equal to 0.3', () => {
    expect(Calculator.add(0.1,0.2)).toBeCloseTo(0.3)
  });
})

describe('Subtract', () => {
  it('20-10 equal to 10', () => {
    expect(Calculator.subtract(20,10)).toBe(10)
  });

  it('10-20 equal to -10', () => {
    expect(Calculator.subtract(10,20)).toBe(-10)
  });

  it('50-20 equal to 30', () => {
    expect(Calculator.subtract(50,20)).toBe(30)
  });
})

describe('Divide', () => {
  it('20/10 equal to 2', () => {
    expect(Calculator.divide(20,10)).toBe(2)
  });

  it('10/20 equal to 0.5', () => {
    expect(Calculator.divide(10,20)).toBe(0.5)
  });

  it('50/0 equal to Infinity', () => {
    expect(Calculator.divide(50,0)).toBe(Infinity)
  });
})

describe('Multiply', () => {
  it('20*10 equal to 200', () => {
    expect(Calculator.multiply(20,10)).toBe(200)
  });

  it('0.5*0.3 equal to 0.15', () => {
    expect(Calculator.multiply(0.5,0.3)).toBe(0.15)
  });

  it('50*0 equal to 0', () => {
    expect(Calculator.multiply(50,0)).toBe(0)
  });
})