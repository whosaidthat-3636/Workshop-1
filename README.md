# Workshop-1
Link: Refresh page for each loop 

The idea for this particular workshop is to mimic a pool table, everytime the page is refreshed/played with random numbers of balls will appear at random placements

## Tasks
* Make a p5.js sketch using 2D primitive shapes, loops, and random numbers.
* Write your own functions and make calls to these functions in your code.
* Experiment with at least one new item from the from the p5.js documentation


## Documentation

### 1. Setup 
- Image taken from Wikipedia 
- Put the image through a image color picker to micmic
![image](https://github.com/user-attachments/assets/15eb0aeb-02a7-4cdf-9c8e-792f86385084)



<img width="548" alt="image" src="https://github.com/user-attachments/assets/a36e443a-8f15-4ef4-82f5-da5db060541d" />

With this, I was only getting mere flahses of color everytime. My mistake was having the background fill in the draw function as it would draw OVER the balls. 

<img width="725" alt="image" src="https://github.com/user-attachments/assets/3e4687a5-eb39-4efb-9a3e-f13925dcba4e" />

But I also wanted to keep the ball at a constant scale so that it reflects more like a game of pool. This was a simple fix as all I had to do was change the value of the scale rather than leaving it at a random. 

adding white ellipses for a closer addition but feel like its more eye like
