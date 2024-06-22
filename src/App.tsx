import { useState } from 'react';
import ColorSwatch from './components/ColorSwatch';
import FieldSet from './components/FieldSet';

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
      <div className="flex flex-wrap gap-4 mb-8">
        <FieldSet label="Number of Colors">
          <input
            type="number"
            value={numberOfColors}
            onChange={(e) => setNumberOfColors(Number(e.target.value))}
          />
        </FieldSet>
        <FieldSet label="Saturation">
          <input
            type="number"
            value={saturation}
            onChange={(e) => setSaturation(Number(e.target.value))}
          />
        </FieldSet>
        <FieldSet label="Lightness">
          <input
            type="number"
            value={lightness}
            onChange={(e) => setLightness(Number(e.target.value))}
          />
        </FieldSet>
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
