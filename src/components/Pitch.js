import React from "react";
import { Icon } from "@iconify/react";
import mapIcon from "@iconify/icons-carbon/map";
import nodejsIcon from "@iconify/icons-bxl/nodejs";
import copyrightIcon from "@iconify/icons-uiw/copyright";
import airlinePassengerCare from '@iconify/icons-carbon/airline-passenger-care';
import assetDigitalTwin from '@iconify/icons-carbon/asset-digital-twin';
import applicationVirtual from '@iconify/icons-carbon/application-virtual';
const Pitch = () => {
  return (
    <div>
      <h1 className="pitchHeader">Why work with Salt Spruce?</h1>{" "}
      <section className="pitch">
        <div className="pitchCard">
          <Icon className="pitchIcon" icon={mapIcon} />
          <p>
            Built in Central Newfoundland. Here to serve our community of
            entrepreneurs and business owners.
          </p>
        </div>
        <div className="pitchCard">
          <Icon className="pitchIcon" icon={nodejsIcon} />
          <p>
            We deliver fast modern websites tailored to your needs. No outdated
            tech.  
          </p>
        </div>
        <div className="pitchCard">
          <Icon className="pitchIcon" icon={copyrightIcon} />
          <p>
            Own your content. Leveraging social media is important, but do you
            really want it to be the face of your business?
          </p>
        </div>
        <div className="pitchCard">
          <Icon className="pitchIcon" icon={airlinePassengerCare} />
          <p>
            Custom solutions for your business needs. No job is complete until you're satisfied. 
          </p>
        </div>
        <div className="pitchCard">
          <Icon className="pitchIcon" icon={assetDigitalTwin} />
          <p>
            Missing piece in your workflow? Whether it's tools behind the scenes or services up front. We are here to help you find it.
          </p>
        </div>
        <div className="pitchCard">
          <Icon className="pitchIcon" icon={applicationVirtual} />
          <p>
            Don't get shackled to a provider. Our products are designed to work for you, where ever you choose to do business.  
          </p>
        </div>
      </section>
    </div>
  );
};
export default Pitch;
