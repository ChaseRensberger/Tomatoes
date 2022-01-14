import React, {useState} from 'react';
import {StatusBar,Text,StyleSheet,Image,SafeAreaView,ScrollView,View,} from 'react-native';
import Home from './pages/Home';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Explore from './pages/Explore';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {

  const Tab = createMaterialTopTabNavigator();

  const navTheme = DefaultTheme;
  navTheme.colors.background = '#ffffff';

  //CHANGE VAR HERE ******
  var x=0;

  if(x==0) {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer
      theme={navTheme}>
        <Tab.Navigator
          screenOptions={{
            // trying to make the little dots appear under the names
            // tabBarIcon: ({ focused }) => {
            //   if(focused) {
            //     return <Text style={{fontSize:6, alignSelf:'center', marginBottom: 0}}>{'\u2B24'}</Text>
            //   }
            //     return null;
            // },
            tabBarIndicatorStyle: {display: 'none'},
            tabBarActiveTintColor: '#00008B',
            tabBarLabelStyle: { fontSize: 14 }
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Explore" component={Explore} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
        }
  else if(x==1) {
    return (
      <>
      <View style={{height:40,shadowColor:'grey',shadowRadius:8}}>
      {/* <Ionicons onPress={goBackHome}style={{fontSize:30,
    paddingLeft:5,paddingTop:3,color:'grey'}}
      name="arrow-back"/>
      <Ionicons style={{fontSize:30, color:'grey'}}
      name="share"/> */}
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
    
          <Text style={styles.categoryText}>PLUMBING</Text>
          <Text style={styles.titleText}>
          Top 10 construction mistakes you shouldn't make
          </Text>
          <Text style={styles.dateText}>
            January 14, 2022 {'\u00B7'} 11:54 AM ET
          </Text>
          <Text style={styles.dateText}>
            BY CHASE RENSBERGER
          </Text>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://media.istockphoto.com/photos/engineering-supervisor-is-very-sad-after-end-job-in-construction-site-picture-id1138387738?k=20&m=1138387738&s=612x612&w=0&h=fh4TPD5mHXs-aUr0adx3PSnChvhgzJquV5D7uDzO-Aw=',
            }}
          />
          <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. 
              {"\n"}
              {"\n"}
              Eu consequat ac felis donec et odio pellentesque diam. Suspendisse interdum consectetur libero id faucibus. Vel fringilla est ullamcorper eget nulla facilisi etiam. Ornare lectus sit amet est placerat in egestas erat imperdiet. Tellus integer feugiat scelerisque varius morbi enim nunc. Risus commodo viverra maecenas accumsan lacus vel. 
              {"\n"}
              {"\n"}
              Semper risus in hendrerit gravida rutrum quisque non. Fermentum leo vel orci porta.
              {"\n"}
              {"\n"}
            Venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nulla facilisi morbi tempus iaculis. In iaculis nunc sed augue lacus viverra vitae. Metus dictum at tempor commodo ullamcorper a. Pretium viverra suspendisse potenti nullam ac tortor vitae. Ullamcorper sit amet risus nullam eget felis. 
            {"\n"}
              {"\n"}Magna eget est lorem ipsum dolor sit amet. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Ut pharetra sit amet aliquam id. Nunc vel risus commodo viverra. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et. 
            {"\n"}
              {"\n"}
              Quis vel eros donec ac odio tempor. Ut ornare lectus sit amet est. Odio euismod lacinia at quis risus sed vulputate odio. In nibh mauris cursus mattis molestie a iaculis at. Viverra justo nec ultrices dui sapien eget mi proin sed. Felis eget velit aliquet sagittis id. Amet commodo nulla facilisi nullam vehicula ipsum a. Nulla facilisi cras fermentum odio eu feugiat.
            {"\n"}
            {"\n"}
            Id ornare arcu odio ut sem nulla. Massa massa ultricies mi quis hendrerit dolor. Integer enim neque volutpat ac tincidunt vitae semper quis. At auctor urna nunc id cursus metus. Duis tristique sollicitudin nibh sit. Diam sit amet nisl suscipit adipiscing. A iaculis at erat pellentesque adipiscing. Donec adipiscing tristique risus nec feugiat in fermentum. Cursus metus aliquam eleifend mi in nulla. Sed blandit libero volutpat sed cras ornare. Enim diam vulputate ut pharetra.
            {"\n"}
            {"\n"}
            Auctor urna nunc id cursus metus aliquam eleifend mi. Tristique nulla aliquet enim tortor at auctor. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Et tortor consequat id porta nibh venenatis cras. Placerat vestibulum lectus mauris ultrices eros in cursus turpis massa. Urna id volutpat lacus laoreet. Lacinia quis vel eros donec. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Hendrerit dolor magna eget est. Aenean pharetra magna ac placerat vestibulum lectus. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Diam ut venenatis tellus in. Cras sed felis eget velit aliquet. At elementum eu facilisis sed odio morbi quis commodo. Nec nam aliquam sem et tortor consequat id. Vivamus at augue eget arcu dictum varius duis at. Fermentum iaculis eu non diam phasellus. Orci dapibus ultrices in iaculis nunc sed.
            {"\n"}
            {"\n"}
            Viverra nam libero justo laoreet sit. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Eros in cursus turpis massa tincidunt dui. Lorem ipsum dolor sit amet consectetur. Felis eget velit aliquet sagittis. Purus in massa tempor nec feugiat nisl pretium. Dignissim convallis aenean et tortor at risus viverra. Sodales neque sodales ut etiam sit. Senectus et netus et malesuada fames ac turpis egestas sed. Vitae et leo duis ut diam quam nulla porttitor. Non blandit massa enim nec dui nunc mattis enim ut. Habitant morbi tristique senectus et netus et malesuada fames.
          </Text>
        </ScrollView>
      </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  categoryText: {
    color: 'grey',
    fontSize: 13,
    paddingTop: 25,
    paddingBottom: 5
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    paddingTop: 30,
    fontSize: 16,
    fontFamily: 'Times new roman',
    lineHeight:20
  },
  tinyLogo: {
    width: 400,
    height: 300,
    marginTop:10
  },
  titleText: {
    fontSize: 32,
    fontWeight:300,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI"',
    paddingBottom:5
  },
  dateText: {
    paddingBottom:5,
    color: 'grey',
    fontSize: 12
  },
});

export default App;
