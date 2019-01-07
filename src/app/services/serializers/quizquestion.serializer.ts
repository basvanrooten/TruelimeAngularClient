import {QuizQuestion} from "../../models/quizquestion.model";

export class QuizQuestionSerializer {
  fromJson(json: any): QuizQuestion {
    const quizQuestion = new QuizQuestion();
    quizQuestion.id = json.id;
    quizQuestion.assessmentId = json.assessmentId;
    quizQuestion.question = json.question;

    return quizQuestion;
  }

  toJson(quizQuestion: QuizQuestion): any {
    return {
      id: quizQuestion.id,
      assessmentId: quizQuestion.assessmentId,
      question: quizQuestion.question
    };
  }

  fromJsonList(json: any, key: string): QuizQuestion[] {
    const quizQuestions: QuizQuestion[] = [];

    json[key].forEach((element: any) => {
      quizQuestions.push(this.fromJson(element));
    });

    return quizQuestions;
  }
}
