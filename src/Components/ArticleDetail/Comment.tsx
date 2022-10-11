import React from "react";
import { HiChevronDown, HiChevronUp, HiUserCircle } from "react-icons/hi";
import SoftText from "../utils/SoftText";

const Comment = () => {
  return (
    <div className="flex gap-4">
      <div>
        <HiUserCircle size={48} />
      </div>

      <div className="space-y-2">
        <div className="flex gap-2 items-baseline">
          <span className="font-bold text-sm">Lily Hawkins</span>
          <SoftText>2 hours ago</SoftText>
        </div>

        <div className="text-sm text-gray-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales
          nulla non sapien porttitor, ac pharetra nisi auctor. Phasellus quis
          pharetra libero. Proin sagittis tellus dui, sit amet bibendum nibh
          elementum at. Ut eleifend magna sed dictum pulvinar. Nullam mollis
          ipsum nisi, ac pharetra est fringilla at. In semper pharetra arcu,
          eget ultricies erat maximus auctor. Ut cursus et dui ac euismod.
          Aenean condimentum leo et odio sagittis ultricies.
        </div>

        <SoftText size="sm">
          <div className="flex items-center divide-x-2 gap-x-2">
            <span>+3</span>
            <span className="pl-2">
              <HiChevronUp />
            </span>
            <span className="pl-2">
              <HiChevronDown />
            </span>
          </div>
        </SoftText>
      </div>
    </div>
  );
};

export default Comment;
