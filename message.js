//const MessageMixer = require('./messageMixer.js');

import MessageMixer from './messageMixer';

function displayMessage() {
    document.write(MessageMixer.countCharacter("What is the color of the sky?", "t"));
    document.write(MessageMixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    document.write(MessageMixer.reverseWord("What is the color of the sky?"));
    document.write(MessageMixer.reverseAllWords("What is the color of the sky?"));
    document.write(MessageMixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    document.write(MessageMixer.encode("What is the color of the sky?"));
    document.write(MessageMixer.palindrome("What is the color of the sky?"));
    document.write(MessageMixer.pigLatin("What is the color of the sky?", "ay"));
}

displayMessage();