// get person
const person = document.getElementById('person');

// person value
let personValue = 1;

//increment function
const incBtn = () => {

    if(personValue < 15){
      personValue += 1;
      person.innerHTML = personValue;
    }
    else{
      alert('only for 15 person')
    }

}

//decrement function
const decBtn = () => {

  if(1 < personValue){
    personValue -= 1;
    person.innerHTML = personValue;
  }
  else{
    alert('only for 1 person')
  }

}




// get calculated function