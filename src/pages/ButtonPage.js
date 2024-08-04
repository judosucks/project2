/* eslint-disable eqeqeq */
import Button from '../component/Button';
import {GoRadioTower} from "react-icons/go";
import {Gi3DHammer} from "react-icons/gi";
import { useState } from 'react';
function ButtonPage() {
  

  return (
    <div>

      <Button primary rounded className="mb-5">
         
        test
        <GoRadioTower/>
      </Button>
      <Button secondary rounded>

        test2
        <Gi3DHammer/>
      </Button>
      <Button success rounded outline>test3</Button>
      <Button warning rounded>test4</Button>
      <Button danger rounded>test4</Button>
    </div>
  )
}

export default ButtonPage;
