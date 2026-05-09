import { useEffect, useState } from "react";

export default function SearchEffect() {
  const [searchTerm, setSearchTerm] = useState("");

  // Runs on EVERY input change
  useEffect(() => {
    console.log("Input changed:", searchTerm);
  }, [searchTerm]);

  // Simulated API call
  useEffect(() => {
    if (searchTerm.length > 3) {
      console.log(`API call for: ${searchTerm}`);
    }
  }, [searchTerm]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}