import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <input type="checkbox" name="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label"> </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
  }

  .label {
    height: 40px;  /* Reduced height */
    width: 80px;   /* Reduced width */
    background-color: #ffffff;
    border-radius: 20px;  /* Adjusted border-radius */
    box-shadow: inset 0 0 5px 4px rgba(255, 255, 255, 1),
      inset 0 0 20px 1px rgba(0, 0, 0, 0.488), 10px 20px 30px rgba(0, 0, 0, 0.096),
      inset 0 0 0 3px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    transition: transform 0.4s;
  }

  .label:hover {
    transform: perspective(100px) rotateX(5deg) rotateY(-5deg);
  }

  #checkbox:checked ~ .label:hover {
    transform: perspective(100px) rotateX(-5deg) rotateY(5deg);
  }

  #checkbox {
    display: none;
  }

  #checkbox:checked ~ .label::before {
    left: 50px;  /* Adjusted position */
    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 70%);
    transition: 0.4s;
  }

  .label::before {
    position: absolute;
    content: "";
    height: 25px;  /* Reduced circle size */
    width: 25px;   /* Reduced circle size */
    border-radius: 50%;
    background-color: #000000;
    background-image: linear-gradient(130deg, #757272 10%, #ffffff 11%, #726f6f 62%);
    left: 5px;     /* Adjusted left position */
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.3), 10px 10px 10px rgba(0, 0, 0, 0.3);
    transition: 0.4s;
  }
`;

export default Switch;
