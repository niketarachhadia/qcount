import React from "react";
import Input from './input';
import icon from '../toilet-paper.png';


export default class Dashboard extends React.Component{
    constructor(props){
        console.log('444: ');
        super(props);
        this.state={
            rolls: 2,
            visits:5,
            sheetsPerVisit:10,
            sheetsPerRoll:1000
        };
    }
    calculate(){
        const numSheets = Number(this.state.rolls)*Number(this.state.sheetsPerRoll);
        const numSheetsUsedPerDay = Number(this.state.visits)*Number(this.state.sheetsPerVisit);
        return numSheets/numSheetsUsedPerDay;
    }

    render(){
        const resultNumDays = this.calculate();
        
        return(
            <div className='text-center'>
                <img src={icon}></img>
                <h3>How much toilet paper do I need?</h3>
                <h1>Your stock will last {resultNumDays} days</h1>
                    <form>
                    <Input id='rolls' type='number' min={1} max={50} value={this.state.rolls} text = 'Rolls You Have' onChange={(e)=>{ this.setState({rolls:e.target.value})}} />
                    <Input id='sheetsPerRoll' type='number' min={1} max={5000} value={this.state.sheetsPerRoll} text = 'Number of sheets per roll' onChange={(e)=>{this.setState({sheetsPerRoll:e.target.value})}} />
                    <Input id='visits' type='number' min={1} max={50} value={this.state.visits} text = 'Toilet Visits Per Day' onChange={(e)=>{this.setState({visits:e.target.value})}} />
                    <Input  id='sheetsPerVisit' type='number' min={1} max={50} value={this.state.sheetsPerVisit} text = 'Number of sheets used per visit' onChange={(e)=>{this.setState({sheetsPerVisit: e.target.value})}}/>
                    </form>
            </div>
        );
    }
}