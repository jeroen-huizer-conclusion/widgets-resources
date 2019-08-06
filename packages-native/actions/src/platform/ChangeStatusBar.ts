// This file was generated by Mendix Modeler.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

import ReactNative, { StatusBarAnimation, StatusBarStyle } from "react-native";

type Style = "DefaultStyle" | "LightContentStyle" | "DarkContentStyle";

/**
 * @param {"NativeMobileActions.StatusBarStyle.DefaultStyle"|"NativeMobileActions.StatusBarStyle.LightContentStyle"|"NativeMobileActions.StatusBarStyle.DarkContentStyle"} style - If empty, the current style is not changed.
 * @param {boolean} hidden
 * @param {boolean} animateChanges
 * @param {string} backgroundColor - If empty, the current background color is not changed.
 * @param {boolean} translucent
 * @param {boolean} networkActivityIndicatorVisible
 * @param {"NativeMobileActions.StatusBarHideShowAnimation.none"|"NativeMobileActions.StatusBarHideShowAnimation.fade"|"NativeMobileActions.StatusBarHideShowAnimation.slide"} animateHideShow - If empty, the default value 'none' is used.
 * @returns {boolean}
 */
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
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

    // eslint-disable-next-line @typescript-eslint/no-var-requires
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