import Dropdown from "./Dropdown";

function App() {
  const items = [
    "Take Care - Drake",
    "Get Rich Or Die Tryin - 50 Cent",
    "My Beautiful Dark Twisted Fantasy - Kanye West",
    "The Marshall Mathers LP - Eminem",
    "2014 Forest Hills Drive - J Cole",
  ];

  return (
    <div className="main">
      <h2>The Perfect Album?</h2>
      <Dropdown items={items} />
    </div>
  );
}

export default App;
