import React from "react";
import "./Stands.css";
import { StandItem } from "./StandItem";
export const Stands = ({ title, details }) => {
  return (
    <>
      <div className="stands-section">
        <h2 className="stand-heading">My Stands</h2>
        <StandItem
          title={"Innovation"}
          details={
            "Innovation is at the core of Raju Karemore's approach, driving him to explore uncharted territories and develop cutting-edge solutions. His ability to think outside the box has led to the creation of transformative ideas that resonate on a global scale. Raju's commitment to innovation ensures that he remains at the forefront of his industry, continuously bringing fresh perspectives and impactful changes."
          }
        />
        <StandItem
          title={"Perseverance"}
          details={
            "Raju Karemore's journey is defined by his unwavering perseverance, facing challenges with resilience and determination. He views obstacles as opportunities for growth, never shying away from difficulties. This steadfast commitment has allowed him to turn setbacks into stepping stones toward success, inspiring others to persist in the face of adversity."
          }
        />
        <StandItem
          title={"Leadership"}
          details={
            "Raju Karemore exemplifies leadership by steering teams and communities with a clear vision, grounded in integrity and empathy. His approach fosters trust and collaboration, empowering others to reach their full potential. Through his guidance, Raju not only achieves organizational success but also creates a positive and inclusive environment where everyone can thrive."
          }
        />
        <StandItem
          title={"Excellence"}
          details={
            "Raju Karemore's pursuit of excellence drives him to uphold the highest standards in every project he undertakes. His meticulous attention to detail and dedication to quality ensure that his work consistently meets and exceeds expectations. This relentless quest for perfection not only defines his achievements but also sets a benchmark for excellence in his field."
          }
        />
        <StandItem
          title={"Inspiration"}
          details={
            "Raju Karemore's story is a powerful source of inspiration, encouraging others to chase their dreams with passion and determination. His own achievements serve as a testament to what is possible with hard work and vision. By sharing his journey, Raju motivates individuals to push beyond their limits and strive for greatness in their own lives."
          }
        />
        <StandItem
          title={"Community Impact"}
          details={
            "Raju Karemore is deeply committed to community impact, dedicating resources and effort to make a meaningful difference in society. His initiatives focus on empowering underserved communities and fostering social change. Through his philanthropic efforts, Raju not only addresses immediate needs but also contributes to long-term, positive transformations."
          }
        />
      </div>
    </>
  );
};
