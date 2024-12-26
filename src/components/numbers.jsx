import { useState } from "react";
import { numbers } from "../nums"; // * nums.js dosyasından numbers dizisini import ediyoruz
const randomNumbers = numbers.sort(() => Math.random() - 0.5); // * numbers dizisini random olarak sıralıyoruz

function Numbers({ handleMoves, handleGameOver }) {
  // * handleMoves ve handleGameOver fonksiyonlarını App componentinden PROP DRILLING ile alıyoruz
  
  const [numberData, setNumberData] = useState(randomNumbers); // * numberData dizisini useState ile oluşturuyoruz ve randomNumbers dizisini başlangıç değeri olarak atıyoruz
  const [selectedNumbers, setSelectedNumbers] = useState([]); // * selectedNumbers dizisini useState ile oluşturuyoruz ve başlangıç değeri olarak boş bir dizi atıyoruz
  const [buttonDisabled, setButtonDisabled] = useState(false); // * buttonDisabled değişkenini useState ile oluşturuyoruz ve başlangıç değeri olarak false atıyoruz

  // * 2 adet sayı seçildiğinde çalışan koşul
  if (selectedNumbers.length == 2) {
    handleMoves(); // * App componentinden PROP DRILLING ile aldığımız handleMoves fonksiyonunu çağırıyoruz
    setButtonDisabled(true); // * buttonDisabled değişkenini true yaparak işlem bitene kadar butonların pasif olmasını sağlıyoruz

    // * setTimeout ile tıkladığımız butonların ekranda 1.5 saniye görünmesini sağlıyoruz
    setTimeout(() => {
       // * selectedNumbers dizisindeki ilk ve ikinci elemanın numaralarını karşılaştırıyoruz
      if (selectedNumbers[0].num === selectedNumbers[1].num) {
        numberData.find((x) => x.id === selectedNumbers[0].id).isFound = true; // * numberData dizisindeki ilk elemanın isFound değerini true yapıyoruz
        numberData.find((x) => x.id === selectedNumbers[1].id).isFound = true; // * numberData dizisindeki ikinci elemanın isFound değerini true yapıyoruz
      } else {
        numberData.find((x) => x.id === selectedNumbers[0].id).isShow = false; // * numberData dizisindeki ilk elemanın isShow değerini false yapıyoruz
        numberData.find((x) => x.id === selectedNumbers[1].id).isShow = false; // * numberData dizisindeki ikinci elemanın isShow değerini false yapıyoruz
      }

      // * numberData dizisindeki tüm elemanların isFound değerleri true ise handleGameOver fonksiyonunu çağırıyoruz
      if (numberData.every((x) => x.isFound)) {
        handleGameOver(); // * App componentinden PROP DRILLING ile aldığımız handleGameOver fonksiyonunu çağırıyoruz
      }

      setNumberData([...numberData]); // * numberData dizisini güncelliyoruz
      setButtonDisabled(false); // * buttonDisabled değişkenini false yapıyoruz
    }, 1500);

    setSelectedNumbers([]); // * selectedNumbers dizisini boş bir dizi olarak atıyoruz
  }

  // * number butonuna tıklandığında çalışan fonksiyon
  function handleClick(id, num) {
    numberData.find((x) => x.id === id).isShow = true; // * numberData dizisindeki id değeri id olan elemanın isShow değerini true yapıyoruz
    setNumberData([...numberData]); // * numberData dizisini güncelliyoruz
    setSelectedNumbers([...selectedNumbers, { id: id, num: num }]); // * selectedNumbers dizisini güncelliyoruz
  }

  return (
    <div className="numbers-container">
      {numberData.map((number) => { // * numberData dizisindeki her elemanı Number componentine gönderiyoruz
        return (
          <Number
            key={number.id} // * key prop'u ile her elemanın benzersiz bir anahtar olmasını sağlıyoruz
            id={number.id} // * id prop'u ile her elemanın benzersiz id'sini gönderiyoruz
            num={number.num} // * num prop'u ile her elemanın numarasını gönderiyoruz
            isShow={number.isShow} // * isShow prop'u ile her elemanın görünüp görünmeyeceğini belirliyoruz
            isFound={number.isFound} // * isFound prop'u ile her elemanın bulunup bulunmadığını belirliyoruz
            handleClick={handleClick} // * handleClick prop'u ile PROP DRILLING yaparak handleClick fonksiyonunu gönderiyoruz
            buttonDisabled={buttonDisabled} // * buttonDisabled prop'u ile butonun aktif olup olmadığını belirliyoruz
          />
        );
      })}
    </div>
  );
}

function Number({ id, num, isShow, isFound, handleClick, buttonDisabled }) {
  return (
    <button
      className={"number" + (isFound ? " passive" : isShow ? " active" : "")} // * number class'ına isFound, isShow değerlerine göre class ekliyoruz
      disabled={isFound || isShow || buttonDisabled} // * isFound, isShow ve buttonDisabled değerleri true ise buton pasif hale getiriyoruz
      onClick={() => handleClick(id, num)} // * buton tıklandığında PROP DRILLING ile aldığımız handleClick fonksiyonunu çağırıyoruz
    >
      <span>
        {isShow || isFound ? num : ""} {/* isShow veya isFound değeri true ise num değerini gösterir, false ise boş bir string gösterir */}
      </span>
    </button>
  );
}

export default Numbers;
