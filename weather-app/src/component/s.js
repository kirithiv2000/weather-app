import React from 'react';
import axios from "axios";


class S extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{request: {query: ""},current:{temperature: "",weather_icons:[""],wind_speed:""}}
        }
        console.log(props)
        console.log(this.props.match.params.id)
    }
    componentDidMount(){
        axios.get("http://api.weatherstack.com/current?access_key=cc4d37ded5d706e23d86647a0ed4f816&query="+this.props.match.params.id).then(e=>{this.setState({data:e.data});console.log(this.state.data)})
    }
    render(){
        const {data}=this.state
        return(<div>
                <h1>{data.request.query}</h1>
                
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan={3}> 
                            <img src={data.current.weather_icons[0]} alt="weather"/>
                            </td>
                            <td> {data.current.temperature +" Degree celcious"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {data.current.wind_speed+" rpm"}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {data.current.precip}
                            </td>
                        </tr>
                    </tbody>
                </table>
               </div>)
            }
    }
export default S;
