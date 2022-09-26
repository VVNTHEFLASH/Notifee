/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useNotification} from './src/hooks/useNotification';

const App = () => {
  const {
    displayNotification,
    displayTriggerNotification,
    cancelAllNotifications,
  } = useNotification();

  const handleDisplayNotification = async () => {
    // Display Notification
    displayNotification('NotificationTitle', 'Notification Body');
  };

  const handleCreateTriggerNotification = () => {
    // Display notificaition in 3 seconds
    displayTriggerNotification(
      'NotificationTitle',
      'NotificationBody',
      Date.now() + 3000,
    );
  };
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={[styles.center, styles.sectionContainer]}>
        <Button
          title="Display Notification"
          onPress={() => {
            handleCreateTriggerNotification();
          }}
        />
        <Button
          title="Create Trigger Notification"
          onPress={() => {
            handleCreateTriggerNotification();
          }}
        />
        <Button
          title="Cancel All Notification"
          onPress={() => {
            cancelAllNotifications();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
