import './style.less'

/*
 Iteration within the array
 */
let iter = 0;

/**
 * DefaultConfig
 * @param shape
 * @returns {{padding: number, margin: number, shape: string, sticky: boolean, width: number, height: number}}
 */
function getDefaultConfig(shape = 'square') {
  let config = {
    shape: 'square',
    height: 300,
    width: 250,
    padding: 0,
    margin: 0,
    sticky: false,
    timer: 10000,
    random: true,
    debug: false
  };
  if (shape === 'leaderboard') {
    config.height = 90;
    config.width = 728;
  } else if (shape === 'sidebar') {
    config.height = 600;
    config.width = 300;
  }
  return  config;
}

function rotateImage(El, units, conf) {
  let unit = units[iter];
  if (conf.random) {    // get random unit
    unit = units.length === 1 ? units[0] : units[Math.floor(Math.random() * (units.length - 1 + 1))];
  }
  // console.debug('***rotateImg', unit, units, conf, iter);
  let img = new Image(conf.height, conf.width);
  img.src = unit.img;
  img.classList.add('fadeIn');
  El.childNodes[0] ? El.replaceChild(img, El.childNodes[0]) : El.appendChild(img);
  iter++;
  // reset iterator when array length is reached
  if (units.length - 1 <= iter) iter = 0;
}

export default function (htmlEl, units = [], options = {}) {
  const conf = Object.assign({}, getDefaultConfig(), options);
  if (!htmlEl || !htmlEl instanceof HTMLElement || !units || !units instanceof Array || !units.length || !units[0] instanceof Object || !units[0].url || !units[0].img) {
    conf.debug && console.error('Missing/malformed parameters. Html El, Ad Units', htmlEl, units);
    return false;
  }
  rotateImage(htmlEl, units, conf);
  window.setInterval(rotateImage, conf.timer, htmlEl, units, conf);




  // console.debug('***htmlEl', htmlEl, htmlEl instanceof HTMLElement);

  return true;
}


// @todo: add support for inline encoded images too