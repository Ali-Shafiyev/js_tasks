let admin = prompt("Who's there?");

if (admin == "Manager") {
  alert("Welcome Admin!");
  let shouldContinue = confirm("Please write password!");
  console.log(shouldContinue);

  if (shouldContinue) {
    let password = prompt("Please write password");
    if (Number(password) == 1903) {
      alert("Welcome!");
    } else if (Number(password) < 1903) {
      alert("Wrong password");
    } else if (Number(password) > 1903) {
      alert("Cancelled");
    }
  }
} else if (admin == "person") {
  alert("I don't know you");
} else if (admin == "manager") {
  alert("Cancelled");
  console.log("Cancelled");
}
