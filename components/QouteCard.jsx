"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


const QouteCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(post.qoute);
    navigator.clipboard.writeText(post.qoute);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.Creator?.image}
            alt="user_image"
            width={40}
            height={40}
            className="rouded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.Creator?.username}
            </h3>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.qoute
                ? "assets/icons/tick.svg"
                : "assets/icons/copy.svg"
            }
            alt= "anime_image"
            width={12}
            height={12}
          />
        </div>
      </div>
      <img
        src={post.image}
        alt="user_image"
        width={400}
        height={400}
        className="rounded-md mt-3 mb-2 object-contain"
      />
      <p className="my-4 font-satoshi text-sm text-gray-700 ">{post.qoute}</p>
      <p
        className="font-iter text-sm blue_gradient cursor-pointer"
        onClick={() => {
          handleTagClick && handleTagClick(post.tag);
        }}
      >
        #{post.tag}
      </p>

      {session?.user.id === post.Creator?._id && pathName === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>

          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default QouteCard;
