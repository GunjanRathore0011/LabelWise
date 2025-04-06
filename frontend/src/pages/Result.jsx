import React from 'react'

const Result = () => {

  const data = localStorage.getItem('ocrResult');
  const parsedData = JSON.parse(data);
  console.log(parsedData)

  const rawOutput = parsedData.output; 

  const extractSection = (label) => {
    const regex = new RegExp(`${label}:([\\s\\S]*?)(?=\\n[A-Z][^:]*:|$)`, "i");
    const match = rawOutput.match(regex);
    return match ? match[1].trim() : "Not Available";
  };
  
  const productName = extractSection("Product Name");
  const ingredients = extractSection("Ingredients").split(',').map(i => i.trim());
  const additives = extractSection("Additives").split(',').map(i => i.trim());
  const allergens = extractSection("Allergens").split(',').map(i => i.trim());
  const nutrition = extractSection("Nutrition Information");
  const warnings = extractSection("Warnings");
  const otherLabels = extractSection("Other Labels").split(',').map(i => i.trim());
  
  return (
    <div>
      <h2 className="font-bold text-xl">Product: {productName}</h2>

<section>
  <h3 className="text-green-700 font-semibold">Ingredients</h3>
  <ul>
    {ingredients.map((item, index) => (
      <li key={index}>• {item}</li>
    ))}
  </ul>
  <h3 className="text-green-700 font-semibold">Additives</h3>
  <ul>
    {additives.map((item, index) => (
      <li key={index}>• {item}</li>
    ))}
  </ul>
  <h3 className="text-green-700 font-semibold">Nutrition Information</h3>
  <ul>
    {nutrition}
  </ul>
  <h3 className="text-green-700 font-semibold">Warnings</h3>
  <ul>
    {warnings}
    </ul>
  <h3 className="text-green-700 font-semibold">Allergens</h3>
  <ul>
    {allergens.map((item, index) => (
      <li key={index}>• {item}</li>
    ))} 
    </ul>
  <h3 className="text-green-700 font-semibold">Other Labels</h3>
  <ul>
    {otherLabels.map((item, index) => (
      <li key={index}>• {item}</li>
    ))} 
    </ul>
</section>
    </div>
  )
}

export default Result