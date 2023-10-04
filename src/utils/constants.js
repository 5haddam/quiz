import { alphabetAndCommasWithSpaces, numbers } from './regexp';

const ruleTexts = {
  required: 'Field is required',
  minLength: (minLength) => `Field should have more then ${minLength} symbols`,
  maxLength: (maxLength) => `Field should have less then ${maxLength} symbols`,
  maxTime: (max) => `Time should be more then ${max}`,
  minTime: (min) => `Time should be less then ${min}`,
};

const numeric = { value: numbers, message: 'Field should have only numbers' };

export const quizRules = {
  title: {
    required: { value: true, message: ruleTexts.required },
    minLength: { value: 2, message: ruleTexts.minLength(2) },
    maxLength: { value: 70, message: ruleTexts.maxLength(70) },
  },
  answer: (required = true) => ({
    required: { value: required, message: ruleTexts.required },
    minLength: { value: 2, message: ruleTexts.minLength(2) },
    maxLength: { value: 70, message: ruleTexts.maxLength(70) },
  }),
  categories: {
    pattern: alphabetAndCommasWithSpaces,
    maxLength: { value: 200, message: ruleTexts.maxLength(200) },
  },
  time: (maxTime) => ({
    required: { value: true, message: ruleTexts.required },
    pattern: numeric,
    max: {
      value: maxTime,
      message: ruleTexts.maxTime(maxTime),
    },
    min: {
      value: 1,
      message: ruleTexts.minTime(1),
    },
  }),
};
