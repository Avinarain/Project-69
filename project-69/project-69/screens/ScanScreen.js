import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

class ScanScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      scannedData: '',
      buttonState: 'normal',
    };
  }

  getCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    console.log(status);
    this.setState({
      hasCameraPermission: status === 'granted',
      buttonState: 'click',
    });
  };

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true, buttonState: 'normal', scannedData: data });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  render() {
    if (this.state.buttonState === 'normal') {
      return (
        <View>
          <Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg',
            }}
            style={styles.image}
          />
          <Text style={styles.text}>
            {' '}
            {this.state.hasCameraPermission === true
              ? this.state.scannedData
              : 'Request Camera Permissions '}
          </Text>
          <TouchableOpacity
            style={styles.styleButton}
            onPress={this.getCameraPermission}>
            <Text style={styles.buttonText}> Scan QR Code </Text>
          </TouchableOpacity>
        </View>
      );
    } else if (
      this.state.buttonState === 'click' &&
      this.state.hasCameraPermission === true
    ) {
      return (
        <BarCodeScanner
          onBarCodeScanned={
            this.state.scanned ? undefined : this.handleBarCodeScanned
          }
          style={StyleSheet.absoluteFillObject}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    verticleAlign: 'center',
    textShadowColor: 'green',
    marginTop: 50,
    fontSize: 15,
    textDecorationColor:'violet',
    textDecoration:"underline",
  },
  styleButton: {
    backgroundColor: 'orange',
    height: 40,
    marginTop: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  image:{
    width: 200, height: 200, marginLeft: 50,marginTop:20
  }
});

export default ScanScreen;
