const planner = document.getElementById('planner');
const startHour = 8;
const endHour = 20;
const now = new Date().getHours();

for (let hour = startHour; hour <= endHour; hour++) {
  const block = document.createElement('div');
  block.className = 'time-block';

  const hourLabel = document.createElement('div');
  hourLabel.className = 'hour';
  hourLabel.textContent = formatHour(hour);

  const textArea = document.createElement('textarea');
  textArea.id = `hour-${hour}`;
  textArea.value = localStorage.getItem(`hour-${hour}`) || '';

  if (hour < now) {
    textArea.classList.add('past');
  } else if (hour === now) {
    textArea.classList.add('present');
  } else {
    textArea.classList.add('future');
  }

  const saveBtn = document.createElement('button');
  saveBtn.className = 'saveBtn';
  saveBtn.textContent = '💾';
  saveBtn.onclick = () => {
    localStorage.setItem(`hour-${hour}`, textArea.value);
  };

  block.appendChild(hourLabel);
  block.appendChild(textArea);
  block.appendChild(saveBtn);

  planner.appendChild(block);
}

function formatHour(hour) {
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const h = hour % 12 || 12;
  return `${h} ${ampm}`;
}
