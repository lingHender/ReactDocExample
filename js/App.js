import React from 'react';
import {
	Platform,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
} from 'react-native';
import {
	StackNavigator
} from 'react-navigation';
import SimpleStack from './components/SimpleStack';
import SimpleTabs from './components/SimpleTabs';

const ExampleRoutes = {
	SimpleStack: {
		name: 'Stack Example',
		description: 'A card stack',
		screen: SimpleStack,
	},
	SimpleTabs: {
		name: 'Tabs Example',
		description: 'A card stack',
		screen: SimpleTabs,
	},
};

const MainScreen = ({
	navigation
}) => (
	<View>
		<TouchableOpacity 
		  key='SimpleStack'
		  onPress={()=>{
		  	const {path, params, screen} = ExampleRoutes['SimpleStack'];
		  	const { router } = screen;
		  	const action = path && router.getActionForPathAndParams(path, params);
		  	navigation.navigate('SimpleStack', {}, action);
		  }}
		>
		 <View style={styles.item}>
          <Text style={styles.title}>{ExampleRoutes['SimpleStack'].name}</Text>
          <Text style={styles.description}>
            {ExampleRoutes['SimpleStack'].description}
          </Text>
        </View>
		</TouchableOpacity>
	</View>
)

const AppContainer = StackNavigator({
	...ExampleRoutes,
	Index: {
		screen: MainScreen
	}
}, {
	initialRouteName: 'Index',
	headerMode: 'none',
	mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

export default AppContainer;

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#fff',
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ddd',
	},
	image: {
		width: 120,
		height: 120,
		alignSelf: 'center',
		marginBottom: 20,
		resizeMode: 'contain',
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#444',
	},
	description: {
		fontSize: 13,
		color: '#999',
	},
});