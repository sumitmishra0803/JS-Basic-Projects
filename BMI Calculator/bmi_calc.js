const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const results = document.querySelector('#results');
    const guide = document.querySelector('#guide');

    if(height<0 || height === "" || isNaN(height)){
        results.innerHTML = "You entered ",height," Please enter the valid height!";
    } else if(weight<0 || weight === "" || isNaN(weight)){
        results.innerHTML = "You entered ",weight," Please enter the valid weight!";
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the result
        results.innerHTML = `<span> ${bmi} </span>`
        if(bmi < 18.6){
        guide.innerHTML =  `You are under weight!! `
        } else if(bmi > 18.6 && bmi < 24.9){
        guide.innerHTML =  `No problem! You're in normal range! `
        } else{
        guide.innerHTML = `Be Aware! You are overweight!`
        }
    }
})