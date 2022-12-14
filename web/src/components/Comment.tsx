import { CommentAvatar } from "./Avatar"
import { ThumbsUp } from "phosphor-react"
import { Trash } from "phosphor-react"
import { useState } from "react";


interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likes, setLikes] = useState(0)


  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    return setLikes(likes + 1)
  }

  return (
    <div className="flex gap-4 mt-6 ">
      <CommentAvatar
        src="https://github.com/natsume2b.png"
      />
      <div className="flex-1">
        <div className="rounded-lg px-4 pt-4 pb-[1.563rem] bg-ignite-gray-600">
          <header className="flex justify-between">
            <div className="mb-4">
              <strong className="flex text-sm leading-[1.6]">Natsume</strong>
              <time className="pb-4 text-xs leading-[1.6] text-ignite-gray-300"
                title="Octuber 7, 11:58 AM"
                dateTime="2022-10-07 11:58 AM"
              >
                About 2 hours
              </time>
            </div>
            <div>
              <button
                className="leading-[0] text-ignite-gray-300 hover:text-ignite-red-500"
                title="Delete comment"
                onClick={handleDeleteComment}
              >
                <Trash size={24} />
              </button>
            </div>
          </header>
          <p className="text-sm leading-[1.6]">{content}</p>
        </div>

        <footer className="mt-4">
          <button 
          className="flex gap-[0.625rem] items-center bg-transparent border-0 hover:text-ignite-green-100 "
          onClick={handleLikeComment}
          >
            <ThumbsUp size={20} />
            Cheer &#8226; {likes}
          </button>
        </footer>
      </div>

    </div>

  )
}