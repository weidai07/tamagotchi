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

  test('should get ded if the health level drops to or below zero', () => {
    düd.healthLevel = 0;
    expect(düd.isDed()).toEqual(true);
  });

  test('should be unable to feed snack if hunger is not low enough', () => {
    expect(düd.feedSnack()).toEqual("Too Full!");
  });

  test('should increase food level if fed snack', () => {
    jest.advanceTimersByTime(300000);
    let temp = düd.foodLevel;
    düd.feedSnack();
    expect(düd.foodLevel).toBeGreaterThan(temp);
  });

  test('should be unable to feed meal if hunger is not low enough', () => {
    expect(düd.feedMeal()).toEqual("Too Full!");
  });

  test('should increase food level if fed meal', () => {
    jest.advanceTimersByTime(300000);
    let temp = düd.foodLevel;
    düd.feedMeal();
    expect(düd.foodLevel).toBeGreaterThan(temp);
  });

  test('should be unable to play if play is not low enough', () => {
    expect(düd.play()).toEqual("düd doesn't want to play right now.");
  });

  test('should increase play level if played with', () => {
    jest.advanceTimersByTime(300000);
    let temp = düd.playLevel;
    düd.play();
    expect(düd.playLevel).toBeGreaterThan(temp);
  });

  test('should be unable to nap if rest is not low enough', () => {
    expect(düd.nap()).toEqual("düd isn't tired.");
  });

  test('should increase rest level if napped', () => {
    jest.advanceTimersByTime(500000);
    let temp = düd.restLevel;
    düd.nap();
    expect(düd.restLevel).toBeGreaterThan(temp);
  });

  test('should be unable to sleep if rest is not low enough', () => {
    expect(düd.sleep()).toEqual("düd isn't tired enough to go to bed.");
  });

  test('should increase rest level if slept', () => {
    jest.advanceTimersByTime(1000000);
    let temp = düd.restLevel;
    düd.sleep();
    expect(düd.restLevel).toBeGreaterThan(temp);
  });

  test('should decrease health level if any stat is below 35', () => {
    jest.advanceTimersByTime(1000000);
    expect(düd.healthLevel).toBeLessThan(100);
  });

  test('should increase health if stats are above 35 and health is below 100', () =>{
    düd.healthLevel = 70;
    jest.advanceTimersByTime(5001);
    expect(düd.healthLevel).toEqual(71);
    jest.advanceTimersByTime(5001);
    expect(düd.healthLevel).toEqual(72);
  });

  test('should change hadMedicine to false if health reaches 100', () => {
    düd.hadMedicine = true; 
    düd.healthLevel = 99;
    jest.advanceTimersByTime(5000);
    expect(düd.healthLevel).toEqual(100);
    expect(düd.hadMedicine).toEqual(false);
  });

});