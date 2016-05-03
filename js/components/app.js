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
            <Slide key={1} title={"Front-end Development"} animate={""}
                   items={[{
                            item: "Phases",
                            subItems:["Check", "Transform", "Pack"]
                        }]
                   }
                />,
            <Slide key={2} title={"Gulp"} animate={""}
                   items={[{
                            item: "Automation"
                        },
                        {
                            item: "Platform-agnostic"
                        },
                        {
                            item: "Strong Ecosystem"
                        },
                        {
                            item: "Node.js streams",
                            subItems:[".pipe"]
                        }]
                   }
                />,
            <Slide key={3} title={"Basic Commands"} animate={""}
                    items={[{
                            item: "gulp.task"
                        },
                        {
                            item: "gulp.src",
                            subItems:["globs (['client/*.js', '!client/b*.js', 'client/bad.js'])"]
                        },
                        {
                            item: "gulp.dest"
                        },
                        {
                            item: "gulp.watch"
                        }]
                    }
                />,
            <Slide key={4} title={"Install"} animate={""}
                   items={[{
                            item: "Global",
                            subItems:["npm install gulp-cli -g"]
                        },
                        {
                            item: "Local",
                            subItems:["npm install gulp --save-dev"]
                        }]
                    }
                />,
            <Slide key={5} title={"Go!"} animate={""}
                />,
            <Slide key={4} title={"Links"} animate={""}
                   items={[{
                            item: "Gulp",
                            link:"https://github.com/gulpjs/gulp"
                        },
                        {
                            item: "Gulp API",
                            link:"https://github.com/gulpjs/gulp/blob/master/docs/API.md"
                        },
                        {
                            item: "Gulp for beginners",
                            link:"https://css-tricks.com/gulp-for-beginners/"
                        }]
                    }
                />,
            <Slide key={6} title={"Q&A"} animate={""}
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