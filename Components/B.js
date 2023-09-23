import React from 'react'
import C from './C'

export default function B(prop) {
    console.log(prop);
  return (
    <>
    <div>B Component{prop.name2}</div>
    <C name3="Rajesh" msg={prop.msg}/>
    </>
  )
}
