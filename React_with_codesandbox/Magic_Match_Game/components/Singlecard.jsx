import "../src/App.css";

function Singlecard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <>
      <div className="card">
        <div>
          <div className={flipped ? "flipped" : ""}>
            <img src={card.src} alt="card front" className="border-2 front" />
            <img
              src="/img/cover.png"
              alt="card back"
              className="border-2 back"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Singlecard;
