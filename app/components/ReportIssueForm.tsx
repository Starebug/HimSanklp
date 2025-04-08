"use client";

import { useState, useEffect } from "react";

export default function ReportIssueForm() {
  const [formData, setFormData] = useState({
    issueName: "",
    description: "",
    pincode: "",
    city: "",
    state: "",
    severity: "",
  });

  const [media, setMedia] = useState<File | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "pincode" && value.length === 6) {
      fetchLocationFromPincode(value);
    }
  };

  const fetchLocationFromPincode = async (pincode: string) => {
    try {
      setLoadingLocation(true);
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();

      if (data[0]?.Status === "Success") {
        const postOffice = data[0]?.PostOffice[0];
        setFormData((prev) => ({
          ...prev,
          city: postOffice.District,
          state: postOffice.State,
        }));
      } else {
        setFormData((prev) => ({ ...prev, city: "", state: "" }));
        alert("Invalid Pincode or location not found.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      alert("Failed to fetch location data.");
    } finally {
      setLoadingLocation(false);
    }
  };

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setMedia(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reportData = {
      ...formData,
      media,
    };
    console.log("Submitting report:", reportData);
    // TODO: Send to backend
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-zinc-900 rounded-lg border border-zinc-800 text-white">
      <h2 className="text-2xl font-bold mb-6">Report an Issue</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Issue Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Issue Name</label>
          <input
            type="text"
            name="issueName"
            value={formData.issueName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded"
          ></textarea>
        </div>

        {/* Pincode */}
        <div>
          <label className="block text-sm font-medium mb-1">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            maxLength={6}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded"
          />
        </div>

        {/* Auto-filled City */}
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            value={formData.city}
            readOnly
            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-gray-300"
          />
        </div>

        {/* Auto-filled State */}
        <div>
          <label className="block text-sm font-medium mb-1">State</label>
          <input
            type="text"
            value={formData.state}
            readOnly
            className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-gray-300"
          />
        </div>

        {/* Severity Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1">Severity</label>
          <select
            name="severity"
            value={formData.severity}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded"
          >
            <option value="">Select Severity</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
        </div>

        {/* Media Upload */}
        <div>
          <label className="block text-sm font-medium mb-1">Upload Image/Video</label>
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleMediaChange}
            className="text-sm text-zinc-300"
          />
          {media && <p className="mt-1 text-sm text-teal-400">{media.name}</p>}
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
}
