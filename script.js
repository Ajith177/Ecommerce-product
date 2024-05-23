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
let final_ansers=document.querySelector("#answers")
let multiply_values=document.querySelector("#multiply")
let equating_values=document.querySelector("#equating")
cart.addEventListener("click",(event)=>
{
    event.preventDefault();
    click_count=click_count+1
    // if(click_count%2===1)
        // {
            display_popup.style.display="block"
            cart_popup.textContent=title.textContent
            
            price_to_get_add.textContent=parseInt(numbers.textContent)
            let fixedPrice = parseInt(price_to_get_add.innerText)
            let mulValue = parseInt(numbers.innerText)
            // console.log(fixedPrice, Number(price_with_quantity.innerText?.split("$")?.[1]?.split(".")[0]))
            final_ansers.textContent=fixedPrice*Number(price_with_quantity.innerText?.split("$")?.[1]?.split(".")[0])
            if(numbers.textContent>0)
            {
                // cart_textContent="Added to Cart"
                // cart_popup.textContent.style.display="block"
                cart_popup.textContent=title.textContent
                multiply_values.style.display="block"
                equating_values.style.display="block"
                price_with_quantity.textContent=popup_price.textContent
                 
            }
            else{
                // cart.textContent="Add to Cart"
                cart_popup.textContent="Your cart is Empty"
                // price_with_quantity.textContent.style.display=""
                multiply_values.innerText = ""
                price_to_get_add.innerText=""
                equating_values.innerText = ""
                final_ansers.innerText = ""
                price_with_quantity.textContent=""
                console.log(multiply_values)
                // multiply_values.style.visibility="hidden"
                // equating_values.style.visibility="hidden"
                
            }
        // }
    // else
    // {
    //     display_popup.style.display="none"
    //     // cart.textContent="Add to Cart"
    // }

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
