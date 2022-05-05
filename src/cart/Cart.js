import '../App.css';
import './cart.css';

function Cart() {
  return (
    <div class="cart-body">
    <h2>My Cart (3) </h2>

<div class="grid">
    <section class="cart-container grid-item">
        <div class="card img-card card-horizontal cart-card">
            <div class="card-img">
              <img alt="product image" src="https://picsum.photos/600/900" />
            </div>
            <div class="horizontal-content">        
            <div class="card-title">Men's Premium Jacket
                <h3>₹1900 <span class="discount">₹3400</span></h3>

            </div>
            <div class="card-footer">
                <button class="btn btn-error">Remove From Cart</button>
                <button class="btn">Move to Wishlist</button>
            </div>
          </div>
          </div>
          <div class="card img-card card-horizontal cart-card">
            <div class="card-img">
              <img alt="product image" src="https://picsum.photos/600/900" />
            </div>
            <div class="horizontal-content">        
            <div class="card-title">Men's Premium Jacket
                <h3>₹1900 <span class="discount">₹3400</span></h3>

            </div>
            <div class="card-footer">
                <button class="btn btn-error">Remove From Cart</button>
                <button class="btn">Move to Wishlist</button>
            </div>
          </div>
          </div>
    </section>

    <section class="grid-item"> 
        <div class="cart-breakdown">
    <h3>Cart breakdown</h3>
    <div class="price-list">
        <div>
         <p class="md">Total</p>
         <p class="md">Discount</p>
         <p class="md">Delivery Charges</p>
        </div>
        <div class="price-amt">
            <p class="md">₹3500</p>
            <p class="md">-₹2500</p>
            <p class="md">₹250</p>
        </div>
    </div>
    <div class="flex-row"><h2>Total Amount</h2><h2 class="price-amt">₹1250</h2></div>


    <button class="btn"> Place Order</button>
        </div>

    </section>
</div>
</div>
  );
}

export default Cart;
