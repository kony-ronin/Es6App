function publish(message){
  	var out = homeFrm.outputTxt;
  	out.text = out.text?out.text:'';
  	out.text += '\n' + message;
}

function assert(test, condition, message){
  	if(condition){
      	var okmsg = test + ' ok';
      	kony.print('Es6***' + okmsg);
    	publish(okmsg);
    }
  	else{
        kony.print('Es6***' + message);
        publish('Fail: ' + message);
        throw new Error(message);      
    }

}
    
function runTests(){
  
  	//Testing scope of let 
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        kony.print(x);  // 2
        assert('let local not affected by global', x === 2, 'let local is affected by global');
    }
    kony.print(x);  // 1
    assert('let global not affected by local', x === 1, 'let global is affected by local');
	

    //Testing existence of Promise
    assert('Promise exists', typeof Promise === 'function', 'Promise is not defined');

    //Testing declaration of constants.
    const PI = 3.141593;
  	var threwError = false;
    try{
    	PI = 1; //This should throw an error.
    }
  	catch(e){ //TypeError
    	threwError = true;
    }
  	assert('Assign to const throws error', threwError, 'Assigning to constants does not throw error' )

    assert('Const is immutable', PI === 3.141593, 'Value of a constant can be changed');
  
  	//Testing fat arrow functions
  	var evens = [2, 4, 6];
  	var odds = evens.map(v => v + 1);
  	assert('Fat arrows work', odds.join('') === '357', 'Fat arrows do not work');
}

function runTemplateLiteralTests(){
  
  	//Test interpolation
  	var name = 'Miguel';
  	var interpolation = `Hello ${name}, good morning`;
  	assert('String interpolation', interpolation === 'Hello Miguel, good morning','String interpolation does not work');
  
	//Test multiline string
  	var multiline = `This is a string that
spans multiple lines`;
  	assert('Multi-line string', multiline === "This is a string that\nspans multiple lines", 'Multi-line strings do not work');
	
}

