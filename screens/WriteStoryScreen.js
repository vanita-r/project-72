import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <Header 
                    backgroundColor={'#ffce8f'}
                    centerComponent={{
                        text: 'Write A Story',
                        style: { color: '#fff', fontSize: 20 },
                    }}
                >
                </Header>
                <Text>Write Story</Text>
                <TextInput style={styles.inputView} placeholder="Title of Story"/>
                <TextInput style={styles.inputView} placeholder="Author of Story"/>
                <TextInput style={styles.inputView} placeholder="Write Story"/>
            </View>
        )
        
    }
    submitStory(){
        <TouchableOpacity 
            style={styles.submitButton}
            onPress={this.submitStory}
        >
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    }
}

const KeyboardAvoidingComponent = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <Text style={styles.header}>Header</Text>
            <TextInput placeholder="Username" style={styles.textInput} />
            <View style={styles.btnContainer}>
              <Button title="Submit" onPress={() => {this.showToast}} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  };

const App = () => {
    const showToast = () => {
      ToastAndroid.show("Your story is now published.", ToastAndroid.SHORT);
    };
  
    const showToastWithGravity = () => {
      ToastAndroid.showWithGravity(
        "All Your Base Are Belong To Us",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    };
  
    const showToastWithGravityAndOffset = () => {
      ToastAndroid.showWithGravityAndOffset(
        "A wild toast appeared!",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
    );
};
  
    return (
      <View style={styles.container}>
        <Button title="Toggle Toast" onPress={() => showToast()} />
        <Button
          title="Toggle Toast With Gravity"
          onPress={() => showToastWithGravity()}
        />
        <Button
          title="Toggle Toast With Gravity & Offset"
          onPress={() => showToastWithGravityAndOffset()}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    submitButton:{width:100, height:10, },
    buttonText:{fontsize:20, alignSelf:'center'},
    inputView:{ flexDirection:'row', margin:20 }, 
    inputBox:{ width:200, height:40, fontSize:20, padding:10, borderWidth:1.5, borderRightWidth:0, }
});
  