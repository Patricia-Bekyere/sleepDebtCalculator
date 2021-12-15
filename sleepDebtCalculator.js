const getSleepHours = day =>{
if(day === 'Sunday'){
  return 7;
}else if(day === 'Monday'){
  return 8;
}
else if(day === 'Tuesday'){
  return 3;
}
else if(day === 'Wednesday'){
  return 8;
}
else if(day === 'Thursday'){
  return 4;
}
else if(day === 'Friday'){
  return 7;
}
else if(day === 'Saturday'){
  return 6;
}
};

// total hours of sleep
const getActualSleepHours = () =>
getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday');

// get ideal sleep hours
const getIdealSleepHours = () =>{
  const idealHours = 7;
  return idealHours* 7;
};

// get sleep debts
const calculateSleepDebt = ()=> {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
  console.log('You had a perfect amount of sleep');
} else if (actualSleepHours > idealSleepHours) {
  console.log('You got',  + (idealSleepHours - actualSleepHours) + ' ' + 'hours more of sleep than needed');
} else {
  console.log('You got', + (idealSleepHours - actualSleepHours) + ' ' +  'hours less than the sleep you needed');
}
};
calculateSleepDebt();




