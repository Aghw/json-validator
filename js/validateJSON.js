// console.log("Hello World!");
$( function() {

    // function to validate JSON
    function validateJSON() {
          event.preventDefault(); //to prevent the form from submitting to server and refreshing the page
          // console.log("hello Mars!");

          // capture text from textaread
          var data = $("#json_text").val();
          console.log(`Entered text is ${data}`);

          try {

                var jsonInput = jQuery.parseJSON(data);
                var result = `Valid JSON`;
                console.log(result);
                var jsonResult = document.getElementById("json-result");
                jsonResult.innerHTML = result;

          } catch (e) {

                alert(e);
                var result = ` ${e}`;
                var jsonError = document.getElementById("json-result");
                jsonError.innerHTML = result;
                
          }
      };

        //Select the form, and attach coffee-maker as onSubmit handler
        var form = document.querySelector("form");
        form.onsubmit = validateJSON;
  });
