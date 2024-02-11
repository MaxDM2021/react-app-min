import Button from "./Button/Button";
import { differences } from "../data";
import { useState } from "react";



export default function DifferencesSection () {

  const [contentType, setContentType] = useState(null);

  // let content = 'Нажми на кнопку'

  console.log("App Component Render");

  function handleClick(type) {
    // console.log("button clicked", type);
    setContentType(type);
  }

  // let tabContent = null

  // if (contentType) {
  //   tabContent = <p>{differences[contentType]} </p>
  // }else{
  //   tabContent = <p>Нажми на кнопку</p>
  // }

return (

<section>
<h3> Чем отличается от других</h3>

<Button
  isActive={contentType === "way"}
  onClick={() => handleClick("way")}
>
  Подход
</Button>
<Button
  isActive={contentType === "easy"}
  onClick={() => handleClick("easy")}
>
  Доступность
</Button>
<Button
  isActive={contentType === "program"}
  onClick={() => handleClick("program")}
>
  Концентрация
</Button>

{/* {contentType ? (
  <p>{differences[contentType]}</p>
) : (
  <p>Нажми на кнопку</p>
)} */}

{/* 
{!contentType ? <p>Нажми на кнопку</p> : null}
{contentType ? <p>{differences[contentType]}</p> : null} */}

{!contentType && <p>Нажми на кнопку!!!</p>}
{contentType && <p>{differences[contentType]}</p>}

{/* {tabContent} */}
</section>
)
}


