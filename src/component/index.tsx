import * as React from "react";
import { Component } from "react";

export interface Props {
  name: string;
}

export interface State {
  secret?: string;
}

class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { secret: "asd" };
  }
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    );
  }
}

export default Form;
