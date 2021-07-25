
// ========== introAbout ==========
var i 			= 0,
	readmore 	= document.getElementById('readmore'),
	Readb 		= document.getElementById('Read'),
	dots 		= document.getElementById('dots');
function Read()
{
	if (!i)
	{
		readmore.style.display='inline';
		dots.style.display='none';
		Readb.innerHTML="Read Less";
		i = 1;
	}
	else
	{
		readmore.style.display='none';
		dots.style.display='inline';
		Readb.innerHTML="Read More";
		i = 0;
	}
}
// ========== introAbout ==========



// ========== sModal ==========
window.addEventListener('click', outsideClick);
function outsideClick(e)
{
	if (e.target == modal1)
		modal1.style.display = 'none';
	else if (e.target == modal2)
		modal2.style.display = 'none';
	else if (e.target == modal3)
		modal3.style.display = 'none';
}
var modal1 		= document.getElementById('modal1'),
	modalBtn1 	= document.getElementById('modalBtn1'),
	closeBtn1 	= document.getElementById('closeBtn1');
modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
function openModal1()
{
	modal1.style.display = 'block';
}
function closeModal1()
{
	modal1.style.display = 'none';
}



var modal2 		= document.getElementById('modal2'),
	modalBtn2 	= document.getElementById('modalBtn2'),
	closeBtn2 	= document.getElementById('closeBtn2');
modalBtn2.addEventListener('click', openModal2);
closeBtn2.addEventListener('click', closeModal2);
function openModal2()
{
	modal2.style.display = 'block';
}
function closeModal2()
{
	modal2.style.display = 'none';
}


var modal3 		= document.getElementById('modal3'),
	modalBtn3 	= document.getElementById('modalBtn3'),
	closeBtn3 	= document.getElementById('closeBtn3');
modalBtn3.addEventListener('click', openModal3);
closeBtn3.addEventListener('click', closeModal3);
function openModal3()
{
	modal3.style.display = 'block';
}
function closeModal3()
{
	modal3.style.display = 'none';
}
// ========== sModal ==========