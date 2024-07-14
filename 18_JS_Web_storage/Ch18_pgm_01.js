// Get the values from the user
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const age = parseInt(prompt("Enter your age:"));
const country = prompt("Enter your country:");
const city = prompt("Enter your city:");

// Store the values in localStorage
localStorage.setItem("firstName", firstName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("age", age);
localStorage.setItem("country", country);
localStorage.setItem("city", city);

// Create the student object
const student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript"],
    country: "USA",
    enrolled: true,
  };
  
  // Store the student object in localStorage
  localStorage.setItem("student", JSON.stringify(student));

  // Create the personAccount object
const personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: new Map(),
    expenses: new Map(),
  
    totalIncome: function() {
      let total = 0;
      for (const [income, amount] of this.incomes) {
        total += amount;
      }
      return total;
    },
  
    totalExpense: function() {
      let total = 0;
      for (const [expense, amount] of this.expenses) {
        total += amount;
      }
      return total;
    },
  
    accountInfo: function() {
      return `Account Info: ${this.firstName} ${this.lastName}`;
    },
  
    addIncome: function(income, amount) {
      this.incomes.set(income, amount);
    },
  
    addExpense: function(expense, amount) {
      this.expenses.set(expense, amount);
    },
  
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    },
  };
  
  // Example usage:
  personAccount.addIncome("Salary", 5000);
  personAccount.addExpense("Rent", 1500);
  console.log(personAccount.accountBalance()); // Output: 3500

  