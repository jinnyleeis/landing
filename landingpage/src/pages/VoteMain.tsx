import styled from "styled-components"
import { useNavigate } from "react-router-dom";

function VoteMain() {
  const navigate = useNavigate();

  return (
  
     <>
   <Wrapper>
        <PartBtn onClick={() =>{}}/>
        <DemoDayBtn onClick={() => {}}/>
   </Wrapper>
        </>

 
  )
}

export default VoteMain;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
height: 100px;
width: 1920px;
overflow-y:scroll;
`




const PartBtn = styled.button`

  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  margin: 10px;
` 

const DemoDayBtn = styled.button`
  width: 100px;
  height: 100px;
  backgroundcolor: #f0f0f0;
  border: 1px solid black;
  border-radius: 50%;
  margin: 10px;
`