/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navsections = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
let containerCount = document.getElementsByClassName("landing__container")
    .length;
    
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
////just trying 

function pageCreateNavbar() {
    for (let item of sections) {
        let creatnewelement = '';
        creatnewelement += `<li class='nav-item ${item.className}' id='nav_${item.id}'data-link=${item.id}>${item.dataset.nav}</li>`;
        creatnewelement += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
        navsections.insertAdjacentHTML('beforeend', creatnewelement);
        //let itemTarget = document.getElementById("${item.id}");
        // let listTarget = document.getElementById(listItem);
        //listTarget.addEventListener("click", function() {
        // itemTarget.scrollIntoView ({
        //behavior: 'smooth'}
        //)
        // })
        for (i = 1; i < containerCount + 1; i++) {
            //let listItem = nav_+item.id;
           // let i = 1;
            let listItem =document.getElementById("nav_" + item.id);
            console.log(listItem);
            let itemTarget = document.getElementById("section" + i);
            console.log(itemTarget);

            let listTarget = document.getElementById("nav_"+item.id);
            console.log(listTarget);
            //i++;
            document.querySelectorAll('.nav-item').forEach(listTarget=>{
            listTarget.addEventListener("click", function () {
                itemTarget.scrollIntoView({
                    behavior: 'smooth'
                }
                )
            })
        })
         }
            //i++;
            /*
           document.querySelectorAll('.nav-item').forEach(item=>{
            item.addEventListener('click',event =>{
             //const requestedSectionName = item.target.id.split('_')[1];
             const requestedSection = document.getElementById("nav_"+item.id);
             console.log(requestedSection);
             requestedSection.scrollIntoView(); //go to index.html/#section
            })
        })
        */

       
        
        
        window.addEventListener('scroll', function () {
            //let i=1;
            let sectionDistanceFromCurrentWindow = 0;
            for (let section of sections) {
                sectionDistanceFromCurrentWindow = Math.floor(section.getBoundingClientRect().top);
                if (Math.abs(sectionDistanceFromCurrentWindow) < 200) {
                    //setActiveSection(section);
                    link=document.getElementById("nav_${section.id}");
                    setActive(0, link, section);
                    setActive(1, link, section);

                    //sectionNavMenuLink = document.getElementById(`nav_${section.id}`);
                    //setActiveMenuLink(sectionNavMenuLink);
                }
            }
          /*
            var div=document.getElementById("nav_" + item.id);
            console.log(div);
            var rect=div.getBoundingClientRect();
            if(rect.top >0 &&rect.top<= 200){
                document.querySelector('.your-active-class')?.classList.remove('your-active-class');
                rect.classList.add('your-active-class');
                sectionNavMenuLink = document.getElementById(`nav_${section.id}`);
                document.querySelector('.viewing')?.classList.remove('viewing');

                //set clicked navbar as part of viewing class
                menuLinkItem.classList.add('viewing');
            }
            //i++;
            */
        });
       
    }
}
pageCreateNavbar();
// Set sections as active
/*function setActiveSection(section) {
    //remove active class from old active section if exist
    document.querySelector('.your-active-class')?.classList.remove('your-active-class');

    //set section corresponding to clicked navbar as part of your-active-class class
    section.classList.add('your-active-class');
}


//Set menu link in navbar as active
function setActiveMenuLink(menuLinkItem) {
    //remove viewing class from old active menu link if exist
    document.querySelector('.viewing')?.classList.remove('viewing');

    //set clicked navbar as part of viewing class
    menuLinkItem.classList.add('viewing');
}*/
/*function DynamicNav(){
    for (i = 1; i < containerCount + 1; i++) {
        //let listItem = 'nav_${item.id}';
        //console.log(listItem);
        //let item = "#section" + i + "-title";
        let item = "#section" + i + "-title";
        let itemValue = document.querySelector(item);
        console.log(itemValue);
      let itemText = itemValue.textContent;
      let newLine = document.createElement("li");
      let lineText = document.createTextNode(itemText);
      let listItem = "sample-nav-" + i;
      newLine.setAttribute("id", listItem);
      newLine.setAttribute("class", "nav-list-item");
      newLine.appendChild(lineText);
      unorderedList.appendChild(newLine);       
       let itemTarget = document.getElementById("section" + i);
        let listTarget = document.getElementById('nav_${item.id}');
        //i++;
        listTarget.addEventListener("click", function () {
            itemTarget.scrollIntoView({
                behavior: 'smooth'
            }
            )
        })
        //i++;
    }
    
}
DynamicNav();
*/



function setActive(flag, link, section) {
    if (flag == 0) {
        
            ///set section active
            document.querySelector('.your-active-class')?.classList.remove('your-active-class');
            section.classList.add('your-active-class');
            flag = 1;
        
    } else if (flag == 1) {
        ///set link active
        
            document.querySelector('.viewing')?.classList.remove('viewing');
            link.classList.add('viewing');
            flag = 0;
        
    }
}

// Add class 'active' to section when near top of viewport
/*window.addEventListener('scroll', function () {
    let sectionDistanceFromCurrentWindow = 0;
    let link = '';
    let flag = 0;
    for (let section of sections) {
        sectionDistanceFromCurrentWindow = Math.floor(section.getBoundingClientRect().top);
        if (Math.abs(sectionDistanceFromCurrentWindow) < 200) {
            //setActiveSection(section);
            link = document.getElementById(`nav_${section.id}`);
            setActive(flag, section, link);
            //setActiveMenuLink(sectionNavMenuLink);
        }
    }
});

*/
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
//////

/*navsections.addEventListener('click', function (evt) {
    //get clicked Menu Link Item in Navbar and set it is class to viewing (change in CSS)
    const requestedMenuLinkItem = document.getElementById(evt.target.id);
    setActive(1, 0, requestedMenuLinkItem);

    //get section# (the required section id) from nav_section# (clicked nav list id) and set it as your-active-class
    const requestedSectionName = evt.target.id.split('_')[1];
    const requestedSection = document.getElementById(requestedSectionName);
    setActive(0, requestedSection, 0);
    requestedSection.scrollIntoView(); //go to index.html/#section
});
*/
// Set sections as active