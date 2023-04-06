import React from 'react'

const NewList = (props) => {
  return (
    <div>
        <div className="pt-3">
            <ul className='text-xl'>
                <li className=' rounded-md border-2 max-w-[250px]  ' onClick={props.deleteBody}>{props.listBody}</li>
                
            </ul>
        </div>
    </div>
  )
}

export default NewList