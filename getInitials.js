//"for your information" -> "FYI"
<<<<<<< HEAD
//a change more for one more time
=======
//other comment for this file
>>>>>>> 66f577a (change for rebase)

export default function getInitials(name){
    return name.split('')
        .map(word=>word.charAt(0).toUpperCase())
        .join('');
}
