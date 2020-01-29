import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import colors from '../constants/colors';

const Stats = () => {
  return (
    <View>
      <Text>Stats</Text>
      <View style={styles.chartContainer}>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width * 0.9} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          chartConfig={{
            backgroundColor: 'green',
            backgroundGradientFrom: '#fff',
            // backgroundGradientFrom: colors.primaryColor,
            backgroundGradientTo: 'green',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    margin: (Dimensions.get('window').width * 0.1) / 2,
  },
});

export default Stats;
