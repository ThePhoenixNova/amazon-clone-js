//model store cartItem
export let cart;

loadFromStorage();
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));
  if (!cart){
      cart = [
      {
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
      },{
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1,
          deliveryOptionId: '2'
      }
    ]; 
  }
}



//save cartItem on local storage 
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

//model add product
export function addToCart(productId){
    let matchingItem; //store cartItem
      cart.forEach((cartItem) => { //check all product in cart
      if (productId === cartItem.productId){ //if product from product id is matching with product in cart id
          matchingItem = cartItem; //if it matched store it in matchingItem
        }
      });
      if (matchingItem){ //if matchingItem true (meaning already have)
        matchingItem.quantity += 1; // qty increase more
      } else{
        cart.push({ 
          productId: productId,
          quantity: 1,
          deliveryOptionsId: '1'
        });
      }
      saveToStorage();
  }

  //model remove cartItem
  export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId){
        newCart.push(cartItem); 
      }
      cart = newCart; 
    });
    saveToStorage();
  }


  //model update delivery option
  export function updateDeliveryOption (productId, deliveryOptionId) {
    let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
  }

  export function loadCart(fun) {
    const xhr = new XMLHttpRequest(); 
  
    xhr.addEventListener('load', () => {
      console.log(xhr.response);
      fun();

    });
    xhr.open('GET', 'https://supersimplebackend.dev/cart');
    xhr.send();
  }
