function Cart(localStorageKey){
    //model store cartItem
    const cart = {
        cartItems: undefined,
        loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
        if (!this.cartItems){
            this.cartItems = [
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
        },
        //save cartItem on local storage
        saveToStorage(){
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },
        //model add product
        addToCart(productId){
            let matchingItem; //store cartItem
            this.cartItems.forEach((cartItem) => { //check all product in cart
            if (productId === cartItem.productId){ //if product from product id is matching with product in cart id
                matchingItem = cartItem; //if it matched store it in matchingItem
                }
            });
            if (matchingItem){ //if matchingItem true (meaning already have)
                matchingItem.quantity += 1; // qty increase more
            } else{
                this.cartItems.push({ 
                productId: productId,
                quantity: 1,
                deliveryOptionsId: '1'
                });
            }
            this.saveToStorage();
        },
        //model remove cartItem
        removeFromCart(productId){
            const newCart = [];
            this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId){
                newCart.push(cartItem); 
            }
            this.cartItems = newCart; 
            });
            this.saveToStorage();
        },
        //model update delivery option
        updateDeliveryOption (productId, deliveryOptionId) {
            let matchingItem;
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId){
                matchingItem = cartItem;
                }
            });
            matchingItem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }
    };
    return cart;
}

const cart = Cart('cart-oop');
const businessCart = Cart('business-cart');

cart.loadFromStorage();

console.log(cart);


businessCart.loadFromStorage();

console.log(businessCart);


  
  
  

  

  
  

    
  
  
