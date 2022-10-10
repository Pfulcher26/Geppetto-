import React from 'react'

export default function PuppetEntry({item, index}) {
  return (
    <>
    <div key={index}>
        <p>{item.name}</p>
        <p>{item.story}</p>
    </div>
    </>
  )
}
