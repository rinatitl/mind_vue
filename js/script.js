var vm = new Vue({
    el : '#app',
    components : {'options' : options , 'sidebar' : sidebar, timetableShow : timetable},
    data : {

    },
    methods : {
        
    }
});

const link_adress = window.location.href;
const sidebar_links = document.querySelectorAll("#page_links li a");
sidebar_links.forEach((link) => {
    let link_href = link;
    link_href += ".html";
    if (link.href == link_adress || link_href == link_adress) {
        link.classList.add("on_it");
    }
});

