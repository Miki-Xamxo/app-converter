import React from 'react'
import { useDispatch } from 'react-redux'
import { getCoins } from '../redux/actions/coins'

const CryptoTable = ({ items }) => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getCoins())

    setTimeout(() => {
      dispatch(getCoins())
      console.log("GETCOINS")
    }, 60 * 1000)
  }, [])


  return <tbody>
    {
      items.map(item => <tr key={item.id}>
          <td>
            <img src={item.ImageUrl} alt=""></img>
          </td>
          <td>{item.name}</td>
          <td>{item.fullname}</td>
          <td style={{backgroundColor: 'rgb(183 60 60)'}}>${item.price}</td>
          <td style={{backgroundColor: 'rgb(71 117 65)'}}>${item.volume24hour}</td>
          <td>7.8%</td>
      </tr>)
    }
  </tbody>
}

export default CryptoTable
