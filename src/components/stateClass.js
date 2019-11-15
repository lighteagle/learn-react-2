import React, { Component } from "react";

class StateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Simple Counter",
      isLoading: false,
      classKomodo: [
        "Dani",
        "Ega",
        "Latif",
        "Dian",
        "Roby",
        "Iqbal M",
        "Sofyan",
        "Zakin",
        "Taufiq",
        "Bagus",
        "Baim",
        "Iwan",
        "Iqbal"
      ],

      classKomodoFoto: [
        "https://avatars0.githubusercontent.com/u/54284014?v=4",
        "https://avatars0.githubusercontent.com/u/54344973?v=4",
        "https://avatars0.githubusercontent.com/u/57086522?v=4",
        "https://avatars0.githubusercontent.com/u/53134076?v=4",
        "https://avatars2.githubusercontent.com/u/30195503?v=4",
        "https://avatars1.githubusercontent.com/u/30194879?v=4",
        "https://avatars3.githubusercontent.com/u/22201585?v=4",
        "https://avatars3.githubusercontent.com/u/29705088?v=4",
        "https://avatars0.githubusercontent.com/u/57085477?v=4",
        "https://avatars2.githubusercontent.com/u/50207673?v=4",
        "https://avatars2.githubusercontent.com/u/49808623?v=4",
        "https://avatars0.githubusercontent.com/u/54432317?v=4",
        "https://avatars0.githubusercontent.com/u/57086521?v=4"
      ],
      classMateName: "",

      classMateFoto: ""
    };
  }

  changeLoadingState = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  };

  getElementName = (index, data) => {
    console.log(`[${index}] ${data}`);
    this.setState({
      classMateName: data,
      classMateFoto: this.state.classKomodoFoto[index]
    });
  };
  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <h1>Batch #11 Kind Komodo</h1>
          <button onClick={this.changeLoadingState}>
            Show my Classmate list
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Batch #11 Kind Komodo</h1>

          <button onClick={this.changeLoadingState}>
            {this.state.isLoading
              ? "Hide my Classmate list"
              : "Show my Classmate list"}
          </button>
          <div id="class-komodo">
            <div className="class-list">
              <ul>
                {this.state.classKomodo &&
                  this.state.classKomodo.map((data, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => this.getElementName(index, data)}
                      >
                        {data}
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className="class-detail">
              {this.state.classMateName && (
                <p className="classmate">{this.state.classMateName}</p>
              )}
              <img
                src={this.state.classMateFoto}
                alt={this.state.classMateName}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default StateClass;
