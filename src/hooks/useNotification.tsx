import notifee, {
  TimestampTrigger,
  TriggerType,
  RepeatFrequency,
} from '@notifee/react-native';

export const useNotification = () => {
  async function displayNotification(title: string, body: string) {
    // Create a channel required for Android Notifications
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Required for IOS -- DTL
    await notifee.requestPermission();
    // Display Notification
    const notificationId = notifee.displayNotification({
      // id: string
      title: title,
      body: body,
      android: {
        channelId,
        // small icon if needed
      },
    });
    return notificationId;
  }

  async function displayTriggerNotification(
    title: string,
    body: string,
    timestamp: number,
    RepeatFrequency: RepeatFrequency | undefined = undefined,
  ) {
    // Create a channel required for Android Notifications
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Createv a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: timestamp, // fire at the provided date
      repeatFrequency: RepeatFrequency,
    };

    // Create a trigger notification
    const triggerNotificationId = await notifee.createTriggerNotification(
      {
        title: title,
        body: body,
        android: {
          channelId,
        },
      },
      trigger,
    );
    return triggerNotificationId;
  }

  // get all trigger notifications
  async function getTriggerNotificationIds() {
    const triggerNotificationIds = await notifee.getTriggerNotificationIds();
    return triggerNotificationIds;
  }

  // cancel all or specific notifications
  async function cancelTriggerNotifications(
    notificationId: string[] | undefined,
  ) {
    await notifee.cancelTriggerNotifications(notificationId);
  }

  // cancel all notifications
  async function cancelAllNotifications(): Promise<void> {
    await notifee.cancelAllNotifications();
  }

  // cancel notification via notificaition or tag
  async function cancelNotification(
    notificationId: string,
    tag: string | undefined = undefined,
  ) {
    await notifee.cancelNotification(notificationId, tag);
  }

  return {
    displayNotification,
    displayTriggerNotification,
    getTriggerNotificationIds,
    cancelTriggerNotifications,
    cancelAllNotifications,
    cancelNotification,
  };
};
