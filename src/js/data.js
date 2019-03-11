export default {
  title: 'Skyeng',
  questions: [{
    text: 'Сможете прислать мудборд?',
    options: [{
      text: 'Будет готово к флайту.',
      msg: 'Неверно. Вы предложили сдать графические намётки в разгар рекламной кампании.',
    }, {
      text: 'Он под NDA, с ума сошли?',
      msg: 'Неверно. Вы засекретили намётки графики, хотя кому они нужны.',
    }, {
      text: 'Соберём асап.',
      msg: 'Верно! Ничто не мешает собрать намётки графики как можно скорее.',
      isCorrect: true,
    }],
  }, {
    text: 'Боюсь, что героя на нашем билборде обвинят в менспрединге.',
    options: [{
      text: 'Вряд ли, он всего лишь джуниор.',
      msg: 'Неверно. Вы объяснили низкой квалификацией то, что герой расселся в транспорте. Именно это и означает термин «менспрединг».',
    }, {
      text: 'Заново забрифуем фотографа.',
      msg: 'Верно! Нужно сфотографировать модель в более скромной позе.',
      isCorrect: true,
    }, {
      text: 'Тогда поработаем с вордингом.',
      msg: 'Неверно. Вы предложили поработать с текстом, хотя мужчина на иллюстрации просто расселся в транспорте. Именно это и означает «менспрединг».',
    }],
  }, {
    text: 'Подумаем над карпул-бизнесом?',
    options: [{
      text: 'Можем, шеринг-экономика в моде.',
      msg: 'Верно! Совместное использование частных автомобилей тоже на слуху.',
      isCorrect: true,
    }, {
      text: 'На рынке и так слишком много клининга.',
      msg: 'Неверно! Вы перепутали уборку с совместным использованием автомобилей.',
    }, {
      text: 'Не лезьте в девелопмент, плиз.',
      msg: 'Неверно! Вы отказались от создания сервиса поиска попутчиков, испугавшись какой-то стройки.',
    }],
  }, {
    text: 'В коллективе усиливается моббинг, что с этим делать?',
    options: [{
      text: 'Прекрасно, пускай бар-хоппят дальше.',
      msg: 'Неверно! В ответ на травлю сотрудника вы предложили коллективу покататься по барам. Звучит хорошо, но это неверный вариант.',
    }, {
      text: 'Это мейнстрим, не отвлекайтесь от работы.',
      msg: 'Неверно! Это совсем не мода, лучше отвлечься и разобраться в причинах травли в коллективе.',
    }, {
      text: 'Поговорим с лидами отдела.',
      msg: 'Верно! Стоит спросить у ключевых сотрудников, почему кого-то травят.',
      isCorrect: true,
    }],
  }],
};