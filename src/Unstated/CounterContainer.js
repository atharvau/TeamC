import { Container } from "unstated";

class CounterContainer extends Container {
  state = {
    uid: "udapure"
  };

  setuid = () => {
    this.setState({ uid: "Atharva" });
  };
}

export default CounterContainer;
