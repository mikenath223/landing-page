const mockQuiz = {
  "questions": [
    {
      "options": [
        {
          "Complete": "<img alt=\"Complete\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.png 2x\" />"
        },
        {
          "InComplete": "<img alt=\"Complete\" src=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png\" srcset=\"https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss%402x.png 2x\" />"
        }
      ],
      "question": "Which image best matches your hair loss?",
      "type": "ChoiceType"
    },
    {
      "options": [
        {
          "Yes": true
        },
        {
          "No": false
        }
      ],
      "question": "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
      "type": "ChoiceType"
    },
  ]
}


export default mockQuiz;