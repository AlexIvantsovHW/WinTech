import React from "react";

import { RocketLayout } from "../../widget/layouts/rocket-layout";
import { AllGamesWidget } from "../../widget/newest-games-widget/all-games-widget";
import { ContactWidget } from "../../widget/contact-widget";

const Contact = () => {
  return (
    <div className="text-white font-[25px] min-h-fit flex flex-col justify-center items-center mt-[40px]">
      <div className="max-w-[592px] flex flex-col justify-around items-center gap-[20px] mb-[40px]">
        <h1
          style={{
            fontSize: "3rem",
            lineHeight: "1.2",
            textTransform: "capitalize",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Contact Rocket Jackpots: Let's Connect Across the Galaxy!
        </h1>
        <p className="text-[16px] text-center font-bold">
          Reach out to Rocket Jackpots and embark on a cosmic conversation!
          Whether you have questions, feedback, or just want to say hello.
        </p>
      </div>
      <RocketLayout />

      <ContactWidget />
    </div>
  );
};
export default Contact;
