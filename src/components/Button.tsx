import { Component } from "react";

interface ButtonProps {
  onClick?: () => any,
  initializeClicked?: boolean
}

interface ButtonState {
  alreadyClicked: boolean
}


class Button extends 
      Component<ButtonProps,ButtonState>{

  constructor(props: ButtonProps) {
    super(props)
    this.state = {
      alreadyClicked: !!props.initializeClicked
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        alreadyClicked:  false
      })
    },5000)
  }

  componentDidUpdate(
    prevProps: ButtonProps,
    prevState: ButtonState){

      //prevState - anterior
      //this.state - atual
    // setTimeout(() => {
    //   this.setState({
    //     alreadyClicked:  false
    //   })
    // },5000)
  }

  render() {
    // console.log(this.props)
    return <button 
        onClick={() => {
          this.setState({
            alreadyClicked: true
          })
          this.props.onClick?.call([])
        }}
        disabled={this.state.alreadyClicked}>
      {this.props.children}
    </button>
  }

}

export default Button