import { Button } from "@mui/material";
import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>LMS</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className="social">
            <Button variant="outlined" color="success">
              Login
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
