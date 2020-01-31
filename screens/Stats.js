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
import {useSelector} from 'react-redux';

const Stats = () => {
  const refuellings = useSelector(state => state.data.refuellings);
  console.log(refuellings);
  const fuelPriceListLabels = [];
  const fuelPriceListValues = [];
  let refuellingsSumAmount = 0;
  Object.keys(refuellings).map(refuelling => {
    fuelPriceListValues.push(refuellings[refuelling].priceLiter);
    fuelPriceListLabels.push(refuellings[refuelling].date);
    refuellingsSumAmount += Number(refuellings[refuelling].amount);
  });
  console.log(fuelPriceListValues);
  console.log(fuelPriceListLabels);
  console.log(refuellingsSumAmount);

  return (
    <ScrollView>
      <ChartBox
        title="Cena paliwa"
        values={fuelPriceListValues}
        labels={fuelPriceListLabels}
      />
      <ChartBox
        title="Średnie spalanie"
        values={fuelPriceListValues}
        labels={fuelPriceListLabels}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    margin: (Dimensions.get('window').width * 0.05) / 2,
  },
});

export default Stats;
