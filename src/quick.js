import React from 'react';

const QuickGuide = ({ onClose }) => {
  return (
    <div className="bg-white p-8 border border-gray-400 rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Welcome to Our Website!</h2>
      <p className="mb-2">Here's a quick guide on how to use it:</p>
      <ul className="list-disc pl-4 mb-4">
        <li>Step 1: Click anywhere on the page to add a node</li>
        <li>Step 2: Select 'Add Line', click and drag from one node to another to connect them</li>
        <li>Step 3: Add weights of edges </li>
        <li>Step 4: Click 'Find result' for animated Dijkstra algorithm</li>
        {/* Add more steps as needed */}
      </ul>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
        Close
      </button>
    </div>
  );
}

export default QuickGuide;
