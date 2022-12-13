// in Indirect recursion several functions depend upon one another for example function A calls function B which again call function A.

let money = 100;
let totalApple = 0;

function buyApple(x) {
  if (x > 0) {
    console.log(`I have ${x} rupees and ${totalApple} apples`);
    buyMore(x);
  } else {
    console.log("I don't have money", totalApple);
  }
}

function buyMore(x) {
  totalApple++;
  buyApple(x - 10);
}

buyApple(money);
