import { createStore } from 'effector';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

// Создаем стор
const $counter = createStore(0);

// Подписка на изменения стора
$counter.watch((state) => {
  localStorage.setItem('counter', state);
});

// Восстанавливаем состояние при инициализации
$counter.on('init', () => {
  const savedCounter = localStorage.getItem('counter');
  return savedCounter ? Number(savedCounter) : 0;
});

export const Counter = () => {
  const counter = useStore($counter);

  // Восстанавливаем значение при монтировании
  useEffect(() => {
    const savedCounter = localStorage.getItem('counter');
    if (savedCounter) {
      $counter.setState(Number(savedCounter));
    }
  }, []);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      {/* Кнопка увеличения */}
      <button onClick={() => $counter.setState(counter + 1)}>Increment</button>
    </div>
  );
}
