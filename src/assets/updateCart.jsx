const UpdateCard = (props) => {
  const { title, credit, price, hoursLeft } = props;

  return (
    <div className="bg-gray-100 shadow-lg m-4 rounded-lg p-4">
      <h1 className="text-[#2F80ED] font-bold text-[18px] leading-[30px]">
        Credit Hour Remaining {hoursLeft} hr
      </h1>

      <br />
      <hr />
      <ul>
        <h1 className="text-[#1C1B1B] text-[20px] font-bold">Course Name</h1>
        {title.map((item, index) => {
          return (
            <li
              key={index}
              className="text-[#1c1b1b99] text-[16px] font-normal leading-[30px] my-4"
            >
              {index + 1}. {item}
            </li>
          );
        })}
        <br />
        <hr />

        <p className="text-[#1c1b1bcc] text-[16px] font-medium my-2">
          Total Credit Hour : {credit} hr
        </p>

        <br />
        <hr />

        <p className="text-[#1c1b1bcc] text-[16px] font-medium my-2">
          Total Price : {price} USD
        </p>
      </ul>
    </div>
  );
};

export default UpdateCard;
