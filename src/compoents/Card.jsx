import React, { useState } from 'react'

const Card = () => {
  const [height,setheight] = useState("")
  const [weight,setweight] = useState("")
  const [bmi,setbmi] = useState(null)
  const [bmistatus,setbmistatus] = useState("")
  const [errormessage,seterrormessage] = useState(false)

  function calculate(){
    const isValidheight = /^\d+$/.test(height)
    const isValidweight = /^\d+$/.test(weight)
    if(isValidheight && isValidweight){
      const heightInmeter = height / 100;
      const bmivalue = weight  / (heightInmeter * heightInmeter)
      setbmi(bmivalue.toFixed(2))
      if(bmivalue < 18.5){
        setbmistatus("underweight")
      }else if(bmivalue >=18.8 && bmivalue<24.9){
        setbmistatus("normal weight")

      }else if(bmivalue >=25 && bmivalue<29.9){
        setbmistatus("overweight")
      }else{
        setbmistatus("obese")
      }
      seterrormessage("")
      
    }
    
    else{
      setbmi(null)
      setbmistatus("")
      seterrormessage("please enter valid numeric values for height and weight")
    }
  }

  function clear(){
    setbmi(null)
    setbmistatus("")
    setheight("")
    setweight("")
  }
  return (
    <div className="container">
      <div className="box">
    
      </div>
      <div className="data">
        <h1>IBM application</h1>
     { errormessage &&  <p className='error'>{errormessage}</p>}
        <div className="input-container">
          <label htmlFor="height">
            height
          </label>
            <input type="text" value={height} onChange={(e)=>setheight(e.target.value)} name='height' id='height' />
          <label htmlFor="weight">
            weight
          </label>
            <input type="text" onChange={(e)=>setweight(e.target.value)} name='weight' value={weight} id='weight' />
        </div>
        <button onClick={calculate} className='btn'>Calculate Bmi</button>
        <button onClick={clear}>clear</button>
   {bmi !==null &&     <div className="result">
          <p>your BMI is :{bmi}</p>
          <p>status :{bmistatus}</p>
        </div>}
      </div>
    </div>
  )
}

export default Card