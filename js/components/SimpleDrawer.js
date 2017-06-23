import React from 'react';
import {
	ScrollView,
	Button,
} from 'react-native';
import {
	DrawerNavigator
} from 'react-navigation';
import SampleText from './SampleText';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyHomeScreen = ({
	navigation,
	banner
}) => (
	<ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
      title="Go to a profile screen"
    />
    <Button
      onPress={() => navigation.navigate('Photos', { name: 'Jane' })}
      title="Go to a photos screen"
    />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>);

const MyNotifications = () => (
	<View>
		<Text> title1 </Text> 
		<Text> title2 </Text>
	</View>
)
MyNotifications.navigationOptions = {
	drawerLabel: 'Notifications',
	drawerIcon: ({
		tintColor
	}) => (
		<Ionicons
      	name='ios-add'
      	size={26}
      	style={{ color: tintColor }}
    	/>
	),
};

const SimpleDrawer = DrawerNavigator({
	Home: {
		screen: MyHomeScreen,
	},
	Notifications: {
		screen: MyNotifications
	}
});

export default SimpleDrawer;