function publish(message){
  	homeFrm.outputTxt.text += '\n' + message;
}

function assert(condition, message){
  	if(condition) return;
  	kony.print(message);
	publish(message);
  	throw new Error(message);
}
    
function runTests(){
  
  	//Testing scope of let 
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        kony.print(x);  // 2
        assert(x === 2, 'let local is affected by global');
    }
    kony.print(x);  // 1
    assert(x === 1, 'let global is affected by local');
  	publish('let works ok');
	

    //Testing existence of Promise
    assert(typeof Promise === 'function', 'Promise is not defined');
  	publish('Promise is a function ok');

    //Testing declaration of constants.
    const PI = 3.141593;
  	var threwError = false;
    try{
    	PI = 1; //This should throw an error.
    }
  	catch(e){ //TypeError
    	threwError = true;
    }
  	assert(threwError, 'Assigning to constants does not throw error' )
    publish('Assigning to constants throws error ok');

    assert(PI === 3.141593, 'Value of a constant can be changed');
  	publish('A constant value is immutable ok');
  
  	//Testing fat arrow functions
  	var evens = [2, 4, 6];
  	var odds = evens.map(v => v + 1);
  	assert(odds.join('') === '357', 'Fat arrows do not work');
  	publish('Fat arrows (=>) work ok');
}

function runTemplateLiteralTests(){
  
  	//Test interpolation
  	var name = 'Miguel';
  	var interpolation = `Hello ${name}, good morning`;
  	assert(interpolation === 'Hello Miguel, good morning','String interpolation does not work');
	publish('Interpolation works ok');
  
	//Test multiline string
  	var multiline = `This is a string that
spans multiple lines`;
  	assert(multiline === "This is a string that\nspans multiple lines", 'Multi-line strings do not work');
	publish('Multiline strings work ok');
}

