import './PaymentInfo.css'

const PaymentInfo = () => {

    // const [country, setCountry] = useState()
    return (
      <div className="body">
        <div className="container">
          <div className="subContainer">
            <h1>Payment Information</h1>
            <div>
              <p className='p'>Country</p>
              <select name="" id="">
                <option value="">Select</option>
                <option value="">Nigeria</option>
                <option value="">Gambia</option>
                <option value="">USA</option>
                <option value="">Germany</option>
              </select>
            </div>

            <div className="paymentMethod">
              <img src="/images/Featured icon.png" alt="" />
              <h1>Add payment method</h1>

              <h3 className='card'>Add your card details</h3>

            </div>

            <div className="card-details">
                <div className='left-col'>
                    <label htmlFor="">Name on the card</label>
                    <input type="text" placeholder='Sandra'/>
                    <label htmlFor="">Card number</label>
                    <input type="text" placeholder='1234 1234 1234 1234'/>

                </div>

                <div className="right-col">
                    < label htmlFor="">Expiry</label>
                    < input type="text" placeholder='06/24' />
                    <label htmlFor="">CVV</label>
                    <input type="text" placeholder='***' />

                </div>
            </div>

            <div className='footer'>
                <button>Save and continue</button>
                <p className='last'>We'll save your payment information for future purchases </p>

            </div>
          </div>
        </div>
      </div>
    );
}

export default PaymentInfo;