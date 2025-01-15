import React from 'react';

const Twitter = () => {
  const widgetCode = '<a class="twitter-timeline" data-width="500" data-height="400" href="https://twitter.com/IndiaSmartGridF?ref_src=twsrc%5Etfw">Tweets by your_twitter_handle</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

  return (
    <div dangerouslySetInnerHTML={{ __html: widgetCode }} />
  );
};

export default Twitter;
