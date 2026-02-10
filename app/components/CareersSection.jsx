"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const CareersSection = () => {
  return (
    <section className="careers-section" id="careers">
      {/* Text Content */}
      <div className="careers-content">
        <h2 className="careers-heading">Don't Just Work. Build. Grow</h2>
        <p className="careers-description">
          At Betopia, you are not an Employee ID. You are a pilot of the future.
          We offer more than a career; we offer a canvas. With our internal
          venture building program, your best ideas can become our next
          subsidiary.
        </p>
        <button className="careers-button">
          Visit Career
          <ArrowRight className="careers-button-icon" />
        </button>
      </div>

      {/* Images Section */}
      <div className="careers-images">
        <div className="careers-image-wrapper careers-image-left">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
            alt="Team meeting"
            className="careers-image"
          />
        </div>
        <div className="careers-image-wrapper careers-image-right">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
            alt="Team collaboration"
            className="careers-image"
          />
        </div>
      </div>

      <style jsx>{`
        .careers-section {
          background-color: #f5f5f5;
          padding: 80px 0 0 0;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .careers-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 24px 60px;
          text-align: center;
        }

        .careers-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 24px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .careers-description {
          font-size: 1rem;
          color: #666;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .careers-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 14px 32px;
          border: 1.5px solid #1a1a1a;
          border-radius: 50px;
          background: transparent;
          color: #1a1a1a;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .careers-button:hover {
          background: #1a1a1a;
          color: white;
        }

        .careers-button:hover :global(.careers-button-icon) {
          transform: translateX(4px);
        }

        :global(.careers-button-icon) {
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .careers-images {
          display: flex;
          justify-content: center;
          gap: 24px;
          padding: 0 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .careers-image-wrapper {
          flex: 1;
          max-width: 500px;
          height: 320px;
          overflow: hidden;
          position: relative;
        }

        .careers-image-left {
          border-radius: 100px 16px 0 0;
        }

        .careers-image-right {
          border-radius: 16px 100px 0 0;
        }

        .careers-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .careers-image-wrapper:hover .careers-image {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .careers-section {
            padding: 60px 0 0 0;
          }

          .careers-content {
            padding: 0 20px 40px;
          }

          .careers-heading {
            font-size: 1.5rem;
          }

          .careers-description {
            font-size: 0.9rem;
          }

          .careers-images {
            flex-direction: column;
            align-items: center;
            gap: 16px;
            padding: 0 16px;
          }

          .careers-image-wrapper {
            max-width: 100%;
            height: 240px;
          }

          .careers-image-left {
            border-radius: 80px 16px 0 0;
          }

          .careers-image-right {
            border-radius: 16px 80px 0 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CareersSection;
