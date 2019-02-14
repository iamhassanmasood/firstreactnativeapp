import React from "react";
import {
  ListView,
  Text,
  ScrollView,
  AppRegistry,
  StyleSheet
} from "react-native";
import ColorButton from "./src/components/ColorButton";
export default class App extends React.Component {
  constructor() {
    super();

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const availableColors = ["red", "green", "yellow" , 'orange' , 'purple' , 'rgba(255, 255, 255 , .9)'];

    this.state = {
      backgroundColor: "blue",
      availableColors,
      dataSource: this.ds.cloneWithRows(availableColors)
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor, dataSource } = this.state;
    return (
      <ListView
        style={[styles.container, { backgroundColor }]}
        dataSource={dataSource}
        renderRow={color => (
          <ColorButton backgroundColor={color} onSelect={this.changeColor} />
        )}
        renderHeader={() => (
          <Text style={styles.header}>Color List</Text>
        )}>

        </ListView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

AppRegistry.registerComponent("helloduniya", () => App);
