import React from 'react';
import { SafeAreaView, Text, ScrollView,View } from 'react-native';
import {HomepageStyle} from '../assets/StyleSheet';

const Home = () => {
  return (

    <SafeAreaView>
        <ScrollView>
            <Text style={{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI"', fontSize:24,paddingTop:15,
    paddingLeft:20, color: '#1E136C'}}>Recent Articles</Text>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;