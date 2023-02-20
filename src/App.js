import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { useState } from "react";
import people from "./data";

function App() {
  const [active, setActive] = useState(0);
  const person = people[active];

  const handleNext = () => {
    setActive((active + 1) % people.length);
  };
  const handlePrev = () => {
    setActive((active - 1 + people.length) % people.length);
  };
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>reviews
          </h2>
        </div>
        <div className="section-center">
          <article>
            <img src={person.image} alt={person.name} className="person-img" />
            <h4>{person.name}</h4>
            <p className="title">{person.title}</p>
            <p className="text">{person.quote}</p>
            <FaQuoteRight />
          </article>

          <button onClick={handlePrev} className="prev">
            <FiChevronLeft />
          </button>
          <button onClick={handleNext} className="next">
            <FiChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
