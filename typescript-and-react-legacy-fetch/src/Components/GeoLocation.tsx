import React, { Component } from "react";



type Props = {
    // lat: number;
    // lon: number
}

type Weather = {
    lat: number;
    lon: number;
    temp: number
}

export default class GeoLocation extends Component<{}, Weather>{
    constructor(props: Props){
        super(props);
        this.state = {
            lat: 0,
            lon: 0,
            temp: 0
        }
        
    }
    
    location() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat: position.coords.latitude, 
                lon: position.coords.longitude
                })
        })
    }
    

    weatherFetch = () => {
        let url = `api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=a60ae6c6b8693cde43a2040b56edc53c`
        fetch(url)
        .then(res => res.json())
        .then(res => {
            // console.log(data);
            this.setState({
                temp: res.main.temp
            })
            console.log(res.main.temp);
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.lat}{this.state.lon}{this.state.temp}</h1>
            </div>
        )
    }
}

