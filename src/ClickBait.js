import React, {Component} from 'react';
import OrcsInIndy from './OrcsInIndy';
import UnderMountain from './UnderMountain';
import MineGold from './MineGold';
import IndianaHobbits from './IndianaHobbits';

class Baits extends Component {
    render(){
        return(this.props.baits.name)
    }
}

class ClickBait extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         baits: [
    //         {name: "<OrcsInIndy />"}, 
    //         {name: "<UnderMountain />"}, 
    //         {name: "<MineGold />"}, 
    //         {name: "<IndianaHobbits />"},
    //         ]
    //     }
    // }

    render() {
        return(
            <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        <OrcsInIndy />
        <UnderMountain />
        <MineGold />
        <IndianaHobbits />
        {/* <ul>
        {this.state.baits.map((currentBait, i) => <Baits name={currentBait} key={i}/>)}        
        </ul> */}
      </div>
        )
    }
}

export default ClickBait;