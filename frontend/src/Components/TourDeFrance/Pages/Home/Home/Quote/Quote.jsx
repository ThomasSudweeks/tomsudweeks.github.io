import "./Quote.css"

function Quote() {
  return(
    <div>
      <div className="quote-box">
        <h1 className="font-tiro quotes">«</h1>
        <h1 className="cdg-quote font-quote-italic">
          Comment voulez-vous <br /> 
          gouverner un pays où il existe <br />
          258 variétés de fromage ?
        </h1>
        <h1 className="font-tiro quotes">»</h1>
      </div>
      <div className="quote-credit spectral-sc-extralight">
        - attribué à Charles de Gaulle
      </div>
    </div>
  )
}

export default Quote