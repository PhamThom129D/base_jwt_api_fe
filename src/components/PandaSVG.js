import React from 'react';

const PandaSVG = () => (
  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="80" cy="80" r="70" fill="#fff" stroke="#333" strokeWidth="4" />
    <circle cx="35" cy="35" r="25" fill="#333" />
    <circle cx="125" cy="35" r="25" fill="#333" />
    <ellipse cx="50" cy="80" rx="25" ry="35" fill="#333" />
    <ellipse cx="110" cy="80" rx="25" ry="35" fill="#333" />
    <circle className="eye" cx="50" cy="80" r="15" />
    <circle className="eye" cx="110" cy="80" r="15" />
    <circle className="pupil" id="leftPupil" cx="50" cy="80" r="8" />
    <circle className="pupil" id="rightPupil" cx="110" cy="80" r="8" />
    <ellipse className="eye-lid" id="leftEyeLid" cx="50" cy="80" rx="15" ry="15" />
    <ellipse className="eye-lid" id="rightEyeLid" cx="110" cy="80" rx="15" ry="15" />
    <ellipse cx="80" cy="110" rx="15" ry="10" fill="#333" />
    <path d="M65 125 Q80 140 95 125" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" />
    <circle className="hand hand-left" id="leftHand" cx="30" cy="120" r="25" fill="#333" style={{ transformOrigin: '30px 120px' }} />
    <circle className="hand hand-right" id="rightHand" cx="130" cy="120" r="25" fill="#333" style={{ transformOrigin: '130px 120px' }} />
  </svg>
);

export default PandaSVG;
