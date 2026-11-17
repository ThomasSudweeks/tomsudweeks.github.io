import './TourHome.css'

import { useLocation } from 'react-router-dom';

import Header from '../../Components/Header/Header'
import Graphic from './Home/Graphic/Graphic'
import Quote from './Home/Quote/Quote'
import CustomScrollbar from '../../Components/CustomScrollBar/CustomScrollBar';


function TourHome() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <CustomScrollbar />

      <main className={`page-scroll ${
        pathname.startsWith("/tdf") ? "department-scroll" : ""
      }`}>
        <div className="tdf-bg" />
        <Quote />
        <Graphic />
      </main>
    </>
  )
}

export default TourHome