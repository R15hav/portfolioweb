//Enable typing animation when scrolling and hovering over teh section
var idList = ['scrollspyHeading1', 'scrollspyHeading2', 'scrollspyHeading3']
function initTyping(event) {
    var eleId=event.target.children[0].id;
    var h1 = document.getElementById(eleId);
    h1.classList.add('typing')

    //set the projects to display none then below display after above typing is completed
    if(eleId=='scrollspyHeading2'){
        setTimeout(() => {
            var proj=document.getElementById('projects-content');
            proj.classList.remove('d-none');
            // var listOfProj=proj.children[0].children[0].children;
            // for (let index = 0; index < listOfProj.length; index++) {
            //     const element = listOfProj[index];
            //     element.classList.add('typing');
            //     setTimeout('',5000);
            // }
            
        }, 5000);
    }

    idList.forEach(element => {
        if (element != eleId) {
            var h1 = document.getElementById(element);
            h1.classList.remove('typing')
        }
    });
}


//Set projects in li from config
function setProjects() {
    console.log(1);
    console.log(2);
    var ul=document.getElementById('project-list');
    console.log(3);
    details.forEach(element => {
        console.log(4);
        var li =`<li onclick="openDetails(event)" id="${element.id}">${element.name}</li>`;
        console.log(5);
        ul.innerHTML+=li;
        console.log(6);
    });
    console.log(7);
}


//Display project details on click of the li 
function openDetails(event) {
    var detailsElement= document.getElementById('project-details');
    var detailsHeader = document.getElementById('project-details-header');
    detailsElement.classList.add('d-none')
    detailsHeader.classList.remove('d-none');
    detailsHeader.classList.add('typing');
    setTimeout(() => {
        details.forEach(element => {
            if(element.id==event.target.id){
                detailsElement.innerHTML=element.desc;
                detailsElement.classList.remove('d-none')
            }
        });
        detailsHeader.classList.add('d-none');
    }, 5000);
}
