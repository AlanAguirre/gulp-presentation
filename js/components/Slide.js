import React from "react";


export const Slide = React.createClass({

    propTypes: {
        key: React.PropTypes.number,
        title: React.PropTypes.string,
        subTitle: React.PropTypes.string,
        animate: React.PropTypes.string,
        items: React.PropTypes.arrayOf(React.PropTypes.shape({
            item: React.PropTypes.string,
            subItems: React.PropTypes.arrayOf(React.PropTypes.string)
        }))
    },
    
    render() {

        const style = {
            display: "flex",
            flexDirection: "column",
            padding: "40px 80px"
        };

        if(this.props.title && !this.props.items){

            const styleTitle = Object.assign({}, style, {fontSize: "150%", alignItems: "center", position: "absolute",
                top: "50%", left: "50%", transform: "translateX(-50%) translateY(-50%)", textAlign: "center"})

            return <div key={this.props.key} style={styleTitle}>
                <h1 style={{margin: 20}} >
                    {this.props.title}
                </h1>
                <span style={{fontSize: "50%"}}>
                    {this.props.subTitle}
                </span>
            </div>
        }

        return (<div key={this.props.key} className={this.props.animate} style={style} >
            {
                this.props.title &&
                <h1 className="title">
                    {this.props.title}
                </h1>
            }
            {
                this.props.items &&
                this.props.items.map((item, index)=> {

                    return <div key={index}>
                        <span className="item">
                            {item.item}
                        </span>
                        {item.subItems &&
                        <ul>
                            {item.subItems.map((subItem, subIndex)=> {
                                return <li key={subItem + subIndex} className="subItem"> { subItem } </li>
                            })}
                        </ul>
                        }
                    </div>
                })
            }

        </div>)
    }
})