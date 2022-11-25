import React, { Component } from "react";
// @ts-ignore
import { render } from "react-dom";
import {BaseActions} from "./implementation/BaseCharacter";
import {  CombatPhase, GameTick } from "./implementation/Game";
import { CombatUI } from "./interfaces/CombatUI";
import { MenuUI } from "./interfaces/MenuUI";
import "./style.css";
import { testData } from "./testData";

// tslint:disable-next-line:interface-name no-empty-interface
interface AppProps {}
// tslint:disable-next-line:interface-name
export interface AppState {
  characters: BaseActions[];
  currentCharacter: number;
  currentCombatPhase: CombatPhase;
  interactions_instruction: Record<string, Record<string, number>>;
  log: string[];
  view: "menu" | "fight";
}

// tslint:disable-next-line:no-shadowed-variable
function getNewGameState(testData: AppState): AppState {
  return testData;
}

class App extends Component<AppProps, AppState> {

  private intID?: number;
  constructor(props: AppProps) {
    super(props);
    // @ts-ignore
    this.state = getNewGameState(testData.exampleData);
  }
  public componentDidMount() {
    this.intID = setInterval(() => {
      const newState = GameTick(this.state);
      if (newState) {
        this.setState(newState);
      }
    }, 2000);
  }
  public componentWillUnmount() {
    if (this.intID != null) {
      clearInterval(this.intID);
    }
  }

  public render() {
    switch (this.state.view) {
      default:
        return <MenuUI state={this.state} start={() => this.setState({view: "fight"})}></MenuUI>;
      case "fight":
        return <CombatUI state={this.state}></CombatUI>;
    }
  }
}

render(<App />, document.getElementById("root"));
