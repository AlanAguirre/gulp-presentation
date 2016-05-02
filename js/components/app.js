import React from "react";
import {Presentation} from "./Presentation"
import {Slide} from "./Slide"

export const App = React.createClass({

    getInitialState() {
        return {slides: [], selectedIndex: 0}
    },

    componentDidMount() {
        const slides = [
            <Slide key={0} title={"Gulp"} subTitle={"Helping the development of front-end applications"} animate={""} />,
            <Slide key={1} title={"Test"} animate={""}
                   items={[{
                            item: "Test",
                            subItems:["Subitem1", "Subitem2", "Subitem3"]
                        }]
                   }
                />,
            <Slide key={2} animate={""}
                   items={[{
                            item: "Test",
                            subItems:["Subitem1", "Subitem2", "Subitem3"]
                        }]
                   }
                />
        ]

        this.setState({slides: slides })
    },

    componentWillUnmount() {

    },

    handleBackward(){
        const slides = [...this.state.slides]
        let selectedIndex = this.state.selectedIndex - 1

        if(selectedIndex < 0)
            selectedIndex = slides.length - 1

        const newStateItem = Object.assign({}, slides[selectedIndex].props, {animate: "animated slideInLeft"})

        slides[selectedIndex] = Object.assign({}, slides[selectedIndex], { props : newStateItem})

        this.setState({selectedIndex: selectedIndex, slides : slides})
    },

    handleForward(){
        const slides = [...this.state.slides]
        let selectedIndex = this.state.selectedIndex + 1

        if(slides.length <= selectedIndex)
            selectedIndex = 0

        const newStateItem = Object.assign({}, slides[selectedIndex].props, {animate: "animated slideInRight"})

        slides[selectedIndex] = Object.assign({}, slides[selectedIndex], { props : newStateItem})

        this.setState({selectedIndex: selectedIndex, slides : slides})
    },

    render() {

        return (<Presentation selectedIndex={this.state.selectedIndex} slides={this.state.slides} handleForward={this.handleForward} handleBackward={this.handleBackward} />)
    }
})