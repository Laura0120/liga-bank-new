import React from 'react';
import Select, { NonceProvider } from 'react-select';

import { TYPES_CREDIT }  from '../const' 
import {useCreditCalculatorContext} from "../contexts/CreditCalculatorContext"

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: '#1F1E25',

    borderTop: '1px solid #C1C2CA',
    padding: 25, 
    paddingLeft: 15, 
    fontWeight: 400,
    textAlign: 'start',
    backgroundColor: 'white',
  }),
  control: (provided) => ({
    ...provided,
    display: 'flex',
    height: '100%',
    border: 'none',
    boxShadow: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: 'none',
     margin: '0.7px 0 0',
    width: '100%',

  }),

  // singleValue: (provided, state) => {
  //   const opacity = 'state.isDisabled ? 0.5 : 1';
  //   const transition = 'opacity none';
  //   return { ...provided, opacity, transition};
  // },
  indicatorSeparator: () => ({
    display: 'none'
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: '#1F1E25',
    border: 'none',
  
  }),
  menuList: (provided) => ({ ...provided, 
    padding: 0,
    borderBottom: '1px solid #1f1e25',
    borderLeft: '1px solid #1f1e25',
    borderRight: '1px solid #1f1e25',
    borderRadius: '0 0 10px 10px',
  })
}

const SelectCreditType = () => {
  const {typeCredit, setTypeCredit, setIOfferOpen} = useCreditCalculatorContext();
  
  return (
    <Select
        placeholder='Выберите цель кредита'
        className='calculator__input calculator__input--select input'
        onChange={(selectedOption)=>{
          setTypeCredit(selectedOption.value);
          setIOfferOpen(true)
        }}
        value={typeCredit ? TYPES_CREDIT.find(type => type.value === typeCredit) : null}
        options={TYPES_CREDIT}
        styles={customStyles}
      />
  );
};

export default SelectCreditType;

  // <select className='calculator__input input' id='type' defaultValue={TYPES_CREDIT[0].key} onChange={(evt)=> {
    //   setTypeCredit(evt.target.value) ;
    //   setIOfferOpen(true)
    //   }} ref={typeRef}>
    //   {TYPES_CREDIT.map(({key, description}, i) => <option className='calculator__type-option' key={`${key}_${i}`} value={key} hidden={i === 0}>{description}</option>)}
    // </select>

