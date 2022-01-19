function computerPlay(){
  const options = ['rock','paper','scissors'];
  let random = Math.floor(Math.random() * ((options.length -1) + 1));
  const randomOption = options[random];
  return randomOption
}

