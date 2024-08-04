/* eslint-disable eqeqeq */
import Button from '../component/Button';
import {GoRadioTower} from "react-icons/go";
import {Gi3DHammer} from "react-icons/gi";
function ButtonPage() {

    return (
        <div>

            <Button primary rounded className="mb-5">
                <GoRadioTower/>
                test
            </Button>
            <Button secondary rounded>
                <Gi3DHammer/>
                test2</Button>
            <Button success rounded outline>test3</Button>
            <Button warning rounded>test4</Button>
            <Button danger rounded>test4</Button>
        </div>
    )
}

export default ButtonPage;
