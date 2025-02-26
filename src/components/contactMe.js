import React, { useState } from "react";
import Window from "./window";
import ProjectIcon from "./projectIcon";

const ContactMe = () => {

  return (
    <div className="contactMe">
    <Window title="Contact Me" width='fit-content' className="contactMe">
      <h2>Get in touch with me at:</h2>
      <div>
        <h3>Email: </h3>
        <h3>zacharyh728@gmai.com</h3>
      </div>
      <div>
        <h3>Phone: </h3>
        <h3>+1 (732) 742-1299</h3>
      </div>
    </Window>
    </div>

  )
}

export default ContactMe