import  GlobalStyle  from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js"
import Grid from "./components/Grid.js"
import {useEffect ,useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width:100%;
  max-width: 1100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Bau = styled.h2``;



function App() {
  
  const [users, setUsers] = useState ([]);
  //const [onEdit, setOnEdit] = useState ([null]);

   const getUsers = async() =>{
     try {
       const res = await axios.get("http://10.20.5.204:8080");
       setUsers(res.data.sort((a,b) => (a.importador > b.importador ? 1: -1)))
     } catch (error) {
       toast.error(error)
     }
   };

   useEffect(()=>{
     getUsers();
   }, [setUsers]);


  return (
    <>
    <Container>
      <Bau>
        Baus
      </Bau>
      <Form/>
      <Grid users ={users}/>
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <GlobalStyle />
    </>
  );
}

export default App;


//28
//20