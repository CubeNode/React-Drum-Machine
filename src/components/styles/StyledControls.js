import styled from 'styled-components';

export const StyledControls = styled.div`
  margin: auto;
  color: #FFF;
  text-align: center;
  font-size: 25px;
  font-family: Arial, sans-serif;

/* Clip Display Text */
  .clip-display {
    box-shadow: 5px 5px 50px 5px rgba(0, 0, 0, 0.5);
  }

  #display {
    background-color: #5448C8;
    margin: 15px auto;
    padding: 20px;
    width: 250px;
    min-height: 75px;
    box-sizing: border-box;
  }

/* Volume Slider */
  #continuos-slider {
    background: #00CC99;
  }

  .slide-container {
    width: 100%;
    margin: 40px 0;
  }

  #vol-slider {
    color: #00CC99;
  }

  /* Toggle Switches*/
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 0 20px;
  }

  .switch .name {
    position: absolute;
    top: -30px;
    left: 5px;
    font-size: .6em;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00CC99;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 30px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: #CCC;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #CCC;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(-26px);
    -ms-transform: translateX(-26px);
    transform: translateX(-26px);
  }

  /* Rounded sliders */
  .slider {
    border-radius: 34px;
  }

  .slider:before {
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    .switch {
      margin-bottom: 20px;
    }
  }

`
