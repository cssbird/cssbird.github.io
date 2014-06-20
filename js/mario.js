/*
mario.js
@author cssbird
http://weibo.com/cssbird
*/
function mario(){
    var divs=document.all;
    for(var i=0;i<divs.length;i++){
        var type=divs[i].getAttribute('type');
        switch (type){             
                case 'mario':
                    divs[i].innerHTML='<style>#cuadro{width:100%; height:100%; margin:auto; margin-top:10%;}div.pixel{float:left; width:6%; height:6%; /*outline: hsla(0,0%,80%,1) solid 1px;*/}div.pixel:hover{ opacity:0.8;}#p-36, #p-37, #p-38, #p-51, #p-53, #p-67, #p-69, #p-70, #p-83 ,#p-84, #p-127, #p-142, #p-143, #p-158, #p-159, #p-174, #p-175, #p-178, #p-179, #p-190, #p-191, #p-193, #p-194, #p-195, #p-209, #p-210{background-color:#844221;}/*CAFE*/#p-12, #p-13, #p-14/**/, #p-29, #p-30/**/, #p-39, #p-40, #p-42/**/, #p-52, #p-54, #p-55, #p-56, #p-58, #p-59, #p-60/**/,#p-68, #p-71, #p-72, #p-73, #p-75, #p-76, #p-77, #p-85 ,#p-86 ,#p-87, #p-88/**/, #p-101, #p-102, #p-103, #p-104, #p-105, #p-106, #p-107{background-color:#f0bd8c;}/*PIEL*//**/#p-41/**/, #p-57/**/, #p-74, #p-89, #p-90, #p-91, #p-92{background-color:#000000;}/*NEGRO*//**/#p-05, #p-06, #p-07, #p-08, #p-09/**/,#p-20, #p-21, #p-22, #p-23, #p-24, #p-25, #p-26, #p-27, #p-28/**/, #p-44, #p-45, #p-46/**/, #p-61, #p-62/**/, #p-78, #p-93/**/, #p-108, #p-109/**/, #p-114, #p-115, #p-116, #p-117, #p-119, #p-120, #p-121, #p-123, #p-124/**/, #p-130, #p-131, #p-132, #p-133, #p-134, #p-136, #p-137, #p-138/**/, #p-147, #p-148, #p-149, #p-150{background-color:#d42317;}/*ROJO*//**/ #p-118, #p-122/**/, #p-135, #p-139/**/, #p-151, #p-152, #p-153, #p-154, #p-156, #p-157/**/, #p-164, #p-165, #p-166, #p-167, #p-169, #p-170, #p-171, #p-172, #p-173/**/, #p-180, #p-181, #p-182, #p-183, #p-184, #p-185, #p-186, #p-187, #p-188, #p-189/**/, #p-196, #p-197, #p-198, #p-199, #p-200, #p-201{background-color:#41529f;}/*AZUL*//**/#p-155/**/, #p-168{background-color:#fceb2d;}/*AMARILLO*/</style>';
                    var sectionDiv=document.createElement("div")
                    sectionDiv.setAttribute("id","cuadro");
                    for(var ii=1;ii<225;ii++){
                        var div=document.createElement("div");
                        div.setAttribute("class","pixel");
                        if(ii<10){
                            ii="0"+ii;
                        }
                        div.setAttribute("id","p-"+ii);
                        sectionDiv.appendChild(div);
                    }
                    divs[i].appendChild(sectionDiv);
                    var size=divs[i].getAttribute('size');
                    if(size==null){
                        size="100";
                    }
                    divs[i].style.width=size+"px";
                    divs[i].style.height=size+"px";
                break;
        }
    }
}
try{
    window.addEventListener('load',function(){
        mario();
    },false);
}catch(err){
    //console.log(err);
    // in  IE 7 <
    window.onload=function(){
        mario();
    }
}
