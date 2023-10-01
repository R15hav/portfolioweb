//Enable typing animation when scrolling and hovering over teh section
var idList = ['scrollspyHeading1', 'scrollspyHeading2', 'scrollspyHeading3']
function initTyping(event) {
    var eleId=event.target.children[0].id;
    var h1 = document.getElementById(eleId);
    h1.classList.add('typing')

    // //set the projects to display none then below display after above typing is completed
    // if(eleId=='scrollspyHeading2'){
    //     setTimeout(() => {
    //         document.getElementById('projects-content').classList.remove('d-none');

    //     }, 5000);
    // }

    idList.forEach(element => {
        if (element != eleId) {
            var h1 = document.getElementById(element);
            h1.classList.remove('typing')
        }
    });
}

//Display project details on click of the li 
var details=[
    {
        name:'Glacier',
        value:'This is a chat app developed using bla bla bla...'
    }
]
function openDetails(event) {
    var detailsElement= document.getElementById('project-details');
    var detailsHeader = document.getElementById('project-details-header');
    detailsElement.classList.add('d-none')
    detailsHeader.classList.remove('d-none');
    detailsHeader.classList.add('typing');
    setTimeout(() => {
        details.forEach(element => {
            if(element.name==event.target.id){
                detailsElement.innerHTML=element.value;
                detailsElement.classList.remove('d-none')
            }
        });
        detailsHeader.classList.add('d-none');
    }, 5000);
}
