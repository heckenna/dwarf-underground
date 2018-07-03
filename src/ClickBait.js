import React, {Component} from 'react';
import OrcsInIndy from './OrcsInIndy';
import UnderMountain from './UnderMountain';
import MineGold from './MineGold';
import IndianaHobbits from './IndianaHobbits';


class Baits extends Component{
    render(){
        return(<li>{this.props.name}</li>)
    }
}

class ClickBait extends Component {
    constructor() {
        super()

        this.state = {
            baits: [
            // {img: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
            //     name:"Single Orcs in Indianapolis"}, 
            // {img: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg", 
            //     name:"You won't believe what's under this mountain"}, 
            // {img: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
            //     name: "Mine 20% more gold with One Weird Trick",}, 
            // {img: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
            //   name:"Surprise for Indiana Hobbits born before 1999",},
            {name: <OrcsInIndy />},
            {name: <UnderMountain />},
            {name: <MineGold />},
            {name: <IndianaHobbits />},
            ]
        }
    }

    render() {
        return(

        
            <div className="small-12 columns other-articles">
        <h2>From around the Realm</h2>
        {/* <OrcsInIndy />
        <UnderMountain />
        <MineGold />
        <IndianaHobbits /> */}
        <ul>
        {this.state.baits.map(currentElement => <Baits element={currentElement} />)}
        </ul>    
            </div>
        
        )
    }
}

export default ClickBait;