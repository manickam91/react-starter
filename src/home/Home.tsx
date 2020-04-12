import React, { Component } from 'react'
import HomeDashboard from './HomeDashboard'

export interface Hello {
    name: string;
}
export class Home extends Component<Hello, {}> {
  
    render() {
        return (
            <div>
                <h3>Welcome {this.props.name}!</h3>
                <HomeDashboard></HomeDashboard>
            </div>
        )
    }
}

export default Home