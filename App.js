/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TabBarIOS
} from 'react-native';

export default class App extends Component<{}> {

  state = {
    selectedTabBarItem : 'home',
}

  render() {
    return (
        <View style = {[styles.container]}>
          <View style = {{alignItems:'center',justifyContent:'center',height : 64, backgroundColor:'purple'}}>
              <Text style = {{color : 'white'}}>Tabbar 选项卡的切换</Text>
          </View>

          <TabBarIOS
              barTintColor = 'black'
          >
            <TabBarIOS.Item
              systemIcon = 'contacts'
              badge = '3'
              selected = {this.state.selectedTabBarItem === 'home'}
              onPress = {()=>{
                this.setState({
                      selectedTabBarItem : 'home'
                })
              }}
            >
              <View style = {[styles.commonViewStyle, {backgroundColor:'red'}]}>
                <Text>
                  第一页
                </Text>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon = 'bookmarks'
                badge = '3'
                selected = {this.state.selectedTabBarItem === 'two'}
                onPress = {()=>{
                this.setState({
                      selectedTabBarItem : 'two'
                })
              }}
            >
              <View style = {[styles.commonViewStyle, {backgroundColor:'green'}]}>
                <Text>
                  第二页
                </Text>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon = 'downloads'
                badge = '3'
                selected = {this.state.selectedTabBarItem === 'three'}
                onPress = {()=>{
                this.setState({
                      selectedTabBarItem : 'three'
                })
              }}
            >
              <View style = {[styles.commonViewStyle, {backgroundColor:'blue'}]}>
                <Text>
                  第三页
                </Text>
              </View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
                systemIcon = 'search'
                badge = '3'
                selected = {this.state.selectedTabBarItem === 'four'}
                onPress = {()=>{
                this.setState({
                      selectedTabBarItem : 'four'
                })
              }}
            >
              <View style = {[styles.commonViewStyle, {backgroundColor:'yellow'}]}>
                <Text>
                  第四页
                </Text>
              </View>
            </TabBarIOS.Item>

          </TabBarIOS>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
  },
  commonViewStyle:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
