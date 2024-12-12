import { useState } from "react";
import "./App.css";

const BASE_API = "http://0.0.0.0:3030";

function App() {
  const [myInfo, setMyInfo] = useState("");

  const goToAPI = async () => {
    const info = (await fetch(BASE_API)) as any;

    const parsedInfo = await info.json()
    const stringInfo = JSON.stringify(parsedInfo)

    setMyInfo(stringInfo || "no se pudo");
    return "hola";
  };

  return (
    <>
      <div>
        <button onClick={goToAPI}>API</button>
        {myInfo && <p>{myInfo}</p>}
      </div>
    </>
  );
}

export default App;
