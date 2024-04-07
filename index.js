//Enable typing animation when scrolling and hovering over teh section
var idList = ['scrollspyHeading1', 'scrollspyHeading2', 'scrollspyHeading3']
function initTyping(id) {
    var h1 = document.getElementById(id);
    h1.classList.add('typing')

    //set the projects to display none then below display after above typing is completed
    if(id=='scrollspyHeading2'){
        setTimeout(() => {
            var proj=document.getElementById('projects-content');
            proj.classList.remove('d-none');
            
        }, 3000);
    }

    idList.forEach(element => {
        if (element != id) {
            var h1 = document.getElementById(element);
            h1.classList.remove('typing')
        }
    });
}


//Set projects in li from config
function setProjects() {
    var ul=document.getElementById('project-list');
    details.forEach(element => {
        var li =`<li onclick="openDetails(event)" id="${element.id}">${element.name}</li>`;
        ul.innerHTML+=li;
    });
}

function openDetails(event){
    openBigDetails(event);
    openSmallDetails(event);
}

//Display project details on click of the li 
function openBigDetails(event) {
    var detailsElement= document.getElementById('project-details');
    var detailsHeader = document.getElementById('project-details-header');
    var detailButtons = document.getElementById('proj-buttons');
    detailsElement.classList.add('d-none')
    detailButtons.classList.add('d-none')
    detailsHeader.classList.remove('details-header');
    detailsHeader.innerText = 'Initiating Projects...';
    detailsHeader.classList.remove('d-none');
    detailsHeader.classList.add('typing');
    setTimeout(() => {
        details.forEach(element => {
            if(element.id==event.target.id){
                detailsHeader.classList.remove('typing');
                detailsHeader.innerText = element.name;
                detailsHeader.classList.add('h1');
                detailsHeader.classList.add('details-header');
                detailsElement.innerHTML=element.desc;
                detailsElement.classList.remove('d-none');
                detailsElement.classList.add('project-details');
                detailButtons.children[0].href=element.demo;
                detailButtons.children[1].href=element.github;
                detailButtons.classList.remove('d-none');
            }
        });
        //detailsHeader.classList.add('d-none');
    }, 5000);
}

//Display project details on click of the li for small component
function openSmallDetails(event) {
    var detailsElement= document.getElementById('project-details-small');
    var detailsHeader = document.getElementById('project-details-header-small');
    var detailButtons = document.getElementById('proj-buttons-small');
    detailsElement.classList.add('d-none')
    detailButtons.classList.add('d-none')
    detailsHeader.classList.remove('details-header');
    detailsHeader.innerText = 'Initiating Projects...';
    detailsHeader.classList.remove('d-none');
    detailsHeader.classList.add('typing');
    setTimeout(() => {
        details.forEach(element => {
            if(element.id==event.target.id){
                detailsHeader.classList.remove('typing');
                detailsHeader.innerText = element.name;
                detailsHeader.classList.add('h1');
                detailsHeader.classList.add('details-header');
                detailsElement.innerHTML=element.desc;
                detailsElement.classList.remove('d-none');
                detailsElement.classList.add('project-details-small');
                detailButtons.children[0].href=element.demo;
                detailButtons.children[1].href=element.github;
                detailButtons.classList.remove('d-none');
            }
        });
        //detailsHeader.classList.add('d-none');
    }, 5000);
}
