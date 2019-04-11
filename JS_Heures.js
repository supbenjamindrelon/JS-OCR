if (secondes !== 59) secondes++;
else {
  secondes = 0;
  if (minutes !== 59) minutes++;
  else { 
    minutes = 0;
    if (heures !== 23) heures++;
    else heures = 0;
  }
}

console.log(`Dans une seconde, il sera ${heures}h${minutes}m${secondes}s.`);