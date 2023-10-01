var idList = ['scrollspyHeading1', 'scrollspyHeading2', 'scrollspyHeading3']
function initTyping(event) {
    var eleId=event.target.children[0].id;
    var h1 = document.getElementById(eleId);
    h1.classList.add('typing')
    idList.forEach(element => {
        if (element != eleId) {
            var h1 = document.getElementById(element);
            h1.classList.remove('typing')
        }
    });
}
