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
      id: props.id,
    };
    props.navigation.navigate('AddRefuelling', editRefuelling);
    setModalVisible(false);
  };

  const iconStyle = {
    size: 20,
    color: '#97a0af',
  };

  return (
    <>
      <View style={styles.refuellingItem}>
        <View style={styles.consumptionBox}>
          <Text style={styles.consumption}>7.83</Text>
          <Text style={styles.unit}>l/100km</Text>
        </View>
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
              <Text style={styles.value}>{props.amount}</Text>
            </View>
            <View style={styles.valueBox}>
              <Icon
                name="gas-station"
                size={iconStyle.size}
                color={iconStyle.color}
              />
              <Text style={styles.value}>{props.liters}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => setModalVisible(true)}>
          <Icon name="information-outline" size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <TouchableHighlight
          style={styles.modalContainer}
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.modal}>
            <View style={styles.header}>
              <Text>Tankowanie {props.date}</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close" size={30} color="#000" />
              </TouchableOpacity>
            </View>
            <View>
              <Text>Przebieg: {props.mileage}</Text>
              <Text>Zatankowano: {props.liters}</Text>
              <Text>Zapłacono: {props.amount}</Text>
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
    backgroundColor: colors.primaryColor,
    padding: 3,
    textAlign: 'center',
  },
  consumption: {
    fontSize: 25,
    textAlign: 'center',
  },
  unit: {
    fontSize: 8,
    textAlign: 'center',
  },
  data: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 4,
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
  },
  infoButton: {
    backgroundColor: colors.primaryColor,
    padding: 10,
  },
  value: {
    color: '#7f8897',
    fontSize: 15,
    marginLeft: 2,
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
});

export default RefuellingItem;
