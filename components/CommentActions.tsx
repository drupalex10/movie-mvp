"use client"
import React, { useState } from 'react';
import { BiDislike, BiLike, BiCommentDots } from 'react-icons/bi'

interface RatingProps {
  likes?: number;
  dislikes?: number;
  comments?: number
}

const CommentActions: React.FC<RatingProps> = ({ likes, dislikes, comments }) => {

  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-1 items-center cursor-pointer'">
        <BiLike size={20}/>
        <span className='text-sm' >1</span>
      </div>

      <div className="flex gap-1 items-center cursor-pointer">
        <BiDislike size={20} />
        <span className='text-sm' >1</span>
      </div>

      <div className="flex gap-1 items-center cursor-pointer">
        <BiCommentDots size={20} className=''/>
        <span className='text-sm' >1</span>
      </div>
    </div>
  );
};

export default CommentActions;
