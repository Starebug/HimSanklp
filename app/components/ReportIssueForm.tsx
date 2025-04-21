"use client"

import { useState } from "react";

type Props = {
  onSubmit: (report: {
    issueName: string;
    description: string;
    pincode: string;
    city: string;
    state: string;
    severity: string;
    media?: File | null;
  }) => void;
};

export function ReportForm({ onSubmit }: Props) {
  const [form, setForm] = useState({
    issueName: "",
    description: "",
    pincode: "",
    city: "",
    state: "",
    severity: "",
  });
  const [media, setMedia] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "pincode" && value.length === 6) {
      fetchLocationFromPincode(value);
    }
  };

  const fetchLocationFromPincode = async (pincode: string) => {
    const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
    const data = await res.json();
    if (data[0]?.Status === "Success") {
      const office = data[0].PostOffice[0];
      setForm((prev) => ({
        ...prev,
        city: office.District,
        state: office.State,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ ...form, media });
    setForm({
      issueName: "",
      description: "",
      pincode: "",
      city: "",
      state: "",
      severity: "",
    });
    setMedia(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-900 p-4 rounded border border-zinc-800 mb-8">
      <input
        type="text"
        name="issueName"
        placeholder="Issue Name"
        value={form.issueName}
        onChange={handleChange}
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
        rows={4}
        required
      />
      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={form.pincode}
        onChange={handleChange}
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
        maxLength={6}
        required
      />
      <input
        type="text"
        name="city"
        value={form.city}
        readOnly
        placeholder="City"
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
      />
      <input
        type="text"
        name="state"
        value={form.state}
        readOnly
        placeholder="State"
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
      />
      <select
        name="severity"
        value={form.severity}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
      >
        <option value="">Select Severity</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Critical">Critical</option>
      </select>
      <input
        type="file"
        accept="image/*,video/*"
        onChange={(e) => setMedia(e.target.files?.[0] || null)}
        className="text-sm text-zinc-300"
      />
      <button
        type="submit"
        className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600"
      >
        Submit Report
      </button>
    </form>
  );
}
