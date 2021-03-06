import React from 'react';

export default class slider extends React.Component {
    constructor(props){
        super();
        this.state = {value: props.value};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        var id = this.props.id;
        var new_value = event.target.value;
        this.setState({value: new_value}, ()=>{
            this.props.onChange(id, new_value);
        });
    }

    render(){
        return (
            <div className='slide-container'>
                <div className='control-label'>{this.props.label}</div>
                <input id={this.props.id} className="slider" type="range" min={this.props.min} max={this.props.max} 
                    value={this.props.value} onChange={this.handleChange}/>
            </div>
        )
    }
}