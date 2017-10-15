const target = document.getElementById('nutrition-facts');
const ResultContainer = document.createElement('div');

var searchElementByContent = function(tagName, searchContent) {
  var found;
  var elementsList = document.getElementsByTagName(tagName);

  for (var i = 0; i < elementsList.length; i++) {
    if (elementsList[i].textContent == searchContent) {
      found = elementsList[i];
      break;
    }
  }

  return found;
}

var SpCalculator = function(values) {
  var calories = (values.calories) * 0.0305;
  var sugar = (values.sugar) *.12;
  var sat = (values.sat) * .275;
  var protein = (values.protein) *.098;

	return Math.round( calories + sat + sugar - protein);
}

const values = {
  calories  : searchElementByContent('td', 'Calories').nextElementSibling.innerText.replace(' g', ''),
  sugar     : searchElementByContent('td', 'Sucres').nextElementSibling.innerText.replace(' g', ''),
  sat       : searchElementByContent('td', 'Acides gras saturés').nextElementSibling.innerText.replace(' g', ''),
  protein   : searchElementByContent('td', 'Protéines').nextElementSibling.innerText.replace(' g', '')
};

const style = [
  "background: #0088e2;",
  "color: white;",
  "text-transform: uppercase;",
  "border-radius: 200px;",
  "display:inline-block;",
  "font-weight: bold;",
  "width:30px;",
  "height:30px;",
  "line-height:30px;",
  "text-align:center;",
  "fonct-sizet:16px;"

].join('');

ResultContainer.innerHTML = `<p style="${style}">${SpCalculator(values)}<p/>`

target.append(ResultContainer);
