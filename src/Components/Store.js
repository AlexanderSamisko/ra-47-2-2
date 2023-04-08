import React, {Component} from "react"
import products from "./Products"
import IconSwitch from "./IconSwitch";
import ListView from "./ListView"
import CardsView from "./CardsView"


export default class Store extends Component {
    constructor(prop) {
        super(prop) 
        this.products = products;
        this.state = {
            isList: false
        }
    }

    render() {
        return <div>
            <IconSwitch icon={this.state.isList ? "view_list" : "view_module"} onSwitch={() => this.setState({
                isList: !this.state.isList
            })}/>
            {this.state.isList ? <ListView  items={this.products} /> : <CardsView cards={this.products} />}
        </div>
                    
    }
}