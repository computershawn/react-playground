import React from 'react';
//import './HelloWorld.css';

export default function HelloWorld(props) {
  const badge = props.unread 
    ? <div className="unread_count badge">{props.unread}</div> 
    : null;
  return (
    <div className="messages">
      {props.name} 
      {badge}
    </div>  
  );
}