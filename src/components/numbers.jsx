import { useState } from "react";
import { numbers } from "../nums";

const randomNumbers = numbers.sort(() => Math.random() - 0.5);
console.log(randomNumbers);
function Numbers({ handleMoves, handleGameOver }) {
  const [numberData, setNumberData] = useState(randomNumbers);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function handleClick(id, num) {
    numberData.find((x) => x.id === id).isShow = true;
    setNumberData([...numberData]);
    const newSelectedNumbers = [...selectedNumbers, { id: id, num: num }];

    if (newSelectedNumbers.length === 2) {
      handleMoves();
      setButtonDisabled(true);
      setTimeout(() => {
        if (newSelectedNumbers[0].num === newSelectedNumbers[1].num) {
          numberData.find((x) => x.id === newSelectedNumbers[0].id).isFound = true;
          numberData.find((x) => x.id === newSelectedNumbers[1].id).isFound = true;
        } else {
          numberData.find((x) => x.id === newSelectedNumbers[0].id).isShow = false;
          numberData.find((x) => x.id === newSelectedNumbers[1].id).isShow = false;
        }
        if (numberData.every((x) => x.isFound)) {
          handleGameOver();
        }
        setNumberData([...numberData]);
        setButtonDisabled(false);
      }, 1500);
      setSelectedNumbers([]);
    } else {
      setSelectedNumbers([{ id: id, num: num }]);
    }
  }

  return (
    <div className="numbers-container">
      {numberData.map((number) => {
        return <Number key={number.id} id={number.id} num={number.num} isShow={number.isShow} isFound={number.isFound} handleClick={handleClick} buttonDisabled={buttonDisabled} />;
      })}
    </div>
  );
}

function Number({ id, num, isShow, isFound, handleClick, buttonDisabled }) {
  return (
    <button className={"number" + (isFound ? " passive" : isShow ? " active" : "")} disabled={isFound || isShow || buttonDisabled} onClick={() => handleClick(id, num)}>
      <span>{isShow || isFound ? num : ""}</span>
    </button>
  );
}

export default Numbers;
