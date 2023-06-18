import { useEffect, useRef, useState } from "react";
import Title from "./components/Title";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  const [showSearch, setshowSearch] = useState(true);
  const [ui, setUi] = useState({
    opacity: "0",
  });
  const inputEl = useRef(null);

  let style = {
    opacity: ui.opacity,
  };

  const handleClick = () => {
    setshowSearch(false);
    setUi({
      opacity: "1",
    });
  };
  useEffect(() => {
    inputEl.current.focus();
  });

  return (
    <section>
      <Title text={"show search bar"} />
      <div className="search-container">
        <input ref={inputEl} type="text" style={style} placeholder="search" />
        {showSearch ? (
          <AiOutlineSearch className="icon" onClick={handleClick} />
        ) : null}
      </div>
    </section>
  );
}

export default App;
