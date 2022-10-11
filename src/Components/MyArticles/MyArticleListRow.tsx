import React from "react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import TextTruncate from "react-text-truncate";

const MyArticleListRow = () => {
  return (
    <tr>
      <th>
        <input type="checkbox" className="checkbox" />
      </th>
      <td>Why do cats have whiskers</td>
      <td className="max-w-xs">
        <TextTruncate
          line={1}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales
        nulla non sapien porttitor, ac pharetra nisi auctor. Phasellus quis
        pharetra libero. Proin sagittis tellus dui, sit amet bibendum nibh
        elementum at. Ut eleifend magna sed dictum pulvinar. Nullam mollis ipsum
        nisi, ac pharetra est fringilla at. In semper pharetra arcu, eget
        ultricies erat maximus auctor. Ut cursus et dui ac euismod. Aenean
        condimentum leo et odio sagittis ultricies. Ut vel elementum risus, at
        venenatis ipsum. Sed et facilisis felis, id pharetra lorem. Mauris
        interdum nisl ut neque dictum commodo. Nullam ut erat a orci mattis
        aliquet. Praesent eu gravida lectus. Quisque lorem nisi, sagittis ut
        lorem et, suscipit convallis dui."
          textElement="span"
        />
      </td>
      <td>Elizabeth Strain</td>
      <td>4</td>
      <td>
        <div className="flex items-center gap-4">
          <HiOutlinePencil size={18} />
          <HiOutlineTrash size={18} />
        </div>
      </td>
    </tr>
  );
};

export default MyArticleListRow;
