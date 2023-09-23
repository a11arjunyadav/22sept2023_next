import React from 'react'
import E from './E';

export default function D(pr) {
    console.log(pr);
  return (
    <>
    <div>D Component{pr.name4}</div>
    <E name5="Anil" msg={pr.msg}/>
    </>
  )
}
