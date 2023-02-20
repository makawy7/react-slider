import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
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

  // In React, when a component is unmounted (i.e., removed from the DOM), 
  // any pending setTimeout or setInterval calls that were initiated by that component are not automatically cleared.
  // This means that if a component initiates a setTimeout call, but is unmounted before the timer fires,
  // the setTimeout call will still be pending in the background, 
  // even though the component is no longer present in the DOM.

  // If this happens frequently, it can lead to a buildup of pending setTimeout calls, 
  // which can cause a memory leak and hurt performance.
  // This is because the setTimeout calls continue to take up memory and resources,
  // even though the component that initiated them is no longer in use.

  // To avoid this, it's important to always cancel any setTimeout or setInterval calls that a component initiates,
  // before the component unmounts. This ensures that any pending timers are properly cleaned up,
  // and that there are no memory leaks or performance issues caused by leftover timers.

  // One way to cancel a setTimeout call is by using the clearTimeout function,
  // which takes the ID of the setTimeout call as an argument.
  // You can store the ID of the setTimeout call in a useRef hook,
  // which allows you to access and clear it even after the component has unmounted.
  
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      handleNext();
    }, 2000);
  };

  const stopTimer = () => {
    clearTimeout(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
    };
  });

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
