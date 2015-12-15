/*
 * Stick Scroll V1.0 - 13th December 2015
 * By Mahmoud Swehli
 * mahmoud@moodie.io
 * Copyright © Moodie Ltd
 * Licensed under the MIT License (https://www.tldrlegal.com/l/mit)
 */

var Moodieio = Moodieio || {};

/*
 * Intructions: 
 * To include an element, add the attribute 'data-sticky = "true" ' to the element which should 
 * Options which can be included
 * Type: Stack     : Elements stack based on their vertical position, with each one below the preceeding
 *       Stack-fit : Elements stack based on their vertical position, with attempts to fit between empty spaces if possible. (upside down tetris style) /NYI
 *       contained : Elements stack based on their vertical position, with each one below the preceeding, however contained within a container element (similiar to instagram usernames when browsing down) /NYI
 *
 */
Moodieio.StickyScroll = function(options)
{
	//create a seperate object that will be returned to more easily control
	var returnObj = {};
	//list of all the elements to be modified
	returnObj.elements = {};
	var Type = "stack";
	
	// SET THE TYPE
	switch(options.Type.toLowerCase())
	{
		case "stack":
			Type = "stack";
			break;
		case "stack-fit":
			Type = "stack-fit"
		    break;
		case "contained":
		    Type = "contained";
		    break;
	}
	
	
	/* functions for updating */
	
	//load
	(function(){
		//get all the elements and sort them by their vertical order
		
	})().bind(returnObj);
	
	
	//return the object
	return returnObj;
}