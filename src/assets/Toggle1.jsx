import React,{useState} from 'react'

const Toggle1 = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <div>
        <h1>What is React Js</h1>
      {toggle && (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem quos quidem. 
        Nihil hic v Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem quos quidem. 
        Nihil hic amet repudiandae cumque laborum esse tempor amet repudiandae cumque laborum esse temporibus!</p>)}
        <button onClick={()=>{
            setToggle(!toggle)
        }}>{toggle ? "Hide":"Show"}</button>
    </div>
    
  )
}

export default Toggle1
