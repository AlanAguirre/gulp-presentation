import React from "react";


export const Presentation = React.createClass({

    propTypes: {
        selectedIndex: React.PropTypes.number.isRequired,
        slides: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
        handleForward: React.PropTypes.func.isRequired,
        handleBackward: React.PropTypes.func.isRequired

    },

    componentDidMount() {

    },

    componentWillUnmount() {

    },

    render() {
        const that = this;
        const container = {
            display: "flex",
            alignItems: "stretch",
            justifyContent: "space-between",
            height: "100%",
            overflow: "hidden"
        }

        return (<div style={container}>
            <div style={{display: "flex"}} className="backward" onClick={this.props.handleBackward} >
               <div style={{alignSelf: "flex-start"}}>
                   {"{"}
               </div>
            </div>
            <div style={{flexGrow : 1, display: "flex"}}>
                {this.props.slides.filter((slide, index)=> {
                    return index === that.props.selectedIndex
                })[0]}
            </div>
            <div style={{display: "flex"}} className="forward" onClick={this.props.handleForward} >
               <div style={{alignSelf: "flex-end"}}>
                  {"}"}
               </div>
            </div>
        </div>)
    }
})