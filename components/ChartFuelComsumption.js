import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import colors from '../constants/colors';

const ChartFuelComsumption = ({title, values, labels, unit, min, max, avg}) => {
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.title}>{title}</Text>
      <LineChart
        data={{
          labels: labels,
          datasets: [
            {
              data: values,
            },
          ],
        }}
        width={Dimensions.get('window').width * 0.95} // from react-native
        height={220}
        // yAxisLabel="$"
        yAxisSuffix="l"
        chartConfig={{
          backgroundColor: 'green',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2,
          color: () => colors.primaryColor,
          labelColor: () => 'gray',
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      />
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <Text style={styles.boxTitle}>MIN</Text>
          <Text style={styles.boxData}>{min}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.boxTitle}>ŚREDNIE</Text>
          <Text style={styles.boxData}>{avg}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.boxTitle}>MAX</Text>
          <Text style={styles.boxData}>{max}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    margin: (Dimensions.get('window').width * 0.05) / 2,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    marginVertical: 7,
    fontFamily: 'Montserrat-Bold',
    textTransform: 'uppercase',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 5,
  },
  boxTitle: {
    fontFamily: 'Montserrat-Bold',
  },
  boxData: {
    fontFamily: 'Montserrat-Light',
  },
});

export default ChartFuelComsumption;
