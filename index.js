var toDoList = [];
var display = [];

display = toDoList
var indexToEdit
var dateHolder

// class Item{

//     constructor (title, description, due, completeDate, comment){
//         this.title = title
//         this.description = description
//         this.due = due;
//         this.completeDate = ''
//         this.comment = comment
//     }

//     set title(title){
//         this.title = title
//     }
//     set description(description){
//         this.description = description
//     }
//     set due(due){
//         this.due = due
//     }
//     set title(completeDate){
//         this.completeDate = completeDate
//     }
  
//     set title(comment){
//         this.comment = comment
//     }

// }

function showFilter(){
    const filter = document.getElementById('filter-options');
    filter.style.display = "inline"
}

function closeFilter(){
    const filter = document.getElementById('filter-options');
    filter.style.display = "none";
}

function showInput(){
    const input = document.getElementById('input-h')
    const list = document.getElementById('h')

    input.style.display = 'flex'
    list.style.display = 'none'

}

function showEdit(event){
    const input = document.getElementById('edit-h')
    const list = document.getElementById('h')

    input.style.display = 'flex'
    list.style.display = 'none'

    let parent = event.srcElement.parentNode.parentNode.parentNode
    let child = event.srcElement.parentNode.parentNode

    let index = Array.prototype.indexOf.call(parent.children, child);

    let title = document.getElementById('ed-title')
    let description = document.getElementById('ed-description')
    let due_date = document.getElementById('ed-due-date') 
    let complete_date = document.getElementById('ed-complete-date')

    

     title.value = display[index-1].title
     description.value = display[index-1].description
     due_date.value = display[index-1].due
     complete_date.value = display[index-1].due


    indexToEdit = index

}

function saveEdit(){

    display[indexToEdit-1].title = document.getElementById('ed-title').value
    display[indexToEdit-1].description = document.getElementById('ed-description').value
    display[indexToEdit-1].due = document.getElementById('ed-due-date').value
    display[indexToEdit-1].completeDate = document.getElementById('ed-complete-date').value
    

    editComplete()
}

function showList(){
    let input = document.getElementById('input-h')
    let list = document.getElementById('h')

    input.style.display = 'none'
    list.style.display = 'inline-block'
}

function showCompleteInfo(){
    let l = document.getElementById('complete-info')
    l.style.display = 'inline'
}

function editComplete(){
    const input = document.getElementById('edit-h')
    const list = document.getElementById('h')

    input.style.display = 'none'
    list.style.display = 'inline-block'
    updateView()
}

function fillInfo(){
    const title = document.getElementById('in-title').value
    const description = document.getElementById('in-description').value
    const due = document.getElementById('in-due-date').value

    // toDoList.push(new Item(title,description,due));
    toDoList.push({
        title: title,
        description:description,
        due:due
    });
    
    showList()
    updateView()
}

function removeChildren(){
    let ele = document.getElementById('c')
    for(let i = ele.children.length; i > 1; i--){
        ele.lastChild.remove();
    }
}

function updateView(){  
    removeChildren()
    display.forEach(element => {
        const d = document.createElement('div')
        d.className = 'list-item detailed'
        let date = element.due
        let innerDetailed = ` 
            <div class="list-item-left">
            <div class="l-title">${element.title}</div> 
            <div class="l-description">${element.description}</div>
            <div class="l-small">
            Date due: ${element.due}
            </div> 
            <div class="l-small">
            Date completed: ${element.completeDate == undefined ? ' Not complete': element.completeDate}
            </div> 
            <div class="l-small">
            Comment: ${element.comment == undefined ? ' Pending...': element.comment}
            </div>
            </div>
            <div class="list-item-right">
            <i class="material-icons" onclick="showEdit(event)">edit</i>
            <i class="material-icons" onclick="deleteItem(event)">delete</i>
            </div>
            `
        d.innerHTML = innerDetailed
        
        document.getElementById('c').appendChild(d)

    });

}

function removeFilter(){
    display = toDoList
    updateView()
}

function deleteItem(event){
    
    let parent = event.srcElement.parentNode.parentNode.parentNode
    let child = event.srcElement.parentNode.parentNode

    let index = Array.prototype.indexOf.call(parent.children, child);
    toDoList.splice(index,1)

    parent.removeChild(child)
}

function completedOnTime(){
    display = toDoList
    display = display.filter((value)=>{
        Date(value.due) < Date(value.completeDate)

    })
    updateView()
}

function completedLate(){
    display = toDoList
    display = display.filter((value)=>{
        Date(value.due) > Date(value.completeDate)

    })
    updateView()
}

function inComplete(){
    display = toDoList
    display = display.filter((value)=>{
         value.completeDate == ''

    })
    updateView()
    
}

function moreInfo(event){
    let innerDetailed = ` 
            <div class="list-item-left">
            <div class="l-title">Training</div> 
            <div class="l-description">Training for sunday game</div>
            <div class="l-small">
            date: 10/2/2022
            </div> 
            <div class="l-small">
            due: 10/2/2022
            </div> 
            <div class="l-small">
            comment: 10/2/2022
            </div>
            </div>
            <div class="list-item-right">
            <i class="material-icons">edit</i>
            <i class="material-icons">delete</i>
            </div>
            `

    // let parent = event.srcElement.parentNode.parentNode.parentNode;
    // let child = event.srcElement.parentNode.parentNode
    // let index = Array.prototype.indexOf.call(parent.children, child)
    // console.log(index)
    // // console.log(event.srcElement.parentNode.parentNode)
    // // console.log('Called')

    // console.log(parent)
    // console.log(child.parentNode)

    //  let newwer = document.createElement('div')
    //  newwer.innerHTML = innerDetailed

    //  parent.replaceChild(parent.children[index-1],newwer)
    
}





