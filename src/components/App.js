import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [beltPosition, setBeltPosition] = useState(0)
  const [money, setMoney] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => setSushis(data))
  },[])

  function advanceBelt(){
    setBeltPosition((beltPosition + 4) % sushis.length)
  }

  function eatenSushi(piece){
    const remainingMoney = money - piece.price
    if(!piece.eaten && remainingMoney >=0){
      setMoney(remainingMoney)
      setSushis(sushis.map(sushi => sushi.id === piece.id ? {...sushi, eaten: true} : sushi
      ))
    }
  }

  const emptyPlates = sushis.filter(sushi => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer eatenSushi={eatenSushi} sushis={sushis.slice(beltPosition, beltPosition+4)} advanceBelt={advanceBelt}/>
      <Table money={money} plates={emptyPlates}/>
    </div>
  );
}

export default App;