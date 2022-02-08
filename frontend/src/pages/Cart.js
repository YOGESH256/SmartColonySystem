import React from 'react'
import "../styles/Cart.css";
import useState from 'react'
import Counter from './Counter'

export default function Cart() {

    // const[count,setCount] = useState(0);
    return (            
        <div className="cart-main">

        <div className="cart-container">
        <div className="cart-header">
            <h3 className="cart-heading">Shopping Cart</h3>
            <h5 className="cart-action">Remove all</h5>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="pipe1.png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Waste Pipe Leakage </h1>
                  <h3 className="i-subtitle">120 min</h3>
                  <img src="pipe1.png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 299</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="basin1.png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Wash Basin Leakage</h1>
                  <h3 className="i-subtitle">60 min</h3>
                  <img src="basin1.png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
                  <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 399</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="basin2.png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Wash Basin Installation</h1>
                  <h3 className="i-subtitle">45min</h3>
                  <img src="basin2.png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 299</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>
        
        
        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="kitchen.png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Kitchen Tile gap filling</h1>
                  <h3 className="i-subtitle">50 min</h3>
                  <img src="kitchen.png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 400</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="shower.png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Shower Installation</h1>
                  <h3 className="i-subtitle">30 min</h3>
                  <img src="shower.png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 250</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="blockage1.png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Balcony Drain Blockage Removal</h1>
                  <h3 className="i-subtitle">45 min</h3>
                  <img src="logo192.png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 299</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>
        
        
        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="wash.png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Wash Basin Blockage Removal</h1>
                  <h3 className="i-subtitle">120 min</h3>
                  <img src="logo192.png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 600</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (549).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Toilet Blockage Removal</h1>
                  <h3 className="i-subtitle">35 min</h3>
                  <img src="Screenshot (549).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 300</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (550).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Water Mixer Installation</h1>
                  <h3 className="i-subtitle">40 min</h3>
                  <img src="Screenshot (550).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 335</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (551).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Water Mixer Repair</h1>
                  <h3 className="i-subtitle">25 min</h3>
                  <img src="Screenshot (551).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 450</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (552).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Tap Installation</h1>
                  <h3 className="i-subtitle">30 min</h3>
                  <img src="Screenshot (552).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 299</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (553).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Tap Repair</h1>
                  <h3 className="i-subtitle">40 min</h3>
                  <img src="Screenshot (553).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 300</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (554).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Tap Replacement</h1>
                  <h3 className="i-subtitle">40 min</h3>
                  <img src="Screenshot (554).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 399</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (555).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Water Saving Nozzle</h1>
                  <h3 className="i-subtitle">20 min</h3>
                  <img src="Screenshot (555).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 150</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (556).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Flush Tank Repair</h1>
                  <h3 className="i-subtitle">35 min</h3>
                  <img src="Screenshot (556).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 250</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (557).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Flush Tank Replacement</h1>
                  <h3 className="i-subtitle">25 min</h3>
                  <img src="Screenshot (557).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 299</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (558).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Flush Tank Installation</h1>
                  <h3 className="i-subtitle">35 min</h3>
                  <img src="Screenshot (558).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 350</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (559).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Indian Toilet Installation</h1>
                  <h3 className="i-subtitle">30 min</h3>
                  <img src="Screenshot (559).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 300</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (560).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Toilet Seat Cover</h1>
                  <h3 className="i-subtitle">40 min</h3>
                  <img src="Screenshot (560).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 400</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="cart-items">
              <div className="cart-item-img">
                  <img src="Screenshot (562).png" style={{ height:"120px" }} />
              </div>
              <div className="cart-item-about">
                  <h1 className="i-title">Water Jet Spray </h1>
                  <h3 className="i-subtitle">55 min</h3>
                  <img src="Screenshot (562).png" style={{ height:"30px" }}/>
              </div>
              <div className="i-counter">
              <Counter/>
              </div>
              <div className="i-prices">
                  <div className="i-amount">Rs 500</div>
                  <div className="i-save"><u>Save for later</u></div>
                  <div className="i-remove"><u>Remove</u></div>
              </div>
        </div>

        
      <hr id="cart-end"/> 
      <div className="cart-checkout">
      <div className="cart-total">
          <div>
              <div className="cart-subtotal">Sub-Total</div>
              <div className="cart-items">2 items</div>
          </div>
          <div className="cart-total-amount">Rs 2000</div>
      </div>
      <button id="checkout-button">Checkout</button></div>
      </div>
        </div>
        
    )
}
