import {QuizAnswer} from "../../models/quizanswer.model";

export class QuizAnswerSerializer {
  fromJson(json: any): QuizAnswer {
    const quizAnswer = new QuizAnswer();
    quizAnswer.id = json.id;
    quizAnswer.quizQuestionId = json.quizQuestionId;
    quizAnswer.answer = json.answer;
    quizAnswer.isCorrect = json.isCorrect;

    return quizAnswer;
  }

  toJson(quizAnswer: QuizAnswer): any {
    return {
      id: quizAnswer.id,
      quizQuestionId: quizAnswer.quizQuestionId,
      answer: quizAnswer.answer,
      isCorrect: quizAnswer.isCorrect
    };
  }

  fromJsonList(json: any, key: string): QuizAnswer[] {
    const quizAnswers: QuizAnswer[] = [];

    json[key].forEach((element: any) => {
      quizAnswers.push(this.fromJson(element));
    });

    return quizAnswers;
  }
}
