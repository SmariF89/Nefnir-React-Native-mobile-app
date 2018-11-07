import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import { LinearGradient } from "expo";

import styles from "../styles/styles";

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.commonContainer}>
                        <Image
                            style={styles.nefnirImage}
                            resizeMode={"contain"}
                            source={require("../assets/images/nefnir.png")}
                        />
                        <View style={styles.aboutMarginMaker} />

                        <LinearGradient
                            style={styles.aboutView}
                            colors={["#E4F0FB", "rgba(0,100,255,0.1)"]}
                            start={[0, 1]}
                            end={[1, 0]}
                            location={[0.5, 0.5]}
                        >
                            <Text style={styles.aboutSubHeader}>
                                What is Nefnir ? {"\n"}
                            </Text>
                            <Text style={styles.aboutInfo}>
                                Nefnir is a powerful app that helps you and your
                                partner to pick a name for your child. We are
                                aware of how hard it can be to find a name that
                                both parties can agree on. That's why we make it
                                simple for you to see the names that are
                                available in a fast and simple way.{"\n"}
                            </Text>
                        </LinearGradient>
                        <View style={styles.aboutMarginMaker} />
                        <LinearGradient
                            style={styles.aboutView}
                            colors={["rgba(0,100,255,0.1)", "#E4F0FB"]}
                            start={[0, 1]}
                            end={[1, 0]}
                            location={[0.5, 0.5]}
                        >
                            <Text style={styles.aboutSubHeader}>
                                How to use Nefnir{"\n"}
                            </Text>
                            <Text style={styles.aboutInfo}>
                                First click settings or choices and fill in your
                                names. Then click your name to see the list of
                                all available names. When you see a name that
                                you like, click it to add it to your choices.
                                The list of names you have chosen can be seen by
                                swiping left on all available names. When you're
                                done go back and your partner goes through the
                                same process. When you're both satisfied with
                                the names you have picked, you can see all the
                                names that you have agreed upon by clicking the
                                common choices button on the main menu.
                                {"\n"}
                            </Text>
                        </LinearGradient>

                        <Text style={styles.aboutAuthorsOfApp}>
                            Authors of this application
                        </Text>

                        <View>
                            <Image
                                style={styles.aboutImage}
                                resizeMode={"contain"}
                                source={require("../assets/images/weThemGirlsCropped.jpg")}
                            />
                            <Text style={styles.aboutAuthorsCaption}>
                                Janus - Smári - Leifur - Bjarki
                            </Text>
                        </View>
                    </View>
                    <View style={styles.aboutContainer}>
                        <TouchableOpacity
                            style={styles.btn}
                            activeOpacity={0.5}
                            onPress={() => this.props.navigation.goBack(null)}
                        >
                            <Text style={styles.btnText}>GO BACK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
