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
import {
  Category,
  RootStackParamList,
  RootTabScreenProps,
  Tournament,
} from '../types'
import api from '../services/api'
import { AntDesign, Ionicons } from '@expo/vector-icons'

import { useRoute } from '@react-navigation/native'

import trophy1 from '../assets/images/trophy1.png'
import { ActivityIndicator, Colors } from 'react-native-paper'

const INIT_TOURNAMENT = {
  _id: '',
  name: '',
  category_id: '',
  image_host: '',
  image_name: '',
  description: '',
  date_and_time: '',
  code_access: '',
  prize: '',
  registration_fee: '',
  team: '',
  created_at: '',
  updated_at: '',
}

export default function TournamentDetail() {
  const route = useRoute()
  const [loading, setLoading] = React.useState(true)
  const [tournament, setTournament] = React.useState<Tournament>(
    INIT_TOURNAMENT,
  )

  React.useEffect(() => {
    const { id }: any = route.params
    console.log('id', id)
    getTournament(id)
  }, [])

  async function getTournament(id: string) {
    try {
      const res = await api.get(`/tournament/${id}`)
      console.log('tournament', res.data)
      setTournament(res.data)
      setLoading(false)
    } catch (error) {}
  }

  return (
    <View style={{ flex: 1 }} transparent={false}>
      <ScrollView>
        {loading ? (
          <ActivityIndicator animating={true} color={Colors.red800} />
        ) : (
          <View style={styles.container}>
            <View style={{ marginTop: 20 }}>
              <ImageBackground
                source={{ uri: tournament.image_host }}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ borderRadius: 12 }}
              />
            </View>
            <View>
              <Text style={styles.text}>{tournament.name}</Text>
              <Text style={{marginTop: 5, fontSize: 12}}>{tournament.date_and_time}</Text>
              <Text style={styles.description}>{tournament.description}</Text>
            
            </View>
            <View  style={styles.cardView}>
              <View style={{marginVertical: 20,flexDirection: 'row', justifyContent: 'space-around'}}>
                <Image source={trophy1} width={48} height={48} />
                <Text>{tournament.prize}</Text>
              </View>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.description}>{tournament.team}</Text>
                {tournament.registration_fee && <Text style={styles.description}>{tournament.date_and_time}</Text>}
                <Text style={styles.description}>{tournament.code_access}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.description}>How to Play
                  All games should be played on a central host, if that is not possible and teams cannot agree on the server, then the winner of the /coinflip will host the game.
                  The hosting team will then friend request and invite their opponent to the game session and begin their match.
                  Teams must take screenshots after the game has concluded and be able to provide this info when requested.
                  The winning team of the match is required to upload the screenshot as evidence and input the results on Battlefy.
                  Disconnections
                  In the event that a player may request a reconnect or re-host, this will only be allowed a max of one time per match.
                  In the events that a re-host is needed, please make sure to take a screenshot of the scoreboard before ending the game.
                  The round count will stay the same upon reconnect/re-hosting of the match.
                  In the event of a re-host, the team that requested the re-host has a max of 5 minutes to return to the lobby or they will receive a loss for the match.
                  Any extra time for the team to reconnect must be requested from the admin team. Granted extra time is at Admin discretion.
                  Map Veto
                  The winner of the /coinflip (Completed in Battlefy) will pick Team A or Team B
                  Best of 1:
                  Team A Bans 1 Map
                  Team B Bans 1 Map
                  Team A Bans 1 Map
                  Team B Bans 1 Map
                  Team A Bans 1 Map
                  Team B Picks Side for Match
                  Best of 3: (3rd Place Match & Finals only)
                  Game 1: Team B Picks the Map, Team A Picks the Side
                  Game 2: Team A Picks the Map, Team B Picks the Side
                  Game 3: Team B Picks the Map, Team A Picks the Side
                  Maps:
                  Bind
                  Haven
                  Split
                  Ascent
                  Breeze
                  Icebox</Text>
            </View>
          </View>
        )}
      </ScrollView>
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
  image: {
    height: 160,
    borderRadius: 12,
    marginBottom: 20
  },
  cardView:{
    backgroundColor: '#131924',
    borderRadius: 12,
    padding: 16,
    marginTop: 20
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  description:{
    fontSize: 14,
    color: '#6B8698',
    marginTop: 10,
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  separator: {
    marginBottom: 20,
    height: 1,
  },
})
