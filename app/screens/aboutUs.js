import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import {AsyncStorage} from 'react-native';
import {Button} from 'react-native-material-ui';
import styles from './styles.js';

export default class AboutUsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        auth: '',
      };
    }


  render() {
      return (
        <ScrollView>
          <View style={styles.container}>
              <View><Text style={styles.subPageHeadStyle}>About US</Text></View>
              <View>
               <Text style ={styles.longText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas. Aliquet bibendum enim facilisis gravida neque. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Augue mauris augue neque gravida in fermentum. Tempor nec feugiat nisl pretium fusce id. Risus ultricies tristique nulla aliquet enim tortor. Vulputate ut pharetra sit amet aliquam id. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Sodales ut eu sem integer vitae justo eget magna. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Leo integer malesuada nunc vel risus commodo. Enim eu turpis egestas pretium aenean. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Integer quis auctor elit sed.

                Aliquet risus feugiat in ante metus dictum. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Nibh cras pulvinar mattis nunc sed blandit libero. Sapien pellentesque habitant morbi tristique senectus et. Nunc eget lorem dolor sed. Augue ut lectus arcu bibendum. Maecenas sed enim ut sem viverra aliquet eget sit. Gravida in fermentum et sollicitudin ac. Pulvinar mattis nunc sed blandit. Adipiscing elit ut aliquam purus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Integer quis auctor elit sed vulputate mi sit. Et leo duis ut diam quam nulla porttitor massa. Augue eget arcu dictum varius duis at consectetur.
                </Text>
                <Image source={require('../assets/OpeningPageBackground.jpg')} style={styles.aboutImage} />
               <Text style ={styles.longText}>
                Felis donec et odio pellentesque diam volutpat. Lacus laoreet non curabitur gravida arcu. Consequat interdum varius sit amet mattis vulputate. Euismod quis viverra nibh cras pulvinar mattis nunc. Risus nullam eget felis eget nunc lobortis mattis aliquam. Consequat semper viverra nam libero justo laoreet sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Netus et malesuada fames ac turpis egestas sed. Eget magna fermentum iaculis eu non diam. Penatibus et magnis dis parturient montes nascetur. Vulputate dignissim suspendisse in est ante. Praesent elementum facilisis leo vel fringilla est ullamcorper.

                Potenti nullam ac tortor vitae purus. Quis lectus nulla at volutpat diam ut. Tellus rutrum tellus pellentesque eu. Malesuada fames ac turpis egestas maecenas pharetra. Odio morbi quis commodo odio aenean sed. Elementum integer enim neque volutpat ac tincidunt vitae semper. Interdum varius sit amet mattis vulputate enim nulla. Sed arcu non odio euismod lacinia at quis. Tempor commodo ullamcorper a lacus vestibulum. Amet cursus sit amet dictum sit amet. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Ipsum nunc aliquet bibendum enim facilisis. Cras tincidunt lobortis feugiat vivamus.

                Urna neque viverra justo nec ultrices dui. Pulvinar pellentesque habitant morbi tristique. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Ullamcorper malesuada proin libero nunc consequat interdum varius. Viverra nam libero justo laoreet. Leo integer malesuada nunc vel risus commodo viverra maecenas. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Facilisis volutpat est velit egestas dui id ornare arcu. Mollis aliquam ut porttitor leo. Tellus at urna condimentum mattis pellentesque id. Enim facilisis gravida neque convallis a. Ac turpis egestas sed tempus urna.
                Potenti nullam ac tortor vitae purus. Quis lectus nulla at volutpat diam ut. Tellus rutrum tellus pellentesque eu. Malesuada fames ac turpis egestas maecenas pharetra. Odio morbi quis commodo odio aenean sed. Elementum integer enim neque volutpat ac tincidunt vitae semper. Interdum varius sit amet mattis vulputate enim nulla. Sed arcu non odio euismod lacinia at quis. Tempor commodo ullamcorper a lacus vestibulum. Amet cursus sit amet dictum sit amet. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Ipsum nunc aliquet bibendum enim facilisis. Cras tincidunt lobortis feugiat vivamus.

                Urna neque viverra justo nec ultrices dui. Pulvinar pellentesque habitant morbi tristique. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Ullamcorper malesuada proin libero nunc consequat interdum varius. Viverra nam libero justo laoreet. Leo integer malesuada nunc vel risus commodo viverra maecenas. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Facilisis volutpat est velit egestas dui id ornare arcu. Mollis aliquam ut porttitor leo. Tellus at urna condimentum mattis pellentesque id. Enim facilisis gravida neque convallis a. Ac turpis egestas sed tempus urna.
                Potenti nullam ac tortor vitae purus. Quis lectus nulla at volutpat diam ut. Tellus rutrum tellus pellentesque eu. Malesuada fames ac turpis egestas maecenas pharetra. Odio morbi quis commodo odio aenean sed. Elementum integer enim neque volutpat ac tincidunt vitae semper. Interdum varius sit amet mattis vulputate enim nulla. Sed arcu non odio euismod lacinia at quis. Tempor commodo ullamcorper a lacus vestibulum. Amet cursus sit amet dictum sit amet. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Ipsum nunc aliquet bibendum enim facilisis. Cras tincidunt lobortis feugiat vivamus.

                Urna neque viverra justo nec ultrices dui. Pulvinar pellentesque habitant morbi tristique. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Ullamcorper malesuada proin libero nunc consequat interdum varius. Viverra nam libero justo laoreet. Leo integer malesuada nunc vel risus commodo viverra maecenas. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Facilisis volutpat est velit egestas dui id ornare arcu. Mollis aliquam ut porttitor leo. Tellus at urna condimentum mattis pellentesque id. Enim facilisis gravida neque convallis a. Ac turpis egestas sed tempus urna.
               
                </Text>
            </View>
          </View>
          </ScrollView>
      );
  }
}
