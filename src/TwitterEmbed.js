import React from "react";
import {
  TwitterTimelineEmbed,

} from "react-twitter-embed";
function TwitterEmbed() {
  return (
    <div className="widgets">
      <div className="widgets__widgetContainer">
        <TwitterTimelineEmbed
          sourceType="IndiaSmartGridF"
          screenName="IndiaSmartGridF"
          options={{ height: 315 }}
        />

      </div>
    </div>
  );
}

export default TwitterEmbed;