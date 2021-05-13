import React, { useState } from "react";
import PopupWithGratitude from "./popup-with-gratitude";
import Request from "./request";
import Offer from "./offer";
import CreditParameters from "./credit-parameters";
import SelectCreditType from "./select-credit-type";
import { useCreditCalculatorContext } from "../contexts/CreditCalculatorContext";

const CreditBlock = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [requestNumber, setRequestNumber] = useState({ mortgage: 1, car: 1 });

  const {
    typeCredit,
    setTypeCredit,
    isOfferRequestFormOpen,
    isOfferOpen,
    setIOfferOpen,
  } = useCreditCalculatorContext();

  const onSubmit = (evt) => {
    evt.preventDefault();
    setRequestNumber({
      ...requestNumber,
      [typeCredit]: requestNumber[typeCredit] + 1,
    });
    setTypeCredit(null);
    setIsPopup(true);
    setIOfferOpen(false);
  };

  return (
    <section className="page-content__credit-block credit-block">
      <h2>Кредитный калькулятор</h2>
      <form className="credit-block__calculator calculator" onSubmit={onSubmit}>
        <div className="calculator__wrapper">
          <fieldset className="calculator__step calculator__step--1">
            <legend>Шаг 1. Цель кредита</legend>
            <SelectCreditType />
          </fieldset>
          {typeCredit && <CreditParameters />}
        </div>
        {isOfferOpen ? <Offer /> : ``}
        {isOfferRequestFormOpen && <Request requestNumber={requestNumber} />}
      </form>
      {isPopup && <PopupWithGratitude setIsPopup={setIsPopup} />}
    </section>
  );
};

export default CreditBlock;
