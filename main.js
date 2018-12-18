
let total = 0;

$(document).ready(function() {

    $(".form_button").click(function(){
        
        let quantity = $(".form_input").val();
        let price = $(".form_input3").val();
        let description = $(".form_input2").val();

      
        if (quantity != "" && price != "" && description != ""){

        $(".bottom").append('<div class="item_container"><div class="item_price"><div class="item_quantity">' + quantity + '</div>$' + price + '</div><div class="item_description">' + description + '</div></div>');


        $(".form_input").val("");
        $(".form_input2").val("");
        $(".form_input3").val("");

        let tempSum = quantity * price;
        total = total + tempSum;

        $(".total").html( "$" + total );
        } 
    });


});
