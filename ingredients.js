const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i<ingredients.length-1){
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (i of ingredients){
  console.log(i);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (i of ingredients.reverse()){
  console.log(i);
}