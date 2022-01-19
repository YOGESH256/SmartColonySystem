import React from 'react'
import "../styles/Cart.css";
import useState from 'react'
import Counter from './Counter'

export default function Cart() {




    // const[count,setCount] = useState(0);
    return (
        <div>
            
        <div className="main1">

        <div className="CartContainer">
        <div className="Header">
            <h3 className="Heading">Shopping Cart</h3>
            <h5 className="Action">Remove all</h5>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="pipe1.png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Waste Pipe Leakage </h1>
                  <h3 className="subtitle">120 min</h3>
                  <img src="pipe1.png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 299</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items pad">
              <div className="image-box">
                  <img src="basin1.png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Wash Basin Leakage</h1>
                  <h3 className="subtitle">60 min</h3>
                  <img src="basin1.png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
                  <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 399</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="basin2.png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Wash Basin Installation</h1>
                  <h3 className="subtitle">45min</h3>
                  <img src="basin2.png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 299</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>
        
        
        <div className="Cart-Items">
              <div className="image-box">
                  <img src="kitchen.png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Kitchen Tile gap filling</h1>
                  <h3 className="subtitle">50 min</h3>
                  <img src="kitchen.png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 400</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="shower.png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Shower Installation</h1>
                  <h3 className="subtitle">30 min</h3>
                  <img src="shower.png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 250</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="blockage1.png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Balcony Drain Blockage Removal</h1>
                  <h3 className="subtitle">45 min</h3>
                  <img src="logo192.png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 299</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>
        
        
        <div className="Cart-Items">
              <div className="image-box">
                  <img src="wash.png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Wash Basin Blockage Removal</h1>
                  <h3 className="subtitle">120 min</h3>
                  <img src="logo192.png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 600</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (549).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Toilet Blockage Removal</h1>
                  <h3 className="subtitle">35 min</h3>
                  <img src="Screenshot (549).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 300</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (550).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Water Mixer Installation</h1>
                  <h3 className="subtitle">40 min</h3>
                  <img src="Screenshot (550).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 335</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (551).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Water Mixer Repair</h1>
                  <h3 className="subtitle">25 min</h3>
                  <img src="Screenshot (551).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 450</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (552).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Tap Installation</h1>
                  <h3 className="subtitle">30 min</h3>
                  <img src="Screenshot (552).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 299</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (553).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Tap Repair</h1>
                  <h3 className="subtitle">40 min</h3>
                  <img src="Screenshot (553).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 300</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (554).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Tap Replacement</h1>
                  <h3 className="subtitle">40 min</h3>
                  <img src="Screenshot (554).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 399</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (555).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Water Saving Nozzle</h1>
                  <h3 className="subtitle">20 min</h3>
                  <img src="Screenshot (555).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 150</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (556).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Flush Tank Repair</h1>
                  <h3 className="subtitle">35 min</h3>
                  <img src="Screenshot (556).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 250</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (557).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Flush Tank Replacement</h1>
                  <h3 className="subtitle">25 min</h3>
                  <img src="Screenshot (557).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 299</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (558).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Flush Tank Installation</h1>
                  <h3 className="subtitle">35 min</h3>
                  <img src="Screenshot (558).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 350</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (559).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Indian Toilet Installation</h1>
                  <h3 className="subtitle">30 min</h3>
                  <img src="Screenshot (559).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 300</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (560).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Toilet Seat Cover</h1>
                  <h3 className="subtitle">40 min</h3>
                  <img src="Screenshot (560).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 400</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        <div className="Cart-Items">
              <div className="image-box">
                  <img src="Screenshot (562).png" style={{ height:"120px" }} />
              </div>
              <div className="about">
                  <h1 className="title">Water Jet Spray </h1>
                  <h3 className="subtitle">55 min</h3>
                  <img src="Screenshot (562).png" style={{ height:"30px" }}/>
              </div>
              <div className="counter">
              <Counter/>
              </div>
              <div className="prices">
                  <div className="amount">Rs 500</div>
                  <div className="save"><u>Save for later</u></div>
                  <div className="remove"><u>Remove</u></div>
              </div>
        </div>

        
      <hr/> 
      <div className="checkout">
      <div className="total">
          <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">2 items</div>
          </div>
          <div className="total-amount">Rs 2000</div>
      </div>
      <button className="button">Checkout</button></div>
      </div>
        </div>
        </div>
    )
}
