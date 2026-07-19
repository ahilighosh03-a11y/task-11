const P=42200;
const r=0.058;
const n=4;
const t=3;

const a= P*((1+(r/n))**(n*t));
const compoundInterest= Math.round(a-P);
console.log(a);
console.log(compoundInterest);
