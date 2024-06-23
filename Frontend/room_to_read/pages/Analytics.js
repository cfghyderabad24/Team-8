import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 70, 43],
      },
    ],
  };
  const Analytics = () => {
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Total books checked-out</Text>
        <BarChart
          data={data}
          width={330}
          height={220}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>
    );
  };
  
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 10,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '1',
      stroke: '#ffa726',
    },
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    chart: {
      marginTop: 20,
    },
  });
  
  export default Analytics;
  