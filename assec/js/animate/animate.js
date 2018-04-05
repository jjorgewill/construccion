/**
 * Created by Rasiel on 7/01/15.
 */

jQuery(document).ready(function () {

   jQuery('#newletter').click(function(){
        $.scrollTo( "#sessionTwo", 2000);
    })
   jQuery('#services').click(function(){
        $.scrollTo( "#sessionThree", 2000);

    });
   jQuery('#consultOnline').click(function(){
        $.scrollTo( "#sessionFour", 2000);
    });

});