import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image,  } from 'react-native';
import Verdura1 from '../assets/verdura3.jpg';
import Verdura2 from '../assets/verdura1.jpg';
import Verdura3 from '../assets/verdura2.jpg';
import { Size, Colors } from '../Layout';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          image: Verdura1,
          title: 'Hectarea 1',
          description: '800 Km2',
          date: '04 Nov 2019 18:22',
          state: 'NOne'
        },
        {
          image: Verdura2,
          title: 'Hectarea 2',
          description: '1280 Km2',
          date: '04 Nov 2019 18:22',
          state: 'NOne'
        },
        {
          image: Verdura3,
          title: 'Hectarea 3',
          description: '3200 Km2',
          date: '04 Nov 2019 18:22',
          state: 'NOne'
        },
        {
          image: Verdura1,
          title: 'Hectarea 4',
          description: '800 Km2',
          date: '04 Nov 2019 18:22',
          state: 'NOne'
        },
      ]
    }
  }
  render() {
    return (
      <ScrollView style={{ paddingTop: Size.col05, backgroundColor: '#F4F4F4' }}>
        {this.state.data.map((d, i) => {
          return (
            <View key={i} style={s.b} onTouchStart={() => this.props.navigation.navigate('T', {image: d.image, title: d.title, description: d.description, date: d.date, state: d.state})} >
              <View>
                <Image source={d.image} style={s.i} />
              </View>
              <View style={s.d}>
                <Text style={s.t}>{d.title}</Text>
                <Text style={s.dd}>{d.description}</Text>
                <View>
                  <Text>
                    {d.date}
                  </Text>
                </View>
                <Text>{d.state}</Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

const s = StyleSheet.create({
  b: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Size.col105,
    height: Size.col45,
    marginLeft: Size.col1,
    marginBottom: Size.col1,
    backgroundColor: Colors.Withe,
    borderRadius: Size.border,
    elevation: 5,
    zIndex: 1
  },
  i: {
    width: Size.col4,
    height: Size.col4,
    borderRadius: Size.border,
    right: Size.col05,
  },
  d: {
    justifyContent: 'space-evenly'
  },
  t: {
    fontSize: Size.title,
  },
  dd: {
    fontSize: Size.text
  }
})
