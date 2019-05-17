import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './composition/Messages';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import CakeRoulette from './state-drills/CupcakeRoulette';
import Accordion from './state-drills/Accordion';


// make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message'>
    officiis
  </Tooltip>
)


function App() {
  const sections = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
  ]  
  return (
    <main className='App'>
    <Accordion sections={sections} />
      {/* <Split className='left' flexBasis='2'>
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split> */}

      {/* <Split className='right'>
        This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
        <HelloWorld />
        <Bomb maxTicks={16} tickInterval={500} />
        <CakeRoulette muffinInTinCup={6} />
      </Split> */}
    </main>
  )
}

export default App;