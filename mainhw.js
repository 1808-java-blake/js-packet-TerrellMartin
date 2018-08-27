
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


	//number 7
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


	//number8


	//number 9

	//number 10
	function currentTime(){
		//since we have to refresh the time by seconds, we use setInterval(function, 1000) function.
		let theTimeTimer = setInterval(function () {

			let c = document.getElementById("currentTime");
			//display the date.
			let t = new Date(Date.now());
			c.innerText = t.toLocaleTimeString();
		}, 1000);
	
	};

	//number 11
	function colorDelay(){
		document.getElementById("helloWorld").addEventListener("click", function () {
			  setTimeout(function () {
				  let r = Math.floor(Math.random()*255);
				  let g = Math.floor(Math.random()*255);
				  let b = Math.floor(Math.random()*255);
	  
				  let rgb = "rgb("+ r +", "+ g +", "+ b +")";
				  console.log("colors: " + rgb);
				  document.getElementById("helloWorld").style.color = rgb;
			  }, 3000)
		  });
	  };

	//number 12
	function walkTheDOM(node, func) {
        func(node);
        node = node.firstChild;
        while (node) {
            walkTheDOM(node, func);
            node = node.nextSibling;
        }
    };
