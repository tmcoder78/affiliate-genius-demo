import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([
    { id: 1, name: "Wireless Headphones", price: "$39.99", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Smart Fitness Watch", price: "$59.99", image: "https://via.placeholder.com/150" },
    { id: 3, name: "4K Drone Camera", price: "$89.99", image: "https://via.placeholder.com/150" },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Affiliate Genius - Demo</h1>
      <div className="max-w-md mx-auto flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Talk or type to find products..."
          className="border rounded-xl px-4 py-2 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="grid grid-cols-1 gap-4 w-full">
          {results.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-blue-500">{item.price}</p>
                <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  View Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
