import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import Browse from './Browse'
import useGetAllJobs from '../hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import store from '../redux/store'
import { useNavigate } from 'react-router-dom'
// import LatestJobCards from './LatestJobCards'
function Home() {
  useGetAllJobs();
  const {user} = useSelector(store=>store.auth);
  const navigate = useNavigate();
  useEffect(()=>{
    if(user?.role === 'recruiter'){
      navigate("/admin/companies");
    }
  },[]);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      {/* <LatestJobCards/> */}
      {/* <Browse/> */}
      <Footer />
    </div>
  )
}

export default Home
