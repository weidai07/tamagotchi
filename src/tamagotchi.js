export class Tamagotchi {

  constructor(name) {
    this.name = name;
    this.foodLevel = 100;
    this.playLevel = 100;
    this.restLevel = 100;
    this.healthLevel = 100;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 10000);
  }

  setPlay() {
    setInterval(() => {
      this.playLevel--;
    }, 9000);
  }

  setRest() {
    setInterval(() => {
      this.restLevel -= 5;
    }, 80000);
  }

  setHealth() {
    if ((this.foodLevel || this.playLevel || this.restLevel) < 35) {
      setInterval(() => {
        this.healthLevel--;
      }, 8000);
    } else if (((this.foodLevel && this.playLevel && this.restLevel) >= 35) && this.healthLevel < 100) {
      setInterval(() => {
        this.healthLevel++;
      }, 7500);
    }
  }
  
  isDed() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    if (this.foodLevel > 82) {
      return "Too Full!";
    } else {
      this.foodLevel += Math.floor((Math.random() * 5) + 18);
      if (this.foodLevel > 100) {
        this.foodLevel = 100;
      }
    }
  }

  play() {
    if (this.playLevel > 82) {
      return this.name + " doesn't want to play right now.";
    } else {
      this.playLevel += Math.floor((Math.random() * 5) + 18);
      if (this.playLevel > 100) {
        this.playLevel = 100;
      }
    }
  }

  nap() {
    if (this.restLevel > 80) {
      return this.name + " isn't tired."
    } else {
      this.restLevel += Math.floor((Math.random() * 2) + 20);
      if (this.restLevel > 100) {
        this.restLevel = 100;
      }
    }
  }

  sleep() {
    if (this.restLevel > 40) {
      return this.name + " isn't tired enough to go to bed."
    } else {
      this.restLevel += Math.floor((Math.random() * 12) + 50);
      if (this.restLevel > 100) {
        this.restLevel = 100;
      }
    }
  }
}
