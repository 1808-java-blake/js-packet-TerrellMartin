
console.log('started');
/**
 * 1. USA
Define function getUSA()
Find the html element that contains "USA".
Print that element's contents.
 */
function getUSA(){
	let a = document.getElementsByTagName("span");
	for(let i=0;i<a.length;i++){
  		if((a[i].innerHTML) == "USA"){
  			console.log((a[i]));
  		}
  		if(a[i].getAttribute("data-customAttr") == "USA"){
  			console.log((a[i]));
  		}
	}
};
/**
 * 2. Sales
Define function getPeopleInSales()
Print the names of all the people in the sales department.
 */
function getPeopleInSales(){

	let p = document.getElementsByTagName("td");

	for(let i=0;i<p.length;i++){
		if((p[i].innerHTML) == "Sales"){
  			console.log(p[i-1].innerHTML);
  		}
	}

};
/**
 * 3. Click Here
Define function getAnchorChildren()
Find all anchor elements with a <span> child.
Print the contents of <span>
 */
function getAnchorChildren(){
	//put all of the elements "a" into the array a.
	let a = document.getElementsByTagName("a");
	for(let i = 0; i < a.length; i++){
		let c = a[i].childNodes;
			for(let j = 0; j < c.length; j++){
				if (c[j].nodeName === "SPAN"){
					console.log(c[j].innerHTML);
			}
		}
	}

}
/**
 * 4. Hobbies
Define function getHobbies()
Find all checked options in the 'skills' select element.
Print the value and the contents.
 */

function getHobbies(){
	let s = document.getElementsByName("skills");
		for(let i = 0; i < s.length; i++){
			let tabChoice = s[i];
			for(j = 0; j < tabChoice.length; j++){
				if(tabChoice[j].selected){
					console.log(tabChoice[j].textContent);
				}
			}
		}
	}

	/**
	 * 5. Custom Attribute
Define function getCustomAttribute()
Find all elements with "data-customAttr" attribute
Print the value of the attribute.
Print the element that has the attribute.
	 */

	function getCustomAttribute(){

		let c = document.querySelectorAll("[data-customAttr]");
		for (let i = 0; i < c.length; i++) {
			let ele = c[i];
			// prints the value
			  console.log(ele.innerText)

			  // prints the element
			  console.log(ele);
		}
	};

	/**
	 * 6. Sum Event
NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
	<input id="num2" class="nums" type="text"/>
	<h3>Sum: <span id="sum"></span></h3>

Define onchange event handler.
Add <input> element values.
Put the sum in the <span> element.
If values cannot be added, put "Cannot add" in the <span> element
	 */
	function sumThis(){
		let total = 0;
		let sum = document.getElementById("sum");
		let n1 = document.getElementsById("num1");
		let n2 = document.getElementsById("num2");

		n2.onchange = function() {
			total = parseInt(n2.value, 5) + parseInt(n1.value, 5);
			sum.innerText = total ? total : "Cannot add";
		}
		

	}


	/**
	 * 7. Skills Event
NOTE: Write unobtrusive Javascript
When user selects a skill, create an alert with a message similar to:
	"Are you sure CSS is one of your skills?"
NOTE: no alert should appear when user deselects a skill.
	 */

	function alertSkills(){
		let s = document.getElementsByName("skills");
		// for(let i = 0; i < s.length; i++){
		// 	console.log(s[i].innerHTML);
		// }
		let opt = s[0];
		opt.onchange = function(){
			//Whenever the node changes from the index 0, it will promt alert msg,
			alert("Are you sure " +  opt.options[opt.selectedIndex].text + " is one of your skills?");
		}
	}


	/**
	 * 8. Favorite Color Event
NOTE: Write unobtrusive Javascript
NOTE: This is regarding the favoriteColor radio buttons.
When a user selects a color, create an alert with a message similar to:
	"So you like green more than blue now?"
In this example, green is the new value and blue is the old value.
Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
	 */
	function thisMyFavoriteColor() 
	{
        let color = document.getElementsByName("favoriteColor");

		for (let i = 0; i < color.length; i++) 
		{
			color.item(i).addEventListener("click", function () 
			{
				if(this.style.backgroundColor)
				
					alert("So you like " + this.value + " more than " + this.style.backgroundColor + " ?");
					
                for (let j = 0; j < color.length; j++) {
                    color.item(j).style.backgroundColor = this.value;
                }
            });
        }
    }


	/**
	 * 9. Show/Hide Event
NOTE: Write unobtrusive Javascript
When user hovers over an employees name:
	Hide the name if shown.
	Show the name if hidden.
	 */
	function hideThem() {

		let emp = document.getElementsByClassName("empName");
  
		for(let i=0; i < emp.length; i++)
		{
			  ele = emp[i];
				ele.onmouseover = function()
				{

					this.style.visibility =  "hidden";	
				}
				ele.onmouseleave = function(){
					this.style.visibility = "visible";	
				}
		}
		
	  };

	/**
	 * 10. Current Time
Regarding this element:
	<h5 id="currentTime"></h5>
Show the current time in this element in this format: 9:05:23 AM
The time should be accurate to the second without having to reload the page.
	 */
	function currentTime(){
		//since we have to refresh the time by seconds, we use setInterval(function, 1000) function.
		let theTimeTimer = setInterval(function () {

			let c = document.getElementById("currentTime");
			//display the date.
			let t = new Date(Date.now());
			c.innerText = t.toLocaleTimeString();
		}, 1000);
	
	};

	/**
	 * 11. Delay
Regarding this element:
	<p id="helloWorld">Hello, World!</p>
Three seconds after a user clicks on this element, change the text to a random color.
	 */
	function colorDelay(){
		document.getElementById("helloWorld").addEventListener("click", function ()
		 {
			  setTimeout(function () 
			  {
				  //define the colors first.
				  let r = Math.floor(Math.random()*255);
				  let g = Math.floor(Math.random()*255);
				  let b = Math.floor(Math.random()*255);
				  let rgb = "rgb("+ r +", "+ g +", "+ b +")";

				  document.getElementById("helloWorld").style.color = rgb;
			  }, 3000)
		  });
	  };

	/**
	 * 12. Walk the DOM
Define function walkTheDOM(node, func)
This function should traverse every node in the DOM. Use recursion.
On each node, call func(node).
	 */
	function walkTheDOM(node, func) {
        func(node);
        node = node.firstChild;
        while (node) {
            walkTheDOM(node, func);
            node = node.nextSibling;
        }
	};
	
	walkDOM(document.body, function (node) {
		console.log(node.tagName);
	});
