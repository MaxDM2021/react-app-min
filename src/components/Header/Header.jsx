import { useState, useEffect } from "react"
import {styled} from 'styled-components';
// import "./Header.css"

const HeaderContainer = styled.header`
height: 50px;
display: flex;
padding: 0 2rem;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ccc;
background: #fafafa;
`

export default function Header() {


const [now, setNow] = useState(new Date())

useEffect(()=>{
  const interval = setInterval(() => setNow(new Date()), 1000)

  return () => {
    clearInterval(interval)
    console.log('clening....')
  }


}, [])






    return(
      <HeaderContainer>
        
      <h3 style={{marginBottom: "0"}}>Resul University</h3>
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderContainer>
    )
  }