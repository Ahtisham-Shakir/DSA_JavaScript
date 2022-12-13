// Head recursions will wait in function stack memory until the post recursion code statements are executed which causes a latency in overall results, whereas tail recursions will be terminated in function stack over execution.

function print(n) {
  console.log(n);
  if (n > 0) {
    print(n - 1);
  }
  //   console.log(n)
}

print(5);
