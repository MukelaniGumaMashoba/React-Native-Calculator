import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';

const CalculatorScreen = ({ navigation }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstInputValue, setfirstInputValue] = useState(null);
  const [secInputValue, setsecInputValue] = useState(null);

  const handleNumberInput = (num) => {
    if (!operator) {
      setDisplayValue(prevValue => {
        if (prevValue === '0') {
          return `${num}`;
        } else if (prevValue.includes('.') && num === '.') {
          return prevValue;
        } else {
          return `${prevValue}${num}`;
        }
      });
    } else {
      setDisplayValue(`${num}`);
      setsecInputValue(num);
    }
  };

  const handleOperatorInput = (op) => {
    if (!firstInputValue) {
      setfirstInputValue(Number(displayValue));
    }
    setOperator(op);
  };

  const handleEqualInput = () => {
    if (operator && firstInputValue && secInputValue) {
      let result;

      if (operator === '+') {
        result = firstInputValue + secInputValue;
      }
      else if (operator === '-') {
        result = firstInputValue - secInputValue;
      }
      else if (operator === '*') {
        result = firstInputValue * secInputValue;
      }
      else if (operator === '/') {
        result = firstInputValue / secInputValue;
      }

      setDisplayValue(`${result}`);
      setfirstInputValue(result);
      setsecInputValue(null);
      setOperator(null);
    }
  };


  const handleClearInput = () => {
    setDisplayValue('0');
    setfirstInputValue(null);
    setsecInputValue(null);
    setOperator(null);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{displayValue}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={handleClearInput}>
              <Text style={styles.buttonText}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(7)}>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(8)}>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(9)}>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput('/')}>
              <Text style={styles.buttonText}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(4)}>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(5)}>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(6)}>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput('*')}>
              <Text style={styles.buttonText}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(1)}>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(2)}>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(3)}>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput('-')}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(0)}>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleEqualInput}>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleOperatorInput('+')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleClearInput}>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleNumberInput(".")}>
              <Text style={styles.buttonText}>.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    padding: 16,
  },
  displayContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  displayText: {
    fontSize: 48,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    height: 80,
    borderRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    margin: 2,
  },
  buttonText: {
    fontSize: 28,
    color: 'black',
  },
});

export default CalculatorScreen;
