import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Sider from '../AddMenu-Sider/Sider';
import SiderTopBar from '../AddMenu-Sider/Sider-Top-Bar';
import './OrderComfirmation.css';

interface Order {
  id: number;
  customerName: string;
  address: string;
  phoneNumber: string;
  items: string[];
  deliveryDate: string;
  deliveryTime: string;
}

const OrderConfirmation: React.FC = () => {
  const [unresolvedOrders, setUnresolvedOrders] = useState<Order[]>([]);
  const [resolvedOrders, setResolvedOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get<{ orders: Order[] }>('http://localhost:4000/restaurant/getorder?type=unresolved');
      console.log('response:', response.data.orders);
      setUnresolvedOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching unresolved orders:', error);
    }

    try {
      const response = await axios.get<{ orders: Order[] }>('http://localhost:4000/restaurant/getorder?type=resolved');
      console.log('response:', response.data.orders);
      setResolvedOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching resolved orders:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleConfirmOrder = async (orderId: number) => {
    try {
      await axios.post(`http://localhost:4000/confirmOrder`, {orderId});
      fetchOrders();
    } catch (error) {
      console.error('Error confirming order:', error);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(fetchOrders, 50000);
    return () => clearInterval(intervalId);
  }, [fetchOrders]);

  return (
    <>
      <SiderTopBar />
      <Sider />
      <div className="orderconfirmation-container">
        <div className="orderconfirmation-body">
          <h1>Order Confirmation</h1>
          {loading && <p>Loading...</p>}
          {!loading && (
            <>
              <div>
                <h2>Unresolved Orders</h2>
                {unresolvedOrders.map(order => (
                  <div className="orderconfirmation-main" key={order.id}>
                    <div className="orderconfirmation-sub-main">
                      <h3>{order.customerName}</h3>
                      <button onClick={() => handleConfirmOrder(order.id)}>Confirm Order</button>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <h2>Resolved Orders</h2>
                {resolvedOrders.map(order => (
                  <div className="orderconfirmation-main" key={order.id}>
                    <div className="orderconfirmation-sub-main">
                      <h3>{order.customerName}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;







// import React, { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import Sider from '../AddMenu-Sider/Sider';

// interface Order {
//   id: number;
//   customerName: string;
//   address: string;
//   phoneNumber: string;
//   items: string[];
//   deliveryDate: string;
//   deliveryTime: string;
// }

// const OrderConfirmation: React.FC = () => {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   const fetchOrders = useCallback(async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get<{ orders: Order[] }>('http://localhost:4000/restaurant/getorder?type=unresolved');
//       console.log('response:', response.data.orders);
      
//       setOrders(response.data.orders);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     const intervalId = setInterval(fetchOrders, 5000);

//     return () => clearInterval(intervalId);
//   }, [fetchOrders]);

//   return (
//     <>
//       <Sider />
//       <div className="body">
//         <h1>Order Confirmation</h1>
//         {loading && <p>Loading...</p>}
//         {!loading && orders.length === 0 && <p>No orders to confirm.</p>}
//         {!loading && orders.length > 0 && (
//           <div>
//             <h2>Confirmed Orders</h2>
//             {orders.map(order => (
//               <div className="main" key={order.id}>
//                 <div className="sub-main">
//                   <h3>{order.customerName}</h3>
//                   <p>{order.address}</p>
//                   <p>{order.phoneNumber}</p>
//                   {order.items && (
//                     <p><span>Items: </span>{order.items.join(', ')}</p>
//                   )}
//                   <p><span>Delivery Date: </span>{order.deliveryDate}</p>
//                   <p><span>Delivery Time: </span>{order.deliveryTime}</p>
//                 </div>
//                 <button>Confirm Order</button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default OrderConfirmation;
