import { useState } from 'react';
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';

const Card = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => {
    setShowDetails(!showDetails);
  };

  const locationLines = event.location.split('\n');

  return (
    <div className="bg-white/10 rounded-xl w-[85%] h-[273px] px-[19px] ml-7">
      <div className="text-white text-sm font-medium w-full">
        <h3 className="text-lg font-medium text-right pt-[14px]">{event.date}</h3>
        {locationLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
        {showDetails && (
          <div className="font-thin">
            <div className="my-6 md:mb-0">
              <span className="mr-10">Entries Submitted</span> {event.details[0].entriesSubmitted}
            </div>
            <div>Music Submitted {event.details[0].musicSubmitted}</div>
          </div>
        )}

        <button className="flex items-center float-right" onClick={handleToggle}>
          {showDetails ? (
            <div className="pt-[45px] md:pt-[25px] flex items-center">
              <span className="rounded-xl text-black bg-[#95A4FC] py-1 px-6 text-xs">Select Event</span>
              <AiFillUnlock className="text-[#00FF0A66]/40 md:text-[#00FF0A66]/20 ml-3 text-2xl" />
            </div>
          ) : (
            <div className="pt-[108px] md:pt-[90px] flex items-center">
              <span className="rounded-xl text-black bg-[#95A4FC] py-1 px-10 text-xs">Locked</span>
              <AiFillLock className="text-[#EF5151] ml-3 text-2xl" />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
