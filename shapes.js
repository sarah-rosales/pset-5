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
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1.
 */

const sayHello = function draw() {

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

  const width = 1024;
  const height = 512;
  let rect_width = prompt("Width:");
  let rect_height = prompt("Height:");
  let x_coordinate = prompt("X:");
  let y_coordinate = prompt("Y:");

  if (x_coordinate == null || y_coordinate == null || rect_width == null || rect_height == null) {
  } else {
    if (rect_width < 1 && rect_width > width) {
      alert("Your width must be between 1 and 1024.");
      rect_width = prompt("Width:");
    } else if (isNaN(rect_width) && !isInteger(rect_width)) {
      alert("One of your values is not a number.");
      rect_width = prompt("Width:");
    } else if (rect_height < 1 && rect_height > height) {
      alert("Your height must be between 1 and 1024.");
      rect_height = prompt("Height:");
    } else if (isNaN(rect_height) && !isInteger(rect_height)) {
      alert("One of your values is not a number.");
      rect_height = prompt("Height:");
    } else if (x_coordinate < 1 && x_coordinate > width) {
      alert("Your x-coordinate must be between 1 and 1024.");
      x_coordinate = prompt("X:");
    } else if (isNaN(x_coordinate) && !isInteger(x_coordinate)) {
      alert("One of your values is not a number.");
      x_coordinate = prompt("X:");
    } else if (y_coordinate < 1 && y_coordinate > height) {
      alert("Your y-coordinate must be between 1 and 1024.");
      y_coordinate = prompt("Y:");
    } else if (isNaN(y_coordinate) && !isInteger(y_coordinate)) {
      alert("One of your values is not a number.");
      y_coordinate = prompt("Y:");
    }
  }
  const ctx = document.getElementById("student-canvas-2").getContext("2d");
      ctx.clearRect(0, 0, 1024, 512);
      ctx.strokeRect(x_coordinate, y_coordinate, rect_width, rect_height);

}

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  let canvas = document.getElementById("student-canvas-3");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 128);

  let color = prompt("Color:");
    color = color.toLowerCase();

    switch (color) {
      case "black":
        ctx.clearRect(10, 10, 1024, 128);
        ctx.beginPath();
        ctx.rect(10, 10, 100, 50);
        ctx.fillStyle = "black";
        ctx.fill();
        break;
      case "blue":
        ctx.clearRect(10, 10, 1024, 128);
        ctx.beginPath();
        ctx.rect(10, 10, 100, 50);
        ctx.fillStyle = "blue";
        ctx.fill();
        break;
      case "green":
        ctx.clearRect(10, 10, 1024, 128);
        ctx.beginPath();
        ctx.rect(10, 10, 100, 50);
        ctx.fillStyle = "green";
        ctx.fill();
        break;
      case "orange":
        ctx.clearRect(10, 10, 1024, 128);
        ctx.beginPath();
        ctx.rect(10, 10, 100, 50);
        ctx.fillStyle = "orange";
        ctx.fill();
        break;
      case "purple":
        ctx.clearRect(10, 10, 1024, 128);
        ctx.beginPath();
        ctx.rect(10, 10, 100, 50);
        ctx.fillStyle = "purple";
        ctx.fill();
        break;
      case "red":
        ctx.clearRect(10, 10, 1024, 128);
        ctx.beginPath();
        ctx.rect(10, 10, 100, 50);
        ctx.fillStyle = "red";
        ctx.fill();
        break;
      case "yellow":
        ctx.clearRect(10, 10, 1024, 128);
        ctx.beginPath();
        ctx.rect(10, 10, 100, 50);
        ctx.fillStyle = "yellow";
        ctx.fill();
        break;
      default:
        alert(color + " is not a supported color."); {
        color = prompt("Color:");
        }
        break;
    }
//ahhg
}

/*
 * Exercise 4.
 */

const drawTriangle = function() {

  const ctx = document.getElementById("student-canvas-4").getContext("2d");
  ctx.clearRect(0, 0, 1024, 512);

  let first_side = prompt("Side 1:")
  let second_side = prompt("Side 2:")
  let third_side = prompt("Side 3:")
  let height = Math.min(first_side, second_side, third_side);
  let hypotenuse = Math.max(first_side, second_side, third_side);
  let base = Math.sqrt((hypotenuse * hypotenuse) - (height * height));

  while (Number.isNaN(first_side) || first_side > 1024 || first_side < 1 ||
         Number.isNaN(second_side) || second_side > 1024 || second_side < 1 ||
         Number.isNaN(third_side) || third_side > 1024 || third_side < 1) {
           if (first_side == null || second_side == null || third_side == null) {
             ctx.clearRect(0, 0, 1024, 512);
             return;
           }
           if (Number.isNaN(first_side) || Number.isNaN(second_side) || Number.isNaN(third_side)) {
             alert("One of your sides is not a number.")
           } else {
             alert("That's not a valid right triangle.")
           }
         }

  if (height > 512 || base > 1024 || hypotenuse > 1144) {
    alert("Your triangle won't fit on the canvas.")
  }

  if ((height ** 2) + (base ** 2) == (hypotenuse ** 2)) {
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(25, 25 + height);
    ctx.lineTo(base + 25, height + 25);
    ctx.closePath();
    ctx.stroke();
  } else {
    alert("That's not a valid right triangle.")
  }
}

/*
 * Exercise 5.
 */

const drawFace = function() {
  let canvas = document.getElementById("student-canvas-5")
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 512);

  let radius = prompt("Radius:");

    while (radius == null) {
      ctx.clearRect(0, 0, 1024, 512);
      return;
    }

  while (radius < 32 || radius > 256 || Number.isNaN(radius)) {
    if (radius < 32) {
      alert("Your radius must be at least 32.")
    }
    if (radius > 256) {
      alert("Your smiley face won't fit on the canvas.")
    }
    if (Number.isNaN(radius)) {
      alert("Your radius is not a number.")
    }
  }
  let eyes = 0.15 * radius;
  let mouth = 0.7 * radius;

   ctx.beginPath();
   ctx.arc(512, 256, radius, 0, (2 * Math.PI));
   ctx.stroke();
   ctx.closePath();
   ctx.beginPath();
   ctx.arc(512, 256, mouth, 0, Math.PI);
   ctx.stroke();
   ctx.closePath();
   ctx.beginPath();
   ctx.arc(512 - (0.4 * radius), 256 - (0.4 * radius), eyes, 0, (2 * Math.PI));
   ctx.stroke();
   ctx.closePath();
   ctx.beginPath();
   ctx.arc(512 + (0.4 * radius), 256 - (0.4 * radius), eyes, 0, (2 * Math.PI));
   ctx.stroke();
   ctx.closePath();
}

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 6 code here
}
