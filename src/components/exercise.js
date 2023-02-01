const people = [
  { name: 'Jona', weight: 100 },
  { name: 'Germán', weight: 60 },
  { name: 'Sofía', weight: 40 },
]

const boat = {
  maxWeight: 100,
}

function findSolution(people, boat) {
  let peopleInLeft = [...people];
  let peopleInRight = [];
  let row = 0;

  function drawTrip() {
    const drawing = row % 2 == 0 ? 'mmm.\\___/......mmm' : 'mmm......\\___/.mmm';
    row++;
    return console.log(`[${peopleInLeft.map(item => ' ' + item.name)} ] ${drawing} [${peopleInRight.map(item => ' ' + item.name)} ]`);
  }

  function LtoRTrip() {
    if () {
      
    } else {
      const heaviestPerson = peopleInLeft.reduce((acc, val) => acc.weight >= val.weight ? acc : val);
      const personIndex = peopleInLeft.findIndex(item => item === heaviestPerson);
      peopleInLeft.splice(personIndex, 1);
      peopleInRight.push(heaviestPerson);
    }
  }

  function RtoLTrip() {
    const lightestPerson = peopleInRight.reduce((acc, val) => acc.weight >= val.weight ? val : acc);
    const personIndex = peopleInRight.findIndex(item => item === lightestPerson);
    peopleInRight.splice(personIndex, 1);
    peopleInLeft.push(lightestPerson);
    return;
  }

  console.log('peopleInLeft', peopleInLeft);
  console.log('peopleInRight', peopleInRight);
  
  const pepe = peopleInLeft.map((item, index) => {
    
  })

  console.log('peopleInLeft', peopleInLeft);
  console.log('peopleInRight', peopleInRight);

  // drawTrip();
  // LtoRTrip();
  // drawTrip();
  // RtoLTrip();
  // drawTrip();
}

findSolution(people, boat);