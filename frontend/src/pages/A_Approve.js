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

 const A_Approve = () => {
    const [tenants, setTenants] = useState(content);
    const [showModal, setShowModal] = useState(false);


    useEffect(async() => {
      let result = await axios.get('http://localhost:4000/getalltenants')
                              .catch(e => console.log(e))
      setTenants(result.data);
      console.log(result);

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
      [content] = [...tenants];
    }
    return (
        <div className='A_approve'>
            Approve Tenants

        <div className="container mt-5">
        <h3>Brochure </h3>
        <div className="row">
          <div className="col">
            <div className="table-responsive table-card mt-2">
              <table className="table table-bordered role">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">No of Months</th>
                    <th scope="col">Room No </th>
                  </tr>
                </thead>
                <tbody>
                {tenants.map((info, index) => {
          return (
            <tr>
            <th scope="col">{info.name}</th>
            <th scope="col">{info.email}</th>
            <th scope="col">{info.contactNo}</th>
            <th scope="col">{Math.floor((Math.random() * 97)) % 12}</th>
            <th scope="col">{info.roomno}</th>

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

export default A_Approve;
