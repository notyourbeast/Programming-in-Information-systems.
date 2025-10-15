let parse = (i) => {
  o = parseInt(i);
  if (isNaN(o)) throw "NaN";
  return o;
};

//Create a modified version of ex4 that prepends "corrupt" where an error occurs

//Examples ()
// 2 3 5 67
// corrupt : 2 3 5 67

//Actually this one will not result in an error unless you throw one as in parse(i) above:
// 3 5 hello: 1 2 3 4 5 6 7 8 9
// corrupt : 3 5 hello: 1 2 3 4 5 6 7 8 9

//Create a further version that will output the answer omitting corrupted values
//or "corrupt" if it cannot be resolved

// 3 5 hello: 1 2 3 4 5 6 7 8 9
// 23 : 3 5 hello: 1 2 3 4 5 6 7 8 9

//this cannot be fixed - actually this is the only one that will throw errors
// 2 3 5 67
// corrupt : 2 3 5 67

function getResult(input) {
  const [factorData, multipleData] = input.split(":").map((str) => str.trim());

  const factors = factorData ? factorData.split(" ").map(Number) : false;

  console.log(factors);
  const multiples = multipleData ? multipleData.split(" ").map(Number) : false;
  try {
    if (factors.some((val) => isNaN(val))) {
      throw new Error("corrupt");
    }
    if (!factorData || !multipleData) {
      throw new Error("corrupt");
    }

    const result = multiples
      .filter((num) => factors.some((f) => num % f === 0))
      .reduce((sum, num) => sum + num, 0);

    return `${result} : ${factors.join(" ")} : ${multiples.join(" ")}`;
  } catch (error) {
    return `${error.message} : ${factors ? factors.join(" ") : ""}  ${
      multiples ? multiples.join(" ") : ""
    }`;
  }
}

console.log(getResult("3 5 jaswant:1 2 3 4 5 6 7 8 9"));
