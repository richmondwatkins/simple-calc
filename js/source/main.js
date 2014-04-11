(function(){
    'use strict';

  $(document).ready(initialize);

    function initialize() {
      $('#add').click(add);
      $('#sub').click(sub);
      $('#multiply').click(multiply);
      $('#div').click(div);
      $('#exp').click(exp);
      $('#fac').click(fac);
      $('#sqr').click(sqr);
      }

  function fac() {
    var values = getInput();
    var answer = values[0];

    if (answer > 0) {
      for(var i=values[0]; i>1; i--) {
        answer = answer * (i - 1);
      }
    } else {
      answer = 1;
    }

   display(answer);
  }




  function sqr() {
    var values = getInput();
    var answer = Math.sqrt(values[0]);
    display(answer);
  }

  function exp() {
    var values = getInput();
    var answer = Math.pow(values[0], values[1]);
    display(answer);
  }

  function add() {
    var values = getInput();
    var answer = values[0] + values[1];
    display(answer);
  }


  function sub() {
    var values = getInput();
    var answer = values[0] - values[1];
    display(answer);
  }

  function multiply() {
    var values = getInput();
    var answer = values[0] * values[1];
    display(answer);
  }

  function div() {
    var values = getInput();
    var answer = values[0] / values[1];
    display(answer);
  }


  function getInput (){
    var x = $('#num1').val() * 1;
    var y = $('#num2').val() * 1;
    return [x, y];
  }


 function display(answer){
   $('#answer').text(answer);
 }


 })();
