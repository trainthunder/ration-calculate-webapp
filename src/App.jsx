import { useState } from "react";

function App() {
  const ratios = [100, 7, 107, 3, 104];
  const [inputValues, setInputValues] = useState(Array(5).fill(""));

  const handleInputChange = (e, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  };

  const calculateRatios = () => {
    const baseIndex = inputValues.findIndex(
      (value) => !isNaN(parseFloat(value)) && value !== ""
    );
    if (baseIndex === -1) return;

    const baseValue = parseFloat(inputValues[baseIndex]);

    const newInputValues = ratios.map((ratio, i) =>
      i === baseIndex
        ? baseValue.toFixed(2)
        : ((baseValue / ratios[baseIndex]) * ratio).toFixed(2)
    );

    setInputValues(newInputValues);
  };

  const clearFields = () => {
    setInputValues(Array(5).fill(""));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="p-6 rounded shadow-md text-center max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Ratio Calculator
          </h2>
          {ratios.map((ratio, index) => (
            <div key={index} className="flex items-center justify-center mb-3">
              <label className="mr-2 text-white font-bold">({ratio}) :</label>
              <input
                type="number"
                value={inputValues[index]}
                onChange={(e) => handleInputChange(e, index)}
                className="w-24 p-2 border rounded"
                placeholder={`Enter for ${ratio}`}
              />
            </div>
          ))}
          <div className="flex justify-center mt-5 space-x-4">
            <button
              onClick={calculateRatios}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Go
            </button>
            <button
              onClick={clearFields}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
