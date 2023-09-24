import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { iconsData } from '../api/icons';
import { Icons } from '../assets/routes/routes';

export const CategoriesScreen = () => {
  return (
    <View className='flex-1 flex-wrap justify-center mx-3'>
      <View>
        <Text className='text-center font-semibold text-xl my-3'>All categories</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => `categories-${index}-${item.id}`}
        style={{ flexDirection: 'row'}}
        contentContainerStyle={{ flex: 1 }}
        data={iconsData}
        renderItem={({ item, index}) => (
          <View className='flex-1'>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => null}
              className='bg-gray-100 m-2 rounded-md justify-center items-center p-4'
            >
              <Image source={item.icon} className={'w-12 h-12'} resizeMode={'contain'} />
            </TouchableOpacity>
            <Text className='text-center font-semibold bottom-1'>{item.title}</Text>
          </View>
        )}
        numColumns={4}
      />
    </View>
  );
};

{/*{*/}
{/*  iconsData.map((item, index) => (*/}
{/*    <View key={`grid2-Item-${item.id}`}>*/}
{/*      <TouchableOpacity*/}
{/*        activeOpacity={0.8}*/}
{/*        onPress={() => null}*/}
{/*        className='w-1/4 bg-gray-100 m-1 rounded-md justify-center items-center'*/}
{/*      >*/}
{/*        <Image source={item.icon} className={`w-16`} resizeMode={'contain'}/>*/}
{/*      </TouchableOpacity>*/}
{/*      <Text className='text-center font-semibold'>{item.title}</Text>*/}
{/*    </View>*/}
{/*  ))*/}
{/*}*/}
