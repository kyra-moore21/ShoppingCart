let shoppingCart = [];

function AddItem(name, price){
    let Item = {
        Name: name, 
        Price: price
    };
    shoppingCart.push(Item);
    console.log(shoppingCart);
    let total = 0;
    for(let i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].Price
    }
    console.log("Total", total.toFixed(2));
};



