let cart= document.querySelector("#popup")
let display_popup=document.querySelector("#display_content")
let click_count=0
let counts=0
let addition=document.querySelector("#plus")
let subtract=document.querySelector("#minus")
let numbers=document.querySelector("#number")
let image_1=document.querySelector("#image_1")
let image_2=document.querySelector("#image_2")
let image_3=document.querySelector("#image_3")
let image_4=document.querySelector("#image_4")
let cart_popup=document.querySelector("#wait")
let title=document.querySelector("#title_of_shoes")
let popup_price=document.querySelector("#prices")
let price_with_quantity=document.querySelector("#price_with_quantity")
let price_to_get_add=document.querySelector("#price_to_get_add")
let final_answers=document.querySelector("#answers")
let multiply_values=document.querySelector("#multiply")
let equating_values=document.querySelector("#equating")
cart.addEventListener("click",(event)=>
{
    event.preventDefault();
    click_count=click_count+1
    if(click_count%2===1)
        {
           
            cart_popup.textContent=title.textContent
            price_to_get_add.textContent=parseInt(numbers.textContent)
            let a=price_with_quantity.textContent
            let b=a.replace("$","")
            let c=parseInt(b)     
            let d=parseInt(price_to_get_add.textContent)
           let m=c*d 
           let g=0


            if(numbers.textContent>0)
            {
                display_popup.style.display="block"
                cart_popup.textContent=title.textContent
                price_with_quantity.textContent=popup_price.textContent
                multiply_values.style.display="block"
                equating_values.style.display="block"
                final_answers.textContent=m
                
            }
            else if (d==0){
                display_popup.style.display="block"
                cart_popup.textContent="Your cart is Empty"
                // console.log("ganapathy")
                price_with_quantity.innerHTML=""
                multiply_values.style.display="none"
                equating_values.style.display="none"
                final_answers.textContent=" "
                // console.log("ajith")
                
            }
            
        }
        else{
            // console.log("varata")
            display_popup.style.display="none"
        }
    

});

addition.addEventListener("click",(event)=>{
    event.preventDefault();
    counts=counts+1
    numbers.textContent=counts
   
});

subtract.addEventListener("click",(event)=>{
    event.preventDefault();
    counts=counts-1
    if(counts>=0){
        numbers.textContent=counts
    }
   
    
});


// final_answers.textContent=price_to_get_add.value*parseInt(price_with_quantity.textContent)
            // console.log(price_with_quantity.textContent) => $125.00  => String
            // console.log(price_to_get_add.textContent) => 4  => String


                        // c=125.00  => Number