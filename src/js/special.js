import '../css/special.styl';

import BaseSpecial from './base';
import Data from './data';
import Svg from './svg';
import {makeElement, removeChildren} from './lib/dom';
import * as Share from './lib/share';
import * as Analytics from './lib/analytics';

const CSS = {
  main: 'skyeng',
};

const EL = {};

class Special extends BaseSpecial {
  constructor(params = {}) {
    super();

    Object.assign(this.params, params);
    this.saveParams();

    if (Data && params.data) {
      Object.assign(Data, params.data);
    }

    if (this.params.css) {
      this.loadStyles(this.params.css).then(() => this.init());
    } else {
      this.init();
    }
  }

  createElements() {
    EL.main = makeElement('div', `${CSS.main}`);
    EL.titlebar = makeElement('div', `${CSS.main}__titlebar`, {
      innerHTML: '<div><div></div><div></div><div></div></div>',
    });
    EL.body = makeElement('div', `${CSS.main}__body`);
    EL.pages = makeElement('div', `${CSS.main}__pages`, {
      textContent: `0/${Data.questions.length}`,
    });
    EL.messages = makeElement('div', `${CSS.main}__messages`);

    // message
    EL.m = makeElement('div', `${CSS.main}-msg`);
    EL.mAvatar = makeElement('div', [`${CSS.main}-msg__avatar`, `${CSS.main}-msg__avatar--logo`], {
      innerHTML: Svg.logo,
    });
    EL.mFrom = makeElement('div', `${CSS.main}-msg__from`, {
      innerHTML: '<span>Skyeng</span>skyeng.ru',
    });
    EL.mTo = makeElement('div', `${CSS.main}-msg__to`, {
      innerHTML: '<span>Вам:</span>user.vc.ru',
    });
    EL.mText = makeElement('div', `${CSS.main}-msg__text`, {
      innerHTML: 'Англицизмы наводнили русский деловой язык. Угадайте, что хочет собеседник, и предложите подходящий ответ.',
    });
    EL.mNextBtn = makeElement('button', [`${CSS.main}-msg__btn`, `${CSS.main}-msg__btn--next`], {
      textContent: 'Далее',
      data: {
        click: 'continue',
      },
    });

    EL.m.appendChild(EL.mAvatar);
    EL.m.appendChild(EL.mFrom);
    EL.m.appendChild(EL.mTo);
    EL.m.appendChild(EL.mText);

    // question
    EL.q = makeElement('div', `${CSS.main}-msg`);
    EL.qAvatar = makeElement('div', `${CSS.main}-msg__avatar`, {
      innerHTML: Svg.user,
    });
    EL.qFrom = makeElement('div', `${CSS.main}-msg__from`, {
      innerHTML: '<span>Олег</span>oleg@basicinclimited.ru',
    });
    EL.qTo = makeElement('div', `${CSS.main}-msg__to`, {
      innerHTML: '<span>Вам:</span>user.vc.ru',
    });
    EL.qText = makeElement('div', `${CSS.main}-msg__text`);

    EL.q.appendChild(EL.qAvatar);
    EL.q.appendChild(EL.qFrom);
    EL.q.appendChild(EL.qTo);
    EL.q.appendChild(EL.qText);

    // form
    EL.f = makeElement('div', `${CSS.main}-msg`);
    EL.fAvatar = makeElement('div', `${CSS.main}-msg__avatar`, {
      innerHTML: Svg.user,
    });
    EL.fTitle = makeElement('div', `${CSS.main}-msg__title`, {
      textContent: 'Выберите ответ:',
    });
    EL.fForm = makeElement('div', `${CSS.main}-msg__form`, {
      innerHTML: `<div class="${CSS.main}-msg__option" data-id="0" data-click="selectOption">Понятно</div>`,
    });
    EL.fBtn = makeElement('button', `${CSS.main}-msg__btn`, {
      textContent: 'Отправить',
      data: {
        click: 'start',
      },
    });

    EL.f.appendChild(EL.fAvatar);
    EL.f.appendChild(EL.fTitle);
    EL.f.appendChild(EL.fForm);

    // answer
    EL.a = makeElement('div', `${CSS.main}-msg`);
    EL.aAvatar = makeElement('div', `${CSS.main}-msg__avatar`, {
      innerHTML: Svg.user,
    });
    EL.aFrom = makeElement('div', `${CSS.main}-msg__from`, {
      innerHTML: '<span>User:</span>user.vc.ru',
    });
    EL.aTo = makeElement('div', `${CSS.main}-msg__to`, {
      innerHTML: '<span>Кому:</span>oleg@basicinclimited.ru',
    });
    EL.aText = makeElement('div', `${CSS.main}-msg__text`);

    EL.a.appendChild(EL.aAvatar);
    EL.a.appendChild(EL.aFrom);
    EL.a.appendChild(EL.aTo);
    EL.a.appendChild(EL.aText);

    EL.main.appendChild(EL.titlebar);
    EL.main.appendChild(EL.body);

    EL.body.appendChild(EL.pages);
    EL.body.appendChild(EL.messages);

    EL.messages.appendChild(EL.m);
    EL.messages.appendChild(EL.f);
  }

  selectOption(el) {
    const { id } = el.dataset;

    if (this.selectedOption !== id) {
      const oldSelected = [...EL.fForm.children][this.selectedOption];

      if (oldSelected) {
        oldSelected.classList.remove('is-selected');
      }

      el.classList.add('is-selected');

      this.selectedOption = id;

      if (!EL.f.contains(EL.fBtn)) {
        EL.f.appendChild(EL.fBtn);
      }
    }
  }

  makeOptions(options) {
    removeChildren(EL.fForm);
    EL.f.removeChild(EL.fBtn);

    options.forEach((option, index) => {
      EL.fForm.appendChild(makeElement('div', `${CSS.main}-msg__option`, {
        textContent: option.text,
        data: {
          id: index,
          click: 'selectOption',
        },
      }));
    });
  }

  start() {
    this.selectedOption = undefined;
    this.makeNextQuestion();

    EL.fBtn.dataset.click = 'answer';
  }

  continue() {
    this.selectedOption = undefined;
    this.activeIndex += 1;
    this.makeNextQuestion();
  }

  makeNextQuestion() {
    const question = Data.questions[this.activeIndex];

    EL.pages.textContent = `${this.activeIndex + 1}/${Data.questions.length}`;

    removeChildren(EL.messages);

    EL.qText.innerHTML = question.text;

    EL.messages.appendChild(EL.q);
    EL.messages.appendChild(EL.f);

    this.makeOptions(question.options);
  }

  answer() {
    const question = Data.questions[this.activeIndex];
    const selectedOption = question.options[this.selectedOption];

    removeChildren(EL.messages);

    EL.aText.classList.remove('is-correct');
    EL.aText.classList.remove('is-incorrect');
    EL.aText.innerHTML = selectedOption.text;

    EL.mText.innerHTML = selectedOption.msg;

    EL.messages.appendChild(EL.a);
    EL.messages.appendChild(EL.m);

    if (!EL.m.contains(EL.mNextBtn)) {
      EL.m.appendChild(EL.mNextBtn);
    }

    if (selectedOption.isCorrect) {
      this.correctAnswers += 1;

      EL.aText.classList.add('is-correct');
    } else {
      EL.aText.classList.add('is-incorrect');
    }

    if (this.activeIndex === Data.questions.length - 1) {
      EL.mNextBtn.innerHTML = 'Результат';
      EL.mNextBtn.dataset.click = 'result';
    }
  }

  result() {
    removeChildren(EL.body);
    EL.body.textContent = `${this.correctAnswers} из ${Data.questions.length} правильных ответов`;
  }

  setInitialParams() {
    this.activeIndex = 0;
    this.correctAnswers = 0;
  }

  init() {
    this.setInitialParams();
    this.createElements();

    this.container.appendChild(EL.main);
  }
}

export default Special;
