const str = `
010-1234-5678
tngur0716@gmail.com
https://regexr.com/
The quick brown fox jumps over the lazy dog.
abbccccddddd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`;

// const regexp = new RegExp("the", "gi");

// console.log(regexp.test(str));

// console.log(str.replace(regexp, "AAA"));

console.log(str.match(/(?<=@).{1,}/g));
