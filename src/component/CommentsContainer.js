import React from "react";

const commentsData = [
  {
    name: "Shreyansh Bhushan",
    text: "lorem34",
    replies: [],
  },
  {
    name: "Shreyansh Bhushan",
    text: "lorem34",
    replies: [
      {
        name: "Shreyansh Bhushan",
        text: "lorem34",
        replies: [],
      },
      {
        name: "Shreyansh Bhushan",
        text: "lorem34",
        replies: [
          {
            name: "Shreyansh Bhushan",
            text: "lorem34",
            replies: [
              {
                name: "Shreyansh Bhushan",
                text: "lorem34",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shreyansh Bhushan",
    text: "lorem34",
    replies: [],
  },
  {
    name: "Shreyansh Bhushan",
    text: "lorem34",
    replies: [],
  },
  {
    name: "Shreyansh Bhushan",
    text: "lorem34",
    replies: [],
  },
  {
    name: "Shreyansh Bhushan",
    text: "lorem34",
    replies: [],
  },
  {
    name: "Shreyansh Bhushan",
    text: "lorem34",
    replies: [],
  },
  {
    name: "Shreyansh Bhushan",
    text: "lorem34",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 p-3"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black">
        {/* <Comment key={index} data ={comment}/>
<Comment key={index} data ={comment}/>
<Comment key={index} data ={comment}/> */}
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
