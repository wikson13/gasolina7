import React from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import colors from '../constants/colors';
import ChartBox from '../components/ChartBox';

const Stats = () => {
  return (
    <ScrollView>
      <ChartBox title="Zużycie paliwa" />
      <ChartBox title="Średnie spalanie" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    margin: (Dimensions.get('window').width * 0.05) / 2,
  },
});

export default Stats;
