import React from "react";

import { useCreditCalculatorContext } from "../contexts/CreditCalculatorContext";

import { MORTGAGE, CURRENCIES, MAX_RATE_OF_INCOME } from "../const";

const Offer = () => {
  const {
    parameters: { type, minSize },
    amountCredit,
    currentInterestRate,
    monthlyPayment,
    setIsOfferRequestFormOpen,
    isValidPrice,
  } = useCreditCalculatorContext();

  return (
    <div className="calculator__offer offer">
      {amountCredit < minSize ? (
        <React.Fragment>
          <h3>Наш банк не выдаёт ипотечные кредиты меньше 500 000 рублей.</h3>
          <p>Попробуйте использовать другие параметры для расчёта.</p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <h3>Наше предложение</h3>
          <div className="offer__content">
            <dl>
              <dt>{amountCredit}</dt>
              <dd>Сумма {type === MORTGAGE.type ? `ипотеки` : `автокредита`}</dd>
            </dl>
            <dl>
              <dt>{currentInterestRate + `%`} </dt>
              <dd>Процентная ставка</dd>
            </dl>
            <dl>
              <dt>{monthlyPayment + CURRENCIES[0]}</dt>
              <dd>Ежемесячный платеж</dd>
            </dl>
            <dl>
              <dt>
                {Math.round((monthlyPayment / 100) * MAX_RATE_OF_INCOME) +
                  CURRENCIES[0]}
              </dt>
              <dd>Необходимый доход</dd>
            </dl>
          </div>
          <button
            className="offer__button button"
            type="button"
            onClick={() => setIsOfferRequestFormOpen(true)}
            disabled={!isValidPrice}
          >
            Оформить заявку
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default Offer;
