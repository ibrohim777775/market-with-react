import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import Button from '../Components/Button';
import { StyledVacansies } from '../Style/containers/VacansiesStyled';

const Vacansies = () => {
  return (
    <StyledVacansies>
      <h1 className='page__title'>Вакансии</h1>
      <section className='vacansies'>
        <h4 className='vacansies__title'>Повар</h4>
        <p className='vacansies__body'>
          <span className='vacansies__text'>Требования:</span>опыт от 3-х лет, умение готовить яишницу, пельмени, пиццу и наливать чай. Работа в коллективе в 25 человек.<br /><br />
          <span className='vacansies__text'>Условия:</span>  Сдельная плата за каждый бутерброд 5% от суммы и фиксированный оклад 4000 грн.
        </p>
      </section>
      <section className='vacansies'>
        <h4 className='vacansies__title'>Повар</h4>
        <p className='vacansies__body'>
          <span className='vacansies__text'>Требования:</span>опыт от 3-х лет, умение готовить яишницу, пельмени, пиццу и наливать чай. Работа в коллективе в 25 человек.<br /><br />
          <span className='vacansies__text'>Условия:</span>  Сдельная плата за каждый бутерброд 5% от суммы и фиксированный оклад 4000 грн.
        </p>
      </section>
      <section className='vacansies'>
        <h4 className='vacansies__title'>Повар</h4>
        <p className='vacansies__body'>
          <span className='vacansies__text'>Требования:</span>опыт от 3-х лет, умение готовить яишницу, пельмени, пиццу и наливать чай. Работа в коллективе в 25 человек.<br /><br />
          <span className='vacansies__text'>Условия:</span>  Сдельная плата за каждый бутерброд 5% от суммы и фиксированный оклад 4000 грн.
        </p>
      </section>
      <section className='other__links'>
        <Button text='В каталог' width='167px' height='53px' fontSize='20px' />
        <a className='delivery__link' href='#'>Об оплате   <BsArrowRight /> </a>

      </section>

    </StyledVacansies>
  );
}

export default Vacansies;
