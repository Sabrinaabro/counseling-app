import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button, Radio, RadioGroup } from '@ui-kitten/components';
import { LinearGradient } from 'expo-linear-gradient';

const questions = [
  {
    question: "I enjoy working with others in a team.",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
  },
  {
    question: "I feel comfortable leading a group.",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
  },
  {
    question: "I prefer planning over spontaneity.",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
  },
  {
    question: "I enjoy problem-solving and analytical tasks.",
    options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"],
  },
];

const PsychometricTestScreen = ({ navigation }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = answer;
    setSelectedAnswers(newAnswers);
  };

  const calculateScore = () => {
    let calculatedScore = selectedAnswers.reduce((total, answer) => (answer ?? 0) + total, 0);
    setScore(calculatedScore);
    alert(`Your Score: ${calculatedScore}`);
    navigation.navigate('Navigation'); // navigate back to main screen or display results here
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#7BAFD4', '#B9D9EB']}
        style={styles.gradientBackground}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text category="h1" style={styles.heading}>Psychometric Test</Text>
        {questions.map((item, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text category="s1" style={styles.questionText}>{item.question}</Text>
            <RadioGroup
              selectedIndex={selectedAnswers[index]}
              onChange={(answer) => handleAnswerChange(index, answer)}
            >
              {item.options.map((option, optIndex) => (
                <Radio key={optIndex} style={styles.option}>{option}</Radio>
              ))}
            </RadioGroup>
          </View>
        ))}
        <Button
          style={styles.submitButton}
          onPress={calculateScore}
          disabled={selectedAnswers.includes(null)}
        >
          Submit Answers
        </Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  option: {
    marginVertical: 5,
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#f8a444',
    borderRadius: 25,
  },
});

export default PsychometricTestScreen;
