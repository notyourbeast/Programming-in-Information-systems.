function getResult(input) {
  const [factorData, multipleData] = input.split(':').map(str => str.trim());
  const factors = factorData.split(' ').map(Number);
  const multiples = multipleData.split(' ').map(Number);
  const result = multiples
    .filter(num => factors.some(f => num % f === 0))
    .reduce((sum, num) => sum + num, 0);

  return `${result} : ${factors.join(' ')} : ${multiples.join(' ')}`;
}

console.log(getResult("3 5 : 1 2 3 4 5 6 7 8 9"));
 