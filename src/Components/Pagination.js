import React, { Component } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import '../Style/components/Pagination.css';

class Pagination extends Component {
  render() {
    return (
      <div className='pagination__inner'>
        <div className='pagination__items'>

          <button className='pagination__btn active'>1</button>
          <button className='pagination__btn'>2</button>
          <button className='pagination__btn'>3</button>
          <button className='pagination__btn'>4</button>
          <p >....</p>
          <button className='pagination__btn'>8</button>
          <IoIosArrowForward />
        </div>

      </div>
    );
  }
}

export default Pagination;
