import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="https://svgshare.com/i/cz0.svg" />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help reduce your fess and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="https://svgshare.com/i/czq.svg" />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            You can acess our plataform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="https://svgshare.com/i/cyT.svg" />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
