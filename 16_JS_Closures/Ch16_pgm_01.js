function outer() {
    let count = 0;
  
    function inner() {
      count++;
      console.log(`Count: ${count}`);
    }
  
    return inner;
  }
  
  const counter = outer();
  counter(); // Count: 1
  counter(); // Count: 2
  counter(); // Count: 3

  function outer() {
    let x = 10;
  
    function inner1() {
      console.log(`x: ${x}`);
    }
  
    function inner2() {
      x += 10;
      console.log(`x: ${x}`);
    }
  
    function inner3() {
      x -= 5;
      console.log(`x: ${x}`);
    }
  
    return { inner1, inner2, inner3 };
  }
  
  const obj = outer();
  obj.inner1(); // x: 10
  obj.inner2(); // x: 20
  obj.inner3(); // x: 15

  function personAccount(firstname, lastname) {
    let incomes = new Map();
    let expenses = new Map();
  
    function totalIncome() {
      let total = 0;
      for (const [key, value] of incomes) {
        total += value;
      }
      return total;
    }
  
    function totalExpense() {
      let total = 0;
      for (const [key, value] of expenses) {
        total += value;
      }
      return total;
    }
  
    function accountInfo() {
      console.log(`Account Info: ${firstname} ${lastname}`);
      console.log(`Incomes: ${Array.from(incomes.keys())}`);
      console.log(`Expenses: ${Array.from(expenses.keys())}`);
    }
  
    function addIncome(description, amount) {
      incomes.set(description, amount);
    }
  
    function addExpense(description, amount) {
      expenses.set(description, amount);
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      totalIncome,
      totalExpense,
      accountInfo,
      addIncome,
      addExpense,
      accountBalance,
    };
  }
  
  const johnDoe = personAccount('John', 'Doe');
  johnDoe.addIncome('Salary', 5000);
  johnDoe.addIncome('Investment', 1000);
  johnDoe.addExpense('Rent', 1500);
  johnDoe.addExpense('Food', 500);
  
  johnDoe.accountInfo();
  // Account Info: John Doe
  // Incomes: ["Salary", "Investment"]
  // Expenses: ["Rent", "Food"]
  
  console.log(`Total Income: ${johnDoe.totalIncome()}`); // Total Income: 6000
  console.log(`Total Expense: ${johnDoe.totalExpense()}`); // Total Expense: 2000
  console.log(`Account Balance: ${johnDoe.accountBalance()}`); // Account Balance: 4000