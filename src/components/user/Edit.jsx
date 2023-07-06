
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
      })
      .catch((error) => {
        setError("Error loading user.");
      });
  }, []);

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  async function Update(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${id}`, data);
      navigate("/");
    } catch (error) {
      setError("Error updating user.");
    }
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">User Details</h2>
      {error && <div className="text-red-600 font-bold mt-4">{error}</div>}
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="email"
          placeholder="Enter your email"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="phone"
          placeholder="Enter your phone no."
        />
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={Update}
        >
          UPDATE USER
        </button>
      </form>
    </div>
  );
}

export default Add;