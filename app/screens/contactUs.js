import React from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import {AsyncStorage} from 'react-native';
import {Button} from 'react-native-material-ui';
import styles from './styles.js';

export default class ContactUsScreen extends React.Component {
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
              <View><Text style={styles.subPageHeadStyle}>Contact US</Text></View>
              <View>
               <Text style ={styles.longText}>

                Aliquet risus feugiat in ante metus dictum. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Nibh cras pulvinar mattis nunc sed blandit libero. Sapien pellentesque habitant morbi tristique senectus et. Nunc eget lorem dolor sed. Augue ut lectus arcu bibendum. Maecenas sed enim ut sem viverra aliquet eget sit. Gravida in fermentum et sollicitudin ac. Pulvinar mattis nunc sed blandit. Adipiscing elit ut aliquam purus. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Integer quis auctor elit sed vulputate mi sit. Et leo duis ut diam quam nulla porttitor massa. Augue eget arcu dictum varius duis at consectetur.

                Felis donec et odio pellentesque diam volutpat. Lacus laoreet non curabitur gravida arcu. Consequat interdum varius sit amet mattis vulputate. Euismod quis viverra nibh cras pulvinar mattis nunc. Risus nullam eget felis eget nunc lobortis mattis aliquam. Consequat semper viverra nam libero justo laoreet sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Netus et malesuada fames ac turpis egestas sed. Eget magna fermentum iaculis eu non diam. Penatibus et magnis dis parturient montes nascetur. Vulputate dignissim suspendisse in est ante. Praesent elementum facilisis leo vel fringilla est ullamcorper.

                Potenti nullam ac tortor vitae purus. Quis lectus nulla at volutpat diam ut. Tellus rutrum tellus pellentesque eu. Malesuada fames ac turpis egestas maecenas pharetra. Odio morbi quis commodo odio aenean sed. Elementum integer enim neque volutpat ac tincidunt vitae semper. Interdum varius sit amet mattis vulputate enim nulla. Sed arcu non odio euismod lacinia at quis. Tempor commodo ullamcorper a lacus vestibulum. Amet cursus sit amet dictum sit amet. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Ipsum nunc aliquet bibendum enim facilisis. Cras tincidunt lobortis feugiat vivamus.

                Felis donec et odio pellentesque diam volutpat. Lacus laoreet non curabitur gravida arcu. Consequat interdum varius sit amet mattis vulputate. Euismod quis viverra nibh cras pulvinar mattis nunc. Risus nullam eget felis eget nunc lobortis mattis aliquam. Consequat semper viverra nam libero justo laoreet sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Netus et malesuada fames ac turpis egestas sed. Eget magna fermentum iaculis eu non diam. Penatibus et magnis dis parturient montes nascetur. Vulputate dignissim suspendisse in est ante. Praesent elementum facilisis leo vel fringilla est ullamcorper.

                Potenti nullam ac tortor vitae purus. Quis lectus nulla at volutpat diam ut. Tellus rutrum tellus pellentesque eu. Malesuada fames ac turpis egestas maecenas pharetra. Odio morbi quis commodo odio aenean sed. Elementum integer enim neque volutpat ac tincidunt vitae semper. Interdum varius sit amet mattis vulputate enim nulla. Sed arcu non odio euismod lacinia at quis. Tempor commodo ullamcorper a lacus vestibulum. Amet cursus sit amet dictum sit amet. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Ipsum nunc aliquet bibendum enim facilisis. Cras tincidunt lobortis feugiat vivamus.
                Felis donec et odio pellentesque diam volutpat. Lacus laoreet non curabitur gravida arcu. Consequat interdum varius sit amet mattis vulputate. Euismod quis viverra nibh cras pulvinar mattis nunc. Risus nullam eget felis eget nunc lobortis mattis aliquam. Consequat semper viverra nam libero justo laoreet sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Quam nulla porttitor massa id neque aliquam vestibulum morbi. Netus et malesuada fames ac turpis egestas sed. Eget magna fermentum iaculis eu non diam. Penatibus et magnis dis parturient montes nascetur. Vulputate dignissim suspendisse in est ante. Praesent elementum facilisis leo vel fringilla est ullamcorper.

                Potenti nullam ac tortor vitae purus. Quis lectus nulla at volutpat diam ut. Tellus rutrum tellus pellentesque eu. Malesuada fames ac turpis egestas maecenas pharetra. Odio morbi quis commodo odio aenean sed. Elementum integer enim neque volutpat ac tincidunt vitae semper. Interdum varius sit amet mattis vulputate enim nulla. Sed arcu non odio euismod lacinia at quis. Tempor commodo ullamcorper a lacus vestibulum. Amet cursus sit amet dictum sit amet. Fermentum iaculis eu non diam phasellus vestibulum lorem sed. Ipsum nunc aliquet bibendum enim facilisis. Cras tincidunt lobortis feugiat vivamus.

                </Text>
            </View>
          </View>
          </ScrollView>
      );
  }
}
