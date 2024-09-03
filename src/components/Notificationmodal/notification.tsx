import './notification.css'

const Notification = () => {
   return(

    <div className='body'>
        <div className='container'>
            <div>
                <img src="src/assets/landingpage-img/Frame 38813775.png" alt="image" />
                <p>Sarah Jones<span> Order will be delivered in 30 mins</span></p>
            </div>
            <div>
                 <img src="/src/assets/landingpage-img/frame12.png" alt="" />
                <p>Sarah Jones<span> Order will be delivered in 30 mins</span></p>
            </div>
            <div>
                 <img src="/src/assets/landingpage-img/Frame 3881.png" alt="" />
                <p>Sarah Jones<span> Order will be delivered in 30 mins</span></p>
            </div>
            <div>
                 <img src="/src/assets/landingpage-img/frame23.png" alt="" />
                <p>Sarah Jones<span> Order will be delivered in 30 mins</span></p>
            </div>
         <div className='mobile-btn'>
         <button>View All</button>
         </div>

        </div>
    </div>

   )
}

export default Notification;