import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <>
      <div className="h-full w-full flex flex-col mt-12 justify-center items-center">
        <Link
          to="/"
          className="hover:bg-teal-600 bg-white hover:shadow-md outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        >
          Back To Home
        </Link>
        {error && (
          <div className="text-red-600 font-bold mt-4">{error}</div>
        )}
        {user && (
          <div className="w-[700px] h-[200] px-8 py-6 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-white font-bold text-3xl pb-4 border-white border-b-2">
                Name
              </h2>
              <h2 className="text-white font-bold text-3xl pb-4 border-white border-b-2">
                Email
              </h2>
              <h2 className="text-white font-bold text-3xl pb-4 border-white border-b-2">
                Phone
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4">
              <h2 className="text-teal-200 font-bold text-3xl pb-4 border-white border-b-2">
                {user.name}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl pb-4 border-white border-b-2">
                {user.email}
              </h2>
              <h2 className="text-teal-200 font-bold text-3xl pb-4 border-white border-b-2">
                {user.phone}
              </h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
