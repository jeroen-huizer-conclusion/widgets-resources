// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import ReactNative, { StatusBarAnimation, StatusBarStyle } from "react-native";

type Style = "DefaultStyle" | "LightContentStyle" | "DarkContentStyle";

/**
 * @param {"NativeMobileActions.StatusBarStyle.DefaultStyle"|"NativeMobileActions.StatusBarStyle.LightContentStyle"|"NativeMobileActions.StatusBarStyle.DarkContentStyle"} style
 * @param {boolean} hidden
 * @param {boolean} animateChanges
 * @param {string} backgroundColor - Android only
 * @param {boolean} translucent - Android only
 * @param {boolean} networkActivityIndicatorVisible - iOS only
 * @param {"NativeMobileActions.StatusBarHideShowAnimation.none"|"NativeMobileActions.StatusBarHideShowAnimation.fade"|"NativeMobileActions.StatusBarHideShowAnimation.slide"} animateHideShow - iOS only
 * @returns {boolean}
 */
function ChangeStatusBar(
    style?: Style,
    hidden?: boolean,
    animateChanges?: boolean,
    backgroundColor?: string,
    translucent?: boolean,
    networkActivityIndicatorVisible?: boolean,
    animateHideShow?: StatusBarAnimation
): boolean {
    // BEGIN USER CODE

    const RN: typeof ReactNative = require("react-native");

    if (style) {
        RN.StatusBar.setBarStyle(mapStyleEnum(style), animateChanges);
    }

    if (hidden !== undefined) {
        RN.StatusBar.setHidden(hidden, animateHideShow);
    }

    if (backgroundColor && RN.Platform.OS === "android") {
        RN.StatusBar.setBackgroundColor(backgroundColor, animateChanges);
    }

    if (translucent !== undefined && RN.Platform.OS === "android") {
        RN.StatusBar.setTranslucent(translucent);
    }

    if (networkActivityIndicatorVisible && RN.Platform.OS === "ios") {
        RN.StatusBar.setNetworkActivityIndicatorVisible(networkActivityIndicatorVisible);
    }

    return true;

    function mapStyleEnum(styleEnum: Style): StatusBarStyle {
        switch (styleEnum) {
            case "DefaultStyle":
                return "default";
            case "LightContentStyle":
                return "light-content";
            case "DarkContentStyle":
                return "dark-content";
        }
    }

    // END USER CODE
}