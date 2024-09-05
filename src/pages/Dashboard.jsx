import React, { useEffect, useState, useContext } from "react";
import Charts from "../components/Charts";
import { HiUsers } from "react-icons/hi2";
import { GiPublicSpeaker } from "react-icons/gi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { LuBadgeDollarSign } from "react-icons/lu";
import CalendarData from "../components/CalendarData";
import { AttendanceContext } from "../components/AttendanceContext";

const Dashboard = () => {
  const { day, data, verified } = useContext(AttendanceContext)
  const [verifiedParticipants, setVerifiedParticipants] = useState(0);

useEffect(() => {
  if (data.length && verified.length) {
    const verifiedCount = data.filter(participant => 
      verified.some(v => 
        v.email === participant.email && 
        v.isPresent === true && 
        v.day === day
      )
    ).length;

    setVerifiedParticipants(verifiedCount);
  }
}, [data, verified, day]);

// console.log(verifiedParticipants)

  return (
    <main>
      <section>
        <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[500] mb-6">
          Analytics
        </h2>
        <div className="flex justify-between flex-col lg:flex-row md:flex-row">
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <HiUsers />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              {data.length}
            </h2>
            <p className="text-[#708890]">Participants</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <RiVerifiedBadgeFill />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              {verifiedParticipants}
            </h2>
            <p className="text-[#708890]">Verified</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <GiPublicSpeaker />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              61+
            </h2>
            <p className="text-[#708890]">Speakers</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <LuBadgeDollarSign />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              {2000 - data.length}
            </h2>
            <p className="text-[#708890]">Tickets left</p>
          </div>
          <div className="bg-white rounded-lg p-6 flex items-center flex-col md:w-[18%] lg:w-[18%] w-[90%] mx-auto mb-4">
            <div className="bg-[#0D0042] text-[#11EBF2] p-4 text-2xl rounded-full">
              <LuBadgeDollarSign />
            </div>
            <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700]">
              6+
            </h2>
            <p className="text-[#708890]">Sponsors</p>
          </div>
        </div>
      </section>
      <section className="my-12 flex flex-col lg:flex-row md:flex-row justify-between items-center">
      <div className="overflow-x-scroll order-2 lg:order-1 md:order-1 w-[100%] lg:w-[60%] md:w-[70%]">
        <Charts  />
        </div>
        <div className="order-1 lg:order-2 md:order-2 my-4 w-[100%] lg:w-[35%] md:w-[35%]">
          <CalendarData />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
