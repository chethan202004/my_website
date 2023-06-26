document.addEventListener("DOMContentLoaded",function showContent(component){
    //function to display content
    function showContent(component){
        var homePage = "<h1>Welcome to the Home Page</h1><p> Any content can be dynamically updated</p><h2>Welcome to our company </h2><p>below is just a sample content</p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium modi officia consequuntur ipsa mollitia consectetur, at magnam atque explicabo! Dolor magni consequuntur tempore, soluta voluptas recusandae illum repellendus doloribus voluptate repudiandae veniam expedita ut autem beatae. Earum impedit nisi aliquid molestiae nesciunt unde harum a blanditiis fuga aliquam? Neque id deleniti vel consequatur, accusantium voluptatum, hic unde ad in corrupti deserunt, ut magnam blanditiis! Optio commodi assumenda omnis ipsam doloribus corrupti impedit. Sapiente voluptas quo similique sunt ut nam expedita sequi eveniet voluptate porro maiores, ratione a atque quaerat suscipit tempore distinctio ducimus temporibus, voluptatem dignissimos reiciendis.</p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium modi officia consequuntur ipsa mollitia consectetur, at magnam atque explicabo! Dolor magni consequuntur tempore, soluta voluptas recusandae illum repellendus doloribus voluptate repudiandae veniam expedita ut autem beatae. Earum impedit nisi aliquid molestiae nesciunt unde harum a blanditiis fuga aliquam? Neque id deleniti vel consequatur, accusantium voluptatum, hic unde ad in corrupti deserunt, ut magnam blanditiis! Optio commodi assumenda omnis ipsam doloribus corrupti impedit. Sapiente voluptas quo similique sunt ut nam expedita sequi eveniet voluptate porro maiores, ratione a atque quaerat suscipit tempore distinctio ducimus temporibus, voluptatem dignissimos reiciendis.</p>";
        var contactPage = "<h1>Welcome to Contact Page</h1><p>This is the contact information.</p><a href=mailto:chethanv202004@gmail.com/>MAIL ME</a><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolores totam dolor ducimus maiores harum necessitatibus quas deserunt? </p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium modi officia consequuntur ipsa mollitia consectetur, at magnam atque explicabo! Dolor magni consequuntur tempore, soluta voluptas recusandae illum repellendus doloribus voluptate repudiandae veniam expedita ut autem beatae. Earum impedit nisi aliquid molestiae nesciunt unde harum a blanditiis fuga aliquam? Neque id deleniti vel consequatur, accusantium voluptatum, hic unde ad in corrupti deserunt, ut magnam blanditiis! Optio commodi assumenda omnis ipsam doloribus corrupti impedit. Sapiente voluptas quo similique sunt ut nam expedita sequi eveniet voluptate porro maiores, ratione a atque quaerat suscipit tempore distinctio ducimus temporibus, voluptatem dignissimos reiciendis.</p>";
        var infoPage = "<h1>Welcome to Information Page</h1><p>This is the information content.</p><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolores totam dolor ducimus maiores harum necessitatibus quas deserunt? </p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium modi officia consequuntur ipsa mollitia consectetur, at magnam atque explicabo! Dolor magni consequuntur tempore, soluta voluptas recusandae illum repellendus doloribus voluptate repudiandae veniam expedita ut autem beatae. Earum impedit nisi aliquid molestiae nesciunt unde harum a blanditiis fuga aliquam? Neque id deleniti vel consequatur, accusantium voluptatum, hic unde ad in corrupti deserunt, ut magnam blanditiis! Optio commodi assumenda omnis ipsam doloribus corrupti impedit. Sapiente voluptas quo similique sunt ut nam expedita sequi eveniet voluptate porro maiores, ratione a atque quaerat suscipit tempore distinctio ducimus temporibus, voluptatem dignissimos reiciendis.</p>";
        var guidePage = "<h1>Welcome to Guide Page</h1><p>Content in guide page.</p><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est dolores totam dolor ducimus maiores harum necessitatibus quas deserunt? </p><p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium modi officia consequuntur ipsa mollitia consectetur, at magnam atque explicabo! Dolor magni consequuntur tempore, soluta voluptas recusandae illum repellendus doloribus voluptate repudiandae veniam expedita ut autem beatae. Earum impedit nisi aliquid molestiae nesciunt unde harum a blanditiis fuga aliquam? Neque id deleniti vel consequatur, accusantium voluptatum, hic unde ad in corrupti deserunt, ut magnam blanditiis! Optio commodi assumenda omnis ipsam doloribus corrupti impedit. Sapiente voluptas quo similique sunt ut nam expedita sequi eveniet voluptate porro maiores, ratione a atque quaerat suscipit tempore distinctio ducimus temporibus, voluptatem dignissimos reiciendis.</p>";
    
        var contentDiv=document.querySelector('#content');
    
    switch(component){
        case 'home':
            contentDiv.innerHTML= homePage;
            break;
    
        case 'contact':
            contentDiv.innerHTML=contactPage;
            break;
        
        case 'information':
            contentDiv.innerHTML=infoPage;
            break;
        
        case 'guide':
            contentDiv.innerHTML=guidePage;
            break;
        
        default:
            contentDiv.innerHTML="";
            break;
    }
    }
   


//getting all the links
var homeLink=document.getElementById ("home-link");
var contactLink=document.getElementById ("contact-link");
var informationLink=document.getElementById ("information-link");
var guideLink=document.getElementById ("guide-link");


//adding event listeners to all the links

homeLink.addEventListener("click",function() {
    showContent('home');
    setActiveLink(this);
});

contactLink.addEventListener("click",function() {
    showContent('contact');
    setActiveLink(this);
});

informationLink.addEventListener("click",function() {
    showContent('information');
    setActiveLink(this);
});

guideLink.addEventListener('click',function(){
    showContent('guide');
    setActiveLink(this);
});


//function for active link
function setActiveLink(link){
    let links=document.getElementsByClassName('active');
    for(let i=0; i<links.length;i++){
        links[i].classList.remove('active');
    }

    //adding class to selected link
    link.classList.add('active');
}

//setting default content and adding active class
    showContent('home');
    homeLink.classList.add('active');
});

