import { useState } from "react";

import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import BandTicketForm from "./components/BandTicketForm";

function App() {
  const bands = [skaBand, kpopBand, punkBand];
  const [selectedBandIndex, setSelectedBandIndex] = useState(0);

  return (
    <div className="app">
      <BandTicketForm
        band={bands[selectedBandIndex]}
        bandOptions={bands}
        selectedIndex={selectedBandIndex}
        onBandChange={setSelectedBandIndex}
      />
    </div>
  );
}

export default App;
