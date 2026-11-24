function divide(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Inputs must be valid numbers.');
  }

  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }

  return a / b;
}

module.exports = divide;