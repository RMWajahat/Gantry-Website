"use client";
import "./resourceTransition.css";
const ResourceTransition = () => {
     
    return (
    <>
      <div className="uphill">
        <div className="boxes" style={{"--py": '25.5', borderTop: '1vw solid rgb(255, 255, 255)'}} />
        <div className="boxes" style={{"--py": '24.5', borderTop: '1vw solid rgb(255, 255, 255)'}} />
        <div className="boxes" style={{"--py": 23, borderTop: '1.6vw solid rgb(255, 255, 255)'}} />
        <div className="boxes" style={{"--py": 21, borderTop: '2.2vw solid rgb(255, 255, 255)'}} />
        <div className="boxes" style={{"--py": 18, borderTop: '3vw solid rgb(255, 255, 255)'}} />
        <div className="boxes" style={{"--py": 14, borderTop: '4vw solid rgb(255, 255, 255)'}} />
        <div className="boxes" style={{"--py": 9, borderTop: '5vw solid rgb(255, 255, 255)'}} />
        <div className="boxes" style={{"--py": 0, borderTop: '9vw solid rgb(255, 255, 255)'}} />
      </div>
    </>
  );
};

export default ResourceTransition;