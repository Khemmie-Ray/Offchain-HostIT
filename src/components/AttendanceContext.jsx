import React, { createContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const AttendanceContext = createContext();

const AttendanceProvider = ({ children }) => {
  const [day, setDay] = useState(1);

  const { data: verified = [], error: verifiedError, refetch: refetchVerified } = useQuery({
    queryKey: ['verified'],
    queryFn: async () => {
      const res = await fetch(import.meta.env.VITE_CHECKEDIN_URL);
      const resData = await res.json();
      return resData.data;
    },
  });

  const { data: registeredData = [], error: registeredError, refetch: refetchRegistered } = useQuery({
    queryKey: ['registered'],
    queryFn: async () => {
      const response = await fetch(import.meta.env.VITE_REGISTERED_URL);
      return response.json();
    },
  });

  if (verifiedError || registeredError) {
    console.error("Error fetching data:", verifiedError || registeredError);
  }

  return (
    <AttendanceContext.Provider value={{ data: registeredData, day, setDay, verified, refetchVerified, refetchRegistered }}>
      {children}
    </AttendanceContext.Provider>
  );
};

export { AttendanceContext, AttendanceProvider };