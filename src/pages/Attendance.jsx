import React, { useState, useContext } from "react";
import {
  Pagination,
  Modal,
  Box,
  Tabs, Tab
} from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import user from "../assets/user-NF.svg";
import bannerImg from '../assets/web-banner.png'
import Checkin from "../components/Checkin";
import TableData from "../components/TableData";
import PropTypes from 'prop-types';
import { AttendanceContext } from "../components/AttendanceContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Attendance = () => {
  const { day, setDay, data, verified } = useContext(AttendanceContext)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [userInput, setUserInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setDay(newValue);
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data?.slice(indexOfFirstItem, indexOfLastItem);

  const handleCloseModal = () => setShowModal(false); 

  const handleSearch = () => {
    if(!userInput) {
      toast.error("Invalid Input", {
        position: "top-center",
      });
    }

  
    const result = data.find(
      (item) =>
        item.name.toLowerCase().includes(userInput.toLowerCase().trim()) ||
        item.email.toLowerCase().includes(userInput.toLowerCase().trim())
    );
    setSearchResult(result);
    setUserInput('');
    setShowModal(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: '30px',
    border: '1px solid #e0bb8395',
    boxShadow: 24,
    bgcolor: 'background.paper', 
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  return (
    <div>
      <h2 className='lg:text-[32px] md:text-[32px] text-[24px] font-[500] mb-6'>Check-Ins</h2>
        <div className="border-2 text-gray-500 border-[#0D0042] rounded-lg px-4 py-2 flex my-4 justify-between items-center lg:w-[30%] md:w-[50%] w-[100%]">
          <div className="flex items-center w-[80%]">
            <FaSearch className="mr-4 " />
            <input
              type="text"
              placeholder="Search"
              required
              value={userInput}
              className="bg-transparent outline-0"
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
          <button className="bg-[#0D0042] rounded-lg w-[20%] flex justify-center items-center px-2" onClick={handleSearch}>
            <IoIosSend className="text-[#11EBF2] text-[30px]" />
          </button>
        </div>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', color: '#0D0042', fontWeight: 'bold'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Day 1" {...a11yProps(0)}  sx={{ 
              '&.Mui-selected': { 
                color: 'white', 
                backgroundColor: '#0D0042', 
              }}} />
          <Tab label="Day 2" {...a11yProps(1)} 
           sx={{ 
            '&.Mui-selected': { 
              color: 'white', 
              backgroundColor: '#0D0042',
            }}}
            />
          <Tab label="Day 3" {...a11yProps(2)} 
           sx={{ 
            '&.Mui-selected': { 
              color: 'white', 
              backgroundColor: '#0D0042',
            }}}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <TableData currentData={currentData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <TableData currentData={currentData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <TableData currentData={currentData} />
      </CustomTabPanel>
    </Box>
      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={handleChangePage}
        color="primary"
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      />

      <div className="px-4">
        <Modal open={showModal} onClose={handleCloseModal}>
          <Box sx={style}>
            {searchResult ? (
              <div>
                <div className="bg-cover h-[20vh] bg-left-bottom rounded-tr-[30px] rounded-tl-[30px]" style={{ backgroundImage: `url(${bannerImg})` }}>
                </div>
                <div className="py-6 flex flex-col px-8">
                  <p className="hidden">ID: {searchResult.id}</p>
                  <p>Name: {searchResult.name}</p>
                  <p>Email: {searchResult.email}</p>
                  <p>Location: {searchResult.country}, {searchResult.location}</p>
                  <p>Role: {searchResult.role}</p>
                  <Checkin email={searchResult.email} day={day} verified={verified} handleCloseModal={handleCloseModal} />
                </div>
              </div>
            ) : (
              <div className="p-6 flex flex-col items-center">
                <p className="my-4 font-[700] text-[20px] text-red-700">User not found!</p>
                <img src={user} alt="" />
                <button onClick={handleCloseModal} className="w-[100%] px-6 py-4 my-4 font-[700] rounded-full text-[#0D0042] bg-[#11EBF2]">Retry</button>
              </div>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Attendance;