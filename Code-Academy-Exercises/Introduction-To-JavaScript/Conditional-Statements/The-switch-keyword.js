let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

/* The switch statement functions similarly to that of if at first glance but
where an if statement will evaluate at each condition where a case will evaluate
once and run the corresponding code. This is a better use of resources when
comparing a significant number of possible conditions and where those conditions
are handled differently. */
