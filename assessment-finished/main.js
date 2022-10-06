const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温華氏40度で外は寒かった。:insertX:は出かけた。:insertY:についたとき、とても混雑していた。:insertX:は:insertZ:. Bob は全てを見ていたが、驚かなかった。— 身長が200cmの:insertX:はとても驚いたが、:insertY:ではよくあることだった。';
const insertX = ['ドナルド', 'デイジー', 'グーフィー'];
const insertY = ['ディズニーランド', 'ディズニーシー', 'ディズニーリゾート'];
const insertZ = ['びっくりして、パーク内を走り回った。', '池の中に落ちてしまった。', 'ミッキーの銅像を壊してしまった。'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
