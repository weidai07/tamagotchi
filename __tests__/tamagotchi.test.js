import { Tamagotchi } from './../src/tamagotchi.js';

describe('Tamagotchi', () => {
  jest.useFakeTimers();
  let düd;

  beforeEach(function() {
    düd = new Tamagotchi("düd");
    düd.setHunger();
    düd.setPlay();
    düd.setRest();
    düd.setHealth();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(düd.name).toEqual("düd");
    expect(düd.foodLevel).toEqual(100);
  });

  test('should have a food level of 97 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(30001);
    expect(düd.foodLevel).toEqual(97);
  });

  test('should get ded if the food level drops to or below zero', function() {
    düd.foodLevel = 0;
    expect(düd.isDed()).toEqual(true);
  });

  test('should be unable to feed if hunger is not low enough', function() {
    expect(düd.feed()).toEqual("Too Full!");
  });

  test('should increase food level if fed', function() {
    jest.advanceTimersByTime(300000);
    let temp = düd.foodLevel;
    düd.feed();
    expect(düd.foodLevel).toBeGreaterThan(temp);
  });

  test('should be unable to play if play is not low enough', function() {
    expect(düd.play()).toEqual("düd doesn't want to play right now.");
  });

  test('should increase play level if played with', function() {
    jest.advanceTimersByTime(300000);
    let temp = düd.playLevel;
    düd.play();
    expect(düd.playLevel).toBeGreaterThan(temp);
  });

  test('should be unable to nap if rest is not low enough', function() {
    expect(düd.nap()).toEqual("düd isn't tired.");
  });

  test('should increase rest level if napped', function() {
    jest.advanceTimersByTime(500000);
    let temp = düd.restLevel;
    düd.nap();
    expect(düd.restLevel).toBeGreaterThan(temp);
  });

});