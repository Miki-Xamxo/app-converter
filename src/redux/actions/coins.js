import axios from 'axios'

export const setCoins = (coins) => ({ type: 'SET_COINS', payload: coins})


export const getCoins = () => async (dispatch) => {
  const resp = await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
  const coins =  resp.data.Data.map(coin => {
    const obj = {
      id: coin.CoinInfo.Id,
      name: coin.CoinInfo.Name,
      fullname: coin.CoinInfo.FullName,
      ImageUrl: `https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
      price: coin.RAW.USD.PRICE.toFixed(3),
      volume24hour: parseInt(coin.RAW.USD.VOLUME24HOUR)
    }
    return obj
  })
  dispatch(setCoins(coins))
}