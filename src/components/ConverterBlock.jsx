import React from 'react'

import arrowSvg from '../assets/arrow-down.svg'

const ConverterBlock = ({items}) => {
  return (
    <div className='calc'>
      <div className='calc__currency'>
        <div className='calc__currency-type'>
          <div className="calc__switcher">
            <div className="calc__switcher-item">
              <span>Bitcoin(BTC)</span>
              <ul>
                {
                  items.map(item => <li key={item.id}>{`${item.fullname}(${item.name})`}</li>)
                }
              </ul>
              <img src={arrowSvg} alt=""/>
            </div>
          </div>
        </div>
        <div className='calc__currency-input'>
          <form>
            <input maxLength="10"/>
          </form>
        </div>
      </div>
      <div className='calc__currency'>
        <div className='calc__currency-type'>
          <div className="calc__switcher">
            <div className="calc__switcher-item">
              <span>Bitcoin(BTC)</span>
              <img src={arrowSvg} alt=""/>
            </div>
          </div>
        </div>
        <div className='calc__currency-input'>
          <form>
            <input maxLength="10"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ConverterBlock