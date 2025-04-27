function getFormvalue() {
    //Write your code here
	const formObj = document.getElementById('form1')
	const firstName = formObj.elements['fname'].value
	const lastName = formObj.elements['lname'].value
	alert(`${firstName} ${lastName}`)
}
