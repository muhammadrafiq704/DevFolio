import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faProjectDiagram,
  faClock,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { useEffect } from "react";
const Facts = () => {
  const Clients = [
    {
      title: "Happy Clients",
      icon: faSmile,
    },
    {
      title: "Projects",
      icon: faProjectDiagram,
    },
    {
      title: "Work Hours",
      icon: faClock,
    },
    {
      title: "Awards",
      icon: faTrophy,
    },
  ];

  const [counts, setCounts] = useState({});

  useEffect(() => {
    const initialCounts = {
      "Happy Clients": 100,
      Projects: 50,
      "Work Hours": 2000,
      Awards: 10,
    };

    setCounts(initialCounts);

    console.log(
      "counts value for 'Happy Clients':",
      initialCounts["Happy Clients"]
    );
  }, []);
  console.log("counts value for counts :", counts);

  return (
    <React.Fragment>
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Facts</h2>
            <p>There are some facts based on my previous projects.</p>
          </div>

          <div className="row">
            {Clients.map((data) => {
              return (
                <div
                  className="col-lg-3 col-md-6"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="">
                    <FontAwesomeIcon
                      icon={data.icon}
                      size="2x"
                      color="lightblue"
                    />
                    <span
                      style={{ backgroundColor: "black", color: "danger" }}
                      data-purecounter-start="0"
                      {...console.log(
                        "inner span for tilte: ",
                        counts[data.title]
                      )}
                      data-purecounter-end={counts[data.title] || 0}
                      data-purecounter-duration="1"
                      className="purecounter"
                    ></span>
                    <p>{data.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Facts;
