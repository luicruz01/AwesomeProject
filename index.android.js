import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <Image source={this.state.test} style={{width: 193, height: 110}}/>
    );
  }
}

AppRegistry.registerComponent('Bananas', () => Bananas);

componentDidMount() {
    this.setState({
        test: JSON.parse(document.getElementById('json-data').innerHTML)
    });
}

var myJson = (
  <script type="text/json" id="json-data">
      {'path': 'image_path', 'name':'image_name'} // el path debe ser desde el directorio donde se ejecuta esto, por eljemplo si estamos en el directorio src pat = "../image/image.jpg"
  </script>
);
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

