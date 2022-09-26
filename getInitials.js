//"for your information" -> "FYI"
//a change more for one more time

export default function getInitials(name){
    return name.split('')
        .map(word=>word.charAt(0).toUpperCase())
        .join('');
}
