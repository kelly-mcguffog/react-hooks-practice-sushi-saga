import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, advanceBelt, eatenSushi}) {

  const renderSushis = sushis.map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} eatenSushi={eatenSushi}/>
  })

  return (
    <div className="belt">
      {renderSushis}
      <MoreButton advanceBelt={advanceBelt}/>
    </div>
  );
}

export default SushiContainer;