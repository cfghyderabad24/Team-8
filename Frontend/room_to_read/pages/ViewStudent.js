import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart, PieChart } from 'react-native-chart-kit/dist';

const ViewStudent = () => {
    const data = [10, 20, 15, 25, 30, 5];
    const getTotalStudents=()=>{
      sum=0;
      for(var i=0;i<6;i++){
        sum+=i;
      }
      return sum;
    }
    const line_chart_data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          data: [10,5,4,2,6,1],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Purple color
          strokeWidth: 2 // optional
        }
      ]
    };
    const colors = [
      'rgba(255, 0, 0, 0.8)',       // Red
      'rgba(255, 165, 0, 0.8)',     // Orange
      'rgba(255, 255, 0, 0.8)',     // Yellow
      'rgba(0, 128, 0, 0.8)',       // Green
      'rgba(0, 0, 255, 0.8)',       // Blue
      'rgba(128, 0, 128, 0.8)'      // Purple
    ];      
    const chartData = data.map((value, index) => ({
    name: `Level ${index + 1}`,
    population: value,
    color: colors[index],
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));

  return (
    <View style={styles.container}>
        <Text>Total number of books checked-out: {getTotalStudents()}</Text>
        <Text></Text>
        <Text>Level-wise analysis</Text>
        <PieChart
            data={chartData}
            width={Dimensions.get('window').width - 16}
            height={220}
            chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
        />
        <Text></Text>
        <Text></Text>
        <Text>No. of books read</Text>
        <LineChart
        data={line_chart_data}
        width={350}
        height={220}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});

export default ViewStudent;