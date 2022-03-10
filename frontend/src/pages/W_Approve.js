import { useState  , useEffect} from 'react';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import styled from 'styled-components';
import {content} from '../not to use/A_aprvDetls';
import {Modal} from './A_Modal'; // ye content dekhke verify karne, under process...
import axios from 'axios';

const Containr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Buttn = styled.button`
  min-width: 20%;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;
const Buttn2 = styled.button`
  min-width: 10%;
  padding: 5px 15px;
  border-radius: 1px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
`;

 const W_Approve = () => {
    const [orders, setOrders] = useState(content);
    const [showModal, setShowModal] = useState(false);

    const updateInvoiceData = async () => {
      const ol =  JSON.parse(localStorage.getItem('Worker'))
      const worker_id = ol._id;
      const i = {worker_id}
      let result = await axios.post('http://localhost:4000/getWorkerOrders',i)
                              .catch(e => console.log(e))
      console.log(result);
      setOrders(result.data);

    };


    useEffect(() => {
      updateInvoiceData();
    } , [])


    const openModal = () => {
      setShowModal(prev => !prev);
    };

    const StatusBttn = (e) =>{
        console.log(e)
        const [status,setStatus] = useState(e.status);
        const changeY = () =>{
            setStatus('approved');
        }
        const changeN = () =>{
            setStatus('denied');
        }
        return (
        <>
            {status!=='pending'?status :
                <><Buttn2 onClick={changeY}>Yes</Buttn2>&nbsp;<Buttn2 onClick={changeN}>No</Buttn2></>
            }
        </>
        )
    }

    const Lastly = () =>{
      [content] = [...orders];
    }
    return (
        <div className='A_approve'>

        <h1 style={{justifyContent:"center"}}>Worker Orders</h1>

        <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="table-responsive table-card mt-2">
              <table className="table table-bordered role">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Tenant</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Email</th>

                    <th scope="col">Room No </th>
                  </tr>
                </thead>
                <tbody>
                {orders.map((info, index) => {
          return (
            <tr>
            <th scope="col">{info.tenant_id?.name}</th>
            <th scope="col">{info.tenant_id?.contactNo}</th>
            <th scope="col">{info.tenant_id?.email}</th>
            <th scope="col">{info.tenant_id?.roomno}</th>

          </tr>
          )}
        )}
                </tbody>
              </table>
          </div>
        </div>
        </div>
        </div>

        </div>
    )
}

export default W_Approve;
