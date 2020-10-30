import React, { Component } from 'react';



class Vessels extends Component {

    constructor(){
        super();
        this.state = {
            vessels: [{"IMO":1,"Name":"Borealis","Image":"borealis.png","Longitude":1,"Latitude":2,"CountryID":1},
                      {"IMO":18,"Name":"Scotia","Image":"scotia.png","Longitude":2,"Latitude":5,"CountryID":8},
                      {"IMO":19,"Name":"Boaty McBoatFace","Image":"boatymcboatface.png","Longitude":46,"Latitude":52,"CountryID":9},
                      {"IMO":20,"Name":"Alba","Image":"alba.png","Longitude":80,"Latitude":106,"CountryID":10},
                      {"IMO":21,"Name":"Clupia","Image":"clupia.png","Longitude":522,"Latitude":800,"CountryID":11},
                      {"IMO":22,"Name":"Steel Seal","Image":"steelseal.png","Longitude":781,"Latitude":1872,"CountryID":12},
                    ]
        }
    }

    //Database is being disagreeable so for now we'll hardcode some objects    
        // componentDidMount() {
        //     fetch('/api/vessel')
        //      .then(res => res.json())
        //      .then(vessels => this.setState({vessels}, () => console.log('Vessels fetched',vessels)))         
        // }

    render() {
        return (
            <div style={{color: "black"}}>
                <h2>Vessels</h2>
                {console.log(this.state.vessels)}
                <ul>
                    {this.state.vessels.map(vessel =>
                        <li key={vessel.IMO}>{vessel.IMO} {vessel.Name} {vessel.Image} {vessel.Longitude} {vessel.Latitude} {vessel.CountryID} </li>
                        )}
                </ul>
            </div>
        );
    }
}

export default Vessels;
