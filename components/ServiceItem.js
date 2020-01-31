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
import ButtonClassic from './ButtonClassic';
import RefuellingItem from './RefuellingItem';
import * as dataActions from '../redux/data/dataActions';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

const ServiceItem = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const userEmail = useSelector(state => state.auth.userEmail);
  const dispatch = useDispatch();
  const deleteButtonHandler = () => {
    dispatch(
      dataActions.deleteRequest({
        type: 'services',
        id: props.id,
        userEmail: userEmail.replace(/\./g, '_'),
      }),
    );
  };
  const iconStyle = {
    size: 20,
    color: '#97a0af',
  };

  return (
    <>
      <View style={styles.serviceItem}>
        <View style={styles.data}>
          <View style={styles.firstRow}>
            <Text style={styles.firstRowText}>{props.title}</Text>
          </View>
          <View style={styles.secondRow}>
            <Text style={styles.secondRowText}>{props.date}</Text>
            <Text style={styles.secondRowText}>{props.amount} zł</Text>
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
              <ButtonClassic title="Edytuj" style={styles.buttonEdit} />
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
  serviceItem: {
    backgroundColor: '#fff',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 2,
    flexDirection: 'row',
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
    flexDirection: 'column',
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
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondRowText: {
    fontSize: 17,
    color: '#747d8c',
  },
  firstRowText: {
    fontSize: 18,
  },
});

export default ServiceItem;
