import React, { useEffect } from "react";

const CheckboxMortgage = (props) => {
  const { isCapital, setIsCapital } = props;

  useEffect(() => {
    setIsCapital(true);
  }, []);

  return (
    <div>
      <input
        className="visually-hidden calculator__checkbox"
        type="checkbox"
        id="capital"
        checked={isCapital}
        onChange={(evt) => setIsCapital(evt.target.checked)}
      />
      <label htmlFor="capital">Использовать материнский капитал</label>
    </div>
  );
};

export default CheckboxMortgage;
