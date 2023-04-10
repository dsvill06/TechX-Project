import React, {useState} from 'react'
import {Button} from "./Button.js"
import { Header } from './Header.js'
import {Description} from './Description.js'
import "./css/index.css"
import "./css/App.css";
import {Result} from "./Components/Result"



export function Home() {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');
  const handleChange = (e) => {
    // 👇 Get input value from "event"
    setMessage(e.target.value);
  };
   const options = [
    {
      label: "Deuteranomaly",
      value: "deuteranomaly",
    },
    {
      label: "Protanomaly",
      value: "protanomaly",
    },
    {
      label: "Tritanomaly",
      value: "tritanomaly",
    },
  ];
  return (
    <div>
      <Header/>
      <div className='d-flex'>
        <div className='col'>
          <div className='d-flex align-items-center justify-content-evenly  click'>
            <Button name="Hex"/>
            <Button name="Color Palette"/>
            <Button name="Rgb"/>
            <div>
            <input
              type="text"
              id="message"
              name="message"
              onChange={handleChange}
            />
            
          </div>
          </div>
        </div>
        <div className='col'>
          <div className='d-flex align-items-center justify-content-evenly  click'>
          <div className="select-container">
            <select value={type} onClick={e =>{
              setType(e.target.value)
            }} 
            className='text-light'>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
            <h1>Result</h1>
            <Result color={message} type={type}></Result>
          </div>
        </div>
      </div>
      <div>
      
      </div>
      <div className='border-0 accordion-flush'>      
        <Description/>
      </div>

    </div>

  )
} 
