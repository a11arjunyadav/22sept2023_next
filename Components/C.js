import React from 'react'
import D from './D';

export default function C(p) {
    console.log(p);
  return (
    <>
    <div>C Component{p.name3}</div>
    <D name4="Karan" msg={p.msg}/>
    </>
  )
}
