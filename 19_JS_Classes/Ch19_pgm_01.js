class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  
    sleep() {
      console.log(`${this.name} is sleeping.`);
    }
  
    walk() {
      console.log(`${this.name} is walking.`);
    }
  }

  class Dog extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
  
    bark() {
      console.log(`${this.name} is barking.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
  
    meow() {
      console.log(`${this.name} is meowing.`);
    }
  }

  class Dog extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
  
    eat() {
      console.log(`${this.name} is eating dog food.`);
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
  
    eat() {
      console.log(`${this.name} is eating cat food.`);
    }
  }

  class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((a, b) => a + b, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sortedData = this.data.sort((a, b) => a - b);
      const middleIndex = Math.floor(sortedData.length / 2);
      return sortedData.length % 2 === 0
        ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
        : sortedData[middleIndex];
    }
  
    mode() {
      const frequencyMap = {};
      this.data.forEach((value) => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      });
      const maxFrequency = Math.max(...Object.values(frequencyMap));
      const modes = Object.keys(frequencyMap).filter((key) => frequencyMap[key] === maxFrequency);
      return { mode: modes, count: maxFrequency };
    }
  
    var() {
      const mean = this.mean();
      return this.data.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / this.count();
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    freqDist() {
      const frequencyMap = {};
      this.data.forEach((value) => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      });
      const frequencyDistribution = Object.keys(frequencyMap).map((key) => [
        (frequencyMap[key] / this.count()) * 100,
        parseInt(key),
      ]);
      return frequencyDistribution;
    }
  }
  
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count()); // 25
  console.log('Sum: ', statistics.sum()); // 744
  console.log('Min: ', statistics.min()); // 24
  console.log('Max: ', statistics.max()); // 38
  console.log('Range: ', statistics.range()); // 14
  console.log('Mean: ', statistics.mean()); // 30
  console.log('Median: ', statistics.median()); // 29
  console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
  console.log('Variance: ', statistics.var()); // 17.5
  console.log('Standard Deviation: ', statistics.std()); // 4.2
  console.log('Variance: ', statistics.var()); // 17.5
  console