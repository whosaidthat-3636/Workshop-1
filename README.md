# Workshop-1
Link: Refresh page for each loop 

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

<img width="548" alt="image" src="https://github.com/user-attachments/assets/a36e443a-8f15-4ef4-82f5-da5db060541d" />

With this, I was only getting mere flahses of color everytime. My mistake was having the background fill in the draw function as it would draw OVER the balls. 

<img width="725" alt="image" src="https://github.com/user-attachments/assets/3e4687a5-eb39-4efb-9a3e-f13925dcba4e" />

But I also wanted to keep the ball at a constant scale so that it reflects more like a game of pool. This was a simple fix as all I had to do was change the value of the scale rather than leaving it at a random. 

adding white ellipses for a closer addition but feel like its more eye like
