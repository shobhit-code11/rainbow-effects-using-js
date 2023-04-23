const scheme = document.querySelectorAll(".div");
const rainbow = [
  "#9400D3",
  "#4B0082",
  "#0000FF",
  "#00FF00",
  "#FFFF00",
  "#FF7F00",
  "#FF0000",
];


scheme.forEach((x,y) => {
  x.addEventListener("mouseover", () => {
      x.style.color = rainbow[y];
      x.style.border = `5px solid ${rainbow[y]}`;
    
  })
  x.addEventListener("mouseout", () => {
      x.style.color = "grey";
      x.style.border = "5px solid grey";
  });

  
})




