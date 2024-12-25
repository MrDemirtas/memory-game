import { useState } from "react";
import { numbers } from "../nums";

const randomNumbers = numbers.sort(() => Math.random() - 0.5);

function Numbers() {
  const [numberData, setNumberData] = useState(randomNumbers);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  if (numberData.every((x) => x.isFound === true)) {
    setIsGameOver(true);
  }

  if (selectedNumbers.length === 2) {
    setButtonDisabled(true);
    if (selectedNumbers[0].num === selectedNumbers[1].num) {
      setTimeout(() => {
        numberData.find((x) => x.id === selectedNumbers[0].id).isFound = true;
        numberData.find((x) => x.id === selectedNumbers[1].id).isFound = true;
        setNumberData([...numberData]);
        setButtonDisabled(false);
      }, 1500);
    } else {
      setTimeout(() => {
        numberData.find((x) => x.id === selectedNumbers[0].id).isShow = false;
        numberData.find((x) => x.id === selectedNumbers[1].id).isShow = false;
        setNumberData([...numberData]);
        setButtonDisabled(false);
      }, 1500);
    }
    setSelectedNumbers([]);
  }

  function handleClick(id, num) {
    numberData.find((x) => x.id === id).isShow = true;
    setNumberData([...numberData]);
    setSelectedNumbers([...selectedNumbers, { id: id, num: num }]);
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
