import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
  const [showFront, setShowFront] = useState(true)
  
  const handleShow = ()=>(
    setShowFront(showFront => !showFront)
  ) 
  return (
    <Card onClick={handleShow}>
      <div>
        <div className="image">
          <img alt="oh no!" src={showFront ? sprites.front : sprites.back } />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;