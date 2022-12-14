let n = 5; 
let b = "";

for (i=1;i<=n;i++) {
  for (j=1;j<=n-i+1;j++) {
    b+=j;
  }
  b+="\n";
}
console.log(b);