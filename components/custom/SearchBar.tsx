'use client';
import React, { Component, use } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

type Props = {}

type State = {}

class SearchBar extends Component<Props, State> {
  state = {}

  render() {
    return (
      <>
        <Card className="w-[876px] flex p-4 gap-x-4 justify-center">
          <div className="w-[100%]  space-y-1.5">
            <Input className='bg-gray-100' id="search" placeholder="Search" />
          </div>
          <Button className="bg-rose-500 hover:bg-rose-700 text-white">Search</Button>
        </Card>
      </>
    )
  }
}

export default SearchBar