import shuffle from 'just-shuffle';

const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const spinner = document.querySelector('.spinner');
const loading = document.querySelector('.loading-text');
const resultTitle = document.querySelector('.result-title');
const result = document.querySelector('.result-winners');

button.addEventListener('click', () => {
  // show spinner
  spinner.removeAttribute('hidden');
  // disable the textarea and button
  textarea.disabled = true;
  button.disabled = true;
  // paint the loading with different texts
  loading.textContent = 'leyendo los participantes...'
  paintLoadings();
  // after some time:
  setTimeout(() => {
    // calculate the winners
    const winners = shuffle(textarea.value.split('\n')).slice(0,3);
    // paint winners
    result.innerHTML = winners.join('<br />')
  }, 7500);
});

function paintLoadings() {
  setTimeout(() => {
    loading.textContent = 'comprobando...'
  }, 1500);
  setTimeout(() => {
    loading.textContent = 'desordenando la lista...'
  }, 3000);
  setTimeout(() => {
    loading.textContent = 'eligiendo 3 aleatorios...'
  }, 4500);
  setTimeout(() => {
    loading.textContent = 'cargando resultados...'
  }, 6000);
  setTimeout(() => {
    loading.textContent = ''
    // hide spinner
    spinner.setAttribute('hidden', 'true');
    // show winners title
    resultTitle.removeAttribute('hidden');
  }, 7500);
}