import React from 'react';
import Container from './Container.js';
import {StyledControls} from './styles/StyledControls';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import {changeBank} from './Container.js';

const toggleFunctions = {
  togglePower: () => {
    const isOn = document.getElementById("power").checked;
    const pads = [].slice.call(document.getElementsByClassName("drum-pad"));
    const display = document.getElementById("display");

    if(isOn){

      pads.forEach(pad => {
        pad.classList.add("disabled");
      })

      display.innerText = "POWER OFF";

    } else {

      pads.forEach(pad => {
        pad.classList.remove("disabled");
      })

      display.innerText = "POWER ON";

    }


    console.log("power");
  },
  toggleBank: () => {
    changeBank();
  }
}

let Toggle = (props) => {

  return(
    <label className="switch">
      <span className="name">{props.name}</span>
      <input type="checkbox" id={props.id} onChange={props.handleToggle}/>
      <span className="slider"></span>
    </label>
  )
}

/* Change Volume */
let changeVolume = (n) => {

  let clips = [].slice.call(document.getElementsByClassName("clip"));

  clips.forEach(vol => {
    vol.volume = n / 100;
  })
}

let Volume = (props) => {

  const [value, setValue] = React.useState(50);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeVolume(value);
  };

  return(
    <div className="slide-container">
     <Typography id="continuous-slider" gutterBottom>
       Volume
     </Typography>
     <Grid container spacing={2}>
       <Grid item>
         <VolumeDown />
       </Grid>
       <Grid item xs>
         <Slider id="vol-slider" value={value} onChange={handleChange} valueLabelDisplay="auto" aria-labelledby="continuous-slider" />
       </Grid>
       <Grid item>
         <VolumeUp />
       </Grid>
     </Grid>
   </div>
  )
}

function Controls(props) {

  return (
    <StyledControls id="controls">
      <div className="display-container">
        <div className="clip-display">
          <h3 id="display">POWER ON</h3>
        </div>
        <Volume/>
        <Toggle name="Power" id="power" handleToggle={() => toggleFunctions.togglePower()}/>
        <Toggle name="Bank" id="bank" handleToggle={() => toggleFunctions.toggleBank()}/>
      </div>
    </StyledControls>
  )
}

export default Controls;
