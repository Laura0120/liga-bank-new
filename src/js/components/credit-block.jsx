import React, {useState, useRef} from 'react';
import { TYPES_CREDIT }  from '../const'


import PopupWithGratitude from './popup-with-gratitude'
import Request from './request'
import Offer from './offer'
import CreditParameters from './credit-parameters'
import {useCreditCalculatorContext} from "../contexts/CreditCalculatorContext"



const CreditBlock = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [requestNumber, setRequestNumber] = useState({'mortgage': 1, 'car': 1});

  const {
    typeCredit, 
    setTypeCredit,
    isOfferRequestFormOpen,
    isOfferOpen,
    setIOfferOpen
  } = useCreditCalculatorContext();

  const typeRef = useRef();

  const onSubmit = (evt) => {
    evt.preventDefault();
    setRequestNumber({...requestNumber, [typeCredit] : requestNumber[typeCredit] +1 });
    setTypeCredit(null);
    typeRef.current.selectedIndex = 0;
    setIsPopup(true);
    setIOfferOpen(false)
  }

  return (
    <section className='page-content__credit-block credit-block'>
      <h2>Кредитный калькулятор</h2>
      <form className='credit-block__calculator calculator' onSubmit = {onSubmit}>
        <div className ='calculator__wrapper'>
          <fieldset className='calculator__step calculator__step--1'>
          <legend>Шаг 1. Цель кредита</legend>
          <label htmlFor='type' className='visually-hidden'>Цель кредита</label>
          <select className='calculator__input input' id='type' defaultValue={TYPES_CREDIT[0].key} onChange={(evt)=> {
            setTypeCredit(evt.target.value) ;
            setIOfferOpen(true)
            }} ref={typeRef}>
            {TYPES_CREDIT.map(({key, description}, i) => <option className='calculator__type-option' key={`${key}_${i}`} value={key} hidden={i === 0}>{description}</option>)}
          </select>
          </fieldset>
          {typeCredit &&  <CreditParameters />}
        </div>
        {isOfferOpen ? <Offer /> : ``}
        {isOfferRequestFormOpen && (<Request requestNumber={requestNumber}/>)}  
         
      </form>
      {isPopup && (<PopupWithGratitude setIsPopup={setIsPopup}/>)}
    </section>
  );
};

export default CreditBlock;
