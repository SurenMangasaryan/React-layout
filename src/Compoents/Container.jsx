import React from 'react'
import FirstMain from './FirstMain'
import Header from './Hader'
import SecondMain from './SecondMain'

export default function Container() {
  return (
    <div className='container'>
      <Header />
      <FirstMain />
      <SecondMain />
    </div>
  )
}