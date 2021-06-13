console.log ("hello from the script page")

Vue.component('mynavbar', {
    template: `<div class="mynavbar">
        <a href= "index.html"> home</a>
        <a href="secondpage.html"> workshops</a> 
        <a href="">guides</a> 
        <a href="">about</a>
    
    </div>`
})



var myapp = new Vue ({
el: '#main', 
data: {
    name: "Anna"
}

})

function startup(){
    

    if(localStorage.getItem("hb") === null) {
        localStorage.setItem("hb",0)

    }


}

function reset(){
    localStorage.clear()
    localStorage.setItem("hb",0)

}


function price_table(temp){
    var res = 0
 

    if(temp == "hb"){
        res = 35.0
    }


    return res
}

function sum_total(){
    var sum = 0
    var count = 0
    for (const key in localStorage) {

        var item_price = price_table(key)
        var quant = localStorage.getItem(key)
        count += parseInt(quant)
        var result = item_price * quant

        sum +=result
    }
  

    $("#till").html("Sum Total of your Cart is €" + sum)
    $("#tally").html("Number of Items" + count)
    console.log("The value of the cart is " + parse)  
}

$(document).ready(function(){
    startup();

   

    $("#hb").click(function(){
        var how_many_iced = parseInt(localStorage.getItem("hb"))
        how_many_iced = how_many_iced + 1
        localStorage.setItem("hb",how_many_iced)
        sum_total()
    })

    $("#res").click(function(){
        reset()

    })



})     







