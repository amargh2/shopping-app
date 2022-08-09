import React, { useState } from 'react';
import Select from 'react-select'

export default function SelectQuantity(props) {
  const [inputValue, setInputValue] = useState(1)
  return (
    <div className='flex align-middle'>
      <label htmlFor="quantity" className="flex  align-middle text-sm font-medium text-gray-700">
      </label>
      <select
        id={props.id}
        name="quantity"
        className="mt-1 block w-15 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="1"
        onChange={(event) => {props.qtyHandler(event.target.id, event.target.value)
        }
      }
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  )
}
