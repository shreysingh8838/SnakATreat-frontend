import React from "react";
import { NavLink } from 'react-router-dom';
import {StyledLanding} from "../styles/layout"
import landing from '../assets/img/landing.jpg'
import ReactGA from 'react-ga';

  // to change or to copy
import { useDarkMode } from "../hook/useDarkMode";



const Landing = (props) => {
  process.env.NODE_ENV === 'production' && ReactGA.pageview(window.location.pathname + window.location.search);
  
  // to change or to copy
  useDarkMode();

  return (
    <StyledLanding className="bg-pink-50 dark:bg-white">
            <div id="content" className="sm:w-1/2">
                <p>Safe food
                <br/>
                Delivery</p>
                <p>
                Launched in 2021, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search, read and write customer generated reviews and, order food delivery,and make payments. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution. We also provide our delivery partners with transparent and flexible earning opportunities.                </p>
                <button className=" bg-red-700 dark:bg-black dark:text-white">
                <NavLink to="/product"> <h1>Order NOW</h1></NavLink>
                </button>
                {/* <a href="/product"><button className="px-8 button py-4 rounded-full text-white font-bold ml-48 mt-12" ><span>Order NOW</span></button></a> */}
            </div>

            <div id="image"  className="sm:w-1/2 bg-product-pattern">
            <p>
            From the start, we've been committed to doing the right thing. And every day, all around the globe, we put people, processes and practices into place to make quality food, more responsible sourcing choices, a stronger community and a better planet.</p>
            <img src={landing} alt="Logo"/>
            </div>
        </StyledLanding>
  );
};
export default Landing