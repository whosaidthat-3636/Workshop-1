# Workshop-1
Link: Refresh page for each loop [https://whosaidthat-3636.github.io/Workshop-1/]

The idea for this particular workshop is to mimic a pool table, everytime the page is refreshed/played with random numbers of balls will appear at random placements

## Tasks
* Make a p5.js sketch using 2D primitive shapes, loops, and random numbers.
* Write your own functions and make calls to these functions in your code.
* Experiment with at least one new item from the from the p5.js documentation


## Documentation

### 1. Setup 
- Take image from Wikipedia to mimic the color for the background
- Put the image through a image color picker 
![image](https://github.com/user-attachments/assets/15eb0aeb-02a7-4cdf-9c8e-792f86385084)


### 2. Balls
- Nested loop
- Max amount of balls to appear is 15 or less
- Ball to appear at randomized coordinates and color
- Having a set scale of 30 
```
function setup() {
  createCanvas(550, 400);

  for (x = 0; x <= 15; x++) {
    ball(random(0, width), random(0, height), 30, color(random(255), random(255), random(255)));
  }
}

function draw() {
   background(98,162,107);}

function ball(x, y , size, color) {
  fill(random(255), random(255), random(255));
noStroke(); 
  ellipse(x, y, size, size);}
```
- However, every refresh I was only getting mere flashes of the balls
- Re-reading the code, putting the background in draw puts it OVER the function for ball
- Correction
```
function setup() {
  createCanvas(550, 400);
  background(98,162,107);
```
- I added the white to the balls to further simulate it
```
function ball(x, y, size, baseColor) {
  fill(255); 
  noStroke();
  ellipse(x, y, size, size);

  fill(baseColor);
  ellipse(x, y, size * 1.015, size * 0.6);
```
- I wanted it to be applied to only a certain amount of balls each run but I couldn't figure it out
- The addition also made it look more like an eye based on the shape which I find to be a dissatisfaction


### 3. Table and instruction
- To give more of the "look" I added the brown exterior
- I also wanted to insure for user's to have an idea to what to do for more results so I added text
```

function draw() {
  fill(100,58,45);
  rect(0, 0, 550, 25);
  rect(0, 375, 550, 25);
  rect(0, 0, 25, 400);
  rect(525, 0, 25, 400);
  
  fill(255);
  text('Refresh page for new results', 10, 20);
}
```




