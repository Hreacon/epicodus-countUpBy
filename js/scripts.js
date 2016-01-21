var countUpBy = function(countBy, countTo) {
  var output = [];
  countBy = parseFloat(countBy);
  countTo = parseFloat(countTo);
  if(countBy > 0 && countTo > 0) {
    if (countBy > countTo) {
      countBy = [countTo, countTo = countBy][0];
    }
    for (var index = countBy; index <= countTo; index += countBy) {
      if(index<=countTo) {
        output.push(index);
      }
    }
  } else {
    if (countBy > 0) {
      countBy = -countBy;
    } else if (countTo > 0) {
      countTo = -countTo;
    }
    if (countBy < countTo) {
      countBy = [countTo, countTo = countBy][0];
    }
    for (var index = countBy; index >= countTo; index += countBy) {
      if(index>=countTo) {
        output.push(index);
      }
    }
  }
  return output.join(', ');
}
