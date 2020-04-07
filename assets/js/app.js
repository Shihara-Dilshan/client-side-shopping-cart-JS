//remove white spaces

function myTrim(x) {

    return x.replace(/\s/g, "");


}

//show mobile shopping cart

function showMobileCart() {

    const showCart = document.getElementById('cart');
    const cartIcon = document.getElementById('cartIcon');

    showCart.classList.toggle('hideCart');
    showCart.classList.toggle('showCart');



}


//show cart

(function () {

    const showCart = document.getElementById('cart');
    const cartIcon = document.getElementById('cartIcon');

    cartIcon.addEventListener("click", function () {



        showCart.classList.toggle('hideCart');
        showCart.classList.toggle('showCart');



    });


})();


//add items to the cart

(function () {

    let totalPrice = 0;
    let totalItems = 0;
    const cartBtn = document.querySelectorAll('.card-action');

    cartBtn.forEach(function (btn) {

        btn.addEventListener('click', function (event) {


            const item = {};
            let tar = event.target.parentElement.previousElementSibling;
            let name = tar.children[0].textContent;
            let price = tar.children[3].textContent;
            let Oprice = parseInt(price);
            item.itemName = name;
            item.itemPrice = Oprice;

            totalPrice = totalPrice + item.itemPrice;

            const cartItem = document.createElement('div');
            cartItem.style.display = "table";
            cartItem.style.width = "100%";
            //cartItem.classList.add('showCart', 'test');


            const inputField = myTrim(item.itemName);


            //console.log(inputField);

            cartItem.innerHTML =
                `        
                
               <input style="display: table-cell;" id="${inputField}${totalItems}" value="${item.itemName} Rs - ${item.itemPrice}" disabled>  
                      
       
                <i class="material-icons" id="cartIcon" onclick="aa()"
                    style="display: table-cell; text-align: right;">edit</i>
                <i class="material-icons" id="cartIcon" onclick="aa()"
                    style="display: table-cell; text-align: right;">delete</i>
            </div>
`;





            const tot = document.getElementById('displayPrice');
            tot.innerHTML = "Total price : " + totalPrice;

            const cart = document.getElementById('purchList');
            cart.appendChild(cartItem);
            alert('Item Added to the cart');
            totalItems++;

        });



    });


})();










































//initialize nevbar
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});