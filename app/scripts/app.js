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
   	});
    return 0;
});