import { runApp } from './HW7';

describe('runApp', () => {
  let el, input, button;
  beforeEach(() => {
    el = document.createElement('div');

    runApp(el);
    input = el.querySelector('input');
    button = el.querySelector('button');
  });

  const isButtonVisible = () => !button.hidden;
  const setText = (text) => {
    input.value = text;
    input.dispatchEvent(new Event('keypress'));
  };
  const getParagraphs = () =>
    [...el.querySelectorAll('p')].map((el) => el.innerHTML);
  const pressButton = () => button.click();
  const getText = () => input.value;

  it('creates initial markup', () => {
    expect(input).not.toBe(null);
    expect(button).not.toBe(null);
    expect(button.innerHTML).toBe('Enter');
    expect(getParagraphs().length).toBe(3);
    expect(isButtonVisible()).toBe(false);
    expect(getParagraphs()).toEqual(['1', '2', '3']);
  });

  it('Unhide button when we enter some text and hide without text', () => {
    setText('123');
    expect(isButtonVisible()).toBe(true);

    setText('');
    expect(isButtonVisible()).toBe(false);
  });

  it('Add text to paragraphs when press button', () => {
    setText('4');
    pressButton();
    expect(getParagraphs().length).toBe(4);
    expect(getParagraphs()).toEqual(['1', '2', '3', '4']);
    expect(getText()).toBe('');
    expect(isButtonVisible()).toBe(false);
  });

  it('Limits numbers of paragraphs', () => {
    setText('4');
    pressButton();
    expect(getParagraphs()).toEqual(['1', '2', '3', '4']);

    setText('5');
    pressButton();
    expect(getParagraphs()).toEqual(['1', '2', '3', '4', '5']);

    setText('6');
    pressButton();
    expect(getParagraphs()).toEqual(['2', '3', '4', '5', '6']);
  });
});
