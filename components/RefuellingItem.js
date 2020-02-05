import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Alert,
  Button,
} from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as dataActions from '../redux/data/dataActions';
import ButtonClassic from './ButtonClassic';
import {useDispatch, useSelector} from 'react-redux';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
const RefuellingItem = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.userEmail);
  const deleteButtonHandler = () => {
    dispatch(
      dataActions.deleteRequest({
        type: 'refuellings',
        id: props.id,
        userEmail: userEmail.replace(/\./g, '_'),
      }),
    );
  };
  const editButtonHandler = () => {
    const editRefuelling = {
      mileage: props.mileage,
      date: props.date,
      liters: props.liters,
      priceLiter: props.priceLiter,
      amount: props.amount,
      fullRefuelling: props.fullRefuelling,
      id: props.id,
    };
    props.navigation.navigate('AddRefuelling', editRefuelling);
    setModalVisible(false);
  };

  const generateAvgNumber = val => {
    if (val === '-') {
      return val;
    }
    value = Number(val);
    if (value >= 100) {
      return value.toFixed(0);
    }
    if (value >= 10) {
      return value.toFixed(1);
    }

    return value.toFixed(2);
  };

  const iconStyle = {
    size: 20,
    color: '#97a0af',
  };
  return (
    <>
      <View style={styles.refuellingItem}>
        {/*<View style={styles.consumptionBox}>*/}
        {/*  <Text*/}
        {/*    style={*/}
        {/*      props.fullRefuelling ? styles.consumptionFull : styles.consumption*/}
        {/*    }>*/}
        {/*    {props.avg}*/}
        {/*  </Text>*/}
        {/*  <Text style={styles.unit}>l/100km</Text>*/}
        {/*</View>*/}

        <Svg height="53" width="80">
          <Polygon
            points="0,0 80,0 65,53 0,100 "
            fill={colors.primaryColor}
            strokeWidth="1"
            style={styles.polygon}
          />
          <View style={styles.consumptionBox}>
            <Text
              style={
                props.fullRefuelling
                  ? styles.consumptionFull
                  : styles.consumption
              }>
              {generateAvgNumber(props.avg)}
            </Text>
            <Text style={styles.unit}>l/100km</Text>
          </View>
        </Svg>
        <View style={styles.data}>
          <View style={styles.column}>
            <View style={styles.valueBox}>
              <Icon
                name="calendar-today"
                size={iconStyle.size}
                color={iconStyle.color}
              />
              <Text style={styles.value}>{props.date}</Text>
            </View>
            <View style={styles.valueBox}>
              <Icon
                name="speedometer"
                size={iconStyle.size}
                color={iconStyle.color}
              />
              <Text style={styles.value}>{props.mileage}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.valueBox}>
              <Icon
                name="credit-card"
                size={iconStyle.size}
                color={iconStyle.color}
              />
              <Text style={styles.value}>
                {Number(props.amount).toFixed(2)}
              </Text>
            </View>
            <View style={styles.valueBox}>
              <Icon
                name="gas-station"
                size={iconStyle.size}
                color={iconStyle.color}
              />
              <Text style={styles.value}>
                {Number(props.liters).toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => setModalVisible(true)}>
          <Svg height="53" width="40">
            <Polygon
              points="15,0 40,0 40,53 0,53 "
              fill={colors.primaryColor}
              strokeWidth="1"
            />
            <View style={styles.infoIcon}>
              <Icon name="information-variant" size={30} color="#000" />
            </View>
          </Svg>
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableHighlight
          style={styles.modalContainer}
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modal}>
            <View style={styles.header}>
              <Text style={styles.title}>Tankowanie {props.date}</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" size={25} color="#000" />
              </TouchableOpacity>
            </View>
            <View>
              <Text>Od ostatniego tankowania: {props.kmsLastRef}km</Text>
              <Text>
                Od ostatniego pełnego tankowania: {props.kmsLastFullRef}km
              </Text>
              <Text>Przebieg: {props.mileage}</Text>
              <Text>Zatankowano: {props.liters}l</Text>
              <Text>Zapłacono: {props.amount}zł</Text>
              <Text>Cena paliwa: {props.priceLiter}zł/l</Text>
              <Text>
                Tankowanie do pełna: {props.fullRefuelling ? 'TAK' : 'NIE'}
              </Text>
              <Text>
                Średnie spalanie od ostatniego pełnego tankowania: {props.avg}l
              </Text>
            </View>
            <View style={styles.buttonsContainer}>
              <ButtonClassic
                title="Edytuj"
                style={styles.buttonEdit}
                onPress={() => editButtonHandler()}
              />
              <ButtonClassic
                title="Usuń"
                style={styles.buttonDelete}
                onPress={deleteButtonHandler}
              />
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  refuellingItem: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 2,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  consumptionBox: {
    // backgroundColor: colors.primaryColor,
    paddingTop: 7,
    marginLeft: 2,
    textAlign: 'center',
    width: 65,
    justifyContent: 'center',
  },
  consumption: {
    fontSize: 25,
    textAlign: 'center',
    color: 'rgb(171, 142, 54)',
    fontFamily: 'Montserrat-Bold',
  },
  consumptionFull: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  unit: {
    fontSize: 8,
    textAlign: 'center',
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
    // backgroundColor: 'red',
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
  },
  infoButton: {
    // backgroundColor: colors.primaryColor,
    // padding: 10,
  },
  infoIcon: {
    // backgroundColor: 'red',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    // flex: 1,
    // justifyContent: 'flex-end',
  },
  value: {
    color: '#7f8897',
    fontSize: 15,
    marginLeft: 2,
    fontFamily: 'Montserrat-Medium',
  },
  valueBox: {
    flexDirection: 'row',
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,.8)',
    flex: 1,
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonEdit: {
    flex: 1,
  },
  buttonDelete: {
    flex: 1,
    backgroundColor: '#e74c3c',
  },
  polygon: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
  },
});

export default RefuellingItem;
