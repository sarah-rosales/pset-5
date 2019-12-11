window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFaceStaff;
    document.getElementById("pyramid").onclick = drawPyramid;

}

/*
 * Exercise 1.
 */

const sayHello = function() {

  let sign = prompt("Message:");
  let len = null;

  if (sign !== null) {
    len = sign.length;

    while (sign.length >= 50) {
      alert("Your message is too long. Keep it under 50 characters.");
      sign = prompt("Message:");
    }
  }

  const ctx = document.getElementById("student-canvas-1").getContext("2d");
    ctx.font = "48px sans-serif";
    ctx.clearRect(0, 0, 1024, 128);
    if (sign !== null) ctx.strokeText(sign, 30, 70);

}
/*
 * Exercise 2.
 */

const drawRectangle = function() {
  const ctx = document.getElementById("student-canvas-2").getContext("2d");
  const width = 1024;
  const height = 512;
  let rect_width = prompt("Width:");
  let rect_height = prompt("Height:");
  let x_coordinate = prompt("X:");
  let y_coordinate = prompt("Y:");

  while (rect_width <= 1 && rect_width >= width) {
    alert("Your width must be between 1 and 1024.");
    rect_width = prompt("Width:");
  }

  while (Number.isNaN(rect_width) && !Number.isInteger(rect_width)) {
    alert("One of your values is not a number.");
    rect_width = prompt("Width:");
  }

  while (rect_height <= 1 && rect_height >= height) {
    alert("Your height must be between 1 and 1024.");
    rect_height = prompt("Height:");
  }

  while (Number.isNaN(rect_height) && !Number.isInteger(rect_height)) {
    alert("One of your values is not a number.");
    rect_height = prompt("height:");
  }

  while (x_coordinate <= 1 && x_coordinate >= width) {
    alert("Your x-coordinate must be between 1 and 1024.");
    x_coordinate = prompt("X:");
  }

  while (Number.isNaN(x_coordinate) && !Number.isInteger(x_coordinate)) {
    alert("One of your values is not a number.");
    x_coordinate = prompt("X:");
  }
  while (y_coordinate <= 1 && y_coordinate >= height) {
    alert("Your y-coordinate must be between 1 and 1024.");
    y_coordinate = prompt("Y:");
  }

  while (Number.isNaN(y_coordinate) && !Number.isInteger(y_coordinate)) {
    alert("One of your values is not a number.");
    y_coordinate = prompt("y:");
  }

  ctx.strokeStyle = "gray";
  ctx.clearRect(0, 0, 1024, 512);
  ctx.strokeRect(x_coordinate, y_coordinate, 1024, 512);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
