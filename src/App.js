import { useState } from 'react';

import './App.css';
import { MyDatePicker } from './components/date/MyDatePicker';
import { MySelect } from './components/select/MySelect';
import { MyTimePicker } from './components/time/MyTimePicker';

function App() {
  const [tower, setTower] = useState('');
  const [floor, setFloor] = useState('');
  const [meet, setMeet] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState('00:00');
  const [text, setText] = useState('');

  const sendToConsole = (e) => {
    e.preventDefault();
    console.log(
      'Башня:',
      tower,
      ';',
      'Этаж:',
      floor,
      ';',
      'Номер переговорки:',
      meet,
      ';',
      'Дата:',
      startDate,
      ';',
      'Время:',
      time,
      ';',
      'Сообщение:',
      text,
      ';',
    );
  };
  const clearAll = () => {
    setTower('');
    setFloor('');
    setMeet('');
    setStartDate('');
    setTime('');
    setText('');
  };
  return (
    <div className="App">
      <form className="form">
        <MySelect
          defaultValue="Выбор башни"
          onChange={(e) => setTower(e)}
          value={tower}
          options={['А', 'Б']}
        />
        <MySelect
          defaultValue="Выбор Этажа"
          onChange={(e) => setFloor(e)}
          value={floor}
          options={[
            3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
            27,
          ]}
        />
        <MySelect
          defaultValue="Выбор Переговорки"
          onChange={(e) => setMeet(e)}
          value={meet}
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        />
        <MyDatePicker
          startDate={startDate}
          setStartDate={setStartDate}
          style={{ margin: '10px' }}
        />
        <MyTimePicker value={time} setValue={setTime} style={{ margin: '10px' }} />
        <textarea
          style={{ margin: '10px' }}
          name="postContent"
          rows={4}
          cols={40}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Напишите сюда что-нибудь"
        />
        <div>
          <button style={{ margin: '10px' }} onClick={sendToConsole}>
            Отправить
          </button>
          <button style={{ margin: '10px' }} onClick={clearAll}>
            Очистить всё
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
