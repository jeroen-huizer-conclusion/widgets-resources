import { Dimensions, ImageStyle, ImageURISource, Platform, TextStyle, ViewStyle } from "react-native";

// Gray Colors
export const gray = {
    darkest: "#222",
    darker: "#444",
    dark: "#666",
    regular: "#888",
    light: "#aaa",
    lighter: "#ccc",
    lightest: "#eee"
};

// Border Style
export const border = {
    color: "#ddd",
    radius: Platform.select({ ios: 10, android: 5 })
};

export const spacing = {
    smallest: 5,
    smaller: 10,
    small: 15,
    regular: 20,
    large: 25,
    larger: 30,
    largest: 40
};

// Brand Style
export const brand = {
    primary: "#0595DB",
    success: "#76CA02",
    warning: "#f99b1d",
    danger: "#ed1c24"
};

// Font Styles
export const font = {
    size: 16,
    sizeSmall: 12,
    sizeLarge: 18,
    sizeH1: 31,
    sizeH2: 26,
    sizeH3: 24,
    sizeH4: 18,
    sizeH5: 14,
    sizeH6: 12,
    color: gray.regular,
    weightLight: "100" as TextStyle["fontWeight"],
    weightNormal: "normal" as TextStyle["fontWeight"],
    weightSemiBold: "500" as TextStyle["fontWeight"],
    weightBold: "bold" as TextStyle["fontWeight"],
    family: Platform.select({ ios: "System", android: "normal" })
};

// Button Styles
export const button = {
    fontSize: font.size,
    fontFamily: font.family,
    borderRadius: Platform.select({ ios: border.radius + 16, android: border.radius }),

    primary: {
        color: "#FFF",
        borderColor: brand.primary,
        background: brand.primary,
        label: {
            color: brand.primary,
            fontSize: font.sizeLarge,
            fontFamily: font.family,
            marginTop: spacing.small,
            marginBottom: Platform.select({ ios: spacing.smallest, android: 0 }),
            marginLeft: Platform.select({ ios: 0, android: spacing.large }),
            alignSelf: Platform.select({
                ios: "center" as TextStyle["alignSelf"],
                android: "flex-end" as TextStyle["alignSelf"]
            }),
            fontWeight: font.weightNormal
        }
    }
};

export const TextArea: TextStyle = {
    fontSize: font.size,
    fontFamily: font.family,
    color: gray.dark,
    borderColor: gray.lightest,
    backgroundColor: "#FFF",
    padding: spacing.smaller,
    ...Platform.select({
        ios: {
            borderTopWidth: 1,
            borderLeftWidth: 0,
            borderBottomWidth: 1,
            borderRightWidth: 0
        },
        android: {
            borderWidth: 1,
            borderRadius: border.radius
        }
    }),
    height: 100,
    textAlignVertical: "top"
};

export const Toggle: InputType = {
    label: {
        color: gray.darker,
        fontFamily: font.family,
        fontSize: font.size
    },
    input: {
        margin: 0,
        padding: 0,
        marginRight: Platform.select({ ios: 0, android: -5 })
    }
};

interface InputType {
    label: TextStyle;
    input: TextStyle;
}

/**
 * Specific styles
 */

export const elementStyle: ViewStyle = {
    position: "absolute",
    right: 0,
    top: 0,
    marginTop: Dimensions.get("window").height / 2 - 100,
    zIndex: 9999
};

export const childElementStyle: ViewStyle = {
    flexDirection: "column",
    borderRadius: 7,
    backgroundColor: "#fff",
    shadowColor: "000",
    shadowOpacity: 0.3,
    shadowOffset: {
        width: 2,
        height: 5
    },
    elevation: 2.5
};

export const imageStyle: ImageStyle = {
    width: 30,
    height: 30,
    resizeMode: "contain",
    margin: 5
};

export const mendixLogo: ImageURISource = {
    uri:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAHmUExURUdwTAiZ3QWV2wWW2waV2wWV2wWV3AeV2wWV2wWV2waV2z+//////wWV23///yqq/wWV2waW3hOc6w2h5AWV2waV3Aaa3Ryq4gWV3Qma4wWV2waV2wWV2wWV2wWW3AaW2wWV2wWV2zOZ/wWV2wub3QWV2wWV2wWV2wWV3AWW3AWV2weX3wWV2wWV2wWV3QWV2wWV3CS2/wWV2wWX2wWW3AWV2wWX2wWV2wWV2wWW3AaX3BKj7Aeb2xGZ3QWV2waW3A+W4QWV2waV3AWV2waW3AWV2wWV2wWV2wWV2wWV2wWV2wWV3AWZ2wWV2weV2wWW3QWV2wWV2waV2wWW2w+f3weX2wWV3AiY3gWV2wWV2wiV3gyd5gWV2wiZ3QWV2xei5wWW2wWW2waX2wqf3wWW3QWV2wWV2wWW2wWV2wWa2wWV2wWV3AWW3wWV2wWW3AWW2waW2wWV2waV2wWW3AaV2wWW3AaW3AWV2wWW3AiV2wea4B+f3weW2waV3QeY2wyZ5QWV2wWW2waV3AeX2wWV2wWV2weW3QaV3AaV2weW3AWV3AWW2wWV3AaW2waX3QmX4gmW3waV3AaV2weW4Q6b4gaV3wWV3QWV2wWV3AaX3QeV3VWq/wmc4QWW2waV2wWV3AiW3QWV243L8pYAAAChdFJOUwAe55fP84xBy+l0BAH+AgbeJw0TtpomCWMc9aXk91jR2v0FmBeC9PzbhLwg+IpcxJMHj2Vf5lbq3K9RDiQP7HwR45vrfcmW5YftgLcy721a8PKmyhBssT6r+j8V+zysC4jWTxhiwrNdVyv2YTFexYl62M6Zp2Z31YYdIQhrTUgUusDNQPnIaW97QpTusKNxGzh+ciISKS7gv1RqAxqQ0Lg9SEM3PAAAAs5JREFUWMPt1/VzGkEUB/AtgQBFEggSICShESDWuLu71t3d3VN3d2/ff1pY9h17TK8zud1OZzq8n/a7m/uwc1xuH4T8pcozxxerliy6aqlqMW7OU3Hl4/MgWPPj5Wmv2QQSytTMOLsXJJXXTsF6kFb1Sa8TJFYnIf4imWCRnxSD1ComHXLBDlIqFywlYblgmIDkyoJZMAv+v2D0RKjxrKcXY82tUKPXM7Yy8OIqVl6ofF5Az66G4vzkSqyui0bnXAzgG/5ZdT4CfWzGNaQCjXhE58beKMf1ugMAZQ1KtOWA6SuGffhCXcMm+uD34PA7rqG4arzE9xe2KggpY7bF6yy/qNQA1S3KVnUDVLAAP3FcSK+7ifEZaICEvL3js3PIsrk7HX/A9y/8FqOHWXrp0ARfJ5LFrcThRNzvV+4wwGd+i4+xmxkBLTBAP+qCEunqNYyrASYK0lt8guPjoAnO0bgBYyuNIQ6EsvQWH7DRzjFt8GGqo8B4ksbTPBg5hlv02NgoDtpgLY0LGEdpbOFBWIsJH8Hq8B/A3FTviDGHRoMKhLqMdnoTCIItbpW3BURBqOU9p1Ec3OziwPMgDsIpDiyRALb1cOBRCWCT6h7eFgbPOFXf8kZhcHvGc7hDEDyHv+dw9kqNEBi8zILHjNO7hMBXbGxO/1N3WQXAD+xta7cA3MD5JgHwExseSr7ZlUenRDf4EV9d7cmFPbjwSC8Yfc9G6+lCiXJ+PdUJjrKBuy11XSuudN/VBRbiqVTBLt/tVF+4UhDbgL3YJ8BBXOoZ0gNilSnfQTseVOS+CtxmZRWk0YHxCI0Ra0ZF0s/dBM71ZlviLJgF/yXokOs5iEEuaCAjcsF7yrtXUlUQn9Sb6PARMigTHEy8uvsH5HkD/cnDwGWV5VlZ7+0yyvGMPuV0nJwR52Ym+d/a7tmpoIgWnJp1Z561tsC0WWdNB5TTmfwCFodDv+xoX6wAAAAASUVORK5CYII="
};

export const commentIcon: ImageURISource = {
    uri:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAC/VBMVEUAAAAA//8Jl9kElNsGldoFlNoGldwFlNoEldsFltsFldsFldwFldsFldsFldsFldsGldsFldsFldsGltsFldsFlNsElNoFltwElNoGmNsAi9EAgL8GlNsGldsGlNsEldsFltsFldsEldsFlNsFldwEltsElN0AnNUIltoFldwFlNsFldsEldsEltsAjuMIk9gFltoFldsEldsFlNsFldsEltoAktsAqtUEldwFldwFldsFldsGldwFldwIlN4HldsFlNoFldsFlNsGldsHltgElNoFlNsFldsFldsFltwAlNcJktsFldsEldoDlNoAgP8FltwFltsFldsEltsAmcwFldoHktsFldsFldsFldsFldwFltsGldwFltwElNsGlNsFltoGldsFldsEldsFldsFlNsGk90FldsFldsGltsFlNsFlNsHldwAld8GldwEldwFldsFldsFltsEld0AktsHmN0GltsGltsEl9wFldsGlNsAl9wFk90FldoFldsGldoFltoEk9sGldsFldwGldwFldsAmeYFktkFltsAldUFldsKk9gAqv8GldsFldsFld0Gk9oFldsEltsEk9wAndgElNsFldsEk9sGldoFlNsEldoHltsAluEElNsFldsFldsFldsAktsFldsAj98FldwGlNwAmd0FldsGltoFldsAn98FlNsAmdkFldoEldsFldsGltwEldoFldsFldsFldwGldsDlN0FldsFlNsFldoFlNsFldsGk9kFldsFldwFldsFldoFltsFldsEltsAkN4Glt4FltsFldsFl9sFltsFldsGl9wFldsFldoFldsJmd0FldsGldoFlNsEltkGldsEldwGltsGlNsFldsAmdYFldsFldsEldsFldwFldwIl9cEldwGltwEldwFldsFl9kFlNoGldoFlNoFldsGlNwEldsEldwEldwFldsFldsHlN0EldsFldoFldsGltwJldwFlNsElNoGldoFldwFldsGlNsFldoDltwFlNsDltrcgeKMAAAA/3RSTlMAARs5Um6JoK+/z9/u/f/159fHuKiUfF9FKgsEK1uGq9D2472YckMSIl7J4LA/CSFoqeX5xkQHBkiR2fS0bB9NmerVgCc+nvHMbRMc3a5MAjOi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"
};

export const switchViewStyle: ViewStyle = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: Platform.select({ ios: spacing.smaller, android: spacing.smaller }),
    paddingHorizontal: Platform.select({ ios: spacing.smaller, android: 0 })
};

export const activityIndicatorStyle: ViewStyle = {
    marginBottom: Platform.select({ ios: spacing.small, android: 0 })
};

export const borderIos = Platform.select({ ios: { borderTopColor: gray.lightest, borderTopWidth: 1 }, android: {} });

export const buttonSeparatorStyle = Platform.select({
    ios: { backgroundColor: gray.lightest, width: 1 },
    android: {}
});