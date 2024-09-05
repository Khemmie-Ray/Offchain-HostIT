import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonLoader from "./ButtonLoader";
import { AttendanceContext } from "../components/AttendanceContext";

const Checkin = ({ email, day, verified, handleCloseModal }) => {
  const { refetchVerified } = useContext(AttendanceContext)
  const url = import.meta.env.VITE_VERIFIED_URL;
  const [isLoading, setIsLoading] = useState(false)
  const isVerified = verified.some(
    (v) => v.email === email && v.day === day && v.isPresent === true
  );

  const sendData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, day }),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(`${result.message}`, {
          position: "top-center",
        });
        handleCloseModal();
        refetchVerified();
      } else {
        toast.error(`Failed to check in:, ${response.statusText}`, {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error(`Error sending data:, ${error}`, {
        position: "top-center",
      });
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div>
      {isVerified ? (
        <button
          disabled
          className="w-[100%] bg-[#dadada] text-black px-6 py-4 my-4 font-[700] rounded-full"
        >
          Verified
        </button>
      ) : (
        <button
          className="w-[100%] px-6 py-4 my-4 font-[700] rounded-full text-[#0D0042] bg-[#11EBF2] flex items-center justify-center"
          onClick={sendData}
        >
          {isLoading ? <ButtonLoader /> : "Checkin"}
        </button>
      )}
    </div>
  );
};

export default Checkin;
