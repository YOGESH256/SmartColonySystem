import { useState } from 'react';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import styled from 'styled-components';
import {content} from '../not to use/A_aprvDetls';
import {Modal} from './A_Modal'; // ye content dekhke verify karne, under process...

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
    const [tenants, setTenents] = useState(content);
    const [showModal, setShowModal] = useState(false);

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
                    <th scope="col">Floor No.</th>
                    <th scope="col">View Docs</th>
                    <th scope="col">Status</th>
                    <th scope="col">Comments</th>
                  </tr>
                </thead>
                <tbody>
                {tenants.map((info, index) => {
          return (
            <tr>
            <th scope="col">{info.user}</th>
            <th scope="col">{info.floor}</th>
            <th scope="col">
                <Containr>
                <Buttn onClick={openModal}>Content</Buttn>
                {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
                </Containr>
            </th>
            <th scope="col">{StatusBttn(info,index)}</th>
            <th scope="col">{info.comment}</th>
          </tr>
          )}
        )}
                </tbody>
              </table>
          </div>
        </div>
        </div>
        </div>
        <Buttn onClick={Lastly}>Done</Buttn>
        </div>
    )
}

export default A_Approve;
