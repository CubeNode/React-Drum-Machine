import React from 'react';
import {StyledContainer} from './styles/StyledContainer';

const bank = [
    {
      name: "Q",
      keyCode: 81,
      id: "Heater 1",
      id2: "Chord 1",
      idName: "heater-1",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
      clip2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
      name: "W",
      keyCode: 87,
      id: "Heater 2",
      id2: "Chord 2",
      idName: "heater-2",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
      clip2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    {
      name: "E",
      keyCode: 69,
      id: "Heater 3",
      id2: "Chord 3",
      idName: "heater-3",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
      clip2: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    {
      name: "A",
      keyCode: 65,
      id: "Heater 4",
      id2: "Shaker",
      idName: "heater-4",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
      clip2: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    {
      name: "S",
      keyCode: 83,
      id: "Clap",
      id2: "Open HH",
      idName: "clap",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
      clip2: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    {
      name: "D",
      keyCode: 68,
      id: "Open HH",
      id2: "Closed HH",
      idName: "open-hh",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
      clip2: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    {
      name: "Z",
      keyCode: 90,
      id: "Kick n' Hat",
      id2: "Punchy Kick",
      idName: "kick-n-hat",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
      clip2: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    {
      name: "X",
      keyCode: 88,
      id: "Kick",
      id2: "Side Stick",
      idName: "kick",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
      clip2: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    {
      name: "C",
      keyCode: 67,
      id: "Closed HH",
      id2: "Snare",
      idName: "closed-hh",
      clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
      clip2: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  ];

  export function changeBank() {

      let sounds = [].slice.call(document.getElementsByClassName("clip"));

      if(document.getElementById("bank").checked) {
        for(let i = 0; i < sounds.length; i++){
          sounds[i].src = bank[i].clip2;
        }
      } else {
        for(let i = 0; i < sounds.length; i++){
          sounds[i].src = bank[i].clip;
        }
      }

  }

  function playSound(url, id, id2) {
    const s = document.getElementById(url);
    s.currentTime = 0;
    s.play();

    document.querySelector("#display").innerText = document.getElementById('bank').checked ? id2 : id;
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
    let key = bank.filter(obj => {
      return obj.keyCode === event.keyCode;
    });

    try {
      playSound(key[0].name, key[0].id, key[0].id2);
      padActive(key[0].idName);
    } catch (e) {
      return false;
    }

  }

  window.addEventListener("keydown", onKeyDown);
  document.body.onkeyup = padInactive;


let Pad = (props) => {

  let slider = document.querySelector("#vol-slider");

  return(
    <div className="drum-pad" id={props.id} onClick={() => {
      playSound(props.audioId, props.idName, props.idName2);
                                                         }}>
      <audio src={props.clip} className="clip" id={props.audioId}></audio>
      <p>{props.name}</p>
    </div>
  )


}

let DrumPads = bank.map(x => {

  return (
    <Pad key={x.name} name={x.name} clip={x.clip} id={x.idName} idName={x.id} idName2={x.id2} audioId={x.name} />
  )
})

function Container(props) {
  return(
    <StyledContainer id="container">

        {DrumPads}

    </StyledContainer>
  )
}

let clips = [].slice.call(document.getElementsByClassName("clip"));

clips.forEach(vol => {
  vol.volume = 0.5;
})

export default Container;
