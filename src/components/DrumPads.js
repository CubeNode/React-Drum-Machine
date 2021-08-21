/*import React from 'react';
import Pad from './Pad.js';

const pads = [
    {
      name: "Q",
      keyCode: 81,
      id: "Heater 1",
      idName: "heater-1",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      name: "W",
      keyCode: 87,
      id: "Heater 2",
      idName: "heater-2",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      name: "E",
      keyCode: 69,
      id: "Heater 3",
      idName: "heater-3",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      name: "A",
      keyCode: 65,
      id: "Heater 4",
      idName: "heater-4",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      name: "S",
      keyCode: 83,
      id: "Clap",
      idName: "clap",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      name: "D",
      keyCode: 68,
      id: "Open HH",
      idName: "open-hh",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      name: "Z",
      keyCode: 90,
      id: "Kick n' Hat",
      idName: "kick-n-hat",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      name: "X",
      keyCode: 88,
      id: "Kick",
      idName: "kick",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      name: "C",
      keyCode: 67,
      id: "Closed HH",
      idName: "closed-hh",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];

  function playSound(url, id) {
    const s = document.getElementById(url);
    s.currentTime = 0;
    s.play();

    document.querySelector("#display").innerText = id;
  }

  function padActive(id) {
    let elem = document.querySelector('#' + id);
    if (elem) {
      elem.classList.add('active');
    }
  }

  function padInactive(id) {
    let elem = document.querySelector('.active');
    if(elem) {
      elem.classList.remove('active');
      elem.classList.add('inactive');
    }
  }

  function onKeyDown(event) {
    let key = pads.filter(obj => {
      return obj.keyCode === event.keyCode;
    });

    try {
      playSound(key[0].name, key[0].id);
      padActive(key[0].idName);
    } catch (e) {
      return false;
    }

  }

  window.addEventListener("keydown", onKeyDown);
  document.body.onkeyup = padInactive;

let DrumPads = pads.map(x => {
  return (
    <Pad key={x.name} name={x.name} clip={x.clip} id={x.idName} audioId={x.name} onClick={ () => playSound(x.name, x.idName)} />
  )
})

export default DrumPads;*/
