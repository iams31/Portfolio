// ScrollIng
var navaTag=document.querySelectorAll('.nav-menu a');
console.log(navaTag);
for(var i=0;i<navaTag.length;i++){
    navaTag[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.toLowerCase().trim();
        var targetSection=document.getElementById(targetSectionID);
        
        
        var interval=setInterval(function(){
            var targetSectionCordinates=targetSection.getBoundingClientRect();
            if(targetSectionCordinates.top<=10){
                clearInterval(interval);
                return;
            }
            if(targetSectionCordinates.bottom<=750){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}
// Skill
var progressBar=document.querySelectorAll('.skill-indicator');
var skillContainer=document.getElementById('having-skill');
window.addEventListener('scroll',checkscroll);
var animation=false;
function checkscroll(){
    var coordinates=skillContainer.getBoundingClientRect();
    if(coordinates.top<visualViewport.height && coordinates.bottom>10 && !animation){
        initailiseBar()
        fillbars();
        console.log("Visible");
        animation=true;
    }
    if(coordinates.top<visualViewport.height && !animation && coordinates.bottom>visualViewport.height){
        initailiseBar();
        fillbars();
        console.log("Visible");
        animation=true;
    }
    if(coordinates.bottom<-10 || coordinates.top>visualViewport.height){
        animation=false;
    }
}
function fillbars(){
    for(let bar of progressBar){
        console.log(bar)
        let w=bar.getAttribute("data");
        let c=0;
        let inter=setInterval(function(){
            if(c>w){
                clearInterval(inter);
                return;
            }
            c++;
            bar.style.width=c+'%';
        },10);
    }
}
function initailiseBar(){
    for(var bar of progressBar){
        bar.style.width=0+'%';
    }
}