import React from 'react'

const SlotM = (props) => {
   let x = props.x
   let y = props.y
   let z = props.z

   // let { x, y, z } = props; //{It is object destructuring}

   if (x === y && y === z && z === x) {
      return <>
         <div className="slot_inner">

            <h1>{x}{y}{z}</h1>
            <h1>This is Matching</h1>
            <hr />

         </div>
      </>
   } else {
      return <div>
         <h1>{x}{y}{z}</h1>
         <h1>This is not Maching</h1>
      </div>
   }
}

export default SlotM