import { useSelector } from "react-redux";
import { ConverterBlock, CryptoTable } from "./components";


function App() {

  const items = useSelector(({ coins}) => coins.items)

  return (
    <div className="app">
      <div className='containner'>
        <div className="coins__list">
          <table className='table'>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>FullName</th>
                <th>Price</th>
                <th>24h</th>
                <th>24h%</th>
              </tr>
            </thead>
            <CryptoTable items={items} />
          </table>
        </div>
        <ConverterBlock items={items} />
      </div>
    
    </div>
  );
}

export default App;
