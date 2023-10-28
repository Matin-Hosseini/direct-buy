import { Link } from "react-router-dom";

export default function SingleArrival({ img, title, caption, to }) {
  return (
    <>
      <img src={`./../../../src/assets/images/products/${img}`} alt={title} />
      <div className="absolute left-6 bottom-5 text-white">
        <h2 className=" text-xl font-bold">{title}</h2>
        <p className="my-4 text-gray-200 text-sm max-w-[250px] ">{caption}</p>
        <Link to={to}>Shop Now</Link>
      </div>
    </>
  );
}
