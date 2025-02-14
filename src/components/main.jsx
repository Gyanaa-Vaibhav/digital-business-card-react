import React from "react";
import "./main.css";
import profile from '../assets/Profile_1.png'
import Footer from "./footer.jsx";

export default function Main() { 
    return (
      <main>
        <img src={profile} alt="Profile Picture" />
        <h2 className="name">Gyanaa Vaibhav</h2>
        <h3 className="title">Full Stack Data Scientist</h3>
        <p className="website">Website Here</p>
        <div className="btns">
          <button className="email">
            {" "}
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.102406 1.70721L6.50001 4.90561L12.8976 1.70721C12.8739 1.29957 12.6953 0.916403 12.3983 0.636194C12.1012 0.355985 11.7083 0.199937 11.3 0.200012H1.70001C1.29167 0.199937 0.898764 0.355985 0.601748 0.636194C0.304733 0.916403 0.126089 1.29957 0.102406 1.70721Z"
                fill="#1E1F26"
              />
              <path
                d="M12.9 3.49441L6.50001 6.69441L0.100006 3.49441V8.20001C0.100006 8.62436 0.268577 9.03133 0.568635 9.33138C0.868693 9.63144 1.27566 9.80001 1.70001 9.80001H11.3C11.7244 9.80001 12.1313 9.63144 12.4314 9.33138C12.7314 9.03133 12.9 8.62436 12.9 8.20001V3.49441Z"
                fill="#1E1F26"
              />
            </svg>
            Email
          </button>
          <button className="linkedin">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.7143 0.333344H1.28275C0.758939 0.333344 0.333344 0.764891 0.333344 1.29465V12.7054C0.333344 13.2351 0.758939 13.6667 1.28275 13.6667H12.7143C13.2381 13.6667 13.6667 13.2351 13.6667 12.7054V1.29465C13.6667 0.764891 13.2381 0.333344 12.7143 0.333344ZM4.36311 11.7619H2.38692V5.39882H4.36608V11.7619H4.36311ZM3.37501 4.52977C2.74108 4.52977 2.22918 4.01489 2.22918 3.38394C2.22918 2.75299 2.74108 2.23811 3.37501 2.23811C4.00596 2.23811 4.52084 2.75299 4.52084 3.38394C4.52084 4.01787 4.00894 4.52977 3.37501 4.52977V4.52977ZM11.7708 11.7619H9.79465V8.66668C9.79465 7.92858 9.77977 6.97918 8.76787 6.97918C7.73811 6.97918 7.58037 7.78275 7.58037 8.61311V11.7619H5.60418V5.39882H7.50001V6.26787H7.5268C7.79168 5.76787 8.43751 5.24108 9.39882 5.24108C11.3988 5.24108 11.7708 6.55953 11.7708 8.27382V11.7619V11.7619Z"
                fill="white"
              />
            </svg>
            LinkedIn
          </button>
        </div>

        <div className="info">
          <div className="about">
            <h3>About</h3>
            <p>
              {" "}
              I’m a passionate full stack developer building dynamic web
              applications with a strong focus on mobile-first design. I’ve
              completed a range of projects, from interactive frontend designs
              to full-stack applications, and I’m always eager to learn new
              technologies. With a foundation in HTML, CSS, JavaScript, and
              currently expanding into React, Node.js, and databases, I aim to
              create seamless user experiences. I’m also exploring UI/UX design
              to elevate my projects further.
            </p>
          </div>

          <div className="about">
            <h3>Interests</h3>
            <p>
              {" "}
              Making Websites, Invest, Reading Non-Fiction ("Self-Help , Business ,Investing").
            </p>
          </div>
        </div>

        <Footer />
      </main>
    );
}