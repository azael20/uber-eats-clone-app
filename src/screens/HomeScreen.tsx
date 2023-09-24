import React, {useEffect, useState} from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import useRestaurantsService from "../api";
import { SwitchButton } from '../components/SwitchButton';
import { Icons, Images } from '../assets/routes/routes';
import { LocationProps, StackProps } from '../interfaces';
import { iconsData } from '../api/icons';

export const HomeScreen = ({ navigation }: StackProps) => {
    const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getRestaurantsFromApi } = useRestaurantsService();
  const [selectedButton, setSelectedButton] = useState(0);

  const restaurantsArray = [{
    "id": "55OzpXmtQIL9pQrDB_u_gw",
    "alias": "patsys-restaurant-and-bakery-chama",
    "name": "Patsy's Restaurant & Bakery",
    "image_url": "",
    "is_closed": false,
    "url": "https://www.yelp.com/biz/patsys-restaurant-and-bakery-chama?adjust_creative=AlEN5t5MIQyETX008FUiGA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AlEN5t5MIQyETX008FUiGA",
    "review_count": 1,
    "categories": [
      {
        "alias": "bakeries",
        "title": "Bakeries"
      }
    ],
    "rating": 5,
    "coordinates": {
      "latitude": 36.8901374,
      "longitude": -106.58292114607562
    },
    "transactions": [],
    "location": {
      "address1": "1810 S State Rd 17",
      "address2": "",
      "address3": "",
      "city": "Chama",
      "zip_code": "87520",
      "country": "US",
      "state": "NM",
      "display_address": [
        "1810 S State Rd 17",
        "Chama, NM 87520"
      ]
    },
    "phone": "+15757562108",
    "display_phone": "(575) 756-2108",
    "distance": 18175.415783654345
  },
    {
      "id": "55OzpXmtQIL9pQrDB_u_g1w",
      "alias": "patsys-restaurant-and-bakery-chama",
      "name": "Patsy's Restaurant & Bakery",
      "image_url": "",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/patsys-restaurant-and-bakery-chama?adjust_creative=AlEN5t5MIQyETX008FUiGA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AlEN5t5MIQyETX008FUiGA",
      "review_count": 1,
      "categories": [
        {
          "alias": "bakeries",
          "title": "Bakeries"
        }
      ],
      "rating": 5,
      "coordinates": {
        "latitude": 36.8901374,
        "longitude": -106.58292114607562
      },
      "transactions": [],
      "location": {
        "address1": "1810 S State Rd 17",
        "address2": "",
        "address3": "",
        "city": "Chama",
        "zip_code": "87520",
        "country": "US",
        "state": "NM",
        "display_address": [
          "1810 S State Rd 17",
          "Chama, NM 87520"
        ]
      },
      "phone": "+15757562108",
      "display_phone": "(575) 756-2108",
      "distance": 18175.415783654345
    },
    {
      "id": "55OzpXmtQIL9pQrDB_u3_gw",
      "alias": "patsys-restaurant-and-bakery-chama",
      "name": "Patsy's Restaurant & Bakery",
      "image_url": "",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/patsys-restaurant-and-bakery-chama?adjust_creative=AlEN5t5MIQyETX008FUiGA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AlEN5t5MIQyETX008FUiGA",
      "review_count": 1,
      "categories": [
        {
          "alias": "bakeries",
          "title": "Bakeries"
        }
      ],
      "rating": 5,
      "coordinates": {
        "latitude": 36.8901374,
        "longitude": -106.58292114607562
      },
      "transactions": [],
      "location": {
        "address1": "1810 S State Rd 17",
        "address2": "",
        "address3": "",
        "city": "Chama",
        "zip_code": "87520",
        "country": "US",
        "state": "NM",
        "display_address": [
          "1810 S State Rd 17",
          "Chama, NM 87520"
        ]
      },
      "phone": "+15757562108",
      "display_phone": "(575) 756-2108",
      "distance": 18175.415783654345
    },
    {
      "id": "55OzpXmtQILa9p6QrDB_u_gw",
      "alias": "patsys-restaurant-and-bakery-chama",
      "name": "Patsy's Restaurant & Bakery",
      "image_url": "",
      "is_closed": false,
      "url": "https://www.yelp.com/biz/patsys-restaurant-and-bakery-chama?adjust_creative=AlEN5t5MIQyETX008FUiGA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=AlEN5t5MIQyETX008FUiGA",
      "review_count": 1,
      "categories": [
        {
          "alias": "bakeries",
          "title": "Bakeries"
        }
      ],
      "rating": 5,
      "coordinates": {
        "latitude": 36.8901374,
        "longitude": -106.58292114607562
      },
      "transactions": [],
      "location": {
        "address1": "1810 S State Rd 17",
        "address2": "",
        "address3": "",
        "city": "Chama",
        "zip_code": "87520",
        "country": "US",
        "state": "NM",
        "display_address": [
          "1810 S State Rd 17",
          "Chama, NM 87520"
        ]
      },
      "phone": "+15757562108",
      "display_phone": "(575) 756-2108",
      "distance": 18175.415783654345
    }]


  useEffect(() => {
        getRestaurantsFromApi()
            .then(res => {
              setRestaurants(res);
              setIsLoading(false);
            })
    // setIsLoading(false);
    // setRestaurants(restaurantsArray);
    }, []);

  const handleButtonChange = (index) => {
    setSelectedButton(index)
  }

  const handlePress = (column, index) =>  {

    if (column === '1'){
      switch (index) {
        case 0:
          console.log('American');
          break;
        case 1:
          console.log('Grocery');
          break;
        default:
          console.log('Error')
      }
    } else {
      switch (index) {
        case 0:
          console.log('Convenience');
          break;
        case 1:
          console.log('Alcohol');
          break;
        case 2:
          console.log('Pet Supplies');
          break;
        case 3:
          navigation.navigate('CategoriesScreen');
          break;
        default:
          console.log('Error')
      }
    }
  }

    return (
        <View className='flex-1 bg-gray-100'>
            {/*Header*/}
            <View className='flex-1 mb-3 bg-white px-5'>
                {/*Switch Buttons*/}
              <View className='py-5 flex-row justify-center'>
                <SwitchButton label='Delivery' selected={selectedButton === 0} onPress={() => handleButtonChange(0)}/>
                <SwitchButton label='Pickup' selected={selectedButton === 1} onPress={() => handleButtonChange(1)}/>
                <SwitchButton label='Dine-in' selected={selectedButton === 2} onPress={() => handleButtonChange(2)}/>
              </View>
              {/*Grid View*/}
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingBottom: 100,
                }}
              >
              {/* Column 1 */}
                <View className='flex-row mt-2'>
                  {
                    iconsData.slice(0,2).map((item, index) => (
                      <TouchableOpacity
                        key={`grid1-Item-${item.id}`}
                        activeOpacity={0.8}
                        onPress={() => handlePress('1', index)}
                        className='flex-1 bg-gray-100 m-1 h-24 rounded-md p-2 justify-end'
                      >
                        <Image source={item.icon} className='absolute top-0 right-0 w-14 h-14 flex-1' resizeMode={'contain'}/>
                        {index === 1 &&
                          <View className='absolute -top-2 right-0 left-12 w-20 bg-green-600 rounded-full'>
                              <Text className='text-white text-center'>Promo</Text>
                          </View>
                        }
                        <Text className='text-xl font-semibold'>{item.title}</Text>
                      </TouchableOpacity>
                    ))
                  }
                </View>
                {/* Column 2 */}
                <View className='flex-row'>
                  {
                    iconsData.slice(2,6).map((item, index) => (
                      <View key={`grid2-Item-${item.id}`} className='flex-1'>
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => handlePress('2', index)}
                          className='h-24 bg-gray-100 m-1 rounded-md justify-center items-center'
                        >
                          <Image source={item.icon} className={`flex-1 ${item.icon === Icons.more ? 'w-7' : 'w-16'}`} resizeMode={'contain'}/>
                        </TouchableOpacity>
                        <Text className='text-center font-semibold'>{item.title}</Text>
                      </View>
                    ))
                  }
                </View>
                {
                   isLoading ? (
                     <View className='flex-1 justify-center'>
                       <ActivityIndicator
                         color={'#6fb679'}
                       />
                       <Text className={'text-xs text-center mt-3 text-gray-400 font-light'}>Loading stores...</Text>
                     </View>
                   ) : restaurants.map((item: LocationProps, index) => {
                    return (
                      <View
                        style={{ flex: 1, marginTop: '5%' }}
                        key={`restaurantItem-${item.id}`}
                      >
                        {item.image_url.length ?
                          <Image
                            className='w-full h-40'
                            source={{ uri: item.image_url }}
                          /> :
                          <Image
                            className='w-full h-40'
                            source={Images.landing}
                          />
                        }
                        {/*Info Restaurant*/}
                        <View>
                          {/*Name*/}
                          <View className='flex-row justify-between mt-1 items-center'>
                            <Text className='text-black text-xl font-medium'>Cardinal Chips</Text>
                            {/*Rating*/}
                            <View className='bg-gray-200 rounded-full w-9 h-9 items-center justify-center'>
                              <Text className='font-semibold text-center'>4.3</Text>
                            </View>
                          </View>
                          <Text className='text-gray-600'>$0.29 Delivery Fee • 10-25 min</Text>
                        </View>
                      </View>
                    );
                  })
                }
              </ScrollView>
            </View>
        </View>
    );
};
