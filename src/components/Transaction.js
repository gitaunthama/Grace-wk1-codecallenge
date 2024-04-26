import React from 'react'

function Transaction(date,description,category,amount) {
  return (
    <div>
        <tr>
          <td>{date}</td>
          <td>{description}</td>
          <td>{category}</td>
          <td>{amount}</td>
        </tr>
    </div>
  )
}

export default Transaction