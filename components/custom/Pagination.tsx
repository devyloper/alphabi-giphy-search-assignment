import React from 'react'
import { Button } from '../ui/button'

type Props = {}

function Pagination({}: Props) {
  return (
    <div className='flex gap-x-2 justify-center'>
        <Button variant="outline">Previous</Button>
        <div className='flex gap-x-2'>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
        </div>
        <Button variant="outline">Next</Button>  
    </div>
  )
}

export default Pagination