const add = document.querySelector('.add');
var input = document.querySelector('.input');
const listContainer = document.querySelector('.listContainer');

class item{
  constructor(itemName){
    this.createDiv(itemName);
  }
  createDiv(itemName){
    let input = document.createElement("input");
    input.value =itemName;
    input.disabled=true;
    input.classList.add('item_input');
    input.type="text";
    let itemBox = document.createElement("div");
    itemBox.classList.add("item");

    let edit = document.createElement("button");
    edit.innerHTML="EDIT";
    edit.classList.add("edit");

    let removebtn = document.createElement("button");
    removebtn.innerHTML="Remove";
    removebtn.classList.add("remove");

    listContainer.appendChild(itemBox);
    itemBox.appendChild(input);
    itemBox.appendChild(edit);
    itemBox.appendChild(removebtn);

    edit.addEventListener("click" , () => this.edit(input) );
    removebtn.addEventListener("click" , () => this.removetd(input,edit,removebtn , itemBox) );

  
  }
  edit(input){
    input.disabled =!input.disabled;
  
  }
  removetd(item ,edit,removebtn ,itemBox ){
    // itemBox.removeChild(item);
    // itemBox.removeChild(edit);
    // itemBox.removeChild(removebtn);
    listContainer.removeChild(itemBox);


  }
}
function check()
{
  if(input.value != ""){
    new item(input.value);
    input.value="";
  }
}
add.addEventListener('click', check);

window.addEventListener('keyup', function(key) {
	if(key.which == 13){
		check();
	}
  // console.log(key);

})
