//Create Delete Functionality
var del = document.getElementsByClassName('del');
for(var i=0;i<del.length ; i++){
    del[i].onclick = function(){
        var div = this.parentElement;
        div.style.display='none';
    }
}

//Add the task when click on the image button
function newTask(){
    var li = document.createElement('li');

    var cb = document.createElement("input");
    cb.type = "checkbox";
    cb.className = "ch";

    li.appendChild(cb);

    var inputValue = document.getElementById('task-input').value;
    var text = document.createTextNode(inputValue);
    var label = document.createElement("label");
    label.appendChild(text);
    li.appendChild(label);

    if(inputValue === ''){
        alert('Please enter the task!')
    }else{
        document.getElementById('list-container').appendChild(li);
    }

    document.getElementById('task-input').value = "";

    var span = document.createElement('span');
    var icon = document.createTextNode("\u00D7");
    span.className = "del";
    span.appendChild(icon);

    li.appendChild(span);

    for(var i=0; i < del.length ; i++){
        del[i].onclick = function(){
            var div = this.parentElement;
            div.style.display='none';
        }
    }
}

//Delete Selected Items
function deleteSelected(){
    var list = document.getElementById('list-container').getElementsByTagName('li');
    if(list.length === 0){
        alert('Please add a task first')
    }
    var root = list[0].parentNode;
    // console.log(root);
    var selected = root.getElementsByTagName('input');
    for(var i=selected.length-1 ; i>=0;i--){
        if((selected[i].getAttribute('type')==='checkbox') && (selected[i].checked)){
            // console.log(selected[i].parentNode);
            root.removeChild(selected[i].parentNode);
        }
    }
}
