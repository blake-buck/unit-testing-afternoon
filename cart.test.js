const cars = require('./data/cars.js');
const cart = require('./cart.js');

describe('Cart Properties', ()=>{

    it('Cart array should be an array', ()=>{
        const cartArrayIsArray = Array.isArray(cart.cart);
        expect(cartArrayIsArray).toBe(true);
    })

    it('Cart array should be empty', ()=> {
        const cartArrayLength = cart.cart.length;
        expect(cartArrayLength).toBe(0);
    })
    

})

describe('Cart Methods', ()=>{
    afterEach(function() {
        cart.cart = [];
        cart.total = 0;
      });

    it('addToCart method should add car to cart array', ()=>{
        cart.addToCart(cars[0])
        const cartArrayLength = 1;

        expect(cart.cart.length).toBe(cartArrayLength);
        expect(cart.cart[0].id > 0).toBe(true);
    })

    it('addToCart method should increase the cart total', ()=>{
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        const carTotal = 8605+48539;

        expect(cart.total).toBe(carTotal);
    })

    it('removeFromCart method should remove car from cartArray', ()=>{
        cart.addToCart(cars[0])
        cart.addToCart(cars[1])
        cart.addToCart(cars[2])
        cart.addToCart(cars[3])

        cart.removeFromCart(2, 20709);

        expect(cart.cart.length === 3 && cart.cart[2].id === 4).toBe(true)
    })

    it('removeFromCart method should update total', ()=>{
        cart.addToCart(cars[0]);
        cart.addToCart(cars[1]);

        cart.removeFromCart(0, 8605);
        expect(cart.total).toBe(48539);
    })

    it('checkout method should reset cart array and cart total', ()=>{
        expect(cart.cart.length).toBe(0)
        expect(cart.total).toBe(0)
    })

})