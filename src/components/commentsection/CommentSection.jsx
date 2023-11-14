import React, { useState } from 'react';
import Comments from './Comments';
// import Button from './shared/Button.tsx';
// import Avatar from '@mui/material/Avatar'; 
import ReplyForm from './ReplyForm';
import Image from 'next/image';

const CommentsSection = (props) => {
  const [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  const wrapperStyles = props.wrapperStyles;
  const hide = props.hide;

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleSubmitComment = () => {
    setNewComment('');
  };

  return (
    <div style={{boxShadow: "0px 4px 25px 0px rgba(0, 0, 0, 0.12)"}} className={wrapperStyles ? wrapperStyles : ` mb-5 border overflow-hidden`}>
      <div className="flex justify-between items-center mb-4  py-5 px-5  ">
        <div className=" font-bold text-[#081840] text-[32px]">
          Comments
        </div>
       
      </div>

      {wrapperStyles ? (
        <div style={{ display: "none" }}>
        </div>
      ) : (
        !hide && ( 
          <div className="mt-4 us:mb-[1.6rem] sm:mb-[2.5rem]">
            <div className="flex items-start sm:px-[3rem] px-2 w-full">
              {!hide && ( 
                <img alt="User Avatar" src="/images/user.jpg" width={1080} height={1080} className='w-[100px] rounded-full' />
              )}
              {!hide && ( 
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Don't miss out on the countless opportunities that await you. Start your inquiry today and unlock the full potential of the Marine Global Network. Together, we will navigate the seas of success."
                  className="w-full us:py-2 us:px-2 us:text-[13px] us:h-[80px] sm:h-auto mdd:text-[15px]  sm:py-5 sm:px-7 mb-2 border rounded focus:outline-none resize-none"
                />
              )}
            </div>
            {!hide && ( 
              <div className='us:my-2 sm:my-[1.4rem] smd:pl-[8.6rem] pl-[3rem]'>
                <Button text="Submit Now" onClick={handleSubmitComment} disabled={!newComment.trim()} />
              </div>
            )}
          </div>
        )
      )}

      <div>
        {props.comments.map((eachComment, index) => (
          <Comments wrapperStyles={wrapperStyles} key={index} eachComment={eachComment} />
        ))}
      </div>
      {wrapperStyles && (
        <ReplyForm />
      )}
    </div>
  );
};

export default CommentsSection;
