import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {io} from "socket.io-client"

const URL = "http://192.168.109.165:3000/"

export default function App() {
  const [ message, setMessage ] = useState("")
  const [ messages, setMessages ] = useState([])



  useEffect(() => {
    const socket = io(URL)
    console.log(socket)
  },[])

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
