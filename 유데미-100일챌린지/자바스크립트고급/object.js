const job = {
  title: "Developer",
  location: "New York",
  salary: 50000,
};

class Jobs {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }
  describe() {
    console.log(` I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}
    `);
  }
}

const developer = new Jobs("developer", "new York", 50000);
console.log(developer);
developer.describe();
