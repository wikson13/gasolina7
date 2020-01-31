import React from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import colors from '../constants/colors';

const ChartBox = ({title, values, labels}) => {
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
        yAxisSuffix=" zł"
        chartConfig={{
          backgroundColor: 'green',
          backgroundGradientFrom: '#fff',
          // backgroundGradientFrom: colors.primaryColor,
          backgroundGradientTo: '#fff',
          decimalPlaces: 2, // optional, defaults to 2dp
          // color: (opacity = 1) => `rgba(251, 202, 35, ${opacity})`,
          color: () => colors.primaryColor,
          labelColor: () => 'gray',
          // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
          // marginVertical: 8,
          borderRadius: 16,
        }}
      />
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
    fontSize: 23,
    textAlign: 'center',
    marginVertical: 7,
  },
});

export default ChartBox;
