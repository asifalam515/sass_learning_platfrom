import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <main>
      {" "}
      <h1 className="text-2xl">Popular Companion</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        ></CompanionCard>
        <CompanionCard
          id="456"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={50}
          color="#ffda6e"
        ></CompanionCard>
        <CompanionCard
          id="789"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          subject="science"
          duration={45}
          color="#ffda6e"
        ></CompanionCard>
      </section>
      <section className="home-section">
        <CompanionList></CompanionList>
        <CTA></CTA>
      </section>
    </main>
  );
};

export default Page;
