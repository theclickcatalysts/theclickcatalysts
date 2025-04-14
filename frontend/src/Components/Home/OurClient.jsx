import React from "react";

import souDesi from "../../assets/Home/Comlogo/souDes.webp";
import nstHr from "../../assets/Home/Comlogo/nsthrLo.webp";
import cospace from "../../assets/Home/Comlogo/cospace2.jpg";
import rnLife from "../../assets/Home/Comlogo/rnLifeS.webp";
import educlab from "../../assets/Home/Comlogo/educlab.jpg";
import evernal from "../../assets/Home/Comlogo/evernal.png";
import evernalDark from "../../assets/Home/Comlogo/evernalGrp.png";
import sproduct from "../../assets/Home/Comlogo/sproD.webp";

const partners = [
  { name: "Solusi", logo: souDesi },
  { name: "Microsoft", logo: nstHr },
  { name: "Help Scout", logo: cospace },
  { name: "Jotform", logo: rnLife },
  { name: "Evernal Group", logo: evernal },
  { name: "Edu Clab", logo: educlab },
  { name: "Evernal Decor", logo: evernalDark },
  { name: "s Production", logo: sproduct, className: "cursor-white" },
];

export default function PartnersSection() {
  return (
    <section className="py-12 bg-white">
      <div className="w-[95%] md:w-[85%] lg:w-[75%] xl:w-[70%] mx-auto text-center">
        <h5 className="uppercase text-gray-600 tracking-widest">
          OUR CLIENTS
        </h5>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headingFont font-bold text-textColor">
          We work with <span className="text-primary">the best clients</span>
        </h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-0">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 sm:h-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
