import React from 'react';
import { SafeAreaView, Text, ScrollView,View, SectionList, Image } from 'react-native';
import {HomepageStyle} from '../assets/StyleSheet';

const Home = () => {

  
  const articles = [{
    data: [{
      title: "Top 10 construction mistakes you shouldn't make", 
      time: "3 hours ago", 
      audio: false, 
      video: false,
      image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg"
    }, {
      title: "Winter plumbing tips for older houses", 
      time: "8 hours ago", 
      audio: false, 
      video: true,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrCepimSq4_a-QRZ5Qs1WPpcudK5lrQo7SIh6GBvSzpljou4PaeB14FeFr3vyA1mfDikk&usqp=CAU"
    }, {
      title: "Dishwasher installation and things you need to know", 
      time: "17 hours ago", 
      audio: true, 
      video: false,
      image: "https://reviewed-com-res.cloudinary.com/image/fetch/s--KOa6WuPz--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1568989046000/Bosch-SHMP88Z75N-Hero.jpg"
    }, {
      title: "Drywall tricks to save time on your next project", 
      time: "1 day ago", 
      audio: false, 
      video: false,
      image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg"
    }, {
      title: "Top 3 things to know for a remodel", 
      time: "1 day ago", 
      audio: true, 
      video: false,
      image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg"
    }, {
      title: "Lighting installation in commercial spaces", 
      time: "3 days ago", 
      audio: false, 
      video: false,
      image: "https://www.ie.edu/insights/wp-content/uploads/2020/11/VanSchendel-Construction.jpg"
    }
    ]
  }];

  return (

    <SafeAreaView>
        <ScrollView>
            <View style={{backgroundColor: '#9540a1', height: 250}}>
              <Text style={{paddingTop: 150, textAlign: 'center', fontSize: 16}}>
                Good Morning!
                
              </Text>
              <Text style={{paddingTop: 10, textAlign: 'center', fontSize: 24}}>
                  Start Listening to NOVA Build.
              </Text>
            </View>
            <View style={{paddingTop: 0}}>
            </View>
            <Text style={{fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI"', fontSize:24,paddingTop:15,
              paddingLeft:25,paddingBottom:10, color: '#1E136C'}}>Recent Articles</Text>
            <View>
              <SectionList style={{paddingBottom:40, paddingLeft:20, paddingRight:20}}
              sections={articles}
              renderItem={({item}) => <View style={{borderBottomColor:'lightgrey',borderBottomWidth:1
              ,paddingTop:10, paddingLeft:5, flexDirection:'row', justifyContent:'space-between'}}>
              
              <View>
              <Text style={{
                paddingBottom:5,
                fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI"',
                fontSize:17,fontWeight:500, maxWidth:250}}>
                  {item.title}
              </Text>
              <Text style={{
                fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI"',
                fontSize:13}}>
                {item.time}
              </Text>
              </View>
              <Image
                style={{width: 80, height: 70, marginRight:10,marginBottom:6,borderRadius:2}}
                source={{uri: item.image}}
              />
              </View>
             }
              keyExtractor={(item,index) => index}
              >
              </SectionList>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;