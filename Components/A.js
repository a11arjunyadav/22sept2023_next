import React from 'react'
import B from './B';

export default function A(props) {
    console.log(props);
  return (
    <>
    <div>A Component{props.name}</div>
    <B name2="Rajan" msg={props.msg}/>
    </>
  )
}
