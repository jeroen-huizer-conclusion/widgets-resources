// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import ReactNativeFirebase from "react-native-firebase";

/**
 * @param {string} notificationId - This field is required.
 * @returns {boolean}
 */
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
function CancelScheduledNotification(notificationId?: string): boolean {
    // BEGIN USER CODE

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const firebase: typeof ReactNativeFirebase = require("react-native-firebase");

    if (!notificationId) {
        throw new TypeError("Input parameter 'Notification id' is required");
    }

    firebase.notifications().cancelNotification(notificationId);
    return true;

    // END USER CODE
}