import React from 'react';
import '../css/index.css';
import Card from "./Card";
import Clickable from "./Clickable";
import ImgCrous from '../assets/images/crous.jpg';
import Slider from 'infinite-react-carousel';


class RecapHelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{name:"caf", url:"https://wwwd.caf.fr/wps/portal/caffr/login/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOID_A3dPbyDDdz9A1yNDTxdzQNDXJ19DS0CjYAKIoEKDHAARwNC-sP1o8BK8JhQkBthkO6oqAgArtbX2Q!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/#/signature"},
                {name:"crous", url:"https://www.messervices.etudiant.gouv.fr/envole/"},
                {name:"social security", url:"https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_nfpb=true&_pageLabel=as_creation_immediate_page"}]
        };
    }

    render() {
        return (
            <div className={"recap__help__container"}>
                <div className={"recap__help__bar"}>
                    <Slider className={"recap__help__slider"} dots>
                        <Card url={"https://wwwd.caf.fr/wps/portal/caffr/login/!ut/p/a1/04_Sj9CPykssy0xPLMnMz0vMAfGjzOID_A3dPbyDDdz9A1yNDTxdzQNDXJ19DS0CjYAKIoEKDHAARwNC-sP1o8BK8JhQkBthkO6oqAgArtbX2Q!!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/#/signature"}
                              img={ImgCrous} text={"Vous avez droit aux APL pour votre logement"}/>
                        <Card url={"https://www.messervices.etudiant.gouv.fr/envole/"}
                              img={ImgCrous} text={"Demandez le droit aux bourses"}/>
                        <Card url={"https://assure.ameli.fr/PortailAS/appmanager/PortailAS/assure?_nfpb=true&_pageLabel=as_creation_immediate_page"}
                              img={ImgCrous} text={"Créez votre compte Amelie pour des remboursements médicaux"}/>
                    </Slider>
                </div>
            </div>
        )
    }
}

export default RecapHelp;
