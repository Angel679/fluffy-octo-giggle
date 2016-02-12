// JavaScript File
    
    // the equation adds the number that enetered the first and second and as well .ops and receives an answer. //
    //.ops are the mathematical operations  //
    (function () {
    'use strict';
    var el = function (element) {
        if (element.charAt(0) === '#') {
            return document.querySelector(element);
        }
        
        return document.querySelectorAll(element);
    };
    var er = el('#viewer'), equals = el('#equals'), nums = el('.num'), ops = el('.ops'), theNum = '', oldNum = '', resultNum, operator;
    var setNum = function () {
        // ops are mathematical operations
        if (resultNum) {
            theNum = this.getAttribute('data-num');
            
            resultNum = '';
        } else {
            theNum += this.getAttribute('data-num');
        }
        viewer.innerHTML = theNum;
    };
    var moveNum = function () {
        oldNum = theNum;
    //   Creating a function with nums,operator, and equal
        theNum = '';
        operator = this.getAttribute('data-ops');
        equals.setAttribute('data-result', '');
    };
    var displayNum = function () {
        
        oldNum = parseFloat(oldNum);
        theNum = parseFloat(theNum);
        switch (operator) {
    //this would add the first number then the second number//
     case 'plus':
            resultNum = oldNum + theNum;
            break;
            // this would substract the first number then the second number //
        case 'minus':
            resultNum = oldNum - theNum;
            break;
            // this would times the first number with the second number //
        case 'times':
            resultNum = oldNum * theNum;
            break;
            // this would divide the first number twith the second number //
        case 'divided':
            resultNum = oldNum / theNum;

            // this is a sence would convert the number given to negative
              // by subtracting the first number by the first number multiplied by two       //
        case 'negative':
            resultNum = oldNum - (oldNum * 2 ) ; 
            break;
              // its purpose is that the oldnum would be our base and then theNum would be the one to power by   //
         case 'power':
            resultNum = Math.pow(oldNum, theNum);
            break;
 
        default:
            resultNum = theNum;
        }
        
        /* the command that would be given if you do an impossible equation */
        if (!isFinite(resultNum)) {
            if (isNaN(resultNum)) {
                resultNum = 'You broke it!';
            } else {
                resultNum = 'A mistake was made';
                el('#calculator').classList.add('broken');
                el('#reset').classList.add('show');
            }
        }
        
        viewer.innerHTML = resultNum;
        equals.setAttribute('data-result', resultNum);
        oldNum = 0;
        theNum = resultNum;
    };
    
    //this would the result you shall receive   //
    var clearAll = function () {
        oldNum = '';
        theNum = '';
        viewer.innerHTML = '0';
    //   gets the data-result 
        equals.setAttribute('data-result', resultNum);
    };
    //this would reset the calculater  //
    for (var i = 0, l = nums.length; i < l; i++) {
        if (window.CP.shouldStopExecution(1)) {
            break;
        }
        nums[i].onclick = setNum;
    }
  
  // this would reseat the .viewer each new number  //
    window.CP.exitedLoop(1);
    for (var i = 0, l = ops.length; i < l; i++) {
        if (window.CP.shouldStopExecution(2)) {
            break;
        }
        ops[i].onclick = moveNum ;
    }
    // this is the equation to clear the data when you click the button "C"  //
    window.CP.exitedLoop(2);
    // uses the function clearall and the button clear to delete 
    equals.onclick = displayNum;
    el('#clear').onclick = clearAll;
    el('#reset').onclick = function () {
        window.location = window.location;
    };
   
}());
