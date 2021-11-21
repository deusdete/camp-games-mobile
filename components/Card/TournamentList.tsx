import * as React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Tournament } from '../../types'
import { Text, View } from '../Themed'
import { useNavigation } from '@react-navigation/native';

interface Props {
  item: Tournament,
  navigation: any
}

export default function TournamentCardList({item, navigation}: Props) {

  return (
    <TouchableOpacity onPress={() => navigation.navigate('TournamentDetail', {id: item._id})}>
      <View style={styles.tournamentCard}>
        <Image
          source={{ uri: item.image_host }}
          style={styles.tournamentImage}
        />
        <View>
          <Text style={styles.tournamentTitle}>{item.name}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <MaterialCommunityIcons name="calendar" color="#6B8698" size={18} />
            <Text style={{ marginLeft: 8 }}>{item.date_and_time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tournamentItem: {
    marginTop: 20,
  },
  tournamentCard: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
  },
  tournamentImage: {
    height: 64,
    width: 84,
    marginRight: 16,
    borderRadius: 12,
  },
  tournamentTitle: {
    flex: 1,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
})
