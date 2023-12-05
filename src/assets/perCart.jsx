import { FiDollarSign } from 'react-icons/fi';
import { BsBook } from 'react-icons/bs';

const PerCard = (props) => {
  const { title, img, description, price, credit, handleTitle } = props;

  return (
    <div className="flex flex-col justify-center bg-gray-100 shadow-lg m-4 rounded-lg p-4">
      <img src={img} alt="" className="w-[500px] m-auto text-center" />
      <h1 className="text-[18px] font-semibold leading-normal text-[#1C1B1B]">
        {title}
      </h1>
      <p className="text-[#1c1b1b99] text-[14px] leading-[24px] font-normal">
        {description}
      </p>
      <div className="flex items-center my-4">
        <div className="flex">
          <FiDollarSign className="mt-2 mx-3" />
          <p className="text-[18px] font-medium text-[#1c1b1b99]">
            Price : {price}
          </p>
        </div>
        <div className="flex ml-8">
          <BsBook className="mt-2 mx-3" />
          <p className="text-[18px] font-medium text-[#1c1b1b99]">
            Credit : {credit} hr
          </p>
        </div>
      </div>
      <button
        onClick={() => handleTitle(title, credit, price)}
        className="bg-[#2F80ED] text-white rounded-lg text-[18px] font-semibold py-3 my-3"
      >
        Select
      </button>
    </div>
  );
};

export default PerCard;
