let platform = document.querySelector(`.platform`);
let platformItems = document.querySelector(`.platform-items`);
let allBody = document.querySelector(`#allbody`);

// deskstop nav display


platform.addEventListener(`mouseover`, () =>{
   platformItems.style.top = `8vh`;
   platformItems.style.transition = `1s`;
   allBody.style.background = `rgb(54, 53, 53)`;
   allBody.style.opacity = `80%`;
   allBody.style.transition = `1s`;
   platformItems.style.opacity = `100%`;
});
platform.addEventListener(`mouseout`, () =>{
   platformItems.style.top = `-130vh`;
   allBody.style.background = `none`;
   allBody.style.transition = `1s`;
   platformItems.style.opacity = `10%`;

});
platformItems.addEventListener(`mouseover`, ()=>{
   platformItems.style.top = `8vh`;
   allBody.style.background = `rgb(54, 53, 53)`;
   allBody.style.opacity = `80%`;
   allBody.style.transition = `1s`;
   platformItems.style.opacity = `100%`;
});
platformItems.addEventListener(`mouseout`, ()=>{
   platformItems.style.top = `-130vh`;
   allBody.style.background = `none`;
   allBody.style.transition = `1s`;
   platformItems.style.opacity = `10%`;
});

let solution = document.querySelector(`.solution`);
let solutionItems = document.querySelector(`.solution-items`);

   solution.addEventListener(`mouseover`, () =>{
      solutionItems.style.top = `8vh`;
      solutionItems.style.transition = `1s`;
      allBody.style.background = `rgb(54, 53, 53)`;
      allBody.style.opacity = `80%`;
      allBody.style.transition = `1s`;
      solutionItems.style.opacity = `100%`;
   });
   solution.addEventListener(`mouseout`, () =>{
      solutionItems.style.top = `-130vh`;
      allBody.style.background = `none`;
      allBody.style.transition = `1s`;
      solutionItems.style.opacity = `10%`;
   });
   solutionItems.addEventListener(`mouseover`, ()=>{
      solutionItems.style.top = `8vh`;
      allBody.style.background = `rgb(54, 53, 53)`;
      allBody.style.opacity = `80%`;
      allBody.style.transition = `1s`;
      solutionItems.style.opacity = `100%`;
   });
   solutionItems.addEventListener(`mouseout`, ()=>{
      solutionItems.style.top = `-130vh`;
      allBody.style.background = `none`;
      allBody.style.transition = `1s`;
      solutionItems.style.opacity = `10%`;
   });


let resource = document.querySelector(`.resource`);
let resourceItems = document.querySelector(`.resources-items`);

resource.addEventListener(`mouseover`, () =>{
   resourceItems.style.top = `8vh`;
   resourceItems.style.transition = `1s`;
   allBody.style.background = `rgb(54, 53, 53)`;
   allBody.style.opacity = `80%`;
   allBody.style.transition = `1s`;
   resourceItems.style.opacity = `100%`;
});
resource.addEventListener(`mouseout`, () =>{
   resourceItems.style.top = `-130vh`;
   allBody.style.background = `none`;
   allBody.style.transition = `1s`;
   resourceItems.style.opacity = `10%`;
});
resourceItems.addEventListener(`mouseover`, ()=>{
   resourceItems.style.top = `8vh`;
   allBody.style.background = `rgb(54, 53, 53)`;
   allBody.style.opacity = `80%`;
   allBody.style.transition = `1s`;
   resourceItems.style.opacity = `100%`;
});
resourceItems.addEventListener(`mouseout`, ()=>{
   resourceItems.style.top = `-130vh`;
   allBody.style.background = `none`;
   allBody.style.transition = `1s`;
   resourceItems.style.opacity = `10%`;
});


let company = document.querySelector(`.company`);
let companyItems = document.querySelector(`.company-items`);

company.addEventListener(`mouseover`, () =>{
   companyItems.style.top = `8vh`;
   companyItems.style.transition = `2s`;
   allBody.style.background = `rgb(54, 53, 53)`;
   allBody.style.opacity = `80%`;
   allBody.style.transition = `1s`;
   companyItems.style.opacity = `100%`;
});
company.addEventListener(`mouseout`, () =>{
   companyItems.style.top = `-130vh`;
   allBody.style.background = `none`;
   allBody.style.transition = `1s`;
   companyItems.style.opacity = `10%`;
});
companyItems.addEventListener(`mouseover`, ()=>{
   companyItems.style.top = `8vh`;
   allBody.style.background = `rgb(54, 53, 53)`;
   allBody.style.opacity = `80%`;
   allBody.style.transition = `1s`;
   companyItems.style.opacity = `100%`;
});
companyItems.addEventListener(`mouseout`, ()=>{
   companyItems.style.top = `-130vh`;
   allBody.style.background = `none`;
   allBody.style.transition = `1s`;
   companyItems.style.opacity = `10%`;
});




//menu selector display

let menu = document.querySelector(`menu`);
let menuSelect = document.querySelector(`.menu-select`);
let buttons = document.querySelectorAll(`#button`);
let items = document.querySelectorAll(`#item`);



if (buttons[0].className === `active`) {      
   items[0].style.display = `flex`;
   items[0].style.transition = `2s`;
   items[1].style.display = `none`;
   items[2].style.display = `none`;
   items[3].style.display = `none`;
   items[4].style.display = `none`;
   items[5].style.display = `none`;
   
}


buttons.forEach(button => {
    button.addEventListener(`click`, function(){
        buttons.forEach( btn => btn.classList.remove(`active`));
        button.classList.add(`active`);


        if (buttons[0].className === `active`) {      
            items[0].style.display = `flex`;
            items[0].style.transition = `2s`;
            items[1].style.display = `none`;
            items[2].style.display = `none`;
            items[3].style.display = `none`;
            items[4].style.display = `none`;
            items[5].style.display = `none`;
            
        }
        else if (buttons[1].className === `active`) {
            items[1].style.display = `flex`;
            items[1].style.transition = `2s`;
            items[0].style.display = `none`;
            items[2].style.display = `none`;
            items[3].style.display = `none`;
            items[4].style.display = `none`;
            items[5].style.display = `none`;
         }

         else if (buttons[2].className === `active`) {
            items[2].style.display = `flex`;
            items[2].style.transition = `2s`;
            items[1].style.display = `none`;
            items[0].style.display = `none`;
            items[3].style.display = `none`;
            items[4].style.display = `none`;
            items[5].style.display = `none`;
         }
         else if (buttons[3].className === `active`) {
            items[3].style.display = `flex`;
            items[3].style.transition = `2s`;
            items[1].style.display = `none`;
            items[2].style.display = `none`;
            items[0].style.display = `none`;
            items[4].style.display = `none`;
            items[5].style.display = `none`;
         }
         else if (buttons[4].className === `active`) {
            items[4].style.display = `flex`;
            items[4].style.transition = `2s`;
            items[1].style.display = `none`;
            items[2].style.display = `none`;
            items[3].style.display = `none`;
            items[0].style.display = `none`;
            items[5].style.display = `none`;
         }
         else if (buttons[5].className === `active`) {
            items[5].style.display = `flex`;
            items[5].style.transition = `2s`;
            items[1].style.display = `none`;
            items[2].style.display = `none`;
            items[3].style.display = `none`;
            items[4].style.display = `none`;
            items[0].style.display = `none`;
         }
         else{
            console.log(`not working fam...`);
            
         }
      });
   });



//mobile nav display


   let platformBody = document.querySelector(`.platform-body`);
   let openNav = document.querySelector(`.open-nav`);
   let slideNav = document.querySelector(`.slide-nav`);
   let slide = document.querySelector(`.slide`);
   let platformBtn = document.querySelector(`.platform-btn`);
   let solutionBtn = document.querySelector(`.solution-btn`);
   let resourceBtn = document.querySelector(`.resources-btn`);
   let resourceItems2 = document.querySelector(`.resource-items2`)
   let companyBtn = document.querySelector(`.company-btn`);
   let companyItems2 = document.querySelector(`.company-items2`);
   let platformItems2 = document.querySelector(`.platform-items2`);
   let productBtn = document.querySelector(`.product-btn`);
   let serviceBtn = document.querySelector(`.service-btn`);
   let productList2 = document.querySelector(`.product-list2`);
   let serviceList2 = document.querySelector(`.service-list2`);
   let solutionItems2 = document.querySelector(`.solution-items2`)
   let functionBtn = document.querySelector(`.function-btn`);
   let industryBtn = document.querySelector(`.industry-btn`);
   let functionList = document.querySelector(`.function-list`);
   let industryList = document.querySelector(`.industry-list`);
   let closeNav = document.querySelector(`.close-nav`);
   let footer = document.querySelector(`footer`);



   //nav items display

   allBody.style.background = `none`;

   closeNav.style.display = `none`;

   openNav.addEventListener(`click`, () => {
      openNav.style.display = `none`;
      closeNav.style.display = `flex`;
      slide.style.display = `flex`;
      allBody.style.background = `rgb(54, 53, 53)`;
      allBody.style.opacity = `80%`;
      allBody.style.transition = `1s`;
      allBody.style.display = `sticky`;
      // slide.style.transition = `all 2s`;
      platformBtn.style.display = `flex`;
      platformBtn.style.borderTop = `1px solid rgb(214, 214, 214)`;
      solutionBtn.style.display = `flex`;
      resourceBtn.style.display = `flex`;
      companyBtn.style.display = `flex`;
      allBody.style.position = `fixed`;
      allBody.style.transition = `2s`;
      footer.style.position = `fixed`;

      window.scroll({
         top:0,
         behavior:`smooth`,
      })
   })
   closeNav.addEventListener(`click`, () => {
      openNav.style.display = `flex`;
      closeNav.style.display = `none`;
      slide.style.display = `none`;
      productBtn.style.display= `none`;
      serviceBtn.style.display= `none`;
      functionBtn.style.display= `none`;
      industryBtn.style.display= `none`;
      platformBtn.style.background = `white`;
      solutionBtn.style.background = `white`;
      resourceBtn.style.background = `white`;
      companyBtn.style.background = `white`;
      platformItems2.style.background = `white`;
      platformBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      solutionBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      resourceBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      companyBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      productList2.style.display = `none`;
      serviceList2.style.display = `none`;
      functionList.style.display = `none`;
      industryList.style.display = `none`;
      resourceItems2.style.display = `none`;
      companyItems2.style.display = `none`;
      allBody.style.background = `none`;
      allBody.style.transition = `.5s`;
      allBody.style.maxHeight = `100%`;
      allBody.style.position = `relative`;
      footer.style.position = `relative`;
      industryBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      industryBtn.style.color= `rgb(44, 128, 184)`;
      functionBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      functionBtn.style.color= `rgb(44, 128, 184)`;
      serviceBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      serviceBtn.style.color= `rgb(44, 128, 184)`;
      productBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      productBtn.style.color= `rgb(44, 128, 184)`;
 
   })

   allBody.addEventListener(`mouseover`,()=>{
      openNav.style.display = `flex`;
      closeNav.style.display = `none`;
      slide.style.display = `none`;
      productBtn.style.display= `none`;
      serviceBtn.style.display= `none`;
      functionBtn.style.display= `none`;
      industryBtn.style.display= `none`;
      platformBtn.style.background = `white`;
      solutionBtn.style.background = `white`;
      resourceBtn.style.background = `white`;
      companyBtn.style.background = `white`;
      platformItems2.style.background = `white`;
      platformBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      solutionBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      resourceBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      companyBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      productList2.style.display = `none`;
      serviceList2.style.display = `none`;
      functionList.style.display = `none`;
      industryList.style.display = `none`;
      resourceItems2.style.display = `none`;
      companyItems2.style.display = `none`;
      allBody.style.background = `none`;
      allBody.style.transition = `.5s`;
      allBody.style.position = `relative`;
      footer.style.position = `relative`;
      industryBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      industryBtn.style.color= `rgb(44, 128, 184)`;
      functionBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      functionBtn.style.color= `rgb(44, 128, 184)`;
      serviceBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      serviceBtn.style.color= `rgb(44, 128, 184)`;
      productBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      productBtn.style.color= `rgb(44, 128, 184)`;
   })
   footer.addEventListener(`mouseover`,()=>{
      openNav.style.display = `flex`;
      closeNav.style.display = `none`;
      slide.style.display = `none`;
      productBtn.style.display= `none`;
      serviceBtn.style.display= `none`;
      functionBtn.style.display= `none`;
      industryBtn.style.display= `none`;
      platformBtn.style.background = `white`;
      solutionBtn.style.background = `white`;
      resourceBtn.style.background = `white`;
      companyBtn.style.background = `white`;
      platformItems2.style.background = `white`;
      platformBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      solutionBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      resourceBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      companyBtn.style.borderBottom = `1px solid rgb(214, 214, 214)`;
      productList2.style.display = `none`;
      serviceList2.style.display = `none`;
      functionList.style.display = `none`;
      industryList.style.display = `none`;
      resourceItems2.style.display = `none`;
      companyItems2.style.display = `none`;
      allBody.style.background = `none`;
      allBody.style.transition = `.5s`;
      allBody.style.position = `relative`;
      footer.style.position = `relative`;
      industryBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      industryBtn.style.color= `rgb(44, 128, 184)`;
      functionBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      functionBtn.style.color= `rgb(44, 128, 184)`;
      serviceBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      serviceBtn.style.color= `rgb(44, 128, 184)`;
      productBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      productBtn.style.color= `rgb(44, 128, 184)`;
   })

//platform product & service display

   productBtn.style.display = `none`;
   serviceBtn.style.display = `none`
   function toggleplatform() {
      if (productBtn.style.display === `none` && serviceBtn.style.display === `none` ) {   
         platformItems2.style.display = `flex`;
         platformBtn.style.background = `rgba(220, 222, 223, 0.274)`;
         platformItems2.style.background = `rgba(220, 222, 223, 0.274)`;
         platformBtn.style.border = `none`;
         platformBtn.style.borderTop = `1px solid rgb(214, 214, 214)`;
         platformItems2.style.borderBottom = `1px solid rgb(214, 214, 214`;
         productBtn.style.display= `flex`;
         serviceBtn.style.display= `flex`;
      }
      else{         
         platformItems2.style.display = `none`;
         platformBtn.style.background = `white`;
         platformItems2.style.background = `rgba(220, 222, 223, 0.274)`;
         platformBtn.style.borderBottom = `1px solid rgb(214, 214, 214`;
         productBtn.style.display= `none`;
         serviceBtn.style.display= `none`;
         productList2.style.display = `none`;
         serviceList2.style.display = `none`;
      }
   }

   platformBtn.addEventListener(`click`, ()=>{
      platformItems2.toggleAttribute(toggleplatform());

   });

   //productList2 display

productList2.style.display = `none`;
function productListToggle() {
   productBtn.addEventListener(`click`, ()=>{
      if (productList2.style.display === `none`) {
         productList2.style.display = `flex`;
         productList2.style.transition = `all 2s`;
         productBtn.style.background= `rgb(44, 128, 184)`;
         productBtn.style.color= `white`;
         
      }
      else{
         productList2.style.display = `none`;
         productBtn.style.background= `rgba(220, 222, 223, 0.274)`;
         productBtn.style.color= `rgb(44, 128, 184)`;

      }
   })
}
productListToggle();


//servicesList2 display

serviceList2.style.display = `none`;
function serviceListToggle() {
   serviceBtn.addEventListener(`click`, ()=>{
      if (serviceList2.style.display === `none`) {
         serviceList2.style.display = `flex`;
         serviceBtn.style.background= `rgb(44, 128, 184)`;
         serviceBtn.style.color= `white`;
      }
      else{
         serviceList2.style.display = `none`;
         serviceBtn.style.background= `rgba(220, 222, 223, 0.274)`;
         serviceBtn.style.color= `rgb(44, 128, 184)`;
      }
   })
}
serviceListToggle();
        







// solution function & industry display
// solutionItems2.style.display = `none`;
functionBtn.style.display = `none`;
industryBtn.style.display = `none`
function toggleSolution() {
   if (functionBtn.style.display === `none` && industryBtn.style.display === `none` ) {   
      solutionItems2.style.display = `flex`;
      solutionBtn.style.background = `rgba(220, 222, 223, 0.274)`;
      solutionItems2.style.background = `rgba(220, 222, 223, 0.274)`;
      solutionBtn.style.border = `none`;
      platformItems2.style.borderBottom = `1px solid rgb(214, 214, 214`;
      functionBtn.style.display= `flex`;
      industryBtn.style.display= `flex`;
   }
   else{             
      solutionItems2.style.display = `none`;
      solutionBtn.style.background = `white`;
      solutionItems2.style.background = `rgba(220, 222, 223, 0.274)`;
      solutionBtn.style.borderBottom = `1px solid rgb(214, 214, 214`;
      functionBtn.style.display= `none`;
      industryBtn.style.display= `none`;
      functionList.style.display = `none`;
      functionList.style.display = `none`;
   }
}

solutionBtn.addEventListener(`click`, ()=>{
   solutionItems2.toggleAttribute(toggleSolution());

});

//productList2 display

// functionList.style.display = `none`;
function functionListToggle() {
functionBtn.addEventListener(`click`, ()=>{
   if (functionList.style.display === `none`) {
      functionList.style.display = `flex`;
      functionList.style.transition = `2s`;
      functionBtn.style.background= `rgb(44, 128, 184)`;
      functionBtn.style.color= `white`;
      
   }
   else{
      functionList.style.display = `none`;
      functionBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      functionBtn.style.color= `rgb(44, 128, 184)`;
   }
})
}
functionListToggle();


//servicesList2 display

industryList.style.display = `none`;
function industryListToggle() {
industryBtn.addEventListener(`click`, ()=>{
   if (industryList.style.display === `none`) {
      industryList.style.display = `flex`;
      industryBtn.style.background= `rgb(44, 128, 184)`;
      industryBtn.style.color= `white`;
   }
   else{
      industryList.style.display = `none`;
      industryBtn.style.background= `rgba(220, 222, 223, 0.274)`;
      industryBtn.style.color= `rgb(44, 128, 184)`;
   }
})
}
industryListToggle();
     

//resource display
resourceItems2.style.display = `none`;
resourceBtn.style.display = `none`;
function toggleResources() {
   if (resourceItems2.style.display === `none` ) {   
      resourceItems2.style.display = `flex`;
      resourceItems2.style.background = `rgba(220, 222, 223, 0.274)`;
      resourceBtn.style.background = `rgba(220, 222, 223, 0.274)`;
      resourceBtn.style.border = `none`;
      resourceItems2.style.borderBottom = `1px solid rgb(214, 214, 214`;
      resourceBtn.style.display= `flex`;
   }
   else{                   
      resourceItems2.style.display = `none`;
      resourceBtn.style.background = `white`;
      resourceItems2.style.background = `rgba(220, 222, 223, 0.274)`;
      resourceBtn.style.borderBottom = `1px solid rgb(214, 214, 214`;
      resourceItems2.style.display= `none`;
   }
}

resourceBtn.addEventListener(`click`, ()=>{
   resourceItems2.toggleAttribute(toggleResources());

});



//company display
companyItems2.style.display = `none`;
companyBtn.style.display = `none`;
function toggleCompany() {
   if (companyItems2.style.display === `none` ) {   
      companyItems2.style.display = `flex`;
      companyItems2.style.background = `rgba(220, 222, 223, 0.274)`;
      companyBtn.style.background = `rgba(220, 222, 223, 0.274)`;
      companyBtn.style.border = `none`;
      companyItems2.style.borderBottom = `1px solid rgb(214, 214, 214`;
      companyBtn.style.display= `flex`;
   }
   else{                 
      companyItems2.style.display = `none`;
      companyBtn.style.background = `white`;
      companyItems2.style.background = `rgba(220, 222, 223, 0.274)`;
      companyBtn.style.borderBottom = `1px solid rgb(214, 214, 214`;
      companyItems2.style.display= `none`;
   }
}

companyBtn.addEventListener(`click`, ()=>{
   companyItems2.toggleAttribute(toggleCompany());

});