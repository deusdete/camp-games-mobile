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
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Swiper from 'react-native-swiper'

import imageBG from '../assets/images/BG.png'
import TournamentCardList from '../components/Card/TournamentList'

const INIT_CATEGORIES = [
  {
    _id: '619969b6f1f8540df8677217',
    name: 'LOL',
    image_host:
      'https://cdn.battlefy.com/helix/images/games/valorant/uploads/background-1591427524278.jpg',
    image_name: '1637444022447.png',
    created_at: '2021-11-20T21:33:42.458Z',
    updated_at: '2021-11-20T21:33:42.458Z',
  },
  {
    _id: '61996aebb58c3d5ab4baffce',
    name: 'Valorant',
    image_host:
      'https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F5bb6af7ad01ea903a511067d%2F1631748072506.png?alt=media&token=70b54043-c8e4-4b1b-832b-0830818be686',
    image_name: '1637444331365.png',
    created_at: '2021-11-20T21:38:51.375Z',
    updated_at: '2021-11-20T21:38:51.375Z',
  },
  {
    _id: '61996aebb58c3d5ab4baffces',
    name: 'Valorant',
    image_host:
      'https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F583194966af5663903c2551e%2F1625254245610.png?alt=media&token=fb02f517-44cd-490f-999f-8a905d68351f',
    image_name: '1637444331365.png',
    created_at: '2021-11-20T21:38:51.375Z',
    updated_at: '2021-11-20T21:38:51.375Z',
  },
]

const INIT_TOURNAMENT = [
  {
    _id: '619969c1f1f8540df8677218',
    name: 'ZOTAC CUP Special Edition - VALORANT USA #1',
    category_id: '619969b6f1f8540df8677217',
    image_host:
      'https://cdn.battlefy.com/helix/images/games/valorant/uploads/background-1591427524278.jpg',
    image_name: '1637444033030.png',
    description:
      'Welcome to this Special Edition ZOTAC CUP tournament in partnership with Resident Evil: Welcome to Raccoon City!....',
    date_and_time: '05/12/2021 - 06/12/2021',
    code_access: 'Servidor Discord https://discord.gg/vhm3FK2Y',
    prize: '1st place team: $200\n2nd place team: $100\n3rd place team: $50',
    registration_fee: null,
    team: 'Máximo de 5 times ',
    created_at: '2021-11-20T21:33:53.037Z',
    updated_at: '2021-11-20T21:33:53.037Z',
  },
  {
    _id: '61996af4b58c3d5ab4baffcf',
    name: 'ZOTAC CUP Special Edition - VALORANT USA #1',
    category_id: '61996aebb58c3d5ab4baffce',
    image_host:
      'https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F5bb6af7ad01ea903a511067d%2F1631748072506.png?alt=media&token=70b54043-c8e4-4b1b-832b-0830818be686',
    image_name: '1637444340482.png',
    description:
      'Welcome to this Special Edition ZOTAC CUP tournament in partnership with Resident Evil: Welcome to Raccoon City!....',
    date_and_time: '05/12/2021 - 06/12/2021',
    code_access: 'Servidor Discord https://discord.gg/vhm3FK2Y',
    prize: '1st place team: $200\n2nd place team: $100\n3rd place team: $50',
    registration_fee: null,
    team: 'Máximo de 5 times ',
    created_at: '2021-11-20T21:39:00.494Z',
    updated_at: '2021-11-20T21:39:00.494Z',
  },
  {
    _id: '619969c1f1f8540df8677218a',
    name: 'ZOTAC CUP Special Edition - VALORANT USA #1',
    category_id: '619969b6f1f8540df8677217',
    image_host:
      'https://cdn.battlefy.com/helix/images/games/valorant/uploads/background-1591427524278.jpg',
    image_name: '1637444033030.png',
    description:
      'Welcome to this Special Edition ZOTAC CUP tournament in partnership with Resident Evil: Welcome to Raccoon City!....',
    date_and_time: '05/12/2021 - 06/12/2021',
    code_access: 'Servidor Discord https://discord.gg/vhm3FK2Y',
    prize: '1st place team: $200\n2nd place team: $100\n3rd place team: $50',
    registration_fee: null,
    team: 'Máximo de 5 times ',
    created_at: '2021-11-20T21:33:53.037Z',
    updated_at: '2021-11-20T21:33:53.037Z',
  },
  {
    _id: '61996af4b58c3d5ab4baffcfs',
    name: 'ZOTAC CUP Special Edition - VALORANT USA #1',
    category_id: '61996aebb58c3d5ab4baffce',
    image_host:
      'https://firebasestorage.googleapis.com/v0/b/battlefy-2f59d.appspot.com/o/user-imgs%2F5bb6af7ad01ea903a511067d%2F1631748072506.png?alt=media&token=70b54043-c8e4-4b1b-832b-0830818be686',
    image_name: '1637444340482.png',
    description:
      'Welcome to this Special Edition ZOTAC CUP tournament in partnership with Resident Evil: Welcome to Raccoon City!....',
    date_and_time: '05/12/2021 - 06/12/2021',
    code_access: 'Servidor Discord https://discord.gg/vhm3FK2Y',
    prize: '1st place team: $200\n2nd place team: $100\n3rd place team: $50',
    registration_fee: null,
    team: 'Máximo de 5 times ',
    created_at: '2021-11-20T21:39:00.494Z',
    updated_at: '2021-11-20T21:39:00.494Z',
  },
]

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [catogories, setCategories] = React.useState<Category[]>(
    INIT_CATEGORIES,
  )
  const [tournaments, setTournaments] = React.useState<Tournament[]>(
    INIT_TOURNAMENT,
  )

  React.useEffect(() => {
    // loadCategories()
  }, [])

  async function loadCategories() {
    try {
      const res = await api.get('/category')
      setCategories(res.data)
    } catch (error) {
      console.log('error', JSON.stringify(error))
    }
  }

  const renderItem = (item: Category) => (
    <TouchableOpacity>
      <Image source={{ uri: item.image_host }} style={styles.categoryImage} />
    </TouchableOpacity>
  )

  return (
    <ImageBackground style={styles.container} source={imageBG}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.swiperView}>
          <Swiper style={styles.wrapper} autoplay loop>
            {catogories.map(item => (
              <View key={item._id}>
                <ImageBackground
                  source={{ uri: item.image_host }}
                  resizeMode="cover"
                  style={styles.swiperImage}
                />
              </View>
            ))}
          </Swiper>
        </View>
        <View style={styles.categoryView}>
          <Text style={styles.subTitle}>Principais categorias:</Text>
          <FlatList
            data={catogories}
            style={styles.categoryItem}
            renderItem={({ item }) => renderItem(item)}
            horizontal
            keyExtractor={(item) => item._id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.tournamentView}>
          <Text style={styles.subTitle}>Principais categorias:</Text>
          <FlatList
            data={tournaments}
            style={styles.tournamentItem}
            renderItem={({ item }) => TournamentCardList(item)}
            keyExtractor={(item) => item._id}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: 'bold',
  },
  categoryView: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 16,
  },
  categoryItem: {
    marginTop: 20,
  },
  categoryImage: {
    height: 64,
    width: 132,
    marginRight: 16,
    borderRadius: 12,
  },
  tournamentView: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: 16,
    marginTop: 20,
  },
  tournamentItem: {
    marginTop: 20,
  },
  swiperView:{
    height: 160,
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  wrapper: {
  },
  swiperImage:{
    height: 160,
    width: 382,
    borderRadius: 12,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})
