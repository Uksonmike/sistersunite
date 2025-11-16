"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import aboutImg_1 from "@/assets/img/about/about1.jpg";
import aboutImg_2 from "@/assets/img/about/about2.jpg";
import aboutImg_3 from "@/assets/img/about/about3.jpg";
import aboutShape_1 from "@/assets/img/shapes/three-round-green.png";
import aboutShape_2 from "@/assets/img/shapes/three-round-red.png";

interface DataType {
  id: number;
  page: string;
  question: string;
  answer: string;
  showAnswer: boolean;
}

// Core values data - moved inline instead of importing from faqData
const coreValuesData: DataType[] = [
  {
    id: 1,
    page: "home_1",
    question: "Child Safeguarding",
    answer:
      "Ensuring children's safety and well-being in all our programs and activities.",
    showAnswer: false,
  },
  {
    id: 2,
    page: "home_1",
    question: "Integrity & Accountability",
    answer:
      "Operating with transparency, honesty, and responsibility in all our actions and decisions.",
    showAnswer: false,
  },
  {
    id: 3,
    page: "home_1",
    question: "Collaboration & Partnership",
    answer:
      "Working together with stakeholders, communities, and partners for greater impact and sustainable change.",
    showAnswer: false,
  },
  {
    id: 4,
    page: "home_1",
    question: "Service & Compassion",
    answer:
      "Prioritizing the needs of children and families with empathy, care, and genuine concern.",
    showAnswer: false,
  },
  {
    id: 5,
    page: "home_1",
    question: "Excellence & Innovation",
    answer:
      "Delivering sustainable and creative solutions through continuous improvement and innovative approaches.",
    showAnswer: false,
  },
];

const CoreValues = () => {
  const [valuesData, setValuesData] = useState<DataType[]>([]);

  useEffect(() => {
    const initialValuesData: DataType[] = coreValuesData
      .filter((item) => item.page === "home_1")
      .slice(0, 5)
      .map((value, index) => ({
        ...value,
        showAnswer: index === 0,
      }));
    setValuesData(initialValuesData);
  }, []);

  const toggleAnswer = (id: number) => {
    setValuesData((prevValuesData) => {
      const updatedValuesData = prevValuesData.map((value) => ({
        ...value,
        showAnswer: value.id === id ? !value.showAnswer : false,
      }));
      return updatedValuesData;
    });
  };

  return (
    <div className="faq-area faq-one py-120">
      <div className="container ">
        <div className="row gap-100">
          <div className="col-lg-6">
            <div className="faq-image-part">
              <div className="row">
                <div className="col-6">
                  <div className="image">
                    <Image src={aboutImg_1} alt="About" />
                    <Image
                      className="shape one top_image_bounce"
                      src={aboutShape_1}
                      alt="Shape"
                    />
                  </div>
                  <div className="image">
                    <Image src={aboutImg_3} alt="About" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="image">
                    <Image src={aboutImg_2} alt="About" />
                  </div>
                  <div className="image">
                    <Image src={aboutImg_3} alt="About" />
                    <Image
                      className="shape two right_image_bounce"
                      src={aboutShape_2}
                      alt="Shape"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="faq-content-part rmt-65 rel z-2">
              <div className="section-title mb-45 for-hide-summary">
                <span className="section-title__subtitle mb-10">
                  Our Foundation
                </span>
                <h2>
                  Core <span>Values</span>
                </h2>
                <p>
                  Guiding principles that define our commitment to protecting
                  children and strengthening communities through ethical,
                  collaborative, and compassionate service.
                </p>
              </div>
              <div className="faq-accordion" id="faqAccordion">
                {valuesData.map((item) => (
                  <div
                    key={item.id}
                    className={`accordion-item ${
                      item.showAnswer ? "active" : ""
                    }`}
                  >
                    <h4 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          item.showAnswer ? "" : "collapsed"
                        }`}
                        onClick={() => toggleAnswer(item.id)}
                        type="button"
                      >
                        {item.question}
                      </button>
                    </h4>
                    {item.showAnswer && (
                      <div
                        className="accordion-collapse collapse show"
                        id={`collapse${item.id}`}
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
