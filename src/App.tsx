import { useState } from 'react';
import ColorSwatch from './components/ColorSwatch';

function App() {
  const [numberOfColors, setNumberOfColors] = useState(6);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);

  const hues = [...Array(numberOfColors)].map(
    (_, i) => (360 / numberOfColors) * i,
  );

  return (
    <main className="p-8">
      <h1 className="font-bold text-2xl text-center mb-8">
        HSLuv Color Palette Generator
      </h1>
      <div>
        <label>
          <span>Number of Colors</span>
          <input
            type="number"
            value={numberOfColors}
            onChange={(e) => setNumberOfColors(Number(e.target.value))}
          />
        </label>
        <label>
          <span>Saturation</span>
          <input
            type="number"
            value={saturation}
            onChange={(e) => setSaturation(Number(e.target.value))}
          />
        </label>
        <label>
          <span>Lightness</span>
          <input
            type="number"
            value={lightness}
            onChange={(e) => setLightness(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        {hues.map((h) => (
          <ColorSwatch
            key={h}
            hue={h}
            saturation={saturation}
            lightness={lightness}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
