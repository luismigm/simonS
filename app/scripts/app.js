/*global define */
define([], function () {
    'use strict';

    var highlight = function (boton, color)
    {
    	var oldcolor = boton.css("background-color");
    	boton.css("background-color" , color);
    	setTimeout( function()
    	{
    		boton.css("background-color", oldcolor);
    	},200
    		);
    }

    $(document).ready(function()
   	{
    	var arrayUser=new Array();


    	$(".boton").click(function()
    		{
		    	var id =$ (this).attr("id");
		    	switch (id)
		    	{
		    		case "azul":arrayUser.push(id);
		    			highlight ($(this), "#207ce5")
		    			break;
		    		case "amarillo":arrayUser.push(id);
		    			highlight ($(this), "#feb645")
		    			break;
		    		case "verde":arrayUser.push(id);
		    			highlight ($(this), "#91e842")
		    			break;
		    		case "rojo":arrayUser.push(id);
		    			highlight ($(this), "#f84f32")
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