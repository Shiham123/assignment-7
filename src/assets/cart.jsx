import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PerCard from './perCart';
import UpdateCard from './updateCart';

const Cards = (props) => {
  const { courseData } = props;

  const [title, setTitle] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);
  const [hoursLeft, setHourLeft] = useState(20);

  let allCredit = 0;
  let totalPrice = 0;
  let remainingHour = 0;

  const handleTitle = (newTitle, newCredit, newPrice) => {
    if (title.includes(newTitle)) {
      return toast.error('Item already added');
    } else {
      setTitle([...title, newTitle]);
      allCredit = credit + newCredit;
      totalPrice = price + newPrice;

      remainingHour = 20 - allCredit;

      if (remainingHour < 0) {
        toast.error('Your credit limit is 20 hour');
        setTitle([...title]);
        return;
      }

      setHourLeft(remainingHour);
      setCredit(allCredit);
      setPrice(totalPrice);
    }
  };

  const extractAllData = courseData.map((data) => {
    return <PerCard key={data.id} {...data} handleTitle={handleTitle} />;
  });

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-3 grid grid-cols-3">{extractAllData}</div>
      <h1 className="col-span-1">
        <UpdateCard
          title={title}
          credit={credit}
          price={price}
          hoursLeft={hoursLeft}
        />
      </h1>
    </div>
  );
};

export default Cards;
