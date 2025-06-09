'use client'
import { useEffect, useRef, useState } from "react";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';

const OTP_DIGITS_COUNT = 5;

export default function Otp() {

  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, [])

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  }

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key == "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  }

  const handleSubmit = () => {
    if (inputArr.length == OTP_DIGITS_COUNT && inputArr.join('').length == OTP_DIGITS_COUNT) {
      alert("OTP:" + inputArr.join(''))
    }
    else {
      for (var i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == '') {
          refArr.current[i]?.focus();
          return;
        }
      }
    }
  }

  return (
    <div className="text-center">
      <h1 className="m-5">Validate OTP</h1>
      {
        inputArr.map((input, index) => {
          return (
            <input
              key={index}
              type="text"
              /* maxLength={1} */
              className="otp-input"
              value={inputArr[index]}
              onChange={(e) => handleOnChange(e.target.value, index)}
              ref={(input) => refArr.current[index] = input}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />)
        })
      }
      <div className="d-flex justify-content-center m-4">
        <button className="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
      </div>
    </div>
  );
}
