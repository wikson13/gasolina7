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
import ChartFuelComsumption from '../components/ChartFuelComsumption';
import ChartFuelPrice from '../components/ChartFuelPrice';
import StatsMiniBox from '../components/StatsMiniBox';

const Stats = () => {
  const refuellings = useSelector(state => state.data.refuellings);
  console.log(refuellings);
  const fuelPriceListLabels = [];
  const fuelPriceListValues = [];
  let avgFuelPriceSum = 0;
  let fuelSumAmount = 0;
  let serviceSumAmount = 0;

  const avgConsumptiomLabels = [];
  const avgConsumptiomValues = [];
  let minCompsumption = 99.9;
  let maxCompsumption = 0;
  let avgCompsumptionSum = 0;

  Object.keys(refuellings).map(refuelling => {
    fuelPriceListValues.push(Number(refuellings[refuelling].priceLiter));
    fuelPriceListLabels.push(refuellings[refuelling].date);
    avgFuelPriceSum += Number(refuellings[refuelling].priceLiter);
    fuelSumAmount += Number(refuellings[refuelling].amount);
    if (refuellings[refuelling].avg !== '-') {
      avgConsumptiomValues.push(refuellings[refuelling].avg);
      avgConsumptiomLabels.push(refuellings[refuelling].date);
      if (refuellings[refuelling].avg < minCompsumption) {
        minCompsumption = refuellings[refuelling].avg;
      }
      if (refuellings[refuelling].avg > maxCompsumption) {
        maxCompsumption = refuellings[refuelling].avg;
      }
      avgCompsumptionSum += Number(refuellings[refuelling].avg);
    }
  });

  return (
    <ScrollView>
      <ChartFuelComsumption
        title="Zużycie paliwa"
        values={avgConsumptiomValues}
        labels={avgConsumptiomLabels}
        min={minCompsumption}
        max={maxCompsumption}
        avg={(avgCompsumptionSum / avgConsumptiomValues.length).toFixed(2)}
      />

      <ChartFuelPrice
        title="Cena paliwa"
        values={fuelPriceListValues}
        labels={fuelPriceListLabels}
        min={Math.min(...fuelPriceListValues)}
        max={Math.max(...fuelPriceListValues)}
        avg={(avgFuelPriceSum / fuelPriceListValues.length).toFixed(2)}
      />
      <View style={styles.miniBoxContainer}>
        <StatsMiniBox
          title="Wydatki na paliwo"
          data={fuelSumAmount}
          iconName="gas-station"
        />
        <StatsMiniBox
          title="Wydatki na serwis"
          data="850.54"
          iconName="wrench"
        />
      </View>
      {/*<View style={styles.miniBoxContainer}>*/}
      {/*  <StatsMiniBox*/}
      {/*    title="Wydatki na paliwo"*/}
      {/*    data={fuelSumAmount}*/}
      {/*    iconName="gas-station"*/}
      {/*  />*/}
      {/*  <StatsMiniBox*/}
      {/*    title="Wydatki na serwis"*/}
      {/*    data="850.54"*/}
      {/*    iconName="wrench"*/}
      {/*  />*/}
      {/*</View>*/}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  miniBoxContainer: {
    marginHorizontal: (Dimensions.get('window').width * 0.05) / 2,
    marginBottom: 0,
    flexDirection: 'row',
  },
});

export default Stats;
