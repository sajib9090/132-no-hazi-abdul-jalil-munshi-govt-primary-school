import { useEffect } from "react";
import { useState } from "react";
import PromoText from "./PromoText";

const Promo = () => {
  const [promo, setPromo] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/promo `)
      .then((res) => res.json())
      .then((data) => {
        setPromo(data);
      });
  }, []);

  return (
    <div>
      {promo.length > 0 && (
        <PromoText
          key={promo[promo.length - 1]._id}
          p={promo[promo.length - 1]}
        />
      )}
    </div>
  );
};

export default Promo;
