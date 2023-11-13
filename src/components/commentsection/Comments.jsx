import { useState } from 'react';
import Image from "next/image";

const ReplyButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-black focus:outline-none md:ml-5">
      <div className="flex items-center gap-2">
        <div className="relative w-4 h-4 ">
          <Image src="/images/replyIcon.svg" alt="Reply Icon" fill objectFit="contain" />
        </div>
        <p className='text-[16px]'>Reply</p>
      </div>
    </button>
  );
};

const ReplyItem = ({ reply, wrapperStyles }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [newReply, setNewReply] = useState([]);
const { user, comments, day } = reply;


const handleReplyClick = () => {
  setShowReplyInput(true);
};

const handleReplySubmit = () => {
  // Logic to submit the reply
  // For now, we just log the reply to the console
  console.log(newReply);
  setShowReplyInput(false);
  setNewReply('');
};
  return (
    <div className="flex items-start mt-2 pb-2 ">
    <div className="relative aspect-square rounded-full w-full min-w-[30px] md:min-w-[68px] md:max-w-[70px] overflow-hidden mr-3">
        <Image
          src={reply.profile}
          alt="Profile"
          fill
          priority
          style={{ objectFit: 'cover'  }}
        />
      </div>
      <div className={wrapperStyles ? `rounded-[10px] md:mx-7    border border-grey-600 md:px-7 px-3 smd:px-4 py-3 overflow-hidden` : ``}>
        <div className="flex  justify-between items-center w-full mb-1 text-sm font-bold">
          <div className='flex flex-col'><p className='text-[16px] font-[600]'>{reply.user}</p> <p className="text-[16px] pt-2 font-[400] text-[#777] smd:ml-[1.6rem]">
            {reply.day}
          </p>
          </div>
          {!showReplyInput && <ReplyButton onClick={handleReplyClick} />}
          </div>
        <div className='pt-3'>
          <p>{comments}</p>
        </div>
        <div className="flex w-full justify-end sm:items-center sm:justify-start  mt-[0.5rem]">
       
        {showReplyInput && (
          <div className="flex md:flex-row flex-col gap-3 md:gap-1 items-center w-full ">
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="Write your reply here..."
              className="w-full pt-2 md:pt-[10px] pl-4 text-[14px] h-[45px] border rounded-full focus:outline-none resize-none mr-2"
            />
            <button
              onClick={handleReplySubmit}
              className="px-3 py-2 md:px-6 md:py-3 text-sm font-semibold text-white  rounded-full focus:outline-none"
              style={{background: "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)", boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)" }}
            >
              Submit
            </button>
          </div>
        )}
      </div>
      </div>
      
    </div>
  );
};

const Comments = (props) => {
  const [visibleReplies, setVisibleReplies] = useState(2); // Number of replies initially visible
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [newReply, setNewReply] = useState([]);
  
const handleReplyClick = () => {
  setShowReplyInput(true);
};

const handleReplySubmit = () => {
 
  console.log(newReply);
  setShowReplyInput(false);
  setNewReply('');
};
  const handleViewMoreReplies = () => {
    setVisibleReplies(props.eachComment.replies.length);
  };

  return (
    <div className="flex items-start my-3 mx-2 md:mx-5 ">
      <div className="relative aspect-square rounded-full min-w-[40px] md:min-w-[68px] md:max-w-[80px] mr-3 sm:my-2 sm:mr-auto">
        <Image
          src={props.eachComment.profile}
          alt="Profile"
          fill
          priority
          style={{ objectFit: 'contain' , borderRadius: '50px' }}
        />
      </div>
      <div>
      <div className={ props.wrapperStyles ? `md:mx-7 sm:px-7 px-3 py-3 px-auto border border-grey-600 rounded-lg mb-5` : `px-2 sm:px-5 sm:py-4 px-auto`}>
        <div className="w-full font-bold us:text-[14px] flex  justify-between mb-3">
          <div className='flex flex-col '>
          <p className='text-[16px] font-[600]'>{props.eachComment.user}</p>{' '}
          <p className="text-[16px] font-[400] text-[#777] ">
            {props.eachComment.day}
          </p>
          </div>
          {!showReplyInput && <ReplyButton onClick={handleReplyClick} />}
        </div>
        <div className={ props.wrapperStyles ? `  us:text-[15px]`: ` us:text-[15px] rounded border-b border-[#E6D8D8]`}>
          <p>{props.eachComment.comment}</p>
        </div>
        <div className="flex w-full justify-end sm:items-center sm:justify-start  mt-[0.5rem]">
       
       {showReplyInput && (
         <div className="flex md:flex-row gap-3 md:gap-1 flex-col items-center w-full md:mr-4">
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              placeholder="Write your reply here..."
              className="w-full pt-2 md:pt-[10px] pl-4 text-[14px] h-[45px] border rounded-full focus:outline-none resize-none mr-2"
            />
            <button
              onClick={handleReplySubmit}
              className= "px-3 md:px-6 py-2 md:py-3 text-sm font-semibold text-white  rounded-full focus:outline-none"
              style={{background: "linear-gradient(271deg, #FF5B84 -51.86%, #4254FF 107.54%)", boxShadow: "0px 4px 250px 0px rgba(0, 180, 255, 0.33)" }}
            >
              Submit
            </button>
         </div>
       )}
     </div>
        </div>
        {props.eachComment.replies.length > visibleReplies && (
          <button
            onClick={handleViewMoreReplies}
            className="mt-2 text-sm text-blue-500 focus:outline-none"
          >
            View More Replies
          </button>
        )}
        {props.eachComment.replies.slice(0, visibleReplies).map((reply, index) => (
          <ReplyItem wrapperStyles={props.wrapperStyles} key={index} reply={reply} />
        ))}

       
      </div>
    </div>
  );
};

export default Comments;
