import React, { Component } from 'react';

class Countries extends Component {

    constructor(){
        super();
        this.state = {
            countries: [{"CountryID":1,"Name":"United Kingdom"},
                        {"CountryID":8,"Name":"France"},
                        {"CountryID":9,"Name":"Italy"},
                        {"CountryID":10,"Name":"Germany"},
                        {"CountryID":11,"Name":"Australia"},
                        {"CountryID":12,"Name":"South Africa"}]
        }
    }

//Database is being disagreeable so for now we'll hardcode some objects    
    // componentDidMount() {
    //     fetch('/api/country')
    //      .then(res => res.json())
    //      .then(countries => this.setState({countries}, () => console.log('Countries fetched',countries)))         
    // }

    render() {
        return (
            <div style={{color: "black"}}>
                <h2>Countries</h2>
                <ul>
                    {this.state.countries.map(country =>
                        <li key={country.CountryID}>{country.CountryID} {country.Name}  </li>
                        )}
                </ul>
            </div>
        );
    }
}

export default Countries;
