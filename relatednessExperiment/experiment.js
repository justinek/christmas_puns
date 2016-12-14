/*
Displays each slide
*/

function showSlide(id) {
  $(".slide").hide();
  $("#"+id).show();
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/* 
Returns random number between a and b, inclusive
*/

function random(a,b) {
  if (typeof b == "undefined") {
    a = a || 2;
    return Math.floor(Math.random()*a);
  } else {
    return Math.floor(Math.random()*(b-a+1)) + a;
  }
}

/* 
Randomly shuffles elements in an array
*/

Array.prototype.random = function() {
  return this[random(this.length)];
}

/* 
Returns random number between a and b, inclusive
*/

function setQuestion(array) {
    var i = random(0, array.length - 1);
    var q = array[i];
    return q;
}

/* 
Produces an array with numbers 0~arrLength
in random order. Kind of spurious--use 
Array.prototype.random instead
*/

function shuffledArray(arrLength)
{
  var j, tmp;
  var arr = new Array(arrLength);
  for (i = 0; i < arrLength; i++)
  {
    arr[i] = i;
  }
  for (i = 0; i < arrLength-1; i++)
  {
    j = Math.floor((Math.random() * (arrLength - 1 - i)) + 0.99) + i;
    tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

/* 
Gets the value of the checked radio button
*/

function getRadioCheckedValue(formNum, radio_name)
{
   var oRadio = document.forms[formNum].elements[radio_name];
   for(var i = 0; i < oRadio.length; i++)
   {
      if(oRadio[i].checked)
      {
         return oRadio[i].value;
      }
   }
   return '';
}

/* 
Clears value from form
*/

function clearForm(oForm) {
    
  var elements = oForm.elements; 
    
  oForm.reset();

  for(i=0; i<elements.length; i++) {
      
	field_type = elements[i].type.toLowerCase();
	
	switch(field_type) {
	
		case "text": 
		case "password": 
		case "textarea":
	        case "hidden":	
			
			elements[i].value = ""; 
			break;
        
		case "radio":
		case "checkbox":
  			if (elements[i].checked) {
   				elements[i].checked = false; 
			}
			break;

		case "select-one":
		case "select-multi":
            		elements[i].selectedIndex = -1;
			break;

		default: 
			break;
	}
    }
}


/*
Text input for your experiment. Each array is a condition.
Record all necessary information you may need for each input.
*/

var allConditions = [
/* short debugging trails 
[
{"condition":1,"uniquePairID":1,"word1":"profit","word2":"atheism"},
{"condition":1,"uniquePairID":6,"word1":"profit","word2":"dreams"},
{"condition":1,"uniquePairID":11,"word1":"profit","word2":"nationalism"},
{"condition":1,"uniquePairID":30,"word1":"pi","word2":"circumference"},
{"condition":1,"uniquePairID":35,"word1":"pi","word2":"like"},
] 
*/

/* full trials */
[
{"uniquePairID":1,"word1":"PAN","word2":"SANTA'S"},
{"uniquePairID":2,"word1":"PAN","word2":"FAVOURITE"},
{"uniquePairID":3,"word1":"PAN","word2":"PIZZA"},
{"uniquePairID":4,"word1":"PAN","word2":"THAT'S"},
{"uniquePairID":5,"word1":"PAN","word2":"DEEP"},
{"uniquePairID":6,"word1":"PAN","word2":"CRISP"},
{"uniquePairID":7,"word1":"PAN","word2":"EVEN"},
{"uniquePairID":8,"word1":"CLAUSTROPHOBIA","word2":"SANTA"},
{"uniquePairID":9,"word1":"CLAUSTROPHOBIA","word2":"SUFFER"},
{"uniquePairID":10,"word1":"CLAUSTROPHOBIA","word2":"GETS"},
{"uniquePairID":11,"word1":"CLAUSTROPHOBIA","word2":"STUCK"},
{"uniquePairID":12,"word1":"CLAUSTROPHOBIA","word2":"CHIMNEY"},
{"uniquePairID":13,"word1":"HO","word2":"WHY"},
{"uniquePairID":14,"word1":"HO","word2":"SANTA"},
{"uniquePairID":15,"word1":"HO","word2":"THREE"},
{"uniquePairID":16,"word1":"HO","word2":"GARDENS"},
{"uniquePairID":17,"word1":"FREEZE","word2":"SING"},
{"uniquePairID":18,"word1":"FREEZE","word2":"SNOWMAN'S"},
{"uniquePairID":19,"word1":"FREEZE","word2":"BIRTHDAY"},
{"uniquePairID":20,"word1":"FREEZE","word2":"PARTY"},
{"uniquePairID":21,"word1":"FREEZE","word2":"JOLLY"},
{"uniquePairID":22,"word1":"FREEZE","word2":"GOOD"},
{"uniquePairID":23,"word1":"FREEZE","word2":"FELLOW"},
{"uniquePairID":24,"word1":"PASSED","word2":"SCROOGE"},
{"uniquePairID":25,"word1":"PASSED","word2":"WIN"},
{"uniquePairID":26,"word1":"PASSED","word2":"FOOTBALL"},
{"uniquePairID":27,"word1":"PASSED","word2":"GAME"},
{"uniquePairID":28,"word1":"PASSED","word2":"GHOST"},
{"uniquePairID":29,"word1":"PASSED","word2":"CHRISTMAS"},
{"uniquePairID":30,"word1":"JAWS","word2":"DELIVERS"},
{"uniquePairID":31,"word1":"JAWS","word2":"PRESENTS"},
{"uniquePairID":32,"word1":"JAWS","word2":"BABY"},
{"uniquePairID":33,"word1":"JAWS","word2":"SHARKS"},
{"uniquePairID":34,"word1":"JAWS","word2":"CHRISTMAS"},
{"uniquePairID":35,"word1":"JAWS","word2":"SANTA"},
{"uniquePairID":36,"word1":"ELF","word2":"SANTA"},
{"uniquePairID":37,"word1":"ELF","word2":"SAY"},
{"uniquePairID":38,"word1":"ELF","word2":"SMOKER"},
{"uniquePairID":39,"word1":"ELF","word2":"PLEASE"},
{"uniquePairID":40,"word1":"ELF","word2":"SMOKE"},
{"uniquePairID":41,"word1":"ELF","word2":"BAD"},
{"uniquePairID":42,"word1":"ELF","word2":"RUDOLPH"},
{"uniquePairID":43,"word1":"ELF","word2":"GO"},
{"uniquePairID":44,"word1":"ELF","word2":"SCHOOL"},
{"uniquePairID":45,"word1":"ELF","word2":"TAUGHT"},
{"uniquePairID":46,"word1":"ICICLE","word2":"SNOWMEN"},
{"uniquePairID":47,"word1":"ICICLE","word2":"GET"},
{"uniquePairID":48,"word1":"ICICLE","word2":"RIDE"},
{"uniquePairID":49,"word1":"SPY","word2":"HIDES"},
{"uniquePairID":50,"word1":"SPY","word2":"BAKERY"},
{"uniquePairID":51,"word1":"SPY","word2":"CHRISTMAS"},
{"uniquePairID":52,"word1":"SPY","word2":"MINCE"},
{"uniquePairID":53,"word1":"SAUCE","word2":"JULIAN"},
{"uniquePairID":54,"word1":"SAUCE","word2":"ASSANGE"},
{"uniquePairID":55,"word1":"SAUCE","word2":"PUT"},
{"uniquePairID":56,"word1":"SAUCE","word2":"CHRISTMAS"},
{"uniquePairID":57,"word1":"SAUCE","word2":"TURKEY"},
{"uniquePairID":58,"word1":"SAUCE","word2":"ANONYMOUS"},
{"uniquePairID":59,"word1":"WINE","word2":"WHAT'S"},
{"uniquePairID":60,"word1":"WINE","word2":"POPULAR"},
{"uniquePairID":61,"word1":"WINE","word2":"CHRISTMAS"},
{"uniquePairID":62,"word1":"WINE","word2":"LIKE"},
{"uniquePairID":63,"word1":"WINE","word2":"BRUSSELS"},
{"uniquePairID":64,"word1":"WINE","word2":"SPROUTS"},
{"uniquePairID":65,"word1":"GNAWING","word2":"BEAVER"},
{"uniquePairID":66,"word1":"GNAWING","word2":"SAY"},
{"uniquePairID":67,"word1":"GNAWING","word2":"CHRISTMAS"},
{"uniquePairID":68,"word1":"GNAWING","word2":"TREE"},
{"uniquePairID":69,"word1":"GNAWING","word2":"NICE"},
{"uniquePairID":70,"word1":"SMELLS","word2":"GET"},
{"uniquePairID":71,"word1":"SMELLS","word2":"CROSS"},
{"uniquePairID":72,"word1":"SMELLS","word2":"BELL"},
{"uniquePairID":73,"word1":"SMELLS","word2":"SKUNK"},
{"uniquePairID":74,"word1":"SMELLS","word2":"JINGLE"},
{"uniquePairID":75,"word1":"PI","word2":"MATHEMATICIAN'S"},
{"uniquePairID":76,"word1":"PI","word2":"FAVOURITE"},
{"uniquePairID":77,"word1":"PI","word2":"CHRISTMAS"},
{"uniquePairID":78,"word1":"PI","word2":"SNACK"},
{"uniquePairID":79,"word1":"PI","word2":"MINCE"},
{"uniquePairID":80,"word1":"CLAWS","word2":"KNOW"},
{"uniquePairID":81,"word1":"CLAWS","word2":"SANTA"},
{"uniquePairID":82,"word1":"CLAWS","word2":"REALLY"},
{"uniquePairID":83,"word1":"CLAWS","word2":"WEREWOLF"},
{"uniquePairID":84,"word1":"SNOW","word2":"WHY"},
{"uniquePairID":85,"word1":"SNOW","word2":"FROSTY"},
{"uniquePairID":86,"word1":"SNOW","word2":"GO"},
{"uniquePairID":87,"word1":"SNOW","word2":"LIVE"},
{"uniquePairID":88,"word1":"SNOW","word2":"MIDDLE"},
{"uniquePairID":89,"word1":"SNOW","word2":"OCEAN"},
{"uniquePairID":90,"word1":"SNOW","word2":"MAN"},
{"uniquePairID":91,"word1":"SNOW","word2":"ISLAND"},
{"uniquePairID":92,"word1":"ELF","word2":"WHY"},
{"uniquePairID":93,"word1":"ELF","word2":"EVER"},
{"uniquePairID":94,"word1":"ELF","word2":"SEE"},
{"uniquePairID":95,"word1":"ELF","word2":"FATHER"},
{"uniquePairID":96,"word1":"ELF","word2":"CHRISTMAS"},
{"uniquePairID":97,"word1":"ELF","word2":"HOSPITAL"},
{"uniquePairID":98,"word1":"ELF","word2":"PRIVATE"},
{"uniquePairID":99,"word1":"ELF","word2":"CARE"},
{"uniquePairID":100,"word1":"ICE","word2":"SNOWMEN"},
{"uniquePairID":101,"word1":"ICE","word2":"EAT"},
{"uniquePairID":102,"word1":"ICE","word2":"BREAKFAST"},
{"uniquePairID":103,"word1":"ICE","word2":"CRISPIES"},
{"uniquePairID":104,"word1":"CLAUS","word2":"CORRECTS"},
{"uniquePairID":105,"word1":"CLAUS","word2":"SANTA'S"},
{"uniquePairID":106,"word1":"CLAUS","word2":"GRAMMAR"},
{"uniquePairID":107,"word1":"CLAUS","word2":"SUBORDINATE"},
{"uniquePairID":108,"word1":"TWERKY","word2":"MILEY"},
{"uniquePairID":109,"word1":"TWERKY","word2":"CYRUS"},
{"uniquePairID":110,"word1":"TWERKY","word2":"CHRISTMAS"},
{"uniquePairID":111,"word1":"TWERKY","word2":"DINNER"},
{"uniquePairID":112,"word1":"ELF","word2":"POOR"},
{"uniquePairID":113,"word1":"IV","word2":"CHRISTMAS"},
{"uniquePairID":114,"word1":"IV","word2":"CAROL"},
{"uniquePairID":115,"word1":"IV","word2":"USED"},
{"uniquePairID":116,"word1":"IV","word2":"HOSPITALS"},
{"uniquePairID":117,"word1":"IV","word2":"REHYDRATE"},
{"uniquePairID":118,"word1":"IV","word2":"PATIENTS"},
{"uniquePairID":119,"word1":"IV","word2":"HOLLY"},
{"uniquePairID":120,"word1":"HOES","word2":"KNOW"},
{"uniquePairID":121,"word1":"HOES","word2":"SANTA'S"},
{"uniquePairID":122,"word1":"HOES","word2":"GARDEN"},
{"uniquePairID":123,"word1":"HOES","word2":"SHED"},
{"uniquePairID":124,"word1":"HOES","word2":"YOU'VE"},
{"uniquePairID":125,"word1":"HOES","word2":"GOT"},
{"uniquePairID":126,"word1":"HOES","word2":"THREE"},
{"uniquePairID":127,"word1":"HOES","word2":"EXTRA"},
{"uniquePairID":128,"word1":"NAG","word2":"HOLIDAY"},
{"uniquePairID":129,"word1":"NAG","word2":"DRINK"},
{"uniquePairID":130,"word1":"NAG","word2":"GETS"},
{"uniquePairID":131,"word1":"NAG","word2":"NERVES"},
{"uniquePairID":132,"word1":"NAG","word2":"EGG"},
{"uniquePairID":133,"word1":"RED","word2":"WHY"},
{"uniquePairID":134,"word1":"RED","word2":"RUDOLPH"},
{"uniquePairID":135,"word1":"RED","word2":"REINDEER"},
{"uniquePairID":136,"word1":"RED","word2":"COLLECTED"},
{"uniquePairID":137,"word1":"RED","word2":"WORKS"},
{"uniquePairID":138,"word1":"RED","word2":"SHAKESPEARE"},
{"uniquePairID":139,"word1":"RED","word2":"TOP"},
{"uniquePairID":140,"word1":"RED","word2":"LIP"},
{"uniquePairID":141,"word1":"RED","word2":"NOSE"},
{"uniquePairID":142,"word1":"RED","word2":"WELL"},
{"uniquePairID":143,"word1":"POLISH","word2":"NATIONALITY"},
{"uniquePairID":144,"word1":"POLISH","word2":"SANTA"},
{"uniquePairID":145,"word1":"POLISH","word2":"CLAUS"},
{"uniquePairID":146,"word1":"POLISH","word2":"NORTH"},
{"uniquePairID":147,"word1":"IGLOOS","word2":"ESKIMO"},
{"uniquePairID":148,"word1":"IGLOOS","word2":"PUT"},
{"uniquePairID":149,"word1":"IGLOOS","word2":"CHRISTMAS"},
{"uniquePairID":150,"word1":"IGLOOS","word2":"DECORATIONS"},
{"uniquePairID":151,"word1":"YULE","word2":"HAPPEN"},
{"uniquePairID":152,"word1":"YULE","word2":"NAUGHTY"},
{"uniquePairID":153,"word1":"YULE","word2":"CHRISTMAS"},
{"uniquePairID":154,"word1":"YULE","word2":"SORRY"},
{"uniquePairID":155,"word1":"RAPPING","word2":"SNOOP"},
{"uniquePairID":156,"word1":"RAPPING","word2":"DOGG'S"},
{"uniquePairID":157,"word1":"RAPPING","word2":"FAVOURITE"},
{"uniquePairID":158,"word1":"RAPPING","word2":"PART"},
{"uniquePairID":159,"word1":"RAPPING","word2":"PRESENT"},
{"uniquePairID":160,"word1":"RAPPING","word2":"PAPER"},
{"uniquePairID":161,"word1":"WHEAT","word2":"WHAT'S"},
{"uniquePairID":162,"word1":"WHEAT","word2":"FARMER'S"},
{"uniquePairID":163,"word1":"WHEAT","word2":"FAVORITE"},
{"uniquePairID":164,"word1":"WHEAT","word2":"CHRISTMAS"},
{"uniquePairID":165,"word1":"WHEAT","word2":"CAROL"},
{"uniquePairID":166,"word1":"WHEAT","word2":"DREAMING"},
{"uniquePairID":167,"word1":"HOLES","word2":"CHRISTMAS"},
{"uniquePairID":168,"word1":"HOLES","word2":"CAROL"},
{"uniquePairID":169,"word1":"HOLES","word2":"SWISS"},
{"uniquePairID":170,"word1":"HOLES","word2":"CHEESE"},
{"uniquePairID":171,"word1":"HOLES","word2":"LIKE"},
{"uniquePairID":172,"word1":"HOLES","word2":"SING"},
{"uniquePairID":173,"word1":"HOLES","word2":"DECK"},
{"uniquePairID":174,"word1":"OFFAL","word2":"WHY"},
{"uniquePairID":175,"word1":"OFFAL","word2":"JOKES"},
{"uniquePairID":176,"word1":"OFFAL","word2":"TURKEY"},
{"uniquePairID":177,"word1":"OFFAL","word2":"GIBLETS"},
{"uniquePairID":178,"word1":"OFFAL","word2":"PUNCHLINES"},
{"uniquePairID":179,"word1":"SOOTS","word2":"WHY"},
{"uniquePairID":180,"word1":"SOOTS","word2":"SANTA"},
{"uniquePairID":181,"word1":"SOOTS","word2":"CLAUS"},
{"uniquePairID":182,"word1":"SOOTS","word2":"GO"},
{"uniquePairID":183,"word1":"SOOTS","word2":"CHIMNEY"},
{"uniquePairID":184,"word1":"SOOTS","word2":"CHRISTMAS"},
{"uniquePairID":185,"word1":"SOOTS","word2":"EVE"},
{"uniquePairID":186,"word1":"SNOWFLAKES","word2":"SNOWMEN"},
{"uniquePairID":187,"word1":"SNOWFLAKES","word2":"EAT"},
{"uniquePairID":188,"word1":"SNOWFLAKES","word2":"BREAKFAST"},
{"uniquePairID":189,"word1":"SLEIGHED","word2":"WHY"},
{"uniquePairID":190,"word1":"SLEIGHED","word2":"SANTA"},
{"uniquePairID":191,"word1":"SLEIGHED","word2":"GO"},
{"uniquePairID":192,"word1":"SLEIGHED","word2":"JAIL"},
{"uniquePairID":193,"word1":"SLEIGHED","word2":"ELF"},
{"uniquePairID":194,"word1":"WRAPPER","word2":"CALL"},
{"uniquePairID":195,"word1":"WRAPPER","word2":"ELF"},
{"uniquePairID":196,"word1":"WRAPPER","word2":"SING"},
{"uniquePairID":197,"word1":"PRESENTS","word2":"WHY"},
{"uniquePairID":198,"word1":"PRESENTS","word2":"SANTA"},
{"uniquePairID":199,"word1":"PRESENTS","word2":"FORCED"},
{"uniquePairID":200,"word1":"PRESENTS","word2":"ATTEND"},
{"uniquePairID":201,"word1":"PRESENTS","word2":"CHRISTMAS"},
{"uniquePairID":202,"word1":"PRESENTS","word2":"PARTY"},
{"uniquePairID":203,"word1":"PRESENTS","word2":"REQUIRED"},
{"uniquePairID":204,"word1":"ELF","word2":"NORTH"},
{"uniquePairID":205,"word1":"ELF","word2":"POLE"},
{"uniquePairID":206,"word1":"ELF","word2":"IMPORT"},
{"uniquePairID":207,"word1":"ELF","word2":"GOODS"},
{"uniquePairID":208,"word1":"ELF","word2":"SUFFICIENT"},
{"uniquePairID":209,"word1":"SPRUCE","word2":"CHRISTMAS"},
{"uniquePairID":210,"word1":"SPRUCE","word2":"TREE"},
{"uniquePairID":211,"word1":"SPRUCE","word2":"TREND"},
{"uniquePairID":212,"word1":"SPRUCE","word2":"STARTED"},
{"uniquePairID":213,"word1":"SPRUCE","word2":"PEOPLE"},
{"uniquePairID":214,"word1":"SPRUCE","word2":"THOUGHT"},
{"uniquePairID":215,"word1":"SPRUCE","word2":"THINGS"},
{"uniquePairID":216,"word1":"SPRUCE","word2":"UP"},
{"uniquePairID":217,"word1":"SPRUCE","word2":"BIT"},
{"uniquePairID":218,"word1":"POOL","word2":"SANTA"},
{"uniquePairID":219,"word1":"POOL","word2":"CLAUS'"},
{"uniquePairID":220,"word1":"POOL","word2":"FAVORITE"},
{"uniquePairID":221,"word1":"POOL","word2":"SWIMMING"},
{"uniquePairID":222,"word1":"POOL","word2":"SPOT"},
{"uniquePairID":223,"word1":"POOL","word2":"NORTH"},
{"uniquePairID":224,"word1":"PAUSE","word2":"NAME"},
{"uniquePairID":225,"word1":"PAUSE","word2":"SANTA"},
{"uniquePairID":226,"word1":"PAUSE","word2":"CLAUS"},
{"uniquePairID":227,"word1":"PAUSE","word2":"USE"},
{"uniquePairID":228,"word1":"PAUSE","word2":"TAKES"},
{"uniquePairID":229,"word1":"PAUSE","word2":"REST"},
{"uniquePairID":230,"word1":"PAUSE","word2":"DELIVERING"},
{"uniquePairID":231,"word1":"PAUSE","word2":"PRESENTS"},
{"uniquePairID":232,"word1":"JOLLY","word2":"SANTA"},
{"uniquePairID":233,"word1":"JOLLY","word2":"LIKE"},
{"uniquePairID":234,"word1":"JOLLY","word2":"EAT"},
{"uniquePairID":235,"word1":"JOLLY","word2":"ROLL"},
{"uniquePairID":236,"word1":"POLAROID","word2":"SANTA"},
{"uniquePairID":237,"word1":"POLAROID","word2":"CLAUS"},
{"uniquePairID":238,"word1":"POLAROID","word2":"TAKE"},
{"uniquePairID":239,"word1":"POLAROID","word2":"PICTURES"},
{"uniquePairID":240,"word1":"POLAROID","word2":"NORTH"},
{"uniquePairID":241,"word1":"JUNGLE","word2":"TARZAN"},
{"uniquePairID":242,"word1":"JUNGLE","word2":"SING"},
{"uniquePairID":243,"word1":"JUNGLE","word2":"CHRISTMAS"},
{"uniquePairID":244,"word1":"JUNGLE","word2":"TIME"},
{"uniquePairID":245,"word1":"JUNGLE","word2":"BELLS"},
{"uniquePairID":246,"word1":"ELF","word2":"SANTA'S"},
{"uniquePairID":247,"word1":"ELF","word2":"HELPER"},
{"uniquePairID":248,"word1":"ELF","word2":"DEPRESSED"},
{"uniquePairID":249,"word1":"ELF","word2":"LOW"},
{"uniquePairID":250,"word1":"ELF","word2":"ESTEEM"},
{"uniquePairID":251,"word1":"QUACKER","word2":"GET"},
{"uniquePairID":252,"word1":"QUACKER","word2":"CROSS"},
{"uniquePairID":253,"word1":"QUACKER","word2":"YULE"},
{"uniquePairID":254,"word1":"QUACKER","word2":"LOG"},
{"uniquePairID":255,"word1":"QUACKER","word2":"DUCK"},
{"uniquePairID":256,"word1":"QUACKER","word2":"FIRE"},
{"uniquePairID":257,"word1":"PAWS","word2":"DELIVERS"},
{"uniquePairID":258,"word1":"PAWS","word2":"CHRISTMAS"},
{"uniquePairID":259,"word1":"PAWS","word2":"PRESENTS"},
{"uniquePairID":260,"word1":"PAWS","word2":"DOGS"},
{"uniquePairID":261,"word1":"PAWS","word2":"SANTA"},
{"uniquePairID":262,"word1":"MITTENS","word2":"HAPPENED"},
{"uniquePairID":263,"word1":"MITTENS","word2":"SANTA'S"},
{"uniquePairID":264,"word1":"MITTENS","word2":"CAT"},
{"uniquePairID":265,"word1":"MITTENS","word2":"SWALLOWED"},
{"uniquePairID":266,"word1":"MITTENS","word2":"BALL"},
{"uniquePairID":267,"word1":"MITTENS","word2":"YARN"},
{"uniquePairID":268,"word1":"MICE","word2":"MICKEY"},
{"uniquePairID":269,"word1":"MICE","word2":"MOUSE"},
{"uniquePairID":270,"word1":"MICE","word2":"GET"},
{"uniquePairID":271,"word1":"MICE","word2":"WINTER"},
{"uniquePairID":272,"word1":"MICE","word2":"SKATES"},
{"uniquePairID":273,"word1":"AND","word2":"SANTA'S"},
{"uniquePairID":274,"word1":"AND","word2":"FAVOURITE"},
{"uniquePairID":275,"word1":"AND","word2":"PIZZA"},
{"uniquePairID":276,"word1":"AND","word2":"THAT'S"},
{"uniquePairID":277,"word1":"AND","word2":"DEEP"},
{"uniquePairID":278,"word1":"AND","word2":"CRISP"},
{"uniquePairID":279,"word1":"AND","word2":"EVEN"},
{"uniquePairID":280,"word1":"CLAUS","word2":"SANTA"},
{"uniquePairID":281,"word1":"CLAUS","word2":"SUFFER"},
{"uniquePairID":282,"word1":"CLAUS","word2":"GETS"},
{"uniquePairID":283,"word1":"CLAUS","word2":"STUCK"},
{"uniquePairID":284,"word1":"CLAUS","word2":"CHIMNEY"},
{"uniquePairID":285,"word1":"HOE","word2":"WHY"},
{"uniquePairID":286,"word1":"HOE","word2":"SANTA"},
{"uniquePairID":287,"word1":"HOE","word2":"THREE"},
{"uniquePairID":288,"word1":"HOE","word2":"GARDENS"},
{"uniquePairID":289,"word1":"HE'S","word2":"SING"},
{"uniquePairID":290,"word1":"HE'S","word2":"SNOWMAN'S"},
{"uniquePairID":291,"word1":"HE'S","word2":"BIRTHDAY"},
{"uniquePairID":292,"word1":"HE'S","word2":"PARTY"},
{"uniquePairID":293,"word1":"HE'S","word2":"JOLLY"},
{"uniquePairID":294,"word1":"HE'S","word2":"GOOD"},
{"uniquePairID":295,"word1":"HE'S","word2":"FELLOW"},
{"uniquePairID":296,"word1":"PAST","word2":"SCROOGE"},
{"uniquePairID":297,"word1":"PAST","word2":"WIN"},
{"uniquePairID":298,"word1":"PAST","word2":"FOOTBALL"},
{"uniquePairID":299,"word1":"PAST","word2":"GAME"},
{"uniquePairID":300,"word1":"PAST","word2":"GHOST"},
{"uniquePairID":301,"word1":"PAST","word2":"CHRISTMAS"},
{"uniquePairID":302,"word1":"CLAUS","word2":"DELIVERS"},
{"uniquePairID":303,"word1":"CLAUS","word2":"PRESENTS"},
{"uniquePairID":304,"word1":"CLAUS","word2":"BABY"},
{"uniquePairID":305,"word1":"CLAUS","word2":"SHARKS"},
{"uniquePairID":306,"word1":"CLAUS","word2":"CHRISTMAS"},
{"uniquePairID":307,"word1":"HEALTH","word2":"SANTA"},
{"uniquePairID":308,"word1":"HEALTH","word2":"SAY"},
{"uniquePairID":309,"word1":"HEALTH","word2":"SMOKER"},
{"uniquePairID":310,"word1":"HEALTH","word2":"PLEASE"},
{"uniquePairID":311,"word1":"HEALTH","word2":"SMOKE"},
{"uniquePairID":312,"word1":"HEALTH","word2":"BAD"},
{"uniquePairID":313,"word1":"SELF","word2":"RUDOLPH"},
{"uniquePairID":314,"word1":"SELF","word2":"GO"},
{"uniquePairID":315,"word1":"SELF","word2":"SCHOOL"},
{"uniquePairID":316,"word1":"SELF","word2":"TAUGHT"},
{"uniquePairID":317,"word1":"BYCICLE","word2":"SNOWMEN"},
{"uniquePairID":318,"word1":"BYCICLE","word2":"GET"},
{"uniquePairID":319,"word1":"BYCICLE","word2":"RIDE"},
{"uniquePairID":320,"word1":"PIE","word2":"HIDES"},
{"uniquePairID":321,"word1":"PIE","word2":"BAKERY"},
{"uniquePairID":322,"word1":"PIE","word2":"CHRISTMAS"},
{"uniquePairID":323,"word1":"PIE","word2":"MINCE"},
{"uniquePairID":324,"word1":"SOURCE","word2":"JULIAN"},
{"uniquePairID":325,"word1":"SOURCE","word2":"ASSANGE"},
{"uniquePairID":326,"word1":"SOURCE","word2":"PUT"},
{"uniquePairID":327,"word1":"SOURCE","word2":"CHRISTMAS"},
{"uniquePairID":328,"word1":"SOURCE","word2":"TURKEY"},
{"uniquePairID":329,"word1":"SOURCE","word2":"ANONYMOUS"},
{"uniquePairID":330,"word1":"WHINE","word2":"WHAT'S"},
{"uniquePairID":331,"word1":"WHINE","word2":"POPULAR"},
{"uniquePairID":332,"word1":"WHINE","word2":"CHRISTMAS"},
{"uniquePairID":333,"word1":"WHINE","word2":"LIKE"},
{"uniquePairID":334,"word1":"WHINE","word2":"BRUSSELS"},
{"uniquePairID":335,"word1":"WHINE","word2":"SPROUTS"},
{"uniquePairID":336,"word1":"KNOWING","word2":"BEAVER"},
{"uniquePairID":337,"word1":"KNOWING","word2":"SAY"},
{"uniquePairID":338,"word1":"KNOWING","word2":"CHRISTMAS"},
{"uniquePairID":339,"word1":"KNOWING","word2":"TREE"},
{"uniquePairID":340,"word1":"KNOWING","word2":"NICE"},
{"uniquePairID":341,"word1":"BELLS","word2":"GET"},
{"uniquePairID":342,"word1":"BELLS","word2":"CROSS"},
{"uniquePairID":343,"word1":"BELLS","word2":"BELL"},
{"uniquePairID":344,"word1":"BELLS","word2":"SKUNK"},
{"uniquePairID":345,"word1":"BELLS","word2":"JINGLE"},
{"uniquePairID":346,"word1":"PIE","word2":"MATHEMATICIAN'S"},
{"uniquePairID":347,"word1":"PIE","word2":"FAVOURITE"},
{"uniquePairID":348,"word1":"PIE","word2":"SNACK"},
{"uniquePairID":349,"word1":"CLAUS","word2":"KNOW"},
{"uniquePairID":350,"word1":"CLAUS","word2":"REALLY"},
{"uniquePairID":351,"word1":"CLAUS","word2":"WEREWOLF"},
{"uniquePairID":352,"word1":"NO","word2":"WHY"},
{"uniquePairID":353,"word1":"NO","word2":"FROSTY"},
{"uniquePairID":354,"word1":"NO","word2":"GO"},
{"uniquePairID":355,"word1":"NO","word2":"LIVE"},
{"uniquePairID":356,"word1":"NO","word2":"MIDDLE"},
{"uniquePairID":357,"word1":"NO","word2":"OCEAN"},
{"uniquePairID":358,"word1":"NO","word2":"MAN"},
{"uniquePairID":359,"word1":"NO","word2":"ISLAND"},
{"uniquePairID":360,"word1":"HEALTH","word2":"WHY"},
{"uniquePairID":361,"word1":"HEALTH","word2":"EVER"},
{"uniquePairID":362,"word1":"HEALTH","word2":"SEE"},
{"uniquePairID":363,"word1":"HEALTH","word2":"FATHER"},
{"uniquePairID":364,"word1":"HEALTH","word2":"CHRISTMAS"},
{"uniquePairID":365,"word1":"HEALTH","word2":"HOSPITAL"},
{"uniquePairID":366,"word1":"HEALTH","word2":"PRIVATE"},
{"uniquePairID":367,"word1":"HEALTH","word2":"CARE"},
{"uniquePairID":368,"word1":"RICE","word2":"SNOWMEN"},
{"uniquePairID":369,"word1":"RICE","word2":"EAT"},
{"uniquePairID":370,"word1":"RICE","word2":"BREAKFAST"},
{"uniquePairID":371,"word1":"RICE","word2":"CRISPIES"},
{"uniquePairID":372,"word1":"CLAUSE","word2":"CORRECTS"},
{"uniquePairID":373,"word1":"CLAUSE","word2":"SANTA'S"},
{"uniquePairID":374,"word1":"CLAUSE","word2":"GRAMMAR"},
{"uniquePairID":375,"word1":"CLAUSE","word2":"SUBORDINATE"},
{"uniquePairID":376,"word1":"TURKY","word2":"MILEY"},
{"uniquePairID":377,"word1":"TURKY","word2":"CYRUS"},
{"uniquePairID":378,"word1":"TURKY","word2":"CHRISTMAS"},
{"uniquePairID":379,"word1":"TURKY","word2":"DINNER"},
{"uniquePairID":380,"word1":"HEALTH","word2":"GO"},
{"uniquePairID":381,"word1":"HEALTH","word2":"POOR"},
{"uniquePairID":382,"word1":"IVY","word2":"CHRISTMAS"},
{"uniquePairID":383,"word1":"IVY","word2":"CAROL"},
{"uniquePairID":384,"word1":"IVY","word2":"USED"},
{"uniquePairID":385,"word1":"IVY","word2":"HOSPITALS"},
{"uniquePairID":386,"word1":"IVY","word2":"REHYDRATE"},
{"uniquePairID":387,"word1":"IVY","word2":"PATIENTS"},
{"uniquePairID":388,"word1":"IVY","word2":"HOLLY"},
{"uniquePairID":389,"word1":"HOS","word2":"KNOW"},
{"uniquePairID":390,"word1":"HOS","word2":"SANTA'S"},
{"uniquePairID":391,"word1":"HOS","word2":"GARDEN"},
{"uniquePairID":392,"word1":"HOS","word2":"SHED"},
{"uniquePairID":393,"word1":"HOS","word2":"YOU'VE"},
{"uniquePairID":394,"word1":"HOS","word2":"GOT"},
{"uniquePairID":395,"word1":"HOS","word2":"THREE"},
{"uniquePairID":396,"word1":"HOS","word2":"EXTRA"},
{"uniquePairID":397,"word1":"NOG","word2":"HOLIDAY"},
{"uniquePairID":398,"word1":"NOG","word2":"DRINK"},
{"uniquePairID":399,"word1":"NOG","word2":"GETS"},
{"uniquePairID":400,"word1":"NOG","word2":"NERVES"},
{"uniquePairID":401,"word1":"NOG","word2":"EGG"},
{"uniquePairID":402,"word1":"READ","word2":"WHY"},
{"uniquePairID":403,"word1":"READ","word2":"RUDOLPH"},
{"uniquePairID":404,"word1":"READ","word2":"REINDEER"},
{"uniquePairID":405,"word1":"READ","word2":"COLLECTED"},
{"uniquePairID":406,"word1":"READ","word2":"WORKS"},
{"uniquePairID":407,"word1":"READ","word2":"SHAKESPEARE"},
{"uniquePairID":408,"word1":"READ","word2":"TOP"},
{"uniquePairID":409,"word1":"READ","word2":"LIP"},
{"uniquePairID":410,"word1":"READ","word2":"NOSE"},
{"uniquePairID":411,"word1":"READ","word2":"WELL"},
{"uniquePairID":412,"word1":"POLE","word2":"NATIONALITY"},
{"uniquePairID":413,"word1":"POLE","word2":"SANTA"},
{"uniquePairID":414,"word1":"POLE","word2":"CLAUS"},
{"uniquePairID":415,"word1":"POLE","word2":"NORTH"},
{"uniquePairID":416,"word1":"GLUES","word2":"ESKIMO"},
{"uniquePairID":417,"word1":"GLUES","word2":"PUT"},
{"uniquePairID":418,"word1":"GLUES","word2":"CHRISTMAS"},
{"uniquePairID":419,"word1":"GLUES","word2":"DECORATIONS"},
{"uniquePairID":420,"word1":"YOU'LL","word2":"HAPPEN"},
{"uniquePairID":421,"word1":"YOU'LL","word2":"NAUGHTY"},
{"uniquePairID":422,"word1":"YOU'LL","word2":"CHRISTMAS"},
{"uniquePairID":423,"word1":"YOU'LL","word2":"SORRY"},
{"uniquePairID":424,"word1":"WRAPPING","word2":"SNOOP"},
{"uniquePairID":425,"word1":"WRAPPING","word2":"DOGG'S"},
{"uniquePairID":426,"word1":"WRAPPING","word2":"FAVOURITE"},
{"uniquePairID":427,"word1":"WRAPPING","word2":"PART"},
{"uniquePairID":428,"word1":"WRAPPING","word2":"PRESENT"},
{"uniquePairID":429,"word1":"WRAPPING","word2":"PAPER"},
{"uniquePairID":430,"word1":"WHITE","word2":"WHAT'S"},
{"uniquePairID":431,"word1":"WHITE","word2":"FARMER'S"},
{"uniquePairID":432,"word1":"WHITE","word2":"FAVORITE"},
{"uniquePairID":433,"word1":"WHITE","word2":"CHRISTMAS"},
{"uniquePairID":434,"word1":"WHITE","word2":"CAROL"},
{"uniquePairID":435,"word1":"WHITE","word2":"DREAMING"},
{"uniquePairID":436,"word1":"HALLS","word2":"CHRISTMAS"},
{"uniquePairID":437,"word1":"HALLS","word2":"CAROL"},
{"uniquePairID":438,"word1":"HALLS","word2":"SWISS"},
{"uniquePairID":439,"word1":"HALLS","word2":"CHEESE"},
{"uniquePairID":440,"word1":"HALLS","word2":"LIKE"},
{"uniquePairID":441,"word1":"HALLS","word2":"SING"},
{"uniquePairID":442,"word1":"HALLS","word2":"DECK"},
{"uniquePairID":443,"word1":"AWFUL","word2":"WHY"},
{"uniquePairID":444,"word1":"AWFUL","word2":"JOKES"},
{"uniquePairID":445,"word1":"AWFUL","word2":"TURKEY"},
{"uniquePairID":446,"word1":"AWFUL","word2":"GIBLETS"},
{"uniquePairID":447,"word1":"AWFUL","word2":"PUNCHLINES"},
{"uniquePairID":448,"word1":"SUITS","word2":"WHY"},
{"uniquePairID":449,"word1":"SUITS","word2":"SANTA"},
{"uniquePairID":450,"word1":"SUITS","word2":"CLAUS"},
{"uniquePairID":451,"word1":"SUITS","word2":"GO"},
{"uniquePairID":452,"word1":"SUITS","word2":"CHIMNEY"},
{"uniquePairID":453,"word1":"SUITS","word2":"CHRISTMAS"},
{"uniquePairID":454,"word1":"SUITS","word2":"EVE"},
{"uniquePairID":455,"word1":"CORNFLAKES","word2":"SNOWMEN"},
{"uniquePairID":456,"word1":"CORNFLAKES","word2":"EAT"},
{"uniquePairID":457,"word1":"CORNFLAKES","word2":"BREAKFAST"},
{"uniquePairID":458,"word1":"SLAYED","word2":"WHY"},
{"uniquePairID":459,"word1":"SLAYED","word2":"SANTA"},
{"uniquePairID":460,"word1":"SLAYED","word2":"GO"},
{"uniquePairID":461,"word1":"SLAYED","word2":"JAIL"},
{"uniquePairID":462,"word1":"SLAYED","word2":"ELF"},
{"uniquePairID":463,"word1":"RAPPER","word2":"CALL"},
{"uniquePairID":464,"word1":"RAPPER","word2":"ELF"},
{"uniquePairID":465,"word1":"RAPPER","word2":"SING"},
{"uniquePairID":466,"word1":"PRESENCE","word2":"WHY"},
{"uniquePairID":467,"word1":"PRESENCE","word2":"SANTA"},
{"uniquePairID":468,"word1":"PRESENCE","word2":"FORCED"},
{"uniquePairID":469,"word1":"PRESENCE","word2":"ATTEND"},
{"uniquePairID":470,"word1":"PRESENCE","word2":"CHRISTMAS"},
{"uniquePairID":471,"word1":"PRESENCE","word2":"PARTY"},
{"uniquePairID":472,"word1":"PRESENCE","word2":"REQUIRED"},
{"uniquePairID":473,"word1":"SELF","word2":"NORTH"},
{"uniquePairID":474,"word1":"SELF","word2":"POLE"},
{"uniquePairID":475,"word1":"SELF","word2":"IMPORT"},
{"uniquePairID":476,"word1":"SELF","word2":"GOODS"},
{"uniquePairID":477,"word1":"SELF","word2":"SUFFICIENT"},
{"uniquePairID":478,"word1":"SPICE","word2":"CHRISTMAS"},
{"uniquePairID":479,"word1":"SPICE","word2":"TREE"},
{"uniquePairID":480,"word1":"SPICE","word2":"TREND"},
{"uniquePairID":481,"word1":"SPICE","word2":"STARTED"},
{"uniquePairID":482,"word1":"SPICE","word2":"PEOPLE"},
{"uniquePairID":483,"word1":"SPICE","word2":"THOUGHT"},
{"uniquePairID":484,"word1":"SPICE","word2":"THINGS"},
{"uniquePairID":485,"word1":"SPICE","word2":"UP"},
{"uniquePairID":486,"word1":"SPICE","word2":"BIT"},
{"uniquePairID":487,"word1":"POLE","word2":"CLAUS'"},
{"uniquePairID":488,"word1":"POLE","word2":"FAVORITE"},
{"uniquePairID":489,"word1":"POLE","word2":"SWIMMING"},
{"uniquePairID":490,"word1":"POLE","word2":"SPOT"},
{"uniquePairID":491,"word1":"CLAUS","word2":"NAME"},
{"uniquePairID":492,"word1":"CLAUS","word2":"CLAUS"},
{"uniquePairID":493,"word1":"CLAUS","word2":"USE"},
{"uniquePairID":494,"word1":"CLAUS","word2":"TAKES"},
{"uniquePairID":495,"word1":"CLAUS","word2":"REST"},
{"uniquePairID":496,"word1":"CLAUS","word2":"DELIVERING"},
{"uniquePairID":497,"word1":"JELLY","word2":"SANTA"},
{"uniquePairID":498,"word1":"JELLY","word2":"LIKE"},
{"uniquePairID":499,"word1":"JELLY","word2":"EAT"},
{"uniquePairID":500,"word1":"JELLY","word2":"ROLL"},
{"uniquePairID":501,"word1":"POLE","word2":"TAKE"},
{"uniquePairID":502,"word1":"POLE","word2":"PICTURES"},
{"uniquePairID":503,"word1":"JINGLE","word2":"TARZAN"},
{"uniquePairID":504,"word1":"JINGLE","word2":"SING"},
{"uniquePairID":505,"word1":"JINGLE","word2":"CHRISTMAS"},
{"uniquePairID":506,"word1":"JINGLE","word2":"TIME"},
{"uniquePairID":507,"word1":"JINGLE","word2":"BELLS"},
{"uniquePairID":508,"word1":"SELF","word2":"WHY"},
{"uniquePairID":509,"word1":"SELF","word2":"SANTA'S"},
{"uniquePairID":510,"word1":"SELF","word2":"HELPER"},
{"uniquePairID":511,"word1":"SELF","word2":"DEPRESSED"},
{"uniquePairID":512,"word1":"SELF","word2":"LOW"},
{"uniquePairID":513,"word1":"SELF","word2":"ESTEEM"},
{"uniquePairID":514,"word1":"CRACKER","word2":"GET"},
{"uniquePairID":515,"word1":"CRACKER","word2":"CROSS"},
{"uniquePairID":516,"word1":"CRACKER","word2":"YULE"},
{"uniquePairID":517,"word1":"CRACKER","word2":"LOG"},
{"uniquePairID":518,"word1":"CRACKER","word2":"DUCK"},
{"uniquePairID":519,"word1":"CRACKER","word2":"FIRE"},
{"uniquePairID":520,"word1":"CLAUS","word2":"DOGS"},
{"uniquePairID":521,"word1":"KITTENS","word2":"HAPPENED"},
{"uniquePairID":522,"word1":"KITTENS","word2":"SANTA'S"},
{"uniquePairID":523,"word1":"KITTENS","word2":"CAT"},
{"uniquePairID":524,"word1":"KITTENS","word2":"SWALLOWED"},
{"uniquePairID":525,"word1":"KITTENS","word2":"BALL"},
{"uniquePairID":526,"word1":"KITTENS","word2":"YARN"},
{"uniquePairID":527,"word1":"ICE","word2":"MICKEY"},
{"uniquePairID":528,"word1":"ICE","word2":"MOUSE"},
{"uniquePairID":529,"word1":"ICE","word2":"GET"},
{"uniquePairID":530,"word1":"ICE","word2":"WINTER"},
{"uniquePairID":531,"word1":"ICE","word2":"SKATES"},


]

];

/*
Set variables
*/

// Number of conditions in experiment
var numConditions = allConditions.length;

// Randomly select a condition number for this particular participant
var chooseCondition = random(0, numConditions-1);

// Number of trials in each condition
var numTrials = 50

// Based on condition number, choose set of input (trials) and shuffle them
var allTrialOrders = shuffle(allConditions[chooseCondition]).slice(0, numTrials);

// Produce random order in which the trials will occur
var shuffledOrder = shuffledArray(numTrials);

// Keep track of current trial 
var currentTrialNum = 0;

// A variable special for this experiment because we're randomly
// choosing word orders as well
var wordOrder = 100;
var trial;

// Keep track of how many trials have been completed
var numComplete = 0;

// Show instruction slide
showSlide("instructions");

// Updates the progress bar
$("#trial-num").html(numComplete);
$("#total-num").html(numTrials);

/*
The actual variable that will be returned to MTurk.
An experiment object with various variables that you
want to keep track of and return as results.
*/
var experiment = {
	// Which condition was run
	condition: chooseCondition + 1,
	
	// An array of subjects' responses to each trial (NOTE: in the order in which
	// you initially listed the trials, not in the order in which they appeared)
    results: new Array(numTrials),
    
    uniquePairIDs: new Array(numTrials),
    word1s: new Array(numTrials),
    word2s: new Array(numTrials),
    
    // The order in which each trial appeared
    orders: new Array(numTrials),
    
    /* 
    Special for this experiment
    */
    // The word order of the word pair, i.e. [word1, word] vs [word2, word1]
    wordOrders: new Array(numTrials),
    //isPuns: new Array(numTrials),
    //isCorrects: new Array(numTrials), 
    
    // Demographics
    gender: "",
    age:"",
    nativeLanguage:"",
    comments:"",
    
    /* 
    Functions for the experiment. Gets called from html
    when people press a button to the next page or to submit
    results, etc
    */
    
    // Goes to description slide
    description: function() {
    	showSlide("description");
    	$("#tot-num").html(numTrials);	
    },
    
    // Goes to example slide
    example1: function() {
    	showSlide("example1");
    },
    example2: function() {
    	showSlide("example2");
    },
    
    // Reaches end of survey, submits results
    end: function() {
    
	// Records demographics
        var gen = getRadioCheckedValue(1, "genderButton");
        var ag = document.age.ageRange.value;
        var lan = document.language.nativeLanguage.value;
        var comm = document.comments.input.value;
        experiment.gender = gen;
        experiment.age = ag;
        experiment.nativeLanguage = lan;
        experiment.comments = comm;
        clearForm(document.forms[1]);
        clearForm(document.forms[2]);
        clearForm(document.forms[3]);
        clearForm(document.forms[4]);
        
        // Show finished slide
        showSlide("finished");
        setTimeout(function() {turk.submit(experiment) }, 1500);
    },
    // Goes to next trial
    next: function() {
    
    // If this is not the first trial, record variables
    	if (numComplete > 0) {
    		
    		var rating = parseFloat(document.rating.score.value);
        	experiment.results[currentTrialNum] = rating;
        	experiment.orders[currentTrialNum] = numComplete;
        	experiment.wordOrders[currentTrialNum] = wordOrder;
        	experiment.uniquePairIDs[currentTrialNum] = trial.uniquePairID;
          experiment.word1s[currentTrialNum] = trial.word1;
          experiment.word2s[currentTrialNum] = trial.word2;
        	//experiment.isPuns[currentTrialNum] = trial.isPun;
        	//experiment.isCorrects[currentTrialNum] = trial.isCorrect;
        	clearForm(document.forms[0]);
        }
    	// If subject has completed all trials, update progress bar and
    	// show slide to ask for demographic info
    	if (numComplete >= numTrials) {
    		$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    		$("#trial-num").html(numComplete);
    		$("#total-num").html(numTrials);
    		showSlide("askInfo");
    	// Otherwise, if trials not completed yet, update progress bar
    	// and go to next trial based on the order in which trials are supposed
    	// to occur
    	} else {
    		$('.bar').css('width', (200.0 * numComplete/numTrials) + 'px');
    		$("#trial-num").html(numComplete);
    		$("#total-num").html(numTrials);
    		//$("#condition").html(experiment.condition);
    		currentTrialNum = shuffledOrder[numComplete];
    		trial = allTrialOrders[currentTrialNum];
        	showSlide("stage");
        	if (random(0, 1) == 0) {
        		$("#word1").html(trial.word1);
        		$("#word2").html(trial.word2);
        		wordOrder = 0;
        	} else {
        		$("#word1").html(trial.word2);
        		$("#word2").html(trial.word1);
        		wordOrder = 1;
        	}
        	numComplete++;
        }
    }
}


