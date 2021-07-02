import { Component } from "react";

interface ButtonProps {
  onClick?: () => any,
  initializeClicked?: boolean
}

interface ButtonState {
  alreadyClicked: boolean,
  timerId?: NodeJS.Timeout
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
    const timerId = setInterval(() => {
      console.log("Estou rodando")
      this.setState({ 
        alreadyClicked:  false
      })
    },5000)
    this.setState({timerId})
  }

  componentWillUnmount(){
    console.log("Button será Desmontado")
    if (this.state.timerId) {
      console.log("Apaguei o Intervalo com certeza ")
      clearInterval(this.state.timerId);
    }

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