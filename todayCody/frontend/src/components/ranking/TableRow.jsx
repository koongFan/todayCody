import { useState } from "react";

export default function TableRow({ post }) {
  const [like, setLike] = useState(false);
  return (
    <tr key={post} className="row">
      <td>{post}</td>
      <td>
        <img
          className="rankImg"
          src="https://i.pinimg.com/236x/d7/82/52/d7825262b259d9400c60939976c34e2f.jpg"
          alt="rankImg"
        />
      </td>
      <td>꿀먹은 샐러리</td>
      <td>23</td>
      <td>12345</td>
      <td>
        <img
          className="icon"
          onClick={() => setLike((prev) => !prev)}
          src={`/icon/${like ? "orange" : "gray"}Heart.svg`}
          alt="icon"
        />
        {/* <img
            className="icon"
            src="/icon/grayHeart.svg"
            alt="icon"
          /> */}
      </td>
    </tr>
  );
}
