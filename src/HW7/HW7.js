export function runApp(el) {
  el.innerHTML = `
    <input />
    <button hidden>Enter</button>
    <div>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    </div>
    `;
  const input = el.querySelector('input');
  const button = el.querySelector('button');
  const wrapper = el.querySelector('div');

  input.addEventListener('keypress', (ev) => {
    button.hidden = !ev.target.value;
  });

  button.addEventListener('click', () => {
    const p = document.createElement('p');
    p.innerHTML = input.value;
    wrapper.appendChild(p);
    input.value = '';
    button.hidden = true;

    const paragraphs = wrapper.querySelectorAll('p');

    if (paragraphs.length > 5) {
      paragraphs[0].remove();
    }
  });
}
