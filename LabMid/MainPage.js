//react-native-safe-area-context
//react-native-screens
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TextInput, StyleSheet, Switch, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import QuranData from './QuranData';
//import { FlatList } from 'react-native-gesture-handler';

var c1 = '#53354A';

export default function Main() {
    //toggle button
    const [isEnabled, setIsEnabled] = useState(false);
    const [colorMode, SetColorMode] = useState('Dark');

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    const surahNamesEnglish = QuranData.surahNamesEnglish
    const surahNamesArabic = QuranData.surahNamesArabic

    //Search 
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(surahNamesEnglish);
    const [filteredData1, setFilteredData1] = useState(surahNamesArabic);

    const handleSearch = text => {
        setSearchQuery(text);
        const newData = surahNamesEnglish.filter(item =>
          item.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredData(newData);
      };

    const renderItem = ({ item }) => (
        <View style={{flexDirection: 'row', alignItems:'center', paddingLeft: 20, borderBottomColor: global.d1, borderBottomWidth: 1}}>
            <Text style={{color: global.l1, backgroundColor: global.d1, width: 30, height: 30, alignContent:'center',  textAlign: 'center', borderRadius: 15, textAlignVertical: 'center', marginRight: 30}}>{item.index}</Text>
            <View style={{flexDirection: 'row', justifyContent:'space-between', flex :0.75}}>
                <Text style={{ padding: 10, color: global.l1 }}>{item.name}</Text>
                <Text style={{ padding: 10, color: global.l1 }}>{surahNamesArabic[item.index - 1].name}</Text>
            </View>
        </View>
    );

    return (
    <View style={{  flex: 1,
                    paddingTop: 22,
                    backgroundColor: isEnabled ? '#ffffff' : '#53354A'}}>
        
        <View style={{justifyContent:'center', alignSelf:'center', borderRadius: 20, backgroundColor: global.d1,
            elevation: 30,}}>
            <Image
            source={require('./assets/img.jpeg')} // Replace 'path_to_your_image.png' with the actual path to your image
            style={{borderRadius: 20}}
        />
        </View>

        <View>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>


        <View style={{flexDirection: 'row', justifyContent: 'space-evenly',  backgroundColor: global.d1, borderRadius: 20, margin: 20, alignItems: 'center', padding: 10}}>
            <Text style={{color: l1}}>
                Search Surah Name: 
            </Text>
            <TextInput
                 style={{borderColor:global.l1, width: 150, height: 20, borderWidth: 1, color: l1}}
                 placeholder='Surah Name'
                 onChangeText={handleSearch}
                 value={searchQuery}
            
            />
        </View>


        <View style={{ flex: 1 }}>
            <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={item => item.index.toString()}
            />
        </View>

        


    </View>


    
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: c1
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });
