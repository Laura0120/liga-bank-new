import React, {useEffect} from 'react';

const CheckboxCar = (props) => {
  const {isCarInsurance, isLifeInsurance, setIsCarInsurance, setIsLifeInsurance}= props

  useEffect(() => {    
    setIsCarInsurance(true);
    setIsLifeInsurance(true);
  }, []);

  return (
      <div >
        <div>
          <input className='visually-hidden  calculator__checkbox' type='checkbox' id='car-insurance' checked={isCarInsurance} onChange={(evt) => setIsCarInsurance(evt.target.checked)} />
          <label htmlFor='car-insurance'>Оформить КАСКО в нашем банке</label>
        </div>
        <div>
          <input className='visually-hidden  calculator__checkbox'type='checkbox' id='life-insurance' checked={isLifeInsurance} onChange={(evt) => setIsLifeInsurance(evt.target.checked)} />  
          <label htmlFor='life-insurance'>Оформить Страхование жизни в нашем банке</label>
        </div>
      </div>
    );
};

export default CheckboxCar;

