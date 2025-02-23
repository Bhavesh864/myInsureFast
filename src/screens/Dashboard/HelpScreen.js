import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { screenStyle, width } from '../../styles/CommonStyling';
import { AppText, HeadingText } from '../../Utility/TextUtility';
import { colors } from '../../styles/colors';
import { HelpSvgComponent } from '../../assets/svg/basicSvgs';

const HelpScreen = () => {
  return (
    <SafeAreaView style={screenStyle}>
      <View style={screenStyle}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            height: 50,
            width: 50,
            resizeMode: 'contain',
            borderRadius: 30,
            margin: 10,
          }}
        />
        <View style={{ marginHorizontal: 10 }}>
          <HeadingText
            text={'Get Help'}
            size={20}
            style={{ paddingTop: 10 }}
          // color={colors.darkGrey}
          />
          <AppText
            text={'We are here to help you'}
            color={colors.darkGrey}
            size={13}
            style={{ marginTop: 5 }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: '35%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            width: width - 35,
            height: 300,
            borderColor: colors.grey,
            borderWidth: 2,
            borderRadius: 20,
          }}>
          <HelpSvgComponent />
          <HeadingText
            text={'No active policies found'}
            size={20}
            // color={colors.darkGrey}
            style={{ marginTop: 10 }}
          />
          <AppText
            text={'Once you buy a new policy, it will show up here'}
            color={colors.darkGrey}
            size={15}
            style={{ marginTop: 5, textAlign: 'center', marginHorizontal: 20 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HelpScreen;
