/*global define */
define([], function () {
    'use strict';
    $(document).ready(function()
   	{
    	$("#rojo").hover(function()
    		{
		    	$(this).css("background-color","#f84f32");

		   	});
    	$("#rojo").mouseleave(function()
    		{
		    	$(this).css("background-color","red");

		   	});
    	$("#verde").hover(function()
    		{
		    	$(this).css("background-color","#91e842");

		   	});
    	$("#verde").mouseleave(function()
    		{
		    	$(this).css("background-color","green");

		   	});
    	$("#azul").hover(function()
    		{
		    	$(this).css("background-color","#207ce5");

		   	});
    	$("#azul").mouseleave(function()
    		{
		    	$(this).css("background-color","blue");

		   	});
    	$("#amarillo").hover(function()
    		{
		    	$(this).css("background-color","#feb645");

		   	});
    	$("#amarillo").mouseleave(function()
    		{
		    	$(this).css("background-color","yellow");

		   	});
    	var arrayUser=new Array();


    	$(".boton").click(function()
    		{
		    	var id =$ (this).attr("id");
		    	switch (id)
		    	{
		    		case "azul":arrayUser.push(id);
		    			break;
		    		case "amarillo":arrayUser.push(id);
		    			break;
		    		case "verde":arrayUser.push(id);
		    			break;
		    		case "rojo":arrayUser.push(id);
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