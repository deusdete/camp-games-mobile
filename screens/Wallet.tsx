import * as React from 'react'
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Badge, Subheading } from 'react-native-paper'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { Category, RootTabScreenProps, Tournament } from '../types'
import api from '../services/api'
import { AntDesign, Ionicons } from '@expo/vector-icons'

import Swiper from 'react-native-swiper'

import celo from '../assets/images/celo-white.png'
import TournamentCardList from '../components/Card/TournamentList'

const TRANSFER_ITENS = [
  {
    _id: '1',
    value: 2000,
    tournament_name: 'ZOTAC CUP Special...',
    date: '05/10/2021'
  },
  {
    _id: '2',
    value: 52000,
    tournament_name: 'ZOTAC CUP Special...',
    date: '05/10/2021'
  }
]

export default function WalletScreen({
  navigation,
}: RootTabScreenProps<'Wallet'>) {
  const TransferList = (item: any) => (
    <View>
      <View style={styles.infoView}>
        <Ionicons name="ios-trophy-outline" color="#fff" size={30} />
        <Text style={{ fontSize: 36, fontWeight: '600' }}>+ {item.value}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={{...styles.title, flexWrap: 'wrap'}}>{item.tournament_name}</Text>
        <Text style={styles.title}>{item.date}</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"  transparent={false}/>
    </View>
  )
  return (
    <View style={{ flex: 1 }} transparent={false}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.title}>Saldo atual</Text>
            <View style={styles.cardInfoValue}>
              <Text style={styles.textValue}>1002000</Text>
              <Image source={celo} width={48} height={48} />
            </View>
          </View>
          <TouchableOpacity style={styles.transferButton}>
            <View style={styles.textView}>
              <Text style={styles.text}>TRANSFERIR</Text>
              <AntDesign name="retweet" color="#fff" size={20} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.transferView}>
          <Text style={styles.subTitle}>Seus ingressos:</Text>
          <FlatList
            data={TRANSFER_ITENS}
            style={styles.transferItem}
            renderItem={({ item }) => TransferList(item)}
            keyExtractor={(item) => item._id}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6B8698',
  },
  subTitle: {
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#131924',
    height: 200,
    borderRadius: 12,
    marginTop: 20
  },
  cardInfo: {
    padding: 24,
  },
  cardInfoValue: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textValue: {
    fontSize: 42,
    fontWeight: '600',
    color: '#fff',
  },
  transferButton: {
    height: 56,
    backgroundColor: '#EA5B0C',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    marginRight: 5,
  },
  infoView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18
  },
  separator: {
    marginBottom: 20,
    height: 1,
  },
  transferView: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 16,
    marginTop: 20,
  },
  transferItem: {
    marginTop: 20,
  },
})
