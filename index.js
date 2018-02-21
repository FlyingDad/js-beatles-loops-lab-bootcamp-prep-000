function theBeatlesPlay(musicians, instruments){
  var strings = [];
  
  for(var i = 0; i < musicians.length; i++){
    strings.push(musicians[i] + ' plays ' + instruments[i]);
  }
  
  return strings;
}

function johnLennonFacts(facts){
   for(var i = 0; i < facts.length; i++){
      facts[0] = facts[0] + '!!!';
   }
   return facts;
}