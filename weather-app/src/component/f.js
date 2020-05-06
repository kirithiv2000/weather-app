import React from 'react';
import axios from "axios";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Appbar from "./appbar"
import {
    Link
  } from "react-router-dom"
class F extends React.Component{
    constructor(){
        super()
        this.state={
          th:["Flag","Country","Capital","population","Name","Weather"],
          searching:"",
          search:false,
          data:[],
        }
      }
      componentDidMount(){
        axios.get("https://restcountries.eu/rest/v2/").then(e=>{
          this.setState({data:e.data});
        })
      }
    
      mysearch=(event)=>{
        this.setState({
          searching:event.target.value
        }) 
      }
      mychsearch=(e)=>{
          this.setState({search:true})
      }
      getMuiTheme = () => createMuiTheme({
        overrides: {
          MuiTable: {
            root: {
            }
          },
          MuiTableFooter:{
            root:{
              backgroundColor:"blue"
            }
          },
          body:{
            margin:"auto"
          }
        }
      })

      render(){
        const {data,searching,th}=this.state;
        
        const columns = th;

        
        const data1 = data
        .filter(e=>{
          return e.name.toLowerCase().includes(searching.toLowerCase())
        })
        .map(e=>{
        return ([<img src={e.flag}/>,e.name,e.capital,e.population,e.nativeName ,<Link to={"/weather/"+e.name}><button name={e.name}>{" weather"}</button></Link>])
          })
        const options = {
          filter:false,
          download:false,
          search:false,
          print:false,
          viewColumns:false,
          selectableRows:false
        };


          const some =this.state.searching!==""&&this.state.search?<MUIDataTable
          data={data1}
          columns={columns}
          options={options}
        />:""
       

        return(<div>
                <Appbar value={this.state.searching} onChange={e=>{this.mysearch(e)}} on={e=>{this.mychsearch(e)}}></Appbar>
                <MuiThemeProvider theme={this.getMuiTheme()}>
                {some}
                </MuiThemeProvider>
                </div>)
      }
    
}
export default F;

