import ColorSwatch from './components/ColorSwatch';
import FieldSet from './components/FieldSet';
import InputSliderSet from './components/InputSliderSet';
import InputButtonSet from './components/InputButtonSet';
import { useNumberOfColors } from './hooks/useNumberOfColors';
import { useSaturation } from './hooks/useSaturation';
import { useLightness } from './hooks/useLightness';

function App() {
  const { numberOfColors, setNumberOfColors } = useNumberOfColors();
  const { saturation, setSaturation } = useSaturation();
  const { lightness, setLightness } = useLightness();

  const hues = [...Array(numberOfColors)].map(
    (_, i) => (360 / numberOfColors) * i,
  );

  return (
    <main className="py-8 container-padding-x w-full md:max-w-screen-md lg:max-w-screen-lg mx-auto">
      <h1 className="font-bold text-2xl text-center mb-8">
        HSLuv Color Palette Generator
      </h1>
      <div className="flex flex-wrap gap-x-8 gap-y-4 mb-8">
        <FieldSet className="w-40" label="Number of Colors">
          <InputButtonSet value={numberOfColors} onChange={setNumberOfColors} />
        </FieldSet>
        <div className="flex flex-wrap gap-4">
          <FieldSet className="w-80" label="Saturation">
            <InputSliderSet value={saturation} onChange={setSaturation} />
          </FieldSet>
          <FieldSet className="w-80" label="Lightness">
            <InputSliderSet value={lightness} onChange={setLightness} />
          </FieldSet>
        </div>
      </div>
      <div className="flex flex-wrap colors-wrapper-gap">
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
