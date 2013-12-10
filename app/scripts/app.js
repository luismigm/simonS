/*global define */
define([], function () {
    'use strict';
    $(document).ready(function()
   	{
    	var arrayUser=new Array();


    	$(".boton").click(function()
    		{
		    	var id =$ (this).attr("id");
		    	switch (id)
		    	{
		    		case "azul":arrayUser.push(id);
		    			$(this).css("background-color","#207ce5");
		    			$(this).delay(1000).css("background-color","blue");

		    			break;
		    		case "amarillo":arrayUser.push(id);
		    			$(this).css("background-color","#feb645");
		    			break;
		    		case "verde":arrayUser.push(id);
		    			$(this).css("background-color","#91e842");
		    			break;
		    		case "rojo":arrayUser.push(id);
		    			$(this).css("background-color","#f84f32");
		    			break;
		    		default: alert("error"); 
		    	}
		    	for (var i=0; i < arrayUser.length ; i++)
		    	{ 
		    		console.log(arrayUser[i]);
		    	}
		   	});
   	});
    return 0;
});