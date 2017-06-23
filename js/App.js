import React from 'react';
import {
	Platform,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	View,
	Text,
} from 'react-native';
import {
	StackNavigator
} from 'react-navigation';
import Banner from './components/Banner';
import SimpleStack from './components/SimpleStack';
import SimpleTabs from './components/SimpleTabs';
import SimpleDrawer from './components/SimpleDrawer';

const ExampleRoutes = {
	SimpleStack: {
		name: 'Stack Example',
		description: 'A card stack',
		screen: SimpleStack,
		params: 'test'
	},
	SimpleTabs: {
		name: 'Tabs Example',
		description: 'A card tabs',
		screen: SimpleTabs,
	},
	SimpleDrawer: {
		name: 'Drawer Example',
		description: 'A card drawer',
		screen: SimpleDrawer,
	}
};

const MainScreen = ({
	navigation
}) => (
	<ScrollView>
		<Banner />
	   {Object.keys(ExampleRoutes).map((routeName: string) => (
		<TouchableOpacity 
		  key={routeName}
		  onPress={()=>{
		  	const {path, params, screen} = ExampleRoutes[routeName]; //params从哪来
		  	const { router } = screen; //screen 属性值有哪些
		  	const action = path && router.getActionForPathAndParams(path, params);
		  	navigation.navigate(routeName, {}, action);
		  }}
		>
		 <View style={styles.item}>
          <Text style={styles.title}>{ExampleRoutes[routeName].name}</Text>
          <Text style={styles.description}>
            {ExampleRoutes[routeName].description}
          </Text>
        </View>
		</TouchableOpacity>
		))}
	</ScrollView>
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