let shoppingCart = [];

let shoppingCartNode = document.querySelector(".shoppingCart");
let totalNode = document.querySelector(".total");
let taxNode = document.querySelector(".tax");
let gTotalNode = document.querySelector(".gTotal");

function AddItem(name, price){
    let Item = {
        Name: name, 
        Price: price
    };
    let quantity = Number(prompt("How many would you like?"));

    for(let i = 0; i < quantity; i++){
        shoppingCart.push(Item);
    }
    
    shoppingCartNode.innerHTML += `<p>${quantity}x ${Item.Name} $${Item.Price}</p>`;
    displayTotals();
}

function displayTotals(){

    let total = shoppingCart.reduce((t, i) => t + i.Price, 0);
    let tax = total * 0.06; 
    totalNode.innerText = `Total: ${total.toFixed(2)}`;
    taxNode.innerText = `Tax: ${tax.toFixed(2)}`;
    gTotalNode.innerText = `Grand Total: ${(total + tax).toFixed(2)}`;
    
}

function CheckOut(){
    console.log(shoppingCart);
    // let total = 0;
    // shoppingCart.forEach(i => total += i.Price);
    let total = shoppingCart.reduce((t, i) => t + i.Price, 0);
    let tax = total * 0.06;
    console.log("Total", total.toFixed(2));
    console.log(`Tax; ${tax.toFixed(2)}`);
    console.log(`Grand Total ${(total + tax).toFixed(2)}`);
    shoppingCart = [];
    shoppingCartNode.innerHTML = "";
    displayTotals();
}



